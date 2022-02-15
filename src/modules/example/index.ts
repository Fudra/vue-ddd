import ModulePage from './Module.vue';
import { routes } from './routes'
import { Module } from '@/types';

export default {
    name: 'module-example',
    basePath: '/e',
    component: ModulePage,
    routes,
} as Module;
