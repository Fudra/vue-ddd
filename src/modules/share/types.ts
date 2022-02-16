import { Router, RouteRecordRaw } from "vue-router";
import { DefineComponent, ComponentOptionsMixin } from 'vue'

/**
 * Module Management
 */
export interface ModuleDeclaration {
    name: string;
    component: DefineComponent;
    basePath?: string;
    locales: {};
    routes: RouteRecordRaw[];
}

export interface ModuleManager {
    modules: ModuleDeclaration[];
    services: ServiceDeclaration[];
    router: Router;
    config: ModuleDeclarationConfig;
}

export interface ServiceDeclaration {
    name: string;
    component: ComponentOptionsMixin;
}

export interface ModuleDeclarationConfig {
    locale: LocaleConfig
}

export interface LocaleConfig {
    locale: string;
    fallbackLocale: string;
}