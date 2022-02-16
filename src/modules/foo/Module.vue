<template>
  <div>
    <h1>{{ t("foo.module") }}</h1>

    <router-link :to="{ name: 'foo-one' }"> One </router-link>
    <router-link :to="{ name: 'foo-two' }"> Two </router-link>

    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
