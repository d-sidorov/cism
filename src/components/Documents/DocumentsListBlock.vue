<script setup lang="ts">
import MyInput from '@components/UI/MyInput.vue'
import DocumentsList from './DocumentsList.vue'
import type { IDocument } from '@models/index'

defineProps<{ activeDocument: IDocument | null }>()
defineEmits<{ (e: 'openDocument', document: IDocument): void }>()
</script>

<template>
  <div class="DocumentsListBlock">
    <div class="DocumentsListBlock-section">
      <p class="DocumentsListBlock-section__label">Поиск документа</p>
      <div class="DocumentsListBlock-section__body">
        <MyInput placeholder="Введите ID документа" />
      </div>
    </div>

    <div class="DocumentsListBlock-section DocumentsListBlock-section full-height">
      <p class="DocumentsListBlock-section__label">Результаты</p>
      <div class="DocumentsListBlock-section__body full-height">
        <DocumentsList
          :activeDocument="activeDocument"
          @openDocument="$emit('openDocument', $event)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.DocumentsListBlock {
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  position: relative;

  &-section {
    display: flex;
    flex-direction: column;
    gap: 14px;

    &__label {
      font-weight: bold;
    }
  }
}
</style>
