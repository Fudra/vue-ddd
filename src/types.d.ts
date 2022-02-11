import { Router, RouteRecordRaw } from "vue-router";
import { DefineComponent } from 'vue'


export interface IModule {
    name: string,
    component: DefineComponent,
    basePath: string, 
    routes: Array<RouteRecordRaw>
}


export interface IModuleManager {
    modules: Array<IModule>,
    router: Router
}