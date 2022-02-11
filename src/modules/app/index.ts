import { routes } from './routes'
import { IModule } from '@/types';


const App = {
    template: '<div>a</div>',
}

export default {
    name: 'app',
    basePath: '/',
    routes,
} as IModule;
