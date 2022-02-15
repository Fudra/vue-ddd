import { routes } from './routes'
import { Module } from '@/types';
import { useAppStore } from './store/app'

export default {
    name: 'app',
    basePath: '/',
    routes,
    store: useAppStore
} as Module;
