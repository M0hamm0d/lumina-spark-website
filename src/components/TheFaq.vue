<script setup>
defineProps(['faq'])
const emit = defineEmits(['toggleAnswer'])
const handleClick = id => emit('toggleAnswer', id)
</script>
<template>
  <div
    :class="['item', { open: faq.isOpen }]"
    @click="() => handleClick(faq.id)"
  >
    <div class="header">
      <p class="title">{{ faq.title }}</p>
      <p class="icon">{{ faq.isOpen ? '-' : '+' }}</p>
    </div>
    <div v-if="faq.isOpen" class="content-box">
      {{ faq.text }}
    </div>
  </div>
</template>
<style scoped>
.item {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}
.header {
  display: flex;
  border-left: 3px solid #df3800;
  padding: 20px 24px;
  width: 100%;
  justify-content: space-between;
}
.header p {
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.25%;
}
.number {
  font-size: 24px;
  font-weight: 500;
  color: #ced4da;
}

.title,
.icon {
  font-size: 24px;
  font-weight: 500;
}
.content-box {
  padding: 12px 0px 12px 16px;
  border-left: 3px solid #390e00;
  line-height: 1.6;
  width: 100%;
  font-size: 14px;
}
</style>
