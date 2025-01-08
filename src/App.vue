<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import MobileMenu from './components/MobileMenu.vue'
</script>

<template>
  <div class="container">
    <MobileMenu />
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  overflow: hidden;
}
</style>
