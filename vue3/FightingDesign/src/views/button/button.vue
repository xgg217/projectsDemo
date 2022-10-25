<script setup lang="ts"></script>

<template>
  <f-button type="default">默认按钮</f-button>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
  <f-button type="warning">警告按钮</f-button>

  <f-button simple type="default">默认按钮</f-button>
  <f-button simple type="primary">主要按钮</f-button>
  <f-button simple type="success">成功按钮</f-button>
  <f-button simple type="danger">危险按钮</f-button>
  <f-button simple type="warning">警告按钮</f-button>
  <div>------------------------------------------------</div>
  <button type="button" class="w-button">1212</button>
</template>

<style lang="scss" scoped>
.w-button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
</style>
