import { reactive } from 'vue';
<template>
  <van-space direction="vertical" :size="30">
    <div class="box" style="display: flex; color: black" :style="boxStyle">
      AutocompleteForm.vue

      <br />
      <slot />
    </div>
  </van-space>
  <van-space direction="vertical" :size="30">
    <van-button @click="(event: Event) => handleToggle(event, awesome)" class="toggle-btn">Toggle</van-button>
    <!-- <button @click="(event: Event) => handleToggle(event, awesome)"> Toggle2 </button> -->
    <h1 v-if="awesome">Vue is awesome! {{ awesome }}</h1>
    <h1 v-else>Oh no 😢{{ awesome }}</h1>
  </van-space>

  <template v-if="awesome" @click="awesome = !awesome">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>

  <div v-show="awesome">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const boxStyle = reactive({
  borderColor: 'red',
  borderWidth: '1px',
  borderStyle: 'solid',
  // border: "1px sold red", // 这种形式不行
  height: '100px'
})

const awesome = ref(true)

// 使用内联箭头函数，或者 $event 变量
function handleToggle(e: Event, falg: boolean) {
  console.log(e.target); // 如果是封装的组件，则可能没有这个target 属性
  awesome.value = !awesome.value
}
</script>

<style scoped>
.box {
  color: green;
  /* display: flex; */
  /* border: "" */
}
.toggle-btn {
  margin-top: 20px;
}
</style>
