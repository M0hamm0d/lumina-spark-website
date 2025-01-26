<script setup>
import aboutHeroImg from '/HeroLandscapeImageContainer.png'
import imgOverlay from '/img-overlay.png'
import TheButton from '@/components/TheButton.vue'
import mission from '/mission.png'
import vision from '/vision.png'
import quote from '/quote.png'
import founder from '/founder.png'
import teamGroup from '/team-group-pics.png'
import GetInvolved from '@/components/GetInvolved.vue'
import TheHeaders from '@/components/TheHeaders.vue'
import staffRoles from '@/components/staffRoles.vue'
import MissionAndVision from '@/components/MissionAndVision.vue'
import OurValues from '@/components/OurValues.vue'
import StatCard from '@/components/StatCard.vue'
import TheCarousel from '@/components/TheCarousel.vue'
</script>
<template>
  <div class="container">
    <div>
      <div class="about-hero-sec-img">
        <img :src="aboutHeroImg" alt="img" />
        <img :src="imgOverlay" alt="img" class="absolute" />
        <div class="hero-text">
          <h1>Igniting Hope, Empowering Change: Our Story</h1>
          <div class="buttons">
            <RouterLink class="get-started"> Get Started </RouterLink>
            <TheButton>Learn More</TheButton>
          </div>
        </div>
      </div>
    </div>
    <div class="mission-and-vision">
      <div class="top-sec">
        <h3>CREATING LASTING CHANGE IN AFRICA</h3>
        <p>
          We advance the social, personal, and economic development of youths,
          women, and children.
        </p>
      </div>
      <div class="bottom-sec">
        <div class="mission-sec">
          <MissionAndVision logo="/missionLogo.png">
            <template v-slot:header>Mission</template>
            <template v-slot:text>
              To empower and uplift the most vulnerable populations in Africa by
              providing vital support, resources, and opportunities.
            </template>
          </MissionAndVision>
          <div class="">
            <img :src="mission" alt="img" />
          </div>
        </div>
        <div class="vision-sec">
          <div class="vision-img">
            <img :src="vision" alt="img" />
          </div>
          <MissionAndVision logo="/visionLogo.png">
            <template v-slot:header>Vision</template>
            <template v-slot:text>
              To see a transformed Africa where every individual, regardless of
              their background, has the opportunity to thrive and contribute to
              their community’s growth.
            </template>
          </MissionAndVision>
          <div class="vision-img-mobile">
            <img :src="vision" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-container">
    <div class="acc-left-text">
      <h2>
        Lumina Spark Foundation was established with a vision to address
        Africa’s most pressing challenges from within.
      </h2>
      <p>
        Inspired by the resilience and potential of African communities, we set
        out to provide vital support, resources, and opportunities to the
        continent’s most vulnerable populations.
      </p>
    </div>
    <div class="acc-right-sec">
      <p>
        At Lumina Spark Foundation, we are guided by a core set of values that
        define our approach:
      </p>
      <OurValues />
    </div>
  </div>

  <div class="founder-speech">
    <div class="left-sec">
      <div class="">
        <img :src="quote" alt="img" />
      </div>
      <div class="bottom">
        <p class="heading-block">
          Every life we touch and every community we uplift brings us one step
          closer to realizing our vision.
        </p>
        <div class="user-name">
          <p class="name">Muhammad Adeyemi</p>
          <p class="position">Founder</p>
        </div>
      </div>
    </div>
    <div class="founder-img">
      <img :src="founder" alt="img" />
    </div>
  </div>
  <div class="our-team-container">
    <div class="top-section">
      <TheHeaders width="714px" font-weight-value="500">
        <template v-slot:header>MEET THE TEAM</template>
        <template v-slot:text-body
          >We are driven by a dedicated team of professionals with extensive
          experience in humanitarian aid, community development, and social
          impact.</template
        >
      </TheHeaders>
      <img :src="teamGroup" alt="img" class="teamGroup" />
    </div>
    <staffRoles />
  </div>
  <div class="our-impact-container">
    <TheHeaders width="714px" font-weight-value="500">
      <template v-slot:header>THE SPARK OF CHANGE: OUR IMPACT</template>
      <template v-slot:text-body>
        Since our inception, Lumina Spark Foundation has made a significant
        impact on the lives of thousands of individuals across Africa. Here are
        some highlights of our achievements:
      </template>
    </TheHeaders>
    <StatCard />
  </div>
  <TheCarousel />
  <GetInvolved />
