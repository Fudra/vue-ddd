import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        /** @type { string } */
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