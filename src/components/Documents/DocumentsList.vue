<script setup lang="ts">
import type { IDocument } from '@models/index'
import DocumentsItem from './DocumentsItem.vue'

defineProps<{ documents: IDocument[]; activeDocument: IDocument | null }>()
defineEmits<{ (e: 'setActiveDocument', document: IDocument): void }>()
</script>

<template>
  <div class="DocumentsList">
    <div class="DocumentsList-absolute">
      <div class="DocumentsList-list">
        <DocumentsItem
          v-for="document in documents"
          :key="document.id"
          :document="document"
          :isActive="document.id === activeDocument?.id"
          @click="$emit('setActiveDocument', document)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.DocumentsList {
  overflow-y: auto;
  height: 100%;

  &-absolute {
    height: 100%;
    width: 100%;
    position: absolute;
  }

  &-scroll {
    overflow: auto;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
  }
}
</style>
