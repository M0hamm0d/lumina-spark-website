<script setup>
import OurPartners from './OurPartners.vue'
const metricCard = [
  {
    image: '/sustain.png',
    heder: '$5M',
    description: 'Funding Raised',
  },
  {
    image: '/volunteer.png',
    heder: '1000+',
    description: 'Volunteers Engaged',
  },
  {
    image: '/trained.png',
    heder: '20,000',
    description: 'Youth Trained',
  },
  {
    image: '/shelter.png',
    heder: '5000',
    description: 'Safe Shelter Provider',
  },
  {
    image: '/sustain.png',
    heder: '50+',
    description: 'Sustainable Project',
  },
]
</script>
<template>
  <div class="social-impact-and-partner-section">
    <div class="social-impact">
      <div
        v-for="(item, index) in metricCard"
        :key="index"
        class="social-impact-metric-card"
      >
        <img :src="item.image" alt="File icon" />
        <div>
          <h1>{{ item.heder }}</h1>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="partners-section">
      <h3>OUR PARTNERS FROM ALL OVER THE WORLD</h3>
      <OurPartners />
    </div>
  </div>
</template>
<style scoped>
.social-impact-and-partner-section {
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
.social-impact-metric-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 206px;
}
.social-impact-metric-card:not(:last-child) {
  border-right: 1.5px solid #ffd4ba;
}
.social-impact-metric-card > div {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.social-impact-metric-card > div h1 {
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
@media (max-width: 900px) {
  .social-impact-and-partner-section {
    padding: 0 35px 35px;
  }
}
@media (max-width: 700px) {
  .social-impact {
    flex-direction: column;
    align-items: center;
  }
  .social-impact-and-partner-section {
    padding: 25px;
  }
  .social-impact-metric-card:not(:last-child) {
    border-right: none;
  }
}
</style>
