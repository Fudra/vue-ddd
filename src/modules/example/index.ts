import ModulePage from './Module.vue';
import { routes } from './routes'
import { ModuleDeclaration } from '@/types';

export default {
    name: 'module-example',
    basePath: '/e',
    component: ModulePage,
    routes,
} as ModuleDeclaration;
