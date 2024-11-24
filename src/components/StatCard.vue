<script setup>
const data = [
  {
    no: '50,000+',
    header: 'Lives Touched',
    text: 'We have provided free healthcare services to over 50,000 individualsin remote and underserved areas.',
  },
  {
    no: '$5million',
    header: 'Donation Raised',
    text: 'We have raised over 5 Million Dollars donation and funding from International NGOs and civil society groups to drive meaningful change and promote sustainable development.',
  },
  {
    no: '10,000',
    header: 'Women Empowered',
    text: 'We have trained and supported 10,000 women, helping them gain financial independence and become active contributors to their local economies. Through vocational training and access to micro-loans, we have enabled women to launch successful enterprises and improve their livelihoods.',
  },
]
</script>
<template>
  <div class="metric-card">
    <div v-for="(item, index) of data" :key="index" :class="`card${index + 1}`">
      <h1>{{ item.no }}</h1>
      <div>
        <h4>{{ item.header }}</h4>
        <p>
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.metric-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: flex-end;
}
.card1,
.card2,
.card3 {
  border-radius: 24px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
}
.card1 {
  background-color: #ffd4ba;
  height: 208px;
  width: 258px;
  color: #390e00;
}
.card2 {
  background-color: #df3800;
  height: 379px;
  width: 349px;
  color: white;
}
.card3 {
  background-color: #b66100;
  height: 289px;
  color: white;
  width: 441px;
}
.card1 > h1,
.card2 > h1,
.card3 > h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
}
.card1 > div > p,
.card2 > div > p,
.card3 > div > p {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5%;
  line-height: 16px;
}
</style>
