<script setup lang="ts">
import MyInput from '@components/UI/MyInput.vue'
import DocumentsList from './DocumentsList.vue'
import MySpinner from '@components/UI/MySpinner.vue'
import type { IDocument } from '@models/index'
import { useDocumentsStore } from '@stores/DocumentsStore'
import { onMounted, ref, watch } from 'vue'
import { debounce } from '@utils/debounce'
import { storeToRefs } from 'pinia'

const documentsStore = useDocumentsStore()
const { documents, activeDocument, isDocumentsLoading, documentsLoadingError } =
  storeToRefs(documentsStore)

const searchString = ref<string>('')
const getDocuments = () => {
  documentsStore.getDocuments(searchString.value)
}
const debounceGetDocuments = debounce(getDocuments, 1000)

const setActiveDocument = (document: IDocument) => {
  documentsStore.setActiveDocument(document)
}

watch(searchString, () => {
  debounceGetDocuments()
})

onMounted(() => {
  getDocuments()
})
</script>

<template>
  <div class="DocumentsListBlock">
    <div class="DocumentsListBlock-section">
      <p class="DocumentsListBlock-section__label">Поиск документа</p>
      <div class="DocumentsListBlock-section__body">
        <MyInput placeholder="Введите ID документа" v-model="searchString" />
      </div>
    </div>

    <div class="DocumentsListBlock-section DocumentsListBlock-section__documents full-height">
      <p class="DocumentsListBlock-section__label">Результаты</p>
      <MySpinner v-if="isDocumentsLoading" :size="30" />

      <div
        v-else-if="!isDocumentsLoading && !documentsLoadingError"
        class="DocumentsListBlock-section__body full-height"
      >
        <DocumentsList
          :documents="documents"
          :activeDocument="activeDocument"
          @setActiveDocument="setActiveDocument"
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

    &__documents {
      width: 280px;
    }
  }
}
</style>
