<script setup lang="ts" name="WButton">
import WButton from "@/components/button/button.vue";
</script>

<template>
  <f-button type="default">默认按钮</f-button>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
  <f-button type="warning">警告按钮</f-button>
  <div>-----------------------------------------</div>
  <WButton>默认按钮</WButton>
  <WButton type="primary">默认按钮</WButton>
  <WButton type="success">默认按钮</WButton>
  <WButton type="danger">默认按钮</WButton>
  <WButton type="warning">默认按钮</WButton>

  <div>+++++++++++++++++++++++++++++++++++++++++</div>
  <div>+++++++++++++++++++++++++++++++++++++++++</div>
  <div>+++++++++++++++++++++++++++++++++++++++++</div>
  <div>圆角+++++++++++++++++++++++++++++++++++++++++</div>
  <f-button round type="default">默认按钮</f-button>
  <f-button round type="primary">主要按钮</f-button>
  <f-button round type="success">成功按钮</f-button>
  <f-button round type="danger">危险按钮</f-button>
  <f-button round type="warning">警告按钮</f-button>
  <div>-----------------------------------------</div>
  <WButton round>默认按钮</WButton>
  <WButton round type="primary">默认按钮</WButton>
  <WButton round type="success">默认按钮</WButton>
  <WButton round type="danger">默认按钮</WButton>
  <WButton round type="warning">默认按钮</WButton>

  <div>+++++++++++++++++++++++++++++++++++++++++</div>
  <div>+++++++++++++++++++++++++++++++++++++++++</div>
  <div>+++++++++++++++++++++++++++++++++++++++++</div>
  <div>禁用+++++++++++++++++++++++++++++++++++++++++</div>
  <f-button disabled type="default">默认按钮</f-button>
  <f-button disabled type="primary">主要按钮</f-button>
  <f-button disabled type="success">成功按钮</f-button>
  <f-button disabled type="danger">危险按钮</f-button>
  <f-button disabled type="warning">警告按钮</f-button>
  <div>-----------------------------------------</div>
  <WButton disabled>默认按钮</WButton>
  <WButton disabled type="primary">默认按钮</WButton>
  <WButton disabled type="success">默认按钮</WButton>
  <WButton disabled type="danger">默认按钮</WButton>
  <WButton disabled type="warning">默认按钮</WButton>
  <div>+++++++++++++++++++++++++++++++++++++++++</div>
  <div>+++++++++++++++++++++++++++++++++++++++++</div>
  <div>+++++++++++++++++++++++++++++++++++++++++</div>
  <div>不同尺寸+++++++++++++++++++++++++++++++++++++++++</div>
  <f-button size="large" type="primary">大型按钮</f-button>
  <f-button size="middle" type="success">中型按钮</f-button>
  <f-button size="small" type="danger">小型按钮</f-button>
  <f-button size="mini" type="warning">迷你按钮</f-button>
  <div>-----------------------------------------</div>
  <WButton size="large" type="primary">默认按钮</WButton>
  <WButton size="middle" type="success">默认按钮</WButton>
  <WButton size="small" type="danger">默认按钮</WButton>
  <WButton size="mini" type="warning">默认按钮</WButton>
</template>

<style lang="scss" scoped></style>
