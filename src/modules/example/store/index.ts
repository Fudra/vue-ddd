import { defineStore } from 'pinia'

interface State {
  count: number; 
}

export const useExampleStore = defineStore('module/example', {
  state: (): State => ({
    count: 0
  }),
  getters: {
    counter: (state) => state.count,
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
})