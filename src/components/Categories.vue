<template>
  <div class="categories">
    <ul>
      <li
        v-for="category in categories"
        :key="category"
        @click="handleClick(category)"
        :class="isActive === category ? 'active' : ''"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits();

const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];
const isActive = ref("All");

const handleClick = (str) => {
  isActive.value = str;
  emit("filter", str);
};
</script>
