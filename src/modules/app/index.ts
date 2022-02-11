import ModulePage from './Module.vue';
import { routes } from './routes'
import { IModule } from '@/types';

export default {
    name: 'app',
    basePath: '',
    component: ModulePage,
    routes,
} as IModule;
