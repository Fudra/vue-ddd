import { defineStore, acceptHMRUpdate } from 'pinia'

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

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}