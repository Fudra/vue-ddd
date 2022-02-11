<template>
  <div>
    <h1>{{ store.applicationName }}</h1>

    <router-link :to="{ name: 'app-home' }">Home </router-link>
    <router-link :to="{ name: 'module-example' }">Example </router-link>

    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "./store";
const store = useAppStore();
</script>
