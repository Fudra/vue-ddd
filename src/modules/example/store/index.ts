import { defineStore } from 'pinia'

export const useExampleStore = defineStore('example', {
  state: () => ({
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