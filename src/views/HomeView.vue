<script setup>
import InputGroup from '@/components/InputGroup.vue'
import SocialImpact from '@/components/SocialImpact.vue'
import OurCommitment from '@/components/OurCommitment.vue'
import TheHeaders from '@/components/TheHeaders.vue'
import InitiativeCards from '@/components/InitiativeCards.vue'
import FundraisingCards from '@/components/FundraisingCards.vue'
import HeroImages from '@/components/HeroImages.vue'
import CoreValues from '@/components/CoreValues.vue'
</script>

<template>
  <div class="hero-section">
    <div class="hero">
      <div class="hero-container">
        <div class="new-features">
          <p class="new-feature-text">New Feature</p>
          <p>Check out the e-learning platform →</p>
        </div>
        <h1 class="hero-title">
          Building a <span>Brighter Future</span> for Africa&#39;s Youth, Women
          & Children.
        </h1>
        <p>
          We provide vital resources, education, and skills training to break
          the cycle of poverty and cultivate thriving communities across Africa.
        </p>
      </div>
      <div class="buttons">
        <button class="get-involved">Get Involved</button>
        <a href="#our-initiatives" v-smooth-scroll class="nav">
          <button class="learn-more">Learn More</button>
        </a>
      </div>
    </div>
    <HeroImages />
  </div>
  <SocialImpact />
  <div class="about-us-section">
    <div class="about-us-desc">
      <div class="desc-top">
        <h3 class="">WHO ARE WE</h3>
        <div class="description">
          <p>
            The Lumina Spark Foundation is a Nigerian-based non-profit
            organization dedicated to empowering individuals and igniting
            sustainable growth within underserved communities across Africa.
          </p>
          <div>
            <img src="/our-team.png" alt="File icon" />
            <p>10,000+ lives impacted</p>
          </div>
        </div>
      </div>
      <CoreValues />
      <RouterLink to="/about" class="button">Learn More</RouterLink>
    </div>
    <div class="image-container">
      <img src="/about-us.png" alt="File icon" />
      <div class="pause-btn">
        <img src="/pause.png" alt="File icon" />
      </div>
    </div>
  </div>
  <OurCommitment />
  <div id="our-initiatives" class="our-initiative">
    <TheHeaders header="OUR INITIATIVES">
      <template v-slot:text-body
        >Lumina Spark Foundation tackles Africa&lsquo;s most pressing challenges
        through a comprehensive approach that addresses the well-being of
        individuals and promotes sustainable growth within communities. Here are
        our core focus areas:</template
      >
    </TheHeaders>
    <InitiativeCards />
  </div>
  <div id="ongoing-fundraising" class="ongoing-camp-container">
    <TheHeaders
      classes="font-size"
      width="719px"
      header="ONGOING FUNDRAISING CAMPAIGNS"
      optional-slot="Make a Difference Today: Support Our Critical Initiatives"
    >
      <template v-slot:text-body
        >Lumina Spark Foundation relies on your generosity to continue
        empowering Africa&lsquo;s youth, women, and children. Here are some of
        our ongoing fundraising campaigns that directly address critical needs
        across the continent:</template
      >
    </TheHeaders>
    <!-- <TheHeaders
      classes="font-size"
      width="719px"
      header="ONGOING FUNDRAISING CAMPAIGNS"
      optional-slot="Make a Difference Today: Support Our Critical Initiatives"
      description="Lumina Spark Foundation relies on your generosity to continue
        empowering Africa&lsquo;s youth, women, and children. Here are some of
        our ongoing fundraising campaigns that directly address critical needs
        across the continent:"
    /> -->
    <FundraisingCards />
  </div>
  <InputGroup />
</template>

<style scoped>
a {
  text-decoration: none;
}
.hero-section {
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #fffbf8;
}
.hero {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 930px;
  margin: 0 auto;
}
.hero-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  line-height: 24px;
}
.new-features {
  display: flex;
  align-items: center;
  background-color: #f2f0f0;
  padding: 8px;
  gap: 12px;
  border: 1px solid #d0c4c0;
  border-radius: 1000px;
  max-width: 411px;
  margin: 0 auto;
  cursor: pointer;
}
.new-feature-text {
  display: flex;
  gap: 10px;
  padding: 4px 8px;
  background-color: #fffbf8;
  border-radius: 100px;
}
.hero-title {
  font-weight: 700;
  font-size: 57px;
  line-height: 64px;
  margin: 0 auto;
  text-align: center;
}
.hero-title span {
  color: #df3800;
}
.hero-container p {
  text-align: center;
}
.buttons {
  margin: 0 auto;
  display: flex;
  gap: 24px;
}
.get-involved {
  padding: 12px 20px;
  background-color: #df3800;
  border-radius: 1000px;
  border: none;
  font-size: 14px;
  color: white;
  cursor: pointer;
}
.learn-more {
  padding: 12px 20px;
  background-color: #fffbf7;
  border: 1px solid #b66100;
  border-radius: 1000px;
  font-size: 14px;
  color: #b66100;
  cursor: pointer;
}
.about-us-section {
  padding: 50px 100px;
  gap: 16px;
  display: flex;
  background-color: #df3800;
  color: white;
}
.about-us-desc {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.desc-top {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.desc-top h1 {
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
}
.description {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.description > div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.button {
  padding: 12px 20px;
  border: 1px solid #b66100;
  border-radius: 1000px;
  color: #b66100;
  width: fit-content;
  display: flex;
  flex-wrap: nowrap;
  background-color: #fffbf7;
}
.image-container {
  position: relative;
}
.pause-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.our-initiative {
  padding: 50px 100px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  background-color: #fffbf8;
}
.ongoing-camp-container {
  background-color: #fffbf8;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 50px 100px;
}
@media (max-width: 700px) {
  .hero-title {
    font-size: 18px;
  }
  .about-us-section {
    flex-direction: column;
    padding: 25px;
  }
  .image-container img {
    width: 100%;
  }
  .our-initiative {
    padding: 25px;
  }
  .ongoing-camp-container {
    padding: 25px;
  }
}
</style>
