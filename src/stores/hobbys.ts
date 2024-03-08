import { defineStore } from 'pinia'

export const useHobbyStore = defineStore('hobby', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    doubleCountPlusOne(): number {
      /**
       * 返回 count 的值乘以 2 加 1
       * @returns {number}
       */
      return this.doubleCount + 1
    }
  },
  actions: {}
})
