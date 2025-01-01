<script setup>
import { ref } from 'vue'
const images = ref([
  { image: '/img-first.png' },
  { image: '/img-second.png' },
  { image: '/img-third.png' },
])
let currentIndex = ref(0)
const carouselInfiniteScroll = () => {
  if (currentIndex.value === images.value.length - 1) {
    return (currentIndex.value = 0)
  }
  return (currentIndex.value += 1)
}
setInterval(() => {
  carouselInfiniteScroll()
}, 3000)
</script>
<template>
  <div class="hero-images">
    <div class="" v-for="(img, index) in images" :key="index">
      <img :src="img.image" alt="File icon" />
    </div>
    <!-- <img
      v-for="(img, index) in images"
      :key="index"
      :src="img.image"
      alt="File icon"
    /> -->
  </div>
  <div class="hero-images mobile">
    <img :src="images[currentIndex].image" alt="File icon" />
  </div>
</template>
<style scoped>
.hero-images {
  padding: 50px 100px;
  display: flex;
  gap: 16px;
  width: 100%;
}

.hero-images img {
  width: 100%;
}
.mobile {
  display: none;
}
@media (max-width: 900px) {
  .hero-images {
    padding: 0 35px;
  }
}
@media (max-width: 700px) {
  .hero-images {
    display: none;
    flex-direction: column;
    padding: 25px;
  }
  .mobile {
    display: flex;
  }
}
</style>
