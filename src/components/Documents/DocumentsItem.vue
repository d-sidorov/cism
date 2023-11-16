<script setup lang="ts">
import type { IDocument } from '@models/index'

import MyImage from '@components/UI/MyImage.vue'

defineProps<{ document: IDocument; isActive: boolean }>()
</script>

<template>
  <div class="DocumentsItem" :class="{ DocumentsItem_active: isActive }">
    <div class="DocumentsItem-left">
      <div class="DocumentsItem-left__img">
        <MyImage />
      </div>
    </div>
    <div class="DocumentsItem-right">
      <div class="DocumentsItem-right__label">
        {{ document.name }}
      </div>
      <div class="DocumentsItem-right__size">12МБ</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.DocumentsItem {
  height: 70px;
  border: 1px solid var(--light-gray);
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
  overflow: hidden;

  &-left {
    height: 100%;
    min-width: 70px;
    width: 70px;
    border-right: 1px solid var(--light-gray);

    &__img {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .MyImage_empty {
        height: 30px;
      }
    }
  }

  &-right {
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 14px;

    &__label {
      font-weight: bold;
    }
  }

  &_active {
    .DocumentsItem-right {
      background-color: var(--blue);
      color: #fff;
    }
  }
}
</style>
