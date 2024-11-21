<script setup>
defineProps(['logo'])
</script>
<template>
  <div class="mission">
    <div class="mission-title">
      <img :src="logo" alt="img" />
      <p><slot name="header"></slot></p>
    </div>
    <p>
      <slot name="text"></slot>
    </p>
  </div>
</template>
<style>
.mission {
  background-color: #ffd4ba;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 24px;
  flex: 1;
  gap: 16px;
}
.mission-title {
  display: flex;
  gap: 8px;
  align-items: center;
}
.mission-title > p {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
}
.mission > p {
  font-size: 22px;
  line-height: 28px;
}
</style>
