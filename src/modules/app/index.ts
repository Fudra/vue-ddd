import { routes } from './routes'
import { IModule } from '@/types';
import { useAppStore } from './store'

export default {
    name: 'app',
    basePath: '/',
    routes,
    store: useAppStore
} as IModule;
