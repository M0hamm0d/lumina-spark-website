<script setup>
const images = [
  { src: '../../public/african-lead.png', text: 'African-led Solutions' },
  { src: '../../public/community.png', text: 'Community' },
  { src: '../../public/sustainability.png', text: 'Sustainability' },
  { src: '../../public/empowerment.png', text: 'Empowerment' },
]
</script>
<template>
  <div class="center">
    <p>Core Values:</p>
    <div class="descriptors">
      <div
        v-for="(item, index) in images"
        :key="index"
        class="descriptors-card"
      >
        <img :src="item.src" alt="File icon" />
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.center {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.descriptors {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.descriptors-card {
  display: flex;
  padding: 24px 16px;
  gap: 10px;
  background-color: #fffbf8;
  border-radius: 24px;
  color: #390e00;
  align-items: center;
}
</style>
