<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{ size?: number }>(), {
  size: 30
})

const styles = computed(() => {
  return {
    minWidth: `${props.size}px`,
    minHeight: `${props.size}px`,
    maxWidth: `${props.size}px`,
    maxHeight: `${props.size}px`
  }
})
</script>

<template>
  <div class="MySpinner" :style="styles"></div>
</template>

<style scoped lang="scss">
.MySpinner {
  border: 4px solid var(--light-gray);
  border-radius: 50%;
  border-top: 4px solid var(--blue);
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
