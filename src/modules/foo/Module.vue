<template>
  <div>
    <h1>Foo Module</h1>
    
    <router-link :to="{ name: 'foo-one' }"> One </router-link>
    <router-link :to="{ name: 'foo-two' }"> Two </router-link>

    <router-view />
  </div>
</template>

<script setup lang="ts">

</script>
