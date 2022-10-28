<script setup lang="ts" name="WButton">
import { computed } from "vue";
import { Props } from "./button";

const prop = defineProps(Props);

const classList = computed(() => {
  const { type, color, size, round } = prop;
  return {
    [`f-button__${size}`]: size,
    [`f-button__${type}`]: !color,
    "f-button__disabled": prop.disabled || prop.loading,
    // "f-button__simple": simple && !color,
    // "f-button__circle": circle,
    "f-button__round": round,
    // "f-button__block": block,
    // "f-button__bold": bold,
    // "f-button__color": color,
    // "f-button__text": text && !color,
  };
});
</script>

<template>
  <button :disabled="prop.disabled" class="w-button" :class="classList">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.w-button {
  // border-radius: $basicRadiusSize;
  background: #f0f0f0;
  font-size: var(--f-button-font-size, 14px);
  box-shadow: var(--f-button-box-shadow);
  color: var(--f-button-font-color, #fff);
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  user-select: none;
  text-decoration: none;
  transition: 0.3s;
  height: 35px;
  line-height: 1;
  cursor: pointer;
  padding: 0 25px;
  white-space: nowrap;
  vertical-align: middle;
  overflow: hidden;

  // 圆角
  &.f-button__round {
    border-radius: 30px;
  }

  // 禁用状态
  &.f-button__disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  // 不同类型 - 默认 - 开始
  &.f-button__default {
    background: #f0f0f0;
    color: #333;

    &:hover {
      background: darken(#f0f0f0, 3%);
    }

    &:active {
      background: darken(#f0f0f0, 10%);
    }
  }
  &.f-button__primary {
    background: #2d5af1;
    color: #fff;

    &:hover {
      background: lighten(#2d5af1, 10%);
    }

    &:active {
      background: darken(#2d5af1, 10%);
    }
  }
  &.f-button__success {
    background: #52b35e;
    color: #fff;

    &:hover {
      background: lighten(#52b35e, 10%);
    }

    &:active {
      background: darken(#52b35e, 10%);
    }
  }
  &.f-button__danger {
    background: #ff0200;
    color: #fff;

    &:hover {
      background: lighten(#ff0200, 17%);
    }

    &:active {
      background: darken(#ff0200, 10%);
    }
  }
  &.f-button__warning {
    background: #fcc202;
    color: #fff;

    &:hover {
      background: lighten(#fcc202, 14%);
    }

    &:active {
      background: darken(#fcc202, 10%);
    }
  }
  // 不同类型 - 默认 - 结束

  // 不同尺寸 - 默认 - 开始
  &.f-button__large {
    height: 40px;
    padding: 0 30px;
    line-height: 40px;
    font-size: var(--f-button-font-size, 15px);
  }
  &.f-button__middle {
    height: 35px;
    padding: 0 25px;
    line-height: 35px;
    font-size: var(--f-button-font-size, 14px);
  }
  &.f-button__small {
    height: 30px;
    padding: 0 20px;
    line-height: 30px;
    font-size: var(--f-button-font-size, 13px);
  }
  &.f-button__mini {
    height: 25px;
    padding: 0 15px;
    line-height: 25px;
    font-size: var(--f-button-font-size, 12px);
  }
  // 不同尺寸 - 默认 - 结束
}
</style>
