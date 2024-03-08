import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 这种写法类似 组合式api 的方式，
// defineStore 的第二个参数还可以是 对象，类似选项式api
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
