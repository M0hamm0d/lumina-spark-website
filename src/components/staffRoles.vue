<script setup>
const card = [
  {
    src: '/about-profile1.png',
    name: 'Dr. Grace Olatunde',
    role: 'Chief Operating Officer',
    roleDuty1:
      'Dr. Grace Olatunde brings a wealth of experience in non-profit management and operations. As COO, she oversees the day-to-day operations of Lumina Spark Foundation, ensuring the effective implementation of programs and initiatives.',
    roleDuty2:
      'Grace is committed to driving operational excellence and maximizing the foundation’s impact across Africa.',
  },
  {
    src: '/about-profile-2.png',
    name: 'Dr. Grace Olatunde',
    role: 'Chief Operating Officer',
    roleDuty1:
      'Dr. Grace Olatunde brings a wealth of experience in non-profit management and operations. As COO, she oversees the day-to-day operations of Lumina Spark Foundation, ensuring the effective implementation of programs and initiatives.',
    roleDuty2:
      'Grace is committed to driving operational excellence and maximizing the foundation’s impact across Africa.',
  },
  {
    src: '/about-profile-3.png',
    name: 'Dr. Grace Olatunde',
    role: 'Chief Operating Officer',
    roleDuty1:
      'Dr. Grace Olatunde brings a wealth of experience in non-profit management and operations. As COO, she oversees the day-to-day operations of Lumina Spark Foundation, ensuring the effective implementation of programs and initiatives.',
    roleDuty2:
      'Grace is committed to driving operational excellence and maximizing the foundation’s impact across Africa.',
  },
  {
    src: '/about-profile-4.png',
    name: 'Dr. John Chukwuma',
    role: 'Director of Health Programs',
    roleDuty1:
      'Dr. John Chukwuma is a medical doctor with extensive experience in public health and healthcare delivery.',
    roleDuty2:
      'As the Director of Health Programs, he leads the foundation’s medical outreach initiatives, providing essential healthcare services to remote and underserved communities.',
  },
  {
    src: '/about-profile-5.png',
    name: 'Dr. John Chukwuma',
    role: 'Director of Health Programs',
    roleDuty1:
      'Dr. John Chukwuma is a medical doctor with extensive experience in public health and healthcare delivery.',
    roleDuty2:
      'As the Director of Health Programs, he leads the foundation’s medical outreach initiatives, providing essential healthcare services to remote and underserved communities.',
  },
  {
    src: '/about-profile-6.png',
    name: 'Dr. John Chukwuma',
    role: 'Director of Health Programs',
    roleDuty1:
      'Dr. John Chukwuma is a medical doctor with extensive experience in public health and healthcare delivery.',
    roleDuty2:
      'As the Director of Health Programs, he leads the foundation’s medical outreach initiatives, providing essential healthcare services to remote and underserved communities.',
  },
]
</script>
<template>
  <div class="the-team-sec">
    <div class="top-card">
      <div v-for="(item, index) in card.slice(0, 3)" :key="index" class="card">
        <div class="profile-card">
          <img :src="item.src" alt="img" />
          <div>
            <p class="card-name">{{ item.name }}</p>
            <p class="card-position">{{ item.role }}</p>
          </div>
        </div>
        <div class="text">
          <p>
            {{ item.roleDuty1 }}
          </p>
          <p>
            {{ item.roleDuty2 }}
          </p>
        </div>
      </div>
    </div>
    <div class="bottom-card">
      <div v-for="(item, index) in card.slice(3)" :key="index" class="card">
        <div class="profile-card">
          <img :src="item.src" alt="img" />
          <div>
            <p class="card-name">{{ item.name }}</p>
            <p class="card-position">{{ item.role }}</p>
          </div>
        </div>
        <div class="text">
          <p>
            {{ item.roleDuty1 }}
          </p>
          <p>
            {{ item.roleDuty2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.the-team-sec {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.top-card,
.bottom-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.bottom-card {
  max-width: 806px;
  margin: auto;
}
.card {
  padding: 80px 16px;
  border: 1px solid #e5e2e1;
  flex-direction: column;
  display: flex;
  gap: 36px;
  background-color: #f5f3f3;
  border-radius: 24px;
}
.profile-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}
.card-name {
  letter-spacing: 0.15%;
  line-height: 24px;
  font-weight: 500;
  font-size: 16px;
  color: #df3800;
}
.card-position {
  font-size: 12px;
  letter-spacing: 0.5px;
}
.text {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #231a11;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (max-width: 700px) {
  .top-card,
  .bottom-card {
    grid-template-columns: 1fr;
  }
  .card {
    padding: 30px;
  }
}
</style>
