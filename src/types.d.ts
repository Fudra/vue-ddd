import { Router, RouteRecordRaw } from "vue-router";
import { DefineComponent } from 'vue'
import { Pinia, StoreDefinition } from 'pinia';


export interface IModule {
    name: string,
    component?: DefineComponent,
    basePath: string,
    routes: Array<RouteRecordRaw>
    store: StoreDefinition,
}


export interface IModuleManager {
    modules: Array<IModule>,
    router: Router,
    store: Pinia,
}