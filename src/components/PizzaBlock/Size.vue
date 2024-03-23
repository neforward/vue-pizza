<template>
  <ul>
    <li
      v-for="size in sizes"
      :key="size"
      @click="chooseSize(size)"
      :class="isActive === size ? 'active' : ''"
    >
      {{ size + " cm" }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits();
const sizes = [26, 30, 40];
const isActive = ref(26);

const chooseSize = (str) => {
  isActive.value = str;
  emit("chooseSize", str);
};
</script>
