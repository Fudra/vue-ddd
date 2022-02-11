import { RouteRecordRaw } from 'vue-router'

import ExampleOnePage from '@/modules/example/pages/ExampleOnePage.vue'
import ExampleTwoPage from '@/modules/example/pages/ExampleTwoPage.vue'


export const routes: Array<RouteRecordRaw>  = [
    {
        path: 'one',
        name: 'example-one',
        component: ExampleOnePage,
    },
    {
        path: 'two',
        name: 'example-two',
        component: ExampleTwoPage,
    },
];
