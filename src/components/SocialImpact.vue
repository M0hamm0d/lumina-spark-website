<script setup>
import partners from '/partners.png'
const metricCard = [
  {
    src: '../../public/sustain.png',
    h1: '$5M',
    text: 'Funding Raised',
  },
  {
    src: '../../public/volunteer.png',
    h1: '1000+',
    text: 'Volunteers Engaged',
  },
  {
    src: '../../public/trained.png',
    h1: '20,000',
    text: 'Youth Trained',
  },
  {
    src: '../../public/shelter.png',
    h1: '5000',
    text: 'Safe Shelter Provider',
  },
  {
    src: '../../public/sustain.png',
    h1: '50+',
    text: 'Sustainable Project',
  },
]
</script>
<template>
  <div class="social-impact-wrapper">
    <div class="social-impact">
      <div
        v-for="(item, index) in metricCard"
        :key="index"
        class="si-metric-card"
      >
        <img :src="item.src" alt="File icon" />
        <div>
          <h1>{{ item.h1 }}</h1>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div class="partners-section">
      <h3>OUR PARTNERS FROM ALL OVER THE WORLD</h3>
      <img :src="partners" alt="File icon" />
    </div>
  </div>
</template>
<style scoped>
.social-impact-wrapper {
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}
.social-impact {
  padding: 50px 24px;
  border: 1px solid #ffd4ba;
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
}
.si-metric-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 206px;
}
.si-metric-card:not(:last-child) {
  border-right: 1.5px solid #ffd4ba;
}
.si-metric-card > div {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.si-metric-card > div h1 {
  text-align: center;
}
.partners-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.partners-section h3 {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
}
.partners-section img {
  display: flex;
  margin: 0 auto;
}
</style>
