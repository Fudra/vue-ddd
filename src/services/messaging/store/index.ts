import { defineStore, acceptHMRUpdate } from 'pinia'

export interface EventLog {
    timestamp: number,
    event: string | number | symbol,
    data: unknown
}

interface State {
    events: EventLog[];
}

export const useMessagingStore = defineStore('messaging', {
    state: (): State => ({
        events: []
    }),
    getters: {
        loggedEvents: (state): EventLog[] => state.events,
        last: (state): EventLog => state.events[state.events.length - 1] || null,
    },
    actions: {
        log(event: string | number | symbol, data: unknown) {
            this.$state.events.push(
                {
                    timestamp: Date.now(),
                    event,
                    data
                }
            )
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMessagingStore, import.meta.hot))
}