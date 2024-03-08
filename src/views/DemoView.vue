<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'

interface IPersonType {
  age: number
  name: string
  hobby?: Array<string>
}

let count = ref(12)
const state = reactive({count})
console.log(state.count);
const arr: Ref<IPersonType[]> = ref([{ age: 18, name: 'mars' }])
const emptyArr = ref('12')
const todos = ref([
  { name: 'learn vue', status: 'down' },
  { name: 'clean', status: 'false' }
])
const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

const mz: IPersonType = reactive({age: 18, name: "mz"});
let { name } = mz; // 这个时候已经失去响应性链接
console.log({name});
name = "cmz" // 
console.log(mz);



function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}

function addClick() {
  console.log(count.value)
  count.value++
}

function addPerson() {
  arr.value.push({
    age: Math.random() * 100,
    name: 'zht'
  })
}

function changeAge() {
  console.log({mz});
  mz.age++
}
</script>
<template>
  <div class="wrapper">i am a demo com</div>
  <van-button ype="primary" @click="addClick">
    {{ count }}
  </van-button>
  <div class="add-btn" @click="addPerson">addPerson</div>
  <div v-for="item in arr">
    <div class="item-box">
      <div class="name">name: {{ item.name }}</div>
      &nbsp;&nbsp;&nbsp;
      <div class="age">age: {{ item.age }}</div>
    </div>
  </div>
  <div class="box" v-for="item in emptyArr">
    <div class="item">{{ item }}</div>
  </div>
  <template v-for="todo in todos" :key="todo.name">
    <li>{{ todo.name }}</li>
  </template>

  <div v-for="(item, key) in obj" :key="key">
    {{ item }}
  </div>

<!-- reactive -->
<button @click="changeAge">add age</button>
<div class="d">{{ mz.name }}: {{ mz.age }}</div>
</template>

<style scoped>
.wrapper {
  color: red;
}
.item-box {
  display: flex;
}
.add-btn {
  border: 1px solid red;
  padding: 5px;
  margin: 10px;
  text-align: center;
}
</style>
