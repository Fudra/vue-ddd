<template>
  <div>
    <h1>{{ app.applicationName }} ({{ currentLocale }})</h1>
    <h1>{{ t("app.hello") }}</h1>
    <div>
      <button @click="setLocale('de')" :disabled="currentLocale == 'de'">
        DE
      </button>
      <button @click="setLocale('en')" :disabled="currentLocale == 'en'">
        EN
      </button>
    </div>

    <div>
      <router-link :to="{ name: 'app-home' }">Home </router-link>
      <router-link :to="{ name: 'module-example' }">Example </router-link>
      <router-link :to="{ name: 'module-foo' }">Foo </router-link>
    </div>
    <hr />
    <h2>event count: {{ messaging.loggedEvents.length }}</h2>
    <b>Last Event:</b>
    <pre>{{ messaging.last }}</pre>

    <router-view />

    <addional-components />
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { Emitter } from "mitt";
import { useAppStore } from "./store/app";
import { EmitterInjectionKey, I18nInjectionKey } from "@/plugins/modules";
import { useMessagingStore } from "@/services/messaging/store";
import { useLocale } from "./use/useLocale";

/** @ts-ignore-next-line */
import AddionalComponents from "./components/AddionalComponents.vue";

const app = useAppStore();
const messaging = useMessagingStore();
//const useI18n = inject<I18n>(I18nInjectionKey);
const { t, locale, setLocale, currentLocale } = useLocale();
const emitter = inject<Emitter<any>>(EmitterInjectionKey);

emitter?.on("event:test1", console.log);
</script>
