import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw>  = [];

export default createRouter({
    history: createWebHistory(),
    routes,
});

