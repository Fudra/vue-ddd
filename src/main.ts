import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import appModule from '@/modules/app';
import exampleModule from '@/modules/example';
import moduleManager from '@/plugins/modules';
import { IModuleManager } from './types';


createApp(App)
    .use(moduleManager, {
        modules: [
            appModule,
            exampleModule,
        ],
        router,
    } as IModuleManager)
    .use(router)
    .mount('#app')

