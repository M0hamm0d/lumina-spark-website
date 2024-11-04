<script setup>
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
import aboutProfile1 from '../../public/about-profile1.png'
import aboutProfile2 from '../../public/about-profile-2.png'
import aboutProfile3 from '../../public/about-profile-3.png'
import aboutProfile4 from '../../public/about-profile-4.png'
import aboutProfile5 from '../../public/about-profile-5.png'
import aboutProfile6 from '../../public/about-profile-6.png'
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
      <div class="heading">
        <p class="top-head">MEET THE TEAM</p>
        <p class="about-team">
          We are driven by a dedicated team of professionals with extensive
          experience in humanitarian aid, community development, and social
          impact.
        </p>
      </div>
      <img :src="teamGroup" alt="img" />
    </div>
    <div class="the-team-sec">
      <div class="top-card">
        <div class="card">
          <div class="profile-card">
            <img :src="aboutProfile1" alt="img" />
            <div>
              <p class="card-name">Dr. Grace Olatunde</p>
              <p class="card-position">Chief Operating Officer</p>
            </div>
          </div>
          <div class="text">
            <p>
              Dr. Grace Olatunde brings a wealth of experience in non-profit
              management and operations. As COO, she oversees the day-to-day
              operations of Lumina Spark Foundation, ensuring the effective
              implementation of programs and initiatives.
            </p>
            <p>
              Grace is committed to driving operational excellence and
              maximizing the foundation’s impact across Africa.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="profile-card">
            <img :src="aboutProfile2" alt="img" />
            <div>
              <p class="card-name">Dr. Grace Olatunde</p>
              <p class="card-position">Chief Operating Officer</p>
            </div>
          </div>
          <div class="text">
            <p>
              Dr. Grace Olatunde brings a wealth of experience in non-profit
              management and operations. As COO, she oversees the day-to-day
              operations of Lumina Spark Foundation, ensuring the effective
              implementation of programs and initiatives.
            </p>
            <p>
              Grace is committed to driving operational excellence and
              maximizing the foundation’s impact across Africa.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="profile-card">
            <img :src="aboutProfile3" alt="img" />
            <div>
              <p class="card-name">Dr. Grace Olatunde</p>
              <p class="card-position">Chief Operating Officer</p>
            </div>
          </div>
          <div class="text">
            <p>
              Dr. Grace Olatunde brings a wealth of experience in non-profit
              management and operations. As COO, she oversees the day-to-day
              operations of Lumina Spark Foundation, ensuring the effective
              implementation of programs and initiatives.
            </p>
            <p>
              Grace is committed to driving operational excellence and
              maximizing the foundation’s impact across Africa.
            </p>
          </div>
        </div>
      </div>
      <div class="bottom-card">
        <div class="card">
          <div class="profile-card">
            <img :src="aboutProfile4" alt="img" />
            <div>
              <p class="card-name"></p>
              <p class="card-position">Director of Health Programs</p>
            </div>
          </div>
          <div class="text">
            <p>
              Dr. John Chukwuma is a medical doctor with extensive experience in
              public health and healthcare delivery.
            </p>
            <p>
              As the Director of Health Programs, he leads the foundation’s
              medical outreach initiatives, providing essential healthcare
              services to remote and underserved communities.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="profile-card">
            <img :src="aboutProfile5" alt="img" />
            <div>
              <p class="card-name">Dr. John Chukwuma</p>
              <p class="card-position">Director of Health Programs</p>
            </div>
          </div>
          <div class="text">
            <p>
              Dr. John Chukwuma is a medical doctor with extensive experience in
              public health and healthcare delivery.
            </p>
            <p>
              As the Director of Health Programs, he leads the foundation’s
              medical outreach initiatives, providing essential healthcare
              services to remote and underserved communities.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="profile-card">
            <img :src="aboutProfile6" alt="img" />
            <div>
              <p class="cardName">Dr. John Chukwuma</p>
              <p class="cardPosition}">Director of Health Programs</p>
            </div>
          </div>
          <div class="text">
            <p>
              Dr. John Chukwuma is a medical doctor with extensive experience in
              public health and healthcare delivery.
            </p>
            <p>
              As the Director of Health Programs, he leads the foundation’s
              medical outreach initiatives, providing essential healthcare
              services to remote and underserved communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container}">
    <div class="heading}">
      <p class="topHead}">THE SPARK OF CHANGE: OUR IMPACT</p>
      <p class="aboutTeam}">
        Since our inception, Lumina Spark Foundation has made a significant
        impact on the lives of thousands of individuals across Africa. Here are
        some highlights of our achievements:
      </p>
    </div>
    <div class="metricCard}">
      <div class="card1}">
        <h1>50,000+</h1>
        <div>
          <h4>Lives Touched</h4>
          <p>
            We have provided free healthcare services to over 50,000 individuals
            in remote and underserved areas.
          </p>
        </div>
      </div>
      <div class="card2}">
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
      <div class="card3}">
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
</template>
<style scoped>
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
.top-head {
  color: #df3800;
  letter-spacing: 0.15%;
  line-height: 24px;
  font-weight: 700;
  text-align: center;
}
.about-team {
  width: 714px;
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.15px;
}
.the-team-sec {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.top-card,
.bottom-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.bottom-card {
  width: 806px;
  margin: auto;
}
.card {
  padding: 80px 16px;
  border: 1px solid #e5e2e1;
  flex-direction: column;
  display: flex;
  gap: 36px;
  background-color: #f5f3f3;
  border-radius: 24px;
}
.profile-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}
.card-name {
  letter-spacing: 0.15%;
  line-height: 24px;
  font-weight: 500;
  font-size: 16px;
  color: #df3800;
}
.card-position {
  font-size: 12px;
  letter-spacing: 0.5px;
}
.text {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #231a11;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
