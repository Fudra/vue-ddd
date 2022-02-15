import { Router, RouteRecordRaw } from "vue-router";
import { DefineComponent, ComponentOptionsMixin } from 'vue'


export interface ModuleDeclaration {
    name: string,
    anonymous: true,
    component: DefineComponent | ComponentOptionsMixin,
    basePath: string,
    routes?: Array<RouteRecordRaw>
}


export interface ModuleManager {
    modules: Array<ModuleDeclaration>,
    router: Router,
}