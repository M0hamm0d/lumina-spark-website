<script setup>
const images = [
  { image: '/public/img-first.png' },
  { image: '/public/img-second.png' },
  { image: '/public/img-third.png' },
]
</script>
<template>
  <div class="hero-images">
    <img
      v-for="(img, index) in images"
      :key="index"
      :image="img.image"
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
