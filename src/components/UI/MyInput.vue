<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ modelValue: string | number }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: string | number): void }>()

const model = computed({
  get() {
    return props.modelValue
  },
  set(value: string | number) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input class="MyInput" v-bind="$attrs" v-model="model" />
</template>

<style scoped lang="scss">
.MyInput {
  display: block;
  width: 100%;
  height: 49px;
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &::placeholder {
    color: #212529;
    opacity: 0.4;
  }

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }

  &:disabled,
  &[readonly] {
    background-color: #f5f5f5;
    opacity: 1;
  }
}
</style>
