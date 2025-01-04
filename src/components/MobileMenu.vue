<script setup>
import { ref } from 'vue'
const isVisible = ref(true)

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}
</script>
<template>
  <div class="mobile-nav" @click="toggleVisibility">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#5f6368"
    >
      <path
        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
      />
    </svg>
  </div>
  <div class="wrapper" v-if="isVisible">
    <div class="" @click="toggleVisibility">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path
          d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
        />
      </svg>
    </div>
    <p>hello</p>
  </div>
</template>
<style scoped>
.mobile-nav {
  position: absolute;
  right: 25px;
  top: 35px;
  display: flex;
  /* display: none; */
  z-index: 5;
  color: black;
}
.wrapper {
  position: absolute;
  right: 0;
  width: 70%;
  display: flex;
  /* display: none; */
  background-color: white;
  z-index: 5;
  color: black;
  height: 100vh;
}
</style>