</template>
<style scoped>
.founder-img img {
  width: 100%;
}
.accordion {
  display: flex;
  flex-direction: column;
}
a {
  color: #fff;
  text-decoration: none;
}
.about-hero-sec-img img {
  width: 100%;
}
.about-hero-sec-img {
  position: relative;
}
.absolute {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.hero-text {
  max-width: 930px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  z-index: 5;
  gap: 24px;
  color: white;
}
.hero-text h1 {
  font-weight: 700;
  font-size: 57px;
  line-height: 64px;
  text-align: center;
}
.buttons {
  width: 253px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 20px;
}
.get-started {
  padding: 12px 20px;
  border-radius: 1000px;
  background-color: #df3800;
}
.mission-and-vision {
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #fffbf8;
}
.top-sec {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.top-sec h3 {
  font-weight: 700;
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  color: #df3800;
}
.top-sec p {
  text-align: center;
  font-size: 32px;
  line-height: 40px;
  max-width: 740px;
  margin: auto;
}
.bottom-sec {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.mission-sec,
.vision-sec {
  display: flex;
  gap: 16px;
}
.mission-sec > div:last-child img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 25px;
}
.mission-sec > div:last-child {
  border-radius: 25px;
  display: flex;
  flex: 1;
}
.vision-sec > div:first-child img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 25px;
}
.vision-sec > div:first-child {
  border-radius: 25px;
  display: flex;
  flex: 1;
}
.vision-img-mobile {
  display: none;
}
.accordion-container {
  padding: 50px 100px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  background-color: #fffbf8;
}
.acc-left-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 441px;
}
.acc-left-text h2 {
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
  letter-spacing: 0.5px;
}
.acc-left-text p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
}
.acc-right-sec {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 457px;
}
.acc-right-sec > p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
}
.founder-speech {
  padding: 50px 100px;
  justify-content: space-between;
  display: flex;
  background-color: #ffd4ba;
}
.left-sec {
  max-width: 715px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.left-sec .bottom {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.heading-block {
  font-size: 45px;
  line-height: 52px;
  color: #390e00;
  font-weight: 400;
}
.user-name {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.name {
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  color: #390e00;
}
.position {
  color: #c70002;
  letter-spacing: 0.5px;
  line-height: 24px;
  font-size: 16px;
}
.our-team-container {
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: #fffbf8;
}
.top-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.our-impact-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 50px 100px;
  background-color: #fffbf8;
}
.about-team {
  width: 714px;
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.15px;
}
@media (max-width: 900px) {
  .mission-and-vision,
  .accordion-container,
  .founder-speech,
  .our-team-container,
  .our-impact-container {
    padding: 35px;
  }
  .accordion-container {
    gap: 25px;
  }
  .acc-right-sec,
  .acc-left-text {
    width: 100%;
  }
}
@media (max-width: 700px) {
  .our-impact-container,
  .our-team-container {
    padding: 25px;
  }
  .hero-text h1 {
    font-size: 18px;
    line-height: 20px;
  }
  .get-started {
    padding: 10px 15px;
  }
  .top-sec p {
    font-size: 18px;
    line-height: 1.2;
  }
  .top-section img {
    width: 100%;
  }
  .mission-sec,
  .vision-sec {
    flex-direction: column;
  }
  .vision-img {
    display: none;
  }
  .vision-img-mobile {
    display: flex;
    width: 100%;
  }
  .vision-img-mobile img {
    width: 100%;
  }
  .mission-sec > img,
  .vision-sec > img {
    display: none;
  }
  .mission-and-vision,
  .accordion-container {
    padding: 25px;
    flex-direction: column;
  }
  .accordion-container {
    gap: 15px;
  }
  .founder-speech {
    flex-direction: column;
    padding: 25px;
  }
  .heading-block {
    font-size: 28px;
    line-height: 1.2;
  }
  .left-sec .bottom {
    gap: 10px;
  }
}
</style>
