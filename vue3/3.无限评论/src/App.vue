<script setup lang="ts">
import { onMounted, reactive } from "vue";
import CommentOne from "@/components/CommentOne.vue";
import CommentComp from "@/components/CommentComp.vue";
import type { user } from "@/types/index";

const userInfo: user = reactive({
  username: "",
  id: 0,
});

// 获取本地存储的数据
const getLocalData = () => {
  const obj = localStorage.getItem("userInfo");
  if (obj) {
    const userObj: user = JSON.parse(obj);
    userInfo.username = userObj.username;
    userInfo.id = userObj.id;
  }
};

onMounted(() => {
  getLocalData();
});

const handleSet = (id: number, username: string) => {
  localStorage.setItem("userInfo", JSON.stringify({ id, username }));
  getLocalData();
};
</script>

<template>
  <div>测试机哦</div>
  <div>当前用户 {{ userInfo.username || "未登录" }}</div>
  <button @click="handleSet(1, '张三')">张三</button>
  <button @click="handleSet(2, '李四')">李四</button>
  <button @click="handleSet(3, '王五')">王五</button>

  <!-- 提交评论 -->
  <CommentOne />

  <!-- 展示评论 -->
  <CommentComp />

  <!-- <RouterView /> -->
</template>

<style scoped></style>
