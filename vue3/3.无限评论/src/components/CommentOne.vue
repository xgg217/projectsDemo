<script setup lang="ts">
import { reactive } from "vue";
import type { user, comment } from "@/types/index";

const state = reactive({
  commentText: "", // 评论内容
  commentTree: null, // 评论树
});
// import { RouterLink, RouterView } from "vue-router";
const handleAddConmment = () => {
  const userInfo: user | null = JSON.parse(
    localStorage.getItem("userInfo") || "null"
  );

  if (!userInfo) {
    alert("请先登录");

    return;
  }

  const commentInfo: comment = {
    id: Date.now(),
    pid: 0,
    uid: userInfo.id,
    username: userInfo.username,
    comment: state.commentText,
    // children: [],
  };
  console.log(commentInfo);
};
</script>

<template>
  <div>
    <p>
      <textarea v-model="state.commentText"></textarea>
    </p>
    <button @click="handleAddConmment">提交评论</button>
  </div>
</template>

<style scoped></style>
