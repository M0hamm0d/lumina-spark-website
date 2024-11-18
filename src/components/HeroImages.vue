<script setup>
const images = [
  { src: '../../public/img-first.png' },
  { src: '../../public/img-second.png' },
  { src: '../../public/img-third.png' },
]
</script>
<template>
  <div class="hero-images">
    <img
      v-for="(img, index) in images"
      :key="index"
      :src="img.src"
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
