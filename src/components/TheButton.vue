<script setup>
defineProps(['href', 'body'])
</script>
<template>
  <RouterLink :to="href" class="button">
    <slot></slot>
  </RouterLink>
</template>
<style scoped>
.button {
  padding: 12px 20px;
  background-color: #fffbf7;
  border: 1px solid #b66100;
  border-radius: 1000px;
  font-size: 14px;
  color: #b66100;
  width: fit-content;
  display: flex;
  text-wrap: nowrap;
  align-items: end;
  text-decoration: none;
  height: fit-content;
}
@media (max-width: 700px) {
  .button {
    padding: 10px 15px;
  }
}
</style>
