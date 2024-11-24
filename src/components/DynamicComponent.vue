<script setup>
import WomenEmpowerment from './WomenEmpowerment.vue'
import EduSupport from './EduSupport.vue'
import MedOutreach from './MedOutreach.vue'
import ShelterFood from './ShelterFood.vue'
import BasicAmenities from './BasicAmenities.vue'
import { ref } from 'vue'

const currentTab = ref('Women Empowerment')
const tabs = {
  WomenEmpowerment,
  EduSupport,
  MedOutreach,
  ShelterFood,
  BasicAmenities,
}
</script>
<template></template>
<style scoped></style>
