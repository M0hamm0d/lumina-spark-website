<script setup>
import Button from './TheButton.vue'
const cards = [
  {
    image: '/health-care.png',
    header: 'Healthcare forAll',
    description:
      'We deliver free medical care through mobile clinics, reaching remote communities with essential medical services and health education',
  },
  {
    image: '/learningEarly.png',
    header: 'Early Learning Initiative:',
    description:
      'We deliver free medical care through mobile clinics, reaching remote communities with essential medical services and health education.',
  },
  {
    image: '/shelter&home.png',
    header: 'Shelter & Hope:',
    description:
      'We offer safe havens and essential support to the homeless and vulnerable, ensuring access to food, shelter, and clothing.',
  },
  {
    image: '/disaster.png',
    header: 'Disaster Relief and Recovery:',
    description:
      'In times of crisis, we provide emergency aid and support communities in rebuilding their lives after natural disasters.',
  },
  {
    image: '/sustainable.png',
    header: 'Sustainability Initiative:',
    description:
      'We empower communities through agricultural training and access to clean water initiatives for self-sufficiency and long-term development.',
  },
  {
    image: '/education.png',
    header: 'Education & Empowerment',
    description:
      'We break down barriers to education by providing scholarships, after-school programs, and digital skills training.',
  },
]
</script>
<template>
  <div class="initiative-cards">
    <div v-for="(item, index) in cards" :key="index" class="initiative-card">
      <div class="">
        <img :src="item.image" alt="File icon" />
      </div>
      <div>
        <div class="head">
          <h3>{{ item.header }}</h3>
          <p>
            {{ item.description }}
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
.initiative-cards div:first-child img {
  width: 100%;
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
@media (max-width: 700px) {
  .initiative-cards {
    grid-template-columns: 1fr;
  }
  .initiative-card img {
    width: 100%;
  }
}
</style>
