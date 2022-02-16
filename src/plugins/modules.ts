import { App, InjectionKey, ComponentOptionsMixin } from 'vue'
import { ModuleDeclaration, ModuleManager, LocaleConfig } from '@/modules/share/types';
import mitt, { Emitter } from 'mitt';
import { Router } from 'vue-router';
import merge from 'lodash.merge';
import { createI18n, I18n } from 'vue-i18n';

export const EmitterInjectionKey = Symbol() as InjectionKey<Emitter<any>>
export const ServiceInjectionKey = Symbol() as InjectionKey<ComponentOptionsMixin>
export const I18nInjectionKey = Symbol() as InjectionKey<I18n>

export default {
    install: (app: App, {
        modules,
        services,
        router,
        config,
    }: ModuleManager): void => {

        const additionalServices: ComponentOptionsMixin[] = [];
        let messages = {};

        // init modules
        for (const module of modules) {

            console.info(`registering module -> ${module.name}`);

            // module routes
            addBaseRoute(router, module);
            addRoute(router, module);

            // locales
            if (!module.locales) continue;

            for (const [lang, locale] of Object.entries(module.locales)) {
                messages = merge(messages, { [lang]: locale })
            }
        }

        for (const service of services) {
            console.info(`registering service -> ${service.name}`);
            // add optional script to vue instance
            additionalServices.push(service.component)
        }

        // provide emitter
        app.provide(EmitterInjectionKey, mitt())

        // provide modules, that requires the vue instance
        app.provide(ServiceInjectionKey, additionalServices)

        // provide locales 
        const i18n = createI18nInstance(messages, config.locale);
        //app.provide(I18nInjectionKey, i18n);
        app.use(i18n);
    }
};

// Base Route for modules
const addBaseRoute = (router: Router, module: ModuleDeclaration): void => {
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

const addRoute = (router: Router, module: ModuleDeclaration): void => {
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

const createI18nInstance = (messages: any, config: LocaleConfig): I18n<unknown, unknown, unknown, true> => {
    console.log(messages);

    return createI18n<any>({
        legacy: false,
        locale: config.locale,
        fallbackLocale: config.fallbackLocale,
        messages
    });
}