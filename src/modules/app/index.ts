import { routes } from './routes'
import { ModuleDeclaration } from '@/modules/share/types';
import de from './locales/de.json';
import en from './locales/en.json';

export default {
    name: 'app',
    routes,
    locales: { de, en }
} as ModuleDeclaration;
