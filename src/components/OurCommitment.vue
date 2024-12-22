<script setup>
const cards = [
  {
    src: '/amplifying-edu.png',
    header: 'Amplifying Education',
    text: ' We ensure access to quality education, the foundation for a better life.',
  },
  {
    src: '/bridge.png',
    header: 'Bridging the Digital Divide:',
    text: ' We equip individuals with digital literacy, opening doors to opportunity.',
  },
  {
    src: '/empowering-women.png',
    header: 'Empowering Women',
    text: 'We provide women with the skills and resources to achieve economic security.',
  },
  {
    src: '/fulfil.png',
    header: 'Fulfilling Basic Needs:',
    text: ' We offer vital support, including healthcare, shelter, and food security.',
  },
]
</script>
<template>
  <div class="commitment-section">
    <h3>We are committed to:</h3>
    <div class="card-container">
      <div v-for="(card, index) in cards" :key="index" class="card">
        <img :src="card.src" alt="File icon" />
        <div>
          <h3>{{ card.header }}</h3>
          <p>
            {{ card.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.commitment-section {
  background-color: #ffdbb5;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 50px 100px;
}
.container > h3 {
  font-weight: 500;
  line-height: 32px;
  font-size: 24px;
  text-align: center;
}
.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.card {
  padding: 32px 24px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid #d0c4c0;
  border-radius: 24px;
  background-color: #f5f3f3;
  color: #390e00;
}
.card > div {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.card > div h3 {
  font-weight: 500;
  line-height: 32px;
  font-size: 24px;
}
.card img {
  width: 88px;
}
@media (max-width: 900px) {
  .commitment-section {
    padding: 35px;
  }
}
@media (max-width: 700px) {
  .commitment-section {
    padding: 25px;
  }
  .card-container {
    grid-template-columns: 1fr;
  }
}
</style>
