<script setup>
import Button from './TheButton.vue'
const cards = [
  {
    src: '../../public/health-care.png',
    h3: 'Healthcare forAll',
    text: 'We deliver free medical care through mobile clinics, reaching remote communities with essential medical services and health education',
  },
  {
    src: '../../public/learningEarly.png',
    h3: 'Early Learning Initiative:',
    text: 'We deliver free medical care through mobile clinics, reaching remote communities with essential medical services and health education.',
  },
  {
    src: '../../public/shelter&home.png',
    h3: 'Shelter & Hope:',
    text: 'We offer safe havens and essential support to the homeless and vulnerable, ensuring access to food, shelter, and clothing.',
  },
  {
    src: '../../public/disaster.png',
    h3: 'Disaster Relief and Recovery:',
    text: 'In times of crisis, we provide emergency aid and support communities in rebuilding their lives after natural disasters.',
  },
  {
    src: '../../public/sustainable.png',
    h3: 'Sustainability Initiative:',
    text: 'We empower communities through agricultural training and access to clean water initiatives for self-sufficiency and long-term development.',
  },
  {
    src: '../../public/education.png',
    h3: 'Education & Empowerment',
    text: 'We break down barriers to education by providing scholarships, after-school programs, and digital skills training.',
  },
]
</script>
<template>
  <div class="initiative-cards">
    <div v-for="(item, index) in cards" :key="index" class="initiative-card">
      <img :src="item.src" alt="File icon" />
      <div>
        <div class="head">
          <h3>{{ item.h3 }}</h3>
          <p>
            {{ item.text }}
          </p>
        </div>
        <Button href="about">Learn More</Button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.initiative-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.initiative-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border-radius: 24px;
  border: 1px solid #f0eded;
  color: #390e00;
  background-color: #f5f3f3;
}
.initiative-card > div {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.initiative-card > div h3 {
  font-size: 22px;
  font-weight: 500;
  line-height: 38px;
}
.head {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.head p {
  font-size: 14px;
}
</style>
