<script setup>
import { RouterLink } from 'vue-router'
import logo from '/lumina-logo.png'
import dropdown from '/dropdown.png'
</script>
<template>
  <header class="header">
    <div class="header-logo">
      <RouterLink to="/">
        <img :src="logo" alt="" />
      </RouterLink>
    </div>
    <ul class="header-nav">
      <li class="navigation">
        <RouterLink to="/about" class="nav">About</RouterLink>
      </li>
      <li class="navigation">
        <RouterLink to="/program" class="nav">
          Programs
          <img :src="dropdown" alt="file icon" />
        </RouterLink>
      </li>
      <li class="navigation">
        <RouterLink to="/getInvolved" class="nav">Get Involved</RouterLink>
      </li>
      <li class="navigation">
        <RouterLink to="/eLearn" class="nav">E-Learning Portal</RouterLink>
      </li>
      <li class="navigation">
        <RouterLink to="/blog" class="nav">Blogs</RouterLink>
      </li>
    </ul>
    <div class="mobile-nav">
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
    <RouterLink class="nav">
      <a href="#ongoing-fundraising" v-smooth-scroll class="changeLife"
        >Change A Life</a
      >
    </RouterLink>
  </header>
</template>
<style scoped>
.mobile-nav {
  display: none;
}
a {
  text-decoration: none;
  display: flex;
  align-items: center;
}
.navigation > .router-link-exact-active {
  color: #df3800;
  border-bottom: 1px solid #df3800;
}
.header {
  padding: 32px 100px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0eded;
  color: #fffbfb;
  background-color: #fffbf8;
}
.header-logo img {
  width: 100%;
}
.nav {
  color: black;
}
.header-nav {
  display: flex;
  align-items: center;
  list-style: none;
}
.program {
  display: flex;
  align-items: center;
  align-items: center;
  gap: 3px;
}
.navigation {
  padding: 8px;
  gap: 10px;
  display: flex;
  align-items: center;
}
.changeLife {
  padding: 18px 24px;
  background-color: #df3800;
  gap: 10px;
  border-radius: 1000px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  color: white;
  cursor: pointer;
}
@media (max-width: 10250px) {
  .header {
    padding: 50px;
  }
}
@media (max-width: 700px) {
  .header-nav {
    display: none;
  }
  .header {
    padding: 25px;
    align-items: center;
  }
  .nav {
    display: none;
  }
}
</style>
