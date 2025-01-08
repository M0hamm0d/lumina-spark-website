<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const isVisible = ref(false)

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}
</script>
<template>
  <div class="sidebar-container">
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
    <div :class="['sidebar', { 'sidebar-open': isVisible }]">
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
      <ul @click="toggleVisibility">
        <li>
          <RouterLink to="/" class="nav">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="nav">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/program" class="nav">Programs</RouterLink>
        </li>
        <li>
          <RouterLink to="/getInvolved" class="nav">Get Involved</RouterLink>
        </li>
        <li>
          <RouterLink to="/eLearn" class="nav">E-Learning Portal</RouterLink>
        </li>
        <li>
          <RouterLink to="/blog" class="nav">Blogs</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.mobile-nav {
  display: none;
}
.sidebar-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
}
.sidebar {
  position: absolute;
  right: -50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  z-index: 50;
  background-color: white;
  color: black;
  height: 100vh;
  border-radius: 15px 0 0 15px;
  padding: 10px;
  box-shadow: 0px 1px 1px 2px #0000000d;
  transition: right 0.3s ease-in-out;
  overflow: hidden;
}
.sidebar.sidebar-open {
  right: 0;
}
.sidebar > div {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 10px 10px;
}
.sidebar ul {
  display: flex;
  flex-direction: column;
}
.sidebar ul li a {
  padding: 15px;
  width: 100%;
  height: 100%;
  border-radius: 7px;
}
.sidebar ul li {
  list-style: none;
  height: 100%;
  width: 100%;
  display: flex;
  /* padding: 15px; */
}
.nav {
  color: black;
  text-decoration: none;
}
.router-link-exact-active {
  color: #fff;
  background-color: #df3800;
  border-bottom: 1px solid #df3800;
}
@media (max-width: 600px) {
  .mobile-nav {
    position: absolute;
    z-index: 10;
    right: 25px;
    top: 35px;
    display: flex;
    z-index: 5;
    color: black;
  }
}
</style>
