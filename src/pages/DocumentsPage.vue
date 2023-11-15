<script setup lang="ts"></script>

<template>
  <div class="DocumentsPage">
    <div class="DocumentsPage-header">
      <div class="DocumentsPage-header__logo"><span>MyApp</span></div>
      <div class="DocumentsPage-header__username">Username</div>
    </div>
    <div class="DocumentsPage-body">
      <div class="DocumentsPage-body__left"></div>
      <div class="DocumentsPage-body__right"></div>
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
      width: 20%;
      border-right: 1px solid #e0e0e0;
    }
  }
}
</style>
