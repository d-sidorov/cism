<script setup lang="ts">
import DocumentsListBlock from '@components/Documents/DocumentsListBlock.vue'
import DocumentsView from '@components/Documents/DocumentsView.vue'
</script>

<template>
  <div class="DocumentsPage">
    <div class="DocumentsPage-header">
      <div class="DocumentsPage-header__logo"><span>MyApp</span></div>
      <div class="DocumentsPage-header__username">Username</div>
    </div>
    <div class="DocumentsPage-body">
      <div class="DocumentsPage-body__left">
        <DocumentsListBlock />
      </div>
      <div class="DocumentsPage-body__right">
        <DocumentsView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.DocumentsPage {
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 40px 50px;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo {
      font-size: 32px;
      font-weight: bold;
    }
  }

  &-body {
    display: flex;
    box-shadow: 0px 0px 10px 0px #0000001a;
    border-radius: 10px;
    flex-grow: 1;

    &__left {
      border-right: 1px solid var(--light-gray);
      padding: 20px 27px;
    }

    &__right {
      flex-grow: 1;
    }
  }
}

@media screen and (max-width: 768px) {
  .DocumentsPage {
    padding: 20px;

    &-body {
      flex-direction: column;

      &__left {
        min-height: 80%;
      }
    }
  }
}
</style>
