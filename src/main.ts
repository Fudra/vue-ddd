import { createApp } from 'vue'
import App from '@/modules/app/App.vue'
import router from './router'
import { createPinia } from 'pinia'

import appModule from '@/modules/app';
import exampleModule from '@/modules/example';
import moduleManager from '@/plugins/modules';
import { IModuleManager } from './types';


const pinia = createPinia();

createApp(App)
    .use(moduleManager, {
        modules: [
            appModule,
            exampleModule,
        ],
        router,
        store: pinia,
    } as IModuleManager)
    .use(pinia)
    .use(router)
    .mount('#app')

