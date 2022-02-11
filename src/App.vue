<template>
  <div>
    <h1>test</h1>
    
    <router-link :to=" {name: 'app-home'}"> Home</router-link>
    <router-link :to="{ name: 'example' }"> Example</router-link>
    
    <router-view></router-view>
  </div>
</template>


