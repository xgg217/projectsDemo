<script setup lang="ts">
import WCalendar from "@/components/calendar/calendar.vue";
const date = new Date();
</script>

<template>
  <div class="warpp">
    <f-calendar v-model:date="date" />
    <WCalendar />
  </div>
</template>

<style lang="scss" scoped>
.warpp {
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
}
</style>
