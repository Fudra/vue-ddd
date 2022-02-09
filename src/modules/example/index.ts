import Vue from 'vue/dist/vue.esm-bundler'
import { useRouter } from 'vue-router';
import ModulePage from './Module.vue';
import { routes } from './routes'


const MODULE_NAME = "example";



export default {
    install: (app: Vue, { router }: any) => {
        console.log("example Module", app);

        // 

        // app.provide("module:routes", routes)

        /**
         * init Routes
         */

        //const router = useRouter();
        router.addRoute({ name: MODULE_NAME, path: '/example', component: ModulePage })


        for (const route of routes) {
            router.addRoute(MODULE_NAME, route);
        }


    }
}