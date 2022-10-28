<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <ul>
      <li>
        <RouterLink to="/">首页</RouterLink>
      </li>
      <li>
        <RouterLink to="/button">Button</RouterLink>
      </li>
      <li>
        <RouterLink to="/calendar">日历</RouterLink>
      </li>
    </ul>
  </main>
</template>
