<template>
  <div class="body-bottom">
    <img src="../../public/blogProfile.png" alt="img" />
    <div>
      <h5>Muhammad Adeyemi</h5>
      <p>Founder/CEO</p>
    </div>
  </div>
</template>
<style scoped>
.body-bottom {
  display: flex;
  gap: 8px;
}
.body-bottom > div h5 {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.1%;
  line-height: 20px;
}
.body-bottom > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.body-bottom > div p {
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 0.5px;
  color: #514440;
}
</style>
