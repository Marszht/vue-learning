<template>
  <div>
    form com

    <van-tabs v-model:active="activeName" animated class="demo-tabs" @tab-click="handleClick">
      <van-tab title="User" name="first">
        <AutocompleteForm :class="{ 'color-red': true }">
          i am AutocompleteForm 有点类似 react 中的 props 是children renderprops
        </AutocompleteForm>
      </van-tab>
      <van-tab title="Config" name="second">
        <!-- <Config ref="configRef" /> -->
      </van-tab>
      <van-tab title="Role" name="third">
        <van-button type="primary" >store</van-button>
      </van-tab>
      <van-tab title="Task" name="fourth">
        <TODO />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import AutocompleteForm from '@/components/AutocompleteForm.vue'
import Config from './components/Config/Config.vue'
import TODO from './components/TODO/TODO.vue'
import { ref, onMounted } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('fourth')
const configRef = ref(null)

onMounted(() => {
  // console.log({ configRef })
})

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped>
.color-red {
  color: red;
}
</style>
