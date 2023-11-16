<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ src?: string | null }>()

const _src = computed(() => {
  return props.src ? props.src : '/img/img-empty.svg'
})
const isEmpty = computed(() => !props.src)
</script>

<template>
  <img class="MyImage" :class="{ MyImage_empty: isEmpty }" :src="_src" v-bind="$attrs" />
</template>

<style scoped lang="scss">
.MyImage {
  height: 100%;
  width: 100%;
}
</style>
