<script setup>
import { RouterLink } from 'vue-router'
import logo from '/lumina-logo.png'
import dropdown from '/dropdown.png'
</script>
<template>
  <header class="header">
    <div>
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
    <RouterLink class="nav">
      <a href="#ongoing-fundraising" v-smooth-scroll class="changeLife"
        >Change A Life</a
      >
    </RouterLink>
  </header>
</template>
<style scoped>
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
@media (max-width: 700px) {
  .header-nav {
    display: none;
  }
  .header {
    padding: 25px;
    display: none;
  }
}
</style>
