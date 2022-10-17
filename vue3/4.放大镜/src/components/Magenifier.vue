<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

type Props = {
  link: string; // 跳转路径
  blank: boolean; // 是否新窗口打开
  imgUrl: string; // 图片地址
  imgWidth: number; // 图片宽度
  imgHeight: number; // 图片高度
  magWidth: number; // 放大镜宽度
  magHeight: number; // 放大镜高度
}

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
  img {
    width: 100%;
    height: 100%;
  }
}
</style>