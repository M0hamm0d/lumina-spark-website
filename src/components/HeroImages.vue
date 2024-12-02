<script setup>
const images = [
  { image: '/img-first.png' },
  { image: '/img-second.png' },
  { image: '/img-third.png' },
]
</script>
<template>
  <div class="hero-images">
    <img
      v-for="(img, index) in images"
      :key="index"
      :src="img.image"
      alt="File icon"
    />
  </div>
</template>
<style scoped>
.hero-images {
  padding: 0 100px;
  display: flex;
  gap: 16px;
}
</style>
