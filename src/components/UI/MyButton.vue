<template>
  <button class="MyButton" v-bind="$attrs"><slot></slot></button>
</template>

<style scoped lang="scss">
.MyButton {
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 8px;
  color: #000;
  height: 31px;
  padding: 7px 28px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 2px 2px rgb(214, 214, 214);
  }

  &:disabled {
    opacity: 0.4;

    &:hover {
      box-shadow: none;
      cursor: not-allowed;
    }
  }
}
</style>
