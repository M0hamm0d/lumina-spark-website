<script setup>
import { RouterView } from 'vue-router'
import { provide, ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import MobileMenu from './components/MobileMenu.vue'
const isVisible = ref(false)
provide('isVisible', isVisible)
</script>

<template>
  <div :class="['container', { isSidebarVisible: isVisible }]">
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
.container.isSidebarVisible {
  height: 100vh;
}
</style>
