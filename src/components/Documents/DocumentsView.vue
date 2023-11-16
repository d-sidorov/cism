<script setup lang="ts">
import type { IDocument } from '@models/index'
import MyImage from '@components/UI/MyImage.vue'
import MyButton from '@components/UI/MyButton.vue'

defineProps<{ document: IDocument | null }>()
</script>

<template>
  <div class="DocumentsView">
    <div v-if="!document" class="DocumentsView__empty">
      Выберите документ, чтобы посмотреть его содержимое
    </div>
    <div v-else class="DocumentsView-block">
      <div class="DocumentsView-img">
        <MyImage :src="document.image" />
      </div>
      <div class="DocumentsView-info">
        <div class="DocumentsView-info__section">
          <div class="DocumentsView-info__label">{{ document.name }}</div>
          <div class="DocumentsView-info__actions">
            <MyButton class="DocumentsView-info__saveBtn">Скачать</MyButton>
            <MyButton class="DocumentsView-info__deleteBtn" :disabled="!document.image">
              Удалить
            </MyButton>
          </div>
        </div>
        <div class="DocumentsView-info__section">
          <div class="DocumentsView-info__label">Описание:</div>
          <div class="DocumentsView-info__description">{{ document.description }}</div>
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
</style>
