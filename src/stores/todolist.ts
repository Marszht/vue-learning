import { ref, computed, reactive } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

interface ITODOItem {
  down: boolean
  value: string
  id: number
}

// 这种写法类似 组合式api 的方式，
// defineStore 的第二个蚕食还可以是 对象，类似选项式api
export const useToDoStore = defineStore('ToDo', () => {
  const TODOList: Ref<ITODOItem[]> = ref([])

  const formateTODOLen = computed(() => TODOList.value.filter(item => item.value).length)
  function addToDo(value: string) {
    TODOList.value.push({
      value,
      down: false,
      id: Date.now()
    })
  }

  function removeToDo(id: number) {
    TODOList.value = TODOList.value.filter(item => item.id !== id);
  }

  function $reset() {
    TODOList.value = []
  }

  return { TODOList, formateTODOLen, addToDo, $reset, removeToDo }
})
