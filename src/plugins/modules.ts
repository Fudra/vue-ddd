import { App } from 'vue'
import { IModuleManager } from '@/types.d';

export default {
    install: (app: App, {
        modules,
        router
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
    }
}