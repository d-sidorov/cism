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
  min-height: 0;
  height: 100vh;
  background-color: #fbfbfb;
}

@media screen and (min-width: 768px) {
  main {
    min-height: 0;
    height: 100vh;
  }
}

@media screen and (max-width: 768px) {
  main {
    min-height: 100vh;
    height: 100%;
  }
}

@media screen and (max-width: 1024px) {
  main {
    min-height: 100vh;
  }
}

@media screen and (min-width: 1024px) {
  main {
    min-height: 0;
    height: 100vh;
  }
}
</style>
