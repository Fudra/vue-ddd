import ModulePage from './Module.vue';
import { routes } from './routes'
import { ModuleDeclaration } from '@/modules/share/types';

export default {
    name: 'module-foo',
    basePath: '/f',
    component: ModulePage,
    routes,
} as ModuleDeclaration;
