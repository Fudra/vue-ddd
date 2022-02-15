import { App, InjectionKey, ComponentOptionsMixin } from 'vue'
import { ModuleDeclaration, ModuleManager } from '@/types.d';
import mitt, { Emitter } from 'mitt';
import { Router } from 'vue-router';

export const EmitterKey = Symbol() as InjectionKey<Emitter<any>>
export const ModuleKey = Symbol() as InjectionKey<ComponentOptionsMixin>

export default {
    install: (app: App, {
        modules,
        router,
    }: ModuleManager): void => {

        const additionalComponents: ComponentOptionsMixin[] = [];

        // init modules
        for (const module of modules) {

            console.log(`registering -> ${module.name}`);

            // module routes
            addBaseRoute(router, module);
            addRoute(router, module);


            // add optional script to vue instance
            if (module.anonymous) {
                additionalComponents.push(module.component)
            }
        }

        // provide emitter
        app.provide(EmitterKey, mitt())

        // provide modules, that requires the vue instance
        app.provide(ModuleKey, additionalComponents)

    }
};

// Base Route for modules
const addBaseRoute = (router: Router, module: ModuleDeclaration) => {
    if (module.anonymous) return;
    if (!module.component) return;


    if (!module.basePath) {
        throw new Error('`basepath` should not be empty. Either set a basepath or declare the module as `anonymous`')
    }


    router.addRoute({
        name: module.name,
        path: module.basePath,
        component: module.component,
    })

}

const addRoute = (router: Router, module: ModuleDeclaration) => {
    if (!module.routes) return;
    if (module.anonymous) return;

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