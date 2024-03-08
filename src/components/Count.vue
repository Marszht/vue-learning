<script setup lang="ts">
defineProps({
  count: {type: Number, required: true }
})
</script>
<template>
  <van-button type="primary">{{ count }}</van-button>
</template>

<style lang="scss" scoped></style>
