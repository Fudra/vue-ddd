import { App, InjectionKey, ComponentOptionsMixin } from 'vue'
import { ModuleDeclaration, ModuleManager } from '@/modules/share/types';
import mitt, { Emitter } from 'mitt';
import { Router } from 'vue-router';

export const EmitterKey = Symbol() as InjectionKey<Emitter<any>>
export const ServiceKey = Symbol() as InjectionKey<ComponentOptionsMixin>

export default {
    install: (app: App, {
        modules,
        services,
        router,
    }: ModuleManager): void => {

        const additionalServices: ComponentOptionsMixin[] = [];

        // init modules
        for (const module of modules) {

            console.info(`registering module -> ${module.name}`);

            // module routes
            addBaseRoute(router, module);
            addRoute(router, module);
        }

        for (const service of services) {
            console.info(`registering service -> ${service.name}`);
            // add optional script to vue instance
            additionalServices.push(service.component)
        }

        // provide emitter
        app.provide(EmitterKey, mitt())

        // provide modules, that requires the vue instance
        app.provide(ServiceKey, additionalServices)

    }
};

// Base Route for modules
const addBaseRoute = (router: Router, module: ModuleDeclaration) => {
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