<script setup lang="ts">
import Magenifier from './components/Magenifier.vue'
import lf from '@/assets/路飞头像1.png'
</script>

<template>
  <Magenifier
    link="https://www.baidu.com"
    blank
    :imgUrl="lf"
    imgWidth="350"
    imgHeight="492"
  ></Magenifier>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
