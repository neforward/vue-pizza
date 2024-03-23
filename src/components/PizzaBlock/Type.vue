<template>
  <ul>
    <li
      v-for="type in types"
      :key="type"
      @click="chooseCategory(type)"
      :class="isActive === type ? 'active' : ''"
    >
      {{ type }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits();
const types = ["thin", "traditional"];
const isActive = ref("thin");
const chooseCategory = (str) => {
  isActive.value = str;
  emit("chooseCategory", str);
};
</script>
