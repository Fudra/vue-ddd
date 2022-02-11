<template>
  <div>
    <h1>App</h1>
    
    <router-link :to="{ name: 'app-home'}">Home </router-link>
    <router-link :to="{ name: 'module-example'}">Example </router-link>

    
    <router-view />

  </div>
</template>

<script setup lang="ts">

</script>
