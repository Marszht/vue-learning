<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import type { Ref } from 'vue'

// import Count from '../components/Count.vue'

console.clear()
interface IHobbys {
  action: string
  good: boolean
}

let count: Ref<number> = ref(12)

const hobbys: IHobbys[] = reactive([
  {
    action: 'swim',
    good: false
  },
  {
    action: 'fit',
    good: true
  },
  {
    action: 'ride',
    good: true
  }
])

const filterHobbys = computed<IHobbys[]>(() => {
  return hobbys.filter((hobby) => hobby.good)
})

function addNewHobby() {
  count.value++
  hobbys.push({
    action: 'game',
    good: Math.random() > 0.5 ? true : false
  })
}

const firstName = ref('John')
const lastName = ref('Doe')

const isChangeColor = ref(false)

const fullName = computed({
  // getter
  get() {
    console.log('get')
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    console.log('set')
    // 注意：我们这里使用的是解构赋值语法
    ;[firstName.value, lastName.value] = newValue.split(' ')
  }
})
function changeFirstName() {
  firstName.value = 'mars'
}
function changeLastName() {
  lastName.value = 'zhu'
  console.log(classObject);
}
fullName.value = 'mz c'
console.log(firstName.value)
// console.log(fullName.value);

// 计算属性 跟方法 都可以实现这个功能。
function getFullName() {
  console.log('getFullName')
  return firstName.value + lastName.value
}

// 其实可以自己写一个useMemo 的方法来缓存
function useMemo<T extends any[], R>(fn: (...args: T) => R): (...args: T) => R {
  let cache = new Map<string, R>();
  const memorized = (...args: T): R => {
    let key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    let result = fn(...args);
    cache.set(key, result);
    return result;
  };
  
  return memorized;
}

function changeTxtColor() {
  isChangeColor.value = !isChangeColor.value
  // classObject["text-danger"] = !classObject["text-danger"] // 不会丢失响应式
  let { 'text-danger': textDanger }  = classObject; // 解构会丢失响应式
  textDanger = !classObject["text-danger"]
}

// 类名返回计算属性 
// 感觉可以直接用响应式数据组成对象也可以 下面这个表示不可以，跟计算属性有区别，
// 直接改可以更新，但是直接改对象里面的响应式对象不会导致 classObject 更新
const classObject = reactive({
  active: isChangeColor, // 只要赋值了这个就不变了。
  'text-danger': true
})
console.log(classObject);


</script>
<template>
  <div class="about">
    <!-- <van-space direction="vertical" alignment="start" :size="30">
      <van-button type="primary" round @click="changeTxtColor">change text color</van-button>
    </van-space> -->
    <h1 :class="{'red-txt': isChangeColor}">This is an about page</h1>
    <h1 :class="classObject">change class</h1>
    <!-- <Count :count="{{ count }}"/> -->

    <van-button> {{ count }}</van-button>
    <van-button type="primary" @click="addNewHobby">add new</van-button>

    <div v-for="hobby in filterHobbys" :key="hobby.action">
      <!-- {{ hobby.good ? hobby.action : '' }} -->
      {{ hobby.action }}
    </div>
    <van-button type="primary" @click="changeFirstName">change first name</van-button>
    <van-button type="primary" @click="changeLastName">change last name</van-button>
    <!-- <van-text class="mx-1" type="info">{{ fullName }}</van-text> <br /> -->
    <!-- <van-text class="mx-1" type="info">{{ getFullName() }}</van-text> -->

    
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.red-txt {
  color: red;
}
.text-danger {
  color: red;
}
</style>
