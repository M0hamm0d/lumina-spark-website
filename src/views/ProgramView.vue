<script setup>
import GetInvolved from '@/components/GetInvolved.vue'
import InputGroup from '@/components/InputGroup.vue'
import programHeroSection from '/programHeroSection.png'
import TheCarousel from '@/components/TheCarousel.vue'
import DynamicComponent from '@/components/DynamicComponent.vue'
</script>

<template>
  <div class="hero-section-container">
    <div class="title-and-desc">
      <p class="h1">Empowering Change, One Initiative at a Time</p>
      <p class="p">
        We tackle Africa&apos;s biggest challenges through a comprehensive
        approach. Our diverse programs work in synergy by addressing immediate
        needs while empowering individuals to build a more sustainable future.
      </p>
    </div>
    <img :src="programHeroSection" alt="img" />
  </div>
  <DynamicComponent />
  <GetInvolved />
  <TheCarousel />
  <InputGroup />
</template>

<style scoped>
.hero-section-container {
  padding: 50px 100px;
  background-color: #fffbf8;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.title-and-desc {
  display: flex;
  gap: 73px;
}
.title-and-desc .h1 {
  font-size: 45px;
  line-height: 52px;
  font-weight: 500;
  display: flex;
  flex: 1.1;
}
.p {
  display: flex;
  flex: 1;
}
@media (max-width: 10250px) {
  .hero-section-container {
    padding: 50px;
  }
}
@media (max-width: 700px) {
  .hero-section-container {
    padding: 25px;
  }
  .title-and-desc {
    flex-direction: column;
    gap: 20px;
  }
  .title-and-desc .h1 {
    font-size: 25px;
    line-height: 1.3;
  }
}
</style>
