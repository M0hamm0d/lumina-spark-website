<script setup>
const images = [
  { image: '/african-lead.png', description: 'African-led Solutions' },
  { image: '/community.png', description: 'Community' },
  { image: '/sustainability.png', description: 'Sustainability' },
  { image: '/empowerment.png', description: 'Empowerment' },
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
        <img :src="item.image" alt="File icon" />
        <p>{{ item.description }}</p>
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
