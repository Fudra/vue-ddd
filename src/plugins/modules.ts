import { Plugin } from 'vue'
import { IModuleManager } from '@/types.d';


export default {
    install: (app: Plugin, {
        modules,
        router
    }: IModuleManager) => {

        // init Routes

        for (const module of modules) {
            // Base Route
            router.addRoute({
                name: module.name,
                path: module.basePath,
                component: module.component,
            })

            // module Routes
            for (const route of module.routes) {
                router.addRoute(module.name, route)
            }

        }

    }
}