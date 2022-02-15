import { Router, RouteRecordRaw } from "vue-router";
import { DefineComponent } from 'vue'
import { Pinia, StoreDefinition } from 'pinia';


export interface Module {
    name: string,
    component?: DefineComponent,
    basePath: string,
    routes: Array<RouteRecordRaw>
    store: StoreDefinition,
}


export interface ModuleManager {
    modules: Array<Module>,
    router: Router,
    store: Pinia,
}