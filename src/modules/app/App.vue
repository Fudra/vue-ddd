<template>
  <div>
    <h1>
      {{ app.applicationName }} 
    </h1>
    <h2>event count: {{ messaging.loggedEvents.length }}</h2>
    <b>Last Event:</b>
    <pre>{{ messaging.last }}</pre>
    <hr />

    <router-link :to="{ name: 'app-home' }">Home </router-link>
    <router-link :to="{ name: 'module-example' }">Example </router-link>

    <router-view />
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useAppStore } from "./store/app";
import { useMessagingStore } from "./store/messaging";
import { Emitter } from "mitt";
import { EmitterKey } from "@/plugins/modules";
const app = useAppStore();
const messaging = useMessagingStore();

const emitter = inject<Emitter<any>>(EmitterKey);

emitter?.on("*", (type, e) => messaging.log(type, e));
emitter?.on("event:test1", console.log);
</script>
