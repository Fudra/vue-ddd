<template>
  <h3>Example One Page</h3>

  <button @click="testEvent1">testEvent1</button>
  <button @click="testEvent2">testEvent2</button>
  <button @click="testEvent3">testEvent3</button>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { Emitter } from "mitt";
import { EmitterInjectionKey } from "@/plugins/modules";

const emitter = inject<Emitter<any>>(EmitterInjectionKey);

const testEvent1 = () => emitter?.emit("event:test1", { a: 1, b: 2 });

const testEvent2 = () => emitter?.emit("event:test2", { foo: "bar" });

const testEvent3 = () => emitter?.emit("event:test3");
</script>