<script setup>
defineProps(['width', 'classes', 'fontWeightValue', 'header'])
</script>
<template>
  <div class="header">
    <h3>
      {{ header }}
      <slot name="header"></slot>
    </h3>
    <div :style="{ width: width }">
      <h3>
        <slot name="optional-slot"></slot>
      </h3>
      <p :class="classes" :style="{ fontWeight: fontWeightValue }">
        <slot name="text-body"></slot>
      </p>
    </div>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.header > h3 {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #df3800;
}
.header p {
  font-size: 16px;
  line-height: 20px;
  text-align: center;
}
.header .font-size {
  font-size: 14px;
}
.header > div {
  margin: auto;
  text-align: center;
}
</style>
