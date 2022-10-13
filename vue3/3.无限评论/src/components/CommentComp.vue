<script lang="ts" setup>
type user = {
  id: number; // 用户id
  comment: string; // 评论内容
  username: string; // 用户名
  commentText: string; // 提交的评论内容
  isShow: boolean; // 是否展示 评论输入框
};

const props = defineProps<{
  data: user[];
}>();

const setShow = (item: user) => {
  item.isShow = !item.isShow;
};
</script>

<template>
  <li v-for="item of props.data" :key="item.id">
    <p>{{ item.username }}</p>
    <p>{{ item.comment }}</p>
    <a href="javascript:;" @click="setShow(item)">回复</a>
    <div>
      <p>
        <textarea v-model="item.commentText"></textarea>
      </p>
    </div>
  </li>
</template>

<style lang="scss" scoped></style>
