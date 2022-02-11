<template>
  <div>
    <button @click="store.decrement()">-</button>
    <button @click="store.increment()">+</button>
    {{ store.counter }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useExampleStore } from '../store'
const store = useExampleStore();

const emit = defineEmits(["increment", "decrement"]);

/*
const counter = ref(0);

const incrementFn = () => {
  counter.value++;
  emit("increment", counter.value);
};

const decrementFn = () => {
  counter.value--;
  emit("decrement", counter.value);
};
*/
</script>