<script setup lang="ts">
const props = defineProps<{}>()
</script>

<template>
  <div>
    <div>Empty 主页</div>
    <ul>
      <li>
        <router-link to="/playground">playground</router-link>
      </li>
      <li>
        <router-link to="/quick-launcher">quick-launcher</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>