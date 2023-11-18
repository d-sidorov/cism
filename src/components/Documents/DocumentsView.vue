<script setup lang="ts">
import MyImage from '@components/UI/MyImage.vue'
import MyButton from '@components/UI/MyButton.vue'
import downloadTxtFile from '@utils/downloadTxtFile'
import { useDocumentsStore } from '@stores/DocumentsStore'
import { computed } from 'vue'

const documentsStore = useDocumentsStore()

const activeDocument = computed(() => documentsStore.activeDocument)

const downloadDocument = () => {
  if (!activeDocument.value) return
  downloadTxtFile(activeDocument.value?.name, activeDocument.value?.description)
}

const deleteDocument = () => {
  if (!activeDocument.value) return
  documentsStore.deleteDocument(activeDocument.value?.id)
}
</script>

<template>
  <div class="DocumentsView" :class="{ DocumentsView__empty: !activeDocument }">
    <div v-if="!activeDocument">Выберите документ, чтобы посмотреть его содержимое</div>
    <div v-else class="DocumentsView-block">
      <div class="DocumentsView-img">
        <MyImage :src="activeDocument.image" />
      </div>
      <div class="DocumentsView-info">
        <div class="DocumentsView-info__section">
          <div class="DocumentsView-info__label">{{ activeDocument.name }}</div>
          <div class="DocumentsView-info__actions">
            <MyButton class="DocumentsView-info__saveBtn" @click="downloadDocument">
              Скачать
            </MyButton>
            <MyButton
              class="DocumentsView-info__deleteBtn"
              :disabled="!activeDocument.image"
              @click="deleteDocument"
            >
              Удалить
            </MyButton>
          </div>
        </div>
        <div class="DocumentsView-info__section">
          <div class="DocumentsView-info__label">Описание:</div>
          <div class="DocumentsView-info__description">{{ activeDocument.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.DocumentsView {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 30px;

  &__empty {
    font-size: 14px;
    align-items: center;
  }

  &-block {
    display: flex;
    gap: 60px;
    justify-content: space-between;
  }

  &-img {
    min-width: 420px;
    height: 280px;
    border: 1px solid var(--light-gray);
    display: flex;
    align-items: center;
    justify-content: center;

    .MyImage_empty {
      height: 50%;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    gap: 40px;

    &__section {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    &__label {
      font-weight: bold;
    }
    &__actions {
      display: flex;
      gap: 17px;
    }
    &__saveBtn {
      color: var(--blue);
      border-color: var(--blue);
    }
    &__deleteBtn {
      color: var(--red);
      border-color: var(--red);
    }
    &__description {
      color: var(--gray);
    }
  }
}

@media screen and (max-width: 768px) {
  .DocumentsView {
    &-block {
      flex-direction: column;
      max-width: 100%;
    }

    &-img {
      min-width: auto;
      height: auto;
    }
  }
}

@media screen and (min-width: 1024px) {
  .DocumentsView {
    &-block {
      flex-direction: row;
      max-width: 100%;
    }
  }
}

@media screen and (max-width: 1280px) {
  .DocumentsView {
    &-block {
      flex-direction: column;
      max-width: 100%;
    }

    &-img {
      min-width: auto;
      height: auto;
    }
  }
}
</style>
