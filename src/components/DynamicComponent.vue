<script setup>
import WomenEmpowerment from './WomenEmpowerment.vue'
import EduSupport from './EduSupport.vue'
import MedOutreach from './MedOutreach.vue'
import ShelterFood from './ShelterFood.vue'
import BasicAmenities from './BasicAmenities.vue'
import { ref } from 'vue'

const currentTab = ref(1)
const toggleTab = index => {
  currentTab.value = index
}
const tabs = [
  'Women Empowerment',
  'Educational Support',
  'Medical Outreach',
  'Shelter and Food',
  'Basic Amenities',
]
</script>
<template>
  <div class="container">
    <div class="tabs">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        :class="['tab', { active: currentTab === index + 1 }]"
        @click="() => toggleTab(index + 1)"
      >
        {{ item }}
      </div>
    </div>
    <div :class="['ourProgramCategory', { activeProgram: currentTab === 1 }]">
      <WomenEmpowerment />
    </div>
    <div :class="['ourProgramCategory', { activeProgram: currentTab === 2 }]">
      <EduSupport />
    </div>
    <div :class="['ourProgramCategory', { activeProgram: currentTab === 3 }]">
      <MedOutreach />
    </div>
    <div :class="['ourProgramCategory', { activeProgram: currentTab === 4 }]">
      <ShelterFood />
    </div>
    <div :class="['ourProgramCategory', { activeProgram: currentTab === 5 }]">
      <BasicAmenities />
    </div>
  </div>
</template>
<style scoped>
.tabs {
  padding: 50px 100px;
  display: flex;
  gap: 8px;
  background-color: #ffdbb5;
}
.tab {
  background-color: #fffbf8;
  padding: 8px 24px;
  border-radius: 1000px;
  border: 1px solid #eae7e7;
  cursor: pointer;
  line-height: 20px;
  font-size: 14px;
  letter-spacing: 0.1%;
  color: #390e00;
}
.active {
  background-color: #df3800;
  padding: 8px 24px;
  border-radius: 1000px;
  cursor: pointer;
  line-height: 20px;
  font-size: 14px;
  letter-spacing: 0.1%;
  color: #fffbf8;
}
.ourProgramCategory {
  padding: 50px 100px;
  display: none;
  flex-direction: column;
  gap: 24px;
  background-color: #fffbf8;
}
.activeProgram {
  display: flex;
}
</style>
