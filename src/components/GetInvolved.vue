<script setup>
import TheHeaders from './TheHeaders.vue'
</script>
<template>
  <div class="container">
    <TheHeaders width="714px" font-weight-value="500">
      <template v-slot:header>GET INVOLVED</template>
      <template v-slot:text-body
        >We are stronger together! There are many ways you can contribute to
        Lumina Spark Foundation&apos;s mission:</template
      >
    </TheHeaders>
    <div class="getInvolveCards">
      <div class="getInvolveCard">
        <h5>DONATE</h5>
        <p>
          Your contributions allow us to continue empowering communities across
          Africa.
        </p>
      </div>
      <div class="getInvolveCard">
        <h5>VOLUNTEER</h5>
        <p>Share your skills and passion to make a real difference.</p>
      </div>
      <div class="getInvolveCard">
        <h5>SPREAD AWARENESS</h5>
        <p>
          Help us reach a wider audience and inspire others to join our cause.
        </p>
      </div>
      <div class="getInvolveCard">
        <h5>BECOME A PARTNER</h5>
        <p>
          Collaborate with us to amplify our impact and create lasting change.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #fffbf8;
}
.topHead {
  color: #df3800;
  letter-spacing: 0.15%;
  line-height: 24px;
  font-weight: 700;
  text-align: center;
}
.heading {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.aboutTeam {
  width: 714px;
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.15px;
}

.getInvolveCards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.getInvolveCard {
  border: 1px solid #e5e2e1;
  padding: 24px 16px;
  border-radius: 24px;
  background-color: #fffbf8;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.getInvolveCard h5 {
  font-size: 16px;
  letter-spacing: 0.15%;
  line-height: 24px;
  font-weight: 700;
  text-align: center;
}
.getInvolveCard p {
  font-size: 11px;
  text-align: center;
  line-height: 16px;
  letter-spacing: 0.5px;
}
</style>
