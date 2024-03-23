<script setup>
import { onMounted, ref } from "vue";
import Categories from "@/components/Categories.vue";
import Pizza from "@/components/PizzaBlock/Pizza.vue";
import Sort from "@/components/Sort.vue";
import { useStore } from "vuex";

const store = useStore();
onMounted(() => {
  store.commit("SET_PIZZAS");
  store.dispatch("initTotalValues");
  store.dispatch("setPizzas");
});
const handleFilter = (category) => {
  store.commit("CHANGE_FILTERED_PIZZAS", category);
};

const handleSort = (sortOption) => {
  store.commit("SET_SORT_OPTION", sortOption);
};
</script>

<template>
  <div class="content">
    <div class="container">
      <div class="content__top">
        <Categories @filter="handleFilter" />
        <Sort @sort="handleSort" />
      </div>
      <h2 class="content__title">All pizzas</h2>
      <div class="content__items">
        <Pizza
          v-for="item in store.state.filteredPizzas"
          :key="item.id"
          :pizza="item"
        />
      </div>
    </div>
  </div>
</template>
