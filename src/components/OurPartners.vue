<script setup>
const partners = [
  { partners: '/google.png' },
  { partners: '/microsoft.png' },
  { partners: '/meta.png' },
  { partners: '/slack.png' },
  { partners: '/stripe.png' },
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
  max-width: 886.25px;
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
@media (max-width: 700px) {
  .container {
    flex-wrap: wrap;
    align-items: center;
  }
}
</style>
