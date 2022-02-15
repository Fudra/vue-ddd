import { createApp } from 'vue'
import App from '@/modules/app/App.vue'
import router from './router'
import { createPinia } from 'pinia'

import appModule from '@/modules/app';
import exampleModule from '@/modules/example';
import messagingModule from '@/modules/messaging';
import triggerModule from '@/modules/trigger';
import moduleManager from '@/plugins/modules';
import { ModuleManager } from './types';

const pinia = createPinia();

createApp(App)
    .use(moduleManager, {
        modules: [
            appModule,
            exampleModule,
            messagingModule,
            triggerModule,
        ],
        router,
    } as ModuleManager)
    .use(pinia)
    .use(router)
    .mount('#app')

