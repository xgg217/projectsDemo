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
    </ul>
  </main>
</template>
