<script lang="ts" setup>
import type { userComm } from "@/types/index";
// type user = {
//   id: number; // 用户id
//   comment: string; // 评论内容
//   username: string; // 用户名
//   commentText: string; // 提交的评论内容
//   isShow: boolean; // 是否展示 评论输入框
// };

const props = defineProps<{
  data: userComm[];
}>();

// const setShow = (item: userComm) => {
//   item.isShow = !item.isShow;
// };

const emit = defineEmits<{
  (e: "addReply", item: userComm): void;
}>();

const addReply = (item: userComm) => {
  // const replyText = item.replyText;
  emit("addReply", JSON.parse(JSON.stringify(item)));
  item.isShow = false;
  // item.replyText = "";
  console.log(JSON.parse(JSON.stringify(item)));
  console.log(item.replyText);
};
</script>

<template>
  <ul>
    <li v-for="item of props.data" :key="item.id">
      <p>{{ item.username }}</p>
      <p>{{ item.comment }}</p>
      <a href="javascript:;" @click="item.isShow = !item.isShow">回复</a>
      <div v-if="item.isShow">
        <p>
          <textarea v-model="item.replyText"></textarea>
        </p>
        <button @click="addReply(item)">提交回复</button>
      </div>
      <div v-if="item.children">
        <CommentComp :data="item.children" @addReply="addReply" />
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
