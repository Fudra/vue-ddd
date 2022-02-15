import { defineStore } from 'pinia'

interface State {
    name: string;
    modules: Array<string>
}

export const useAppStore = defineStore('app', {
    state: (): State => ({
        name: 'DDD Test',
        modules: [],
    }),
    getters: {
        applicationName: (state): string => state.name,
        registerModules: (state): Array<string> => state.modules
    },
    actions: {
        setName(name: string) {
            this.$state.name = name
        },
        registerModule(name: string) {
            this.$state.modules.push(name);
        }
    },
})