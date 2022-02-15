import { Router, RouteRecordRaw } from "vue-router";
import { DefineComponent, ComponentOptionsMixin } from 'vue'

/**
 * Module Management
 */
 export interface ModuleDeclaration {
    name: string;
    component: DefineComponent;
    basePath?: string;
    routes: RouteRecordRaw[];
}

export interface ModuleManager {
    modules: ModuleDeclaration[];
    services: ServiceDeclaration[];
    router: Router;
}

export interface ServiceDeclaration {
    name: string;
    component: ComponentOptionsMixin;
}