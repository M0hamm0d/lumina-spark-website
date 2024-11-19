<script setup>
const partners = [
  { partners: '../../public/google.png' },
  { partners: '../../public/microsoft.png' },
  { partners: '../../public/meta.png' },
  { partners: '../../public/slack.png' },
  { partners: '../../public/stripe.png' },
]
</script>
<template>
  <div class="container">
    <div v-for="(item, index) in partners" :key="index" class="partners">
      <img :src="item.partners" alt="project partners" />
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 886.25px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.partners img {
  opacity: 0.15;
}
.partners img:hover {
  opacity: 1;
  transition: 0.5s;
}
</style>
