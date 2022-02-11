import { RouteRecordRaw } from 'vue-router'

import HomePage from '@/modules/app/pages/HomePage.vue'
import NotFoundPage from '@/modules/app/pages/error/NotFoundPage.vue'

export const routes: Array<RouteRecordRaw>  = [
    {
        path: '/',
        name: 'app-home',
        component: HomePage
    },
    {
        path: '/:pathMatch(.*)*', 
        name: 'app-page-not-found',
        component: NotFoundPage,
    }
];
