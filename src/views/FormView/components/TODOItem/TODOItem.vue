<template>
  <div>todo:{{ value }}</div>
  <div>status:{{ status }}</div>
  <van-button @click="deleteItemd(id)" type="danger">delete </van-button>
  <div :style="{ textAlign: 'center', marginTop: '10px', color: 'blue' }">
    modalValue: {{ modalValue }}
  </div>
</template>

<script setup lang="ts">
import { useToDoStore } from '@/stores/todolist'
const store = useToDoStore()
// defineProps({
//   value: String,
//   status: Boolean
// })

// 也可以通过泛型的方式来定义
 defineProps<{
  value: string
  status: boolean
  id: number,
  age: number // 只有通过 v-bind 绑定之后，age才能作为一个number 否则就是一个string
  // title: string
}>()
const modalValue = defineModel()
console.log(modalValue)
// const emit  = defineEmits(['delete-item'])

// const emit1 = defineEmits<{
//   (e: 'delete-item', id: number): void
//   (e: 'update', value: string): void
// }>()
const emit = defineEmits<{
  change: [id: number]
  update: [value: string]
  "delete-item": [id: number]
}>()

function deleteItemd(id: number) {
  emit('delete-item', id) // 有点像apply 的传参方式
}

</script>

<style scoped></style>
