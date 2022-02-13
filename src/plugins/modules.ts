import { App } from 'vue'
import { IModuleManager } from '@/types.d';
import mitt from 'mitt';

export default {
    install: (app: App, {
        modules,
        router,
        store,
    }: IModuleManager): void => {

        // init Routes
        for (const module of modules) {

            if (module.component) {
                // Base Route for modules
                router.addRoute({
                    name: module.name,
                    path: module.basePath,
                    component: module.component,
                })
            }


            for (const route of module.routes) {
                if (module.component) {
                    // add Module Routes
                    router.addRoute(module.name, route)
                } else {
                    // add Routes
                    router.addRoute(route);
                }
            }
        }

        // init all store componentes
        /*
        store.use((context) => console.log(context))

        for (const module of modules) {
            console.log(module.store())
        }
        */

        // emitter
        app.provide('emitter', mitt())

    }
}