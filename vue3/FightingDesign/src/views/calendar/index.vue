<script setup lang="ts">
const date = new Date();
</script>

<template>
  <div>
    <f-calendar v-model:date="date" />
  </div>
</template>

<style lang="scss" scoped></style>
