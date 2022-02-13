import { defineStore } from 'pinia'


interface EventLog {
    timestamp: number, 
    event: string | number | symbol, 
    data: any
}

interface State {
    events: Array<EventLog>;
}

export const useMessagingStore = defineStore('messaging', {
    state: (): State => ({
        events: []
    }),
    getters: {
        loggedEvents: (state): Array<EventLog> => state.events,
        last: (state): EventLog => state.events[state.events.length - 1] || null,
    },
    actions: {
        log( event:string | number | symbol, data: any ) {
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