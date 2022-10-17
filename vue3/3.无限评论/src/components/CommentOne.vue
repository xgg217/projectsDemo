<script setup lang="ts">
import { reactive, onMounted } from "vue";
import CommentComp from "./CommentComp.vue";
import type { user, comment, commentState } from "@/types/index";

const state: commentState = reactive({
  commentText: "", // 评论内容
  commentTree: [], // 评论树
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

// 存储评论
const setComment = (field: string, comment: comment) => {
  const currentList = JSON.parse(localStorage.getItem(field) || "[]");
  currentList.unshift(comment);
  localStorage.setItem(field, JSON.stringify(currentList));
};

const getComment = (field: string): comment[] => {
  return JSON.parse(localStorage.getItem(field) || "[]");
};

onMounted(() => {
  // 获取评论数据
  state.commentTree = getComment("one");
});

const addReply = (item: comment) => {
  // setComment("one", item);
  // state.commentTree = getComment("one");
  console.log(item);
};
</script>

<template>
  <div>
    <p>
      <textarea v-model="state.commentText"></textarea>
    </p>
    <button @click="handleAddConmment">提交评论</button>
  </div>

  <CommentComp :data="state.commentTree" @addReply="addReply" />
</template>

<style scoped></style>
