<template>
  <div>
    <h1>Example Module</h1>
    
    <router-link :to="{ name: 'example-one' }"> One </router-link>
    <router-link :to="{ name: 'example-two' }"> Two </router-link>

    <router-view />
  </div>
</template>

<script setup lang="ts">
//import "./routes"
</script>
