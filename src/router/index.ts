import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'


const routes: Array<RouteRecordRaw>  = []

/*[
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/:pathMatch(.*)*', 
        name: 'page-not-found',
        component: NotFoundPage,
    }
];
*/


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
