<template>
  <van-button @click="addNewItem">add new </van-button>
  <van-button @click="resetToDo" type="primary" class="" style="">reset TODO </van-button>
  <div>not empty todo: {{ store.formateTODOLen }}</div>
  <van-field
    v-model="inputValue"
    placeholder="请输入用户名"
    required
    clearable
  />
  <div>inputValue: {{ inputValue }}</div>
  <div :class="$style['container']">
    <TODOItem
      v-for="todo in store.TODOList"
      :key="todo.id"
      :value="todo.value"
      :status="todo.down"
      :id="todo.id"
      v-modal="inputValue"
      @delete-item="deleteItem"
      title="my name is mars"
      :age="18"  
      
    />
  </div>
  <div>hobbyStore:{{ count }}</div>
</template>

<script setup lang="ts">
import { ref, reactive, defineModel } from 'vue'
import type { Ref, ModelRef } from 'vue'
import { storeToRefs } from "pinia"
import TODOItem from '../TODOItem/TODOItem.vue'
import { useToDoStore } from '@/stores/todolist'
import { useHobbyStore } from '@/stores/hobbys'

const inputValue = defineModel(''); 
// 一定要记住这个是响应式的数据,如果传到其他地方,一定是一个引用,会被同步修改
// 可以解构来断掉响应式
const store = useToDoStore()
const hobbyStore = useHobbyStore();

const { count } = storeToRefs(hobbyStore);
// count.value++; // pinia 中 store 中的state 并不是 immutable 的而是 mutable 的，跟redux 还有 Vuex 不一样
console.log({count});

function addNewItem() {
  store.addToDo(inputValue.value as string);
  inputValue.value = ''
}
function deleteItem (id: number) {
  store.removeToDo(id)
}
function resetToDo () {
  store.$reset();
}
</script>

<style module>
.container {
}
</style>
