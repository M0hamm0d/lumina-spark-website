<script setup>
import { ref } from 'vue'
import aboutHeroImg from '../../public/HeroLandscapeImageContainer.png'
import imgOverlay from '../../public/img-overlay.png'
import TheButton from '@/components/TheButton.vue'
import mission from '../../public/mission.png'
import vision from '../../public/vision.png'
import visionLogo from '../../public/visionLogo.png'
import missionLogo from '../../public/missionLogo.png'
import quote from '../../public/quote.png'
import founder from '../../public/founder.png'
import teamGroup from '../../public/team-group-pics.png'
import GetInvolved from '@/components/GetInvolved.vue'
import TheHeaders from '@/components/TheHeaders.vue'
import TheFaq from '@/components/TheFaq.vue'
import staffRoles from '@/components/staffRoles.vue'
const data = [
  {
    id: 1,
    isOpen: false,
    title: 'Where are these chairs assembled?',
    text: 'We believe in treating all individuals with dignity and respect.',
  },
  {
    id: 2,
    isOpen: false,
    title: 'How long do I have to return my chair?',
    text: 'We believe in treating all individuals with dignity and respect.',
  },
  {
    id: 3,
    isOpen: false,
    title: 'Do you ship to countries outside the EU?',
    text: 'We believe in treating all individuals with dignity and respect.',
  },
]
const faqs = ref(data)
function toggleAnswer(id) {
  faqs.value = faqs.value.map(faq =>
    faq.isOpen && faq.id !== id ? { ...faq, isOpen: false } : faq,
  )
  console.log(id)
  faqs.value = faqs.value.map(faq =>
    faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq,
  )
}
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
          <div class="mission">
            <div class="mission-title">
              <img :src="missionLogo" alt="img" />
              <p>Mission</p>
            </div>
            <p>
              To empower and uplift the most vulnerable populations in Africa by
              providing vital support, resources, and opportunities.
            </p>
          </div>
          <img :src="mission" alt="img" />
        </div>
        <div class="vision-sec">
          <img :src="vision" alt="img" />
          <div class="vision">
            <div class="vision-title">
              <img :src="visionLogo" alt="img" />
              <p>Vision</p>
            </div>
            <p>
              To see a transformed Africa where every individual, regardless of
              their background, has the opportunity to thrive and contribute to
              their community’s growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ACCORDION -->
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
      <TheFaq
        v-for="faq in faqs"
        :key="faq.id"
        :faq="faq"
        @toggle-answer="toggleAnswer"
      />
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
    <img :src="founder" alt="img" />
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
      <img :src="teamGroup" alt="img" />
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
    <div class="metric-card">
      <div class="card1">
        <h1>50,000+</h1>
        <div>
          <h4>Lives Touched</h4>
          <p>
            We have provided free healthcare services to over 50,000 individuals
            in remote and underserved areas.
          </p>
        </div>
      </div>
      <div class="card2">
        <h1>&gt;$5million</h1>
        <div>
          <h4>Donation Raised</h4>
          <p>
            We have raised over 5 Million Dollars donation and funding from
            International NGOs and civil society groups to drive meaningful
            change and promote sustainable development.
          </p>
        </div>
      </div>
      <div class="card3">
        <h1>10,000</h1>
        <div>
          <h4>Women Empowered</h4>
          <p>
            We have trained and supported 10,000 women, helping them gain
            financial independence and become active contributors to their local
            economies. Through vocational training and access to micro-loans, we
            have enabled women to launch successful enterprises and improve
            their livelihoods.
          </p>
        </div>
      </div>
    </div>
  </div>
  <GetInvolved />
</template>
<style scoped>
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
  width: 930px;
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
  width: 740px;
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
.mission,
.vision {
  background-color: #ffd4ba;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 24px;
  flex: 1;
  gap: 16px;
}
.mission-title,
.vision-title {
  display: flex;
  gap: 8px;
  align-items: center;
}
.mission-title > p,
.vision-title > p {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
}
.mission > p,
.vision > p {
  font-size: 22px;
  line-height: 28px;
}
.accordion-container {
  padding: 0 100px 50px;
  display: flex;
  justify-content: space-between;
  background-color: #fffbf8;
}
.acc-left-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 441px;
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
  width: 457px;
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
  width: 715px;
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
.metric-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: flex-end;
}
.card1,
.card2,
.card3 {
  border-radius: 24px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
}
.card1 {
  background-color: #ffd4ba;
  height: 208px;
  width: 258px;
  color: #390e00;
}
.card2 {
  background-color: #df3800;
  height: 379px;
  width: 349px;
  color: white;
}
.card3 {
  background-color: #b66100;
  height: 289px;
  color: white;
  width: 441px;
}
.card1 > h1,
.card2 > h1,
.card3 > h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
}
.card1 > div > p,
.card2 > div > p,
.card3 > div > p {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5%;
  line-height: 16px;
}
</style>
