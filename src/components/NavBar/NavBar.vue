<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  title: {
    require: true,
    type: String
  }
})
const route = useRoute()
const router = useRouter()

function onBack() {
  if (history.length > 1) history.back()
  else router.replace('/')
}

// const title = computed(() => {
//   // const { title } = (props || route.meta as { title?: string }) || {}
//   const 
//   return title || ''
// })
</script>

<template>
  <VanNavBar
    v-show="title"
    :title="title"
    :fixed="true"
    clickable
    left-arrow
    @click-left="onBack"
  />
</template>
