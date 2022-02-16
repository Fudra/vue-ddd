<template>
  <div>
    <button @click="decrementFn">-</button>
    <button @click="incrementFn">+</button>
    {{ store.counter }}
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { Emitter } from "mitt";
import { EmitterInjectionKey } from "@/plugins/modules";

import { useExampleStore } from "../store";
const store = useExampleStore();

const emit = defineEmits(["counter:increment", "counter:decrement"]);
const emitter = inject<Emitter<any>>(EmitterInjectionKey);


const incrementFn = () => {
  store.increment();
  emitter?.emit("counter:increment", { value: store.counter });
  emit("counter:increment", store.counter);
};

const decrementFn = () => {
  store.decrement();
  emitter?.emit("counter:decrement", { value: store.counter });
  emit("counter:decrement", store.counter);
};
</script>