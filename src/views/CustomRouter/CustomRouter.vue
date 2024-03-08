<template>
  <a href="/">Home</a> | <a href="/about">About</a> |
  <a href="/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import HomeView from '@/views/HomeView.vue'
import DemoViewVue from '@/views/DemoView.vue'

const routes = {
  '/': HomeView,
  '/about': DemoViewVue
}

type RouteType = keyof typeof routes

const currentPath = ref(window.location.pathname)
window.addEventListener('popstate', () => {
  console.log('object', window.location.pathname)
  currentPath.value = window.location.pathname
})
const currentView = computed(() => {
  return routes[(currentPath.value as RouteType) || '/']
})
</script>

<style scoped></style>
