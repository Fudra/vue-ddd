import ModulePage from './Module.vue';
import { routes } from './routes'
import { ModuleDeclaration } from '@/types';

export default {
    name: 'module-foo',
    basePath: '/f',
    component: ModulePage,
    routes,
} as ModuleDeclaration;
