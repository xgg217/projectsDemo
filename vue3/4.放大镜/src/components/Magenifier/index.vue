<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import vMagnifier from "./magnifier";

type Props = {
  link: string; // 跳转路径
  blank: boolean; // 是否新窗口打开
  imgUrl: string; // 图片地址
  imgWidth: number; // 图片宽度
  imgHeight: number; // 图片高度
  magWidth: number; // 放大镜宽度
  magHeight: number; // 放大镜高度
}

// 自定义指令


const props = withDefaults(defineProps<Props>(), {
  link: '',
  blank: false,
  imgUrl: '',
  imgWidth: 100,
  imgHeight: 100,
  magWidth: 50,
  magHeight: 50,
})

const move = () => {

}

const leave = () => {
  
}
</script>

<template>
  <div class="img_wrap"
    v-magnifier
    :style="{
      width: imgWidth + 'px',
      height: imgHeight + 'px',
    }"
    @mousemove="move"
    @mouseleave="leave"
  >
    <a
      :href="props.link"
      class="mag_wrap"
      :target="props.blank ? '_blank' : '_self'"
      :style="{
        width: props.magWidth + 'px',
        height: props.magHeight + 'px',
      }"
    >
      <img
        :src="props.imgUrl"
        class="mag_img"
        alt="背景"
        :style="{
          width: props.imgWidth + 'px',
          height: props.imgHeight + 'px',
        }"
      >
    </a>

    <a
      :href="props.link"
      class="img_lk"
    >
      <img
        :src="props.imgUrl"
        class="static_img"
        alt="背景"
      >
    </a>
    
  </div>
</template>



<style lang="scss" scoped>
.img_wrap {
  position: relative;
  top: 0;
  left: 0;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;

  .mag_wrap {
    // display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0 0 3px #000;
    cursor: move;
    overflow: hidden;

    &.show {
      display: block;
      transform: scale(1.5);
    }

    .mag_img {
      position: absolute;
      top: 0;
      left: 0;
      // transform: scale(1.5);
    }
  }

  .static_img {
    width: 100%;
    // height: 100%;
  }
}
</style>