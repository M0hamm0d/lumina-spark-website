<script setup>
import GetInvolved from '@/components/GetInvolved.vue'
import InputGroup from '@/components/InputGroup.vue'
import programHeroSection from '../../public/programHeroSection.png'
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
  <GetInvolved />
  <InputGroup />
</template>

<style scoped>
.hero-section-container {
  padding: 50px 100px 0px;
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
</style>
