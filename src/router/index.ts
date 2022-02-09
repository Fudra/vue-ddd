import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import NotFoundPage from '@/pages/error/NotFoundPage.vue'

const routes: Array<RouteRecordRaw>  = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/:pathMatch(.*)*', 
        name: 'PageNotFound',
        component: NotFoundPage,
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
