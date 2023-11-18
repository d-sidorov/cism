<script setup lang="ts">
import { RouterView } from 'vue-router'
import MyErrorNotification from '@components/UI/MyErrorNotification.vue'
</script>

<template>
  <main>
    <RouterView />
    <MyErrorNotification />
  </main>
</template>

<style scoped lang="scss">
main {
  height: 100vh;
  background-color: #fbfbfb;
}
</style>
