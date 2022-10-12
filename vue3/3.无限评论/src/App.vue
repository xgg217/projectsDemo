<script setup lang="ts">
// import { reactive } from "vue";
import CommentOne from "@/components/CommentOne.vue";
// import { RouterLink, RouterView } from "vue-router";
const handleSet = (id: number, username: string) => {
  localStorage.setItem("userInfo", JSON.stringify({ id, username }));
};
</script>

<template>
  <div>测试机哦</div>
  <div>当前用户</div>
  <button @click="handleSet(1, '张三')">张三</button>
  <button @click="handleSet(2, '李四')">李四</button>
  <button @click="handleSet(3, '王五')">王五</button>

  <CommentOne />

  <!-- <RouterView /> -->
</template>

<style scoped></style>
