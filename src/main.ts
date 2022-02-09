import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'

import exampleModule from '@/modules/example';

createApp(App)
    .use(router)
    .use(exampleModule, { router })
    .mount('#app')

