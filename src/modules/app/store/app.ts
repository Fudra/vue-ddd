import { defineStore } from 'pinia'

interface State {
    name: string;
}

export const useAppStore = defineStore('app', {
    state: (): State => ({
        name: 'DDD Test',
    }),
    getters: {
        applicationName: (state): string => state.name,
    },
    actions: {
        setName(name: string) {
            this.$state.name = name
        }
    },
})