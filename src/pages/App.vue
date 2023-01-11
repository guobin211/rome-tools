<script setup lang="ts">
const props = defineProps<{}>()
</script>

<template>
  <router-view></router-view>
  <router-link to="/">back</router-link>
</template>

<style scoped lang="scss"></style>
