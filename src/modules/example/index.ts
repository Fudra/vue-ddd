import ModulePage from './Module.vue';
import { routes } from './routes'
import { IModule } from '@/types';

export default {
    name: 'module-example',
    basePath: '/e',
    component: ModulePage,
    routes,
} as IModule;
