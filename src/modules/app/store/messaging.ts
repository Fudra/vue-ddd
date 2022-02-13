import { defineStore } from 'pinia'


export interface IEventLog {
    timestamp: number, 
    event: string | number | symbol, 
    data: any
}

interface State {
    events: Array<IEventLog>;
}

export const useMessagingStore = defineStore('messaging', {
    state: (): State => ({
        events: []
    }),
    getters: {
        loggedEvents: (state): Array<IEventLog> => state.events,
        last: (state): IEventLog => state.events[state.events.length - 1] || null,
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