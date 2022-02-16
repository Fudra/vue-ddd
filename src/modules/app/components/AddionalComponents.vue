<template>
    <component
      v-for="(component, idx) of components"
      :key="idx"
      :is="component"
    />
</template>

<script setup lang="ts">
import { inject } from "vue";
import { ServiceInjectionKey } from '@/plugins/modules'
const components = inject(ServiceInjectionKey);
</script>