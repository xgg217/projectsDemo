<script setup lang="ts">
import { reactive } from "vue";
import type { user, comment } from "@/types/index";

const state = reactive({
  commentText: "", // 评论内容
  commentTree: null, // 评论树
});

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
  // console.log(commentInfo);
  setComment("one", commentInfo);
};

const setComment = (field: string, comment: comment) => {
  const currentList = JSON.parse(localStorage.getItem(field) || "[]");
  currentList.unshift(comment);
  localStorage.setItem(field, JSON.stringify(currentList));
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
