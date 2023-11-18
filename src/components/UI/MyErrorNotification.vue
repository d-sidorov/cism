<script setup lang="ts">
import { useUIStore } from '@stores/UIStore'
import { storeToRefs } from 'pinia'

const UIStore = useUIStore()
const { error, isShowError } = storeToRefs(UIStore)
</script>

<template>
  <div v-if="isShowError" class="MyErrorNotification">{{ error }}</div>
</template>

<style scoped lang="scss">
.MyErrorNotification {
  position: fixed;
  width: fit-content;
  padding: 5px;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--red);
  color: #fff;
}
</style>
