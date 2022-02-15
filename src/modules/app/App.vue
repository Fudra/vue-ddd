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
    <router-link :to="{ name: 'module-foo' }">Foo </router-link>

    <router-view />

    <addional-components />
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { Emitter } from "mitt";
import { useAppStore } from "./store/app";
import { EmitterKey } from "@/plugins/modules";
import { useMessagingStore } from "@/services/messaging/store";

/** @ts-ignore-next-line */
import AddionalComponents from "./components/AddionalComponents.vue";

const app = useAppStore();
const messaging = useMessagingStore();

const emitter = inject<Emitter<any>>(EmitterKey);

emitter?.on("event:test1", console.log);
</script>
