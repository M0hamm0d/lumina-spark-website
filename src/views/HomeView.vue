<script setup>
import imgOne from '/img-first.png'
import imgSec from '/img-second.png'
import imgThird from '/img-third.png'
import pause from '/pause.png'
import aboutUs from '/about-us.png'
import ourTeam from '/our-team.png'
import AfricanLead from '/african-lead.png'
import community from '/community.png'
import sustainability from '/sustainability.png'
import empowerment from '/empowerment.png'
import healthCare from '/health-care.png'
import learningEarly from '/learningEarly.png'
import shelters from '/shelter&home.png'
import disaster from '/disaster.png'
import sustainable from '/sustainable.png'
import education from '/education.png'
import Button from '@/components/TheButton.vue'
import bigCardPortrait from '/OngoingFundraisingImagePortrait.png'
import img1 from '/img1.png'
import AmountRaisedIndicator1 from '/AmountRaisedIndicator1.png'
import AmountRaisedIndicator2 from '/AmountRaisedIndicator2.png'
import AmountRaisedIndicator3 from '/indicator3.png'
import AmountRaisedIndicator4 from '/indicator4.png'
import AmountRaisedIndicator5 from '/indicator5.png'
import safeHaven from '/safe-haven.png'
import img3 from '/img3.png'
import empWomen from '/empWomen.png'
import InputGroup from '@/components/InputGroup.vue'
import SocialImpact from '@/components/SocialImpact.vue'
import OurCommitment from '@/components/OurCommitment.vue'
import TheHeaders from '@/components/TheHeaders.vue'
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
    <div class="hero-images">
      <!-- <img src="/img1.png" alt="File icon" /> -->
      <img :src="imgOne" alt="File icon" />
      <img :src="imgSec" alt="File icon" />
      <img :src="imgThird" alt="File icon" />
    </div>
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
            sustainable growth within underserved communities across Africa.{"
            "}
          </p>
          <div>
            <img :src="ourTeam" alt="File icon" />
            <p>10,000+ lives impacted</p>
          </div>
        </div>
      </div>
      <div class="center">
        <p>Core Values:</p>
        <div class="descriptors">
          <div class="descriptors-card">
            <img :src="AfricanLead" alt="File icon" />
            <p>African-led Solutions</p>
          </div>
          <div class="descriptors-card">
            <img :src="community" alt="File icon" />
            <p>Community</p>
          </div>
          <div class="descriptors-card">
            <img :src="sustainability" alt="File icon" />
            <p>Sustainability</p>
          </div>
          <div class="descriptors-card">
            <img :src="empowerment" alt="File icon" />
            <p>Empowerment</p>
          </div>
        </div>
      </div>
      <RouterLink to="/about" class="button">Learn More</RouterLink>
    </div>
    <div class="image-container">
      <img :src="aboutUs" alt="File icon" />
      <div class="pause-btn">
        <img :src="pause" alt="File icon" />
      </div>
    </div>
  </div>
  <OurCommitment />
  <div id="our-initiatives" class="our-initiative">
    <TheHeaders>
      <template v-slot:header>OUR INITIATIVE</template>
      <template v-slot:text-body
        >Lumina Spark Foundation tackles Africa&lsquo;s most pressing challenges
        through a comprehensive approach that addresses the well-being of
        individuals and promotes sustainable growth within communities. Here are
        our core focus areas:</template
      >
    </TheHeaders>
    <div class="initiative-cards">
      <div class="initiative-card">
        <img :src="healthCare" alt="File icon" />
        <div>
          <div class="head">
            <h3>Healthcare forAll</h3>
            <p>
              We deliver free medical care through mobile clinics, reaching
              remote communities with essential medical services and health
              education.
            </p>
          </div>
          <Button href="about">Learn More</Button>
        </div>
      </div>
      <div class="initiative-card">
        <img :src="learningEarly" alt="File icon" />
        <div>
          <div class="head">
            <h3>Early Learning Initiative:</h3>
            <p>
              We break down barriers to education by providing scholarships,
              after-school programs, and digital skills training.
            </p>
          </div>
          <Button href="about">Learn More</Button>
        </div>
      </div>
      <div class="initiative-card">
        <img :src="shelters" alt="File icon" />
        <div>
          <div class="head">
            <h3>Shelter & Hope:</h3>
            <p>
              We offer safe havens and essential support to the homeless and
              vulnerable, ensuring access to food, shelter, and clothing.
            </p>
          </div>
          <Button href="about">Learn More</Button>
        </div>
      </div>
      <div class="initiative-card">
        <img :src="disaster" alt="File icon" />
        <div>
          <div class="head">
            <h3>Disaster Relief and Recovery:</h3>
            <p>
              In times of crisis, we provide emergency aid and support
              communities in rebuilding their lives after natural disasters.
            </p>
          </div>
          <Button href="/about">Learn More</Button>
        </div>
      </div>
      <div class="initiative-card">
        <img :src="sustainable" alt="File icon" />
        <div>
          <div class="head">
            <h3>Sustainability Initiative:</h3>
            <p>
              We empower communities through agricultural training and access to
              clean water initiatives for self-sufficiency and long-term
              development.
            </p>
          </div>
          <Button href="/about">Learn More</Button>
        </div>
      </div>
      <div class="initiative-card">
        <img :src="education" alt="File icon" />
        <div>
          <div class="head">
            <h3>Education & Empowerment:</h3>
            <p>
              We break down barriers to education by providing scholarships,
              after-school programs, and digital skills training.
            </p>
          </div>
          <Button href="/about">Learn More</Button>
        </div>
      </div>
    </div>
  </div>
  <div id="ongoing-fundraising" class="ongoing-camp-container">
    <TheHeaders classes="font-size" width="719px">
      <template v-slot:header>ONGOING FUNDRAISING CAMPAIGNS</template>
      <template v-slot:optional-slot
        >Make a Difference Today: Support Our Critical Initiatives</template
      >
      <template v-slot:text-body
        >Lumina Spark Foundation relies on your generosity to continue
        empowering Africa&lsquo;s youth, women, and children. Here are some of
        our ongoing fundraising campaigns that directly address critical needs
        across the continent:</template
      >
    </TheHeaders>
    <div class="ongoing-fundraising-bottom">
      <div class="ongoing-fundraising-big-card}">
        <img :src="bigCardPortrait" alt="img" />
        <div>
          <div>
            <p class="h3">
              Build mobile medical clinics for remote communities
            </p>
            <p>
              Help us raise funds to buy new, well-equipped vehicle to expand
              our free medical outreach program and deliver critical healthcare
              services to even more remote...
            </p>
          </div>
          <div class="cta">
            <div>
              <div class="amount-raised">
                <h4>$20,650</h4>
                <p>raised of $50,000</p>
              </div>
              <img :src="AmountRaisedIndicator1" alt="img" />
            </div>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
      <div class="ongoing-fundraising-right-sec">
        <div class="ongoing-fundraising-small-card">
          <img :src="img1" alt="img" />
          <div>
            <div>
              <p class="h4">Educate the Next Generation</p>
              <p>
                Support our scholarship program for girls and empower them to
                pursue their dreams.
              </p>
            </div>
            <div class="cta-small">
              <div>
                <div class="amount-raised">
                  <h4>$35,650</h4>
                  <p>raised of $45,000</p>
                </div>
                <img :src="AmountRaisedIndicator2" alt="img" />
              </div>
              <RouterLink class="button">Donate</RouterLink>
            </div>
          </div>
        </div>
        <div class="ongoing-fundraising-small-card">
          <img :src="safeHaven" alt="img" />
          <div>
            <div>
              <p class="h4">Safe Haven for the Homeless</p>
              <p>
                Help us raise funds to establish a new and safe shelter to the
                Internally Displaced Per...
              </p>
            </div>
            <div class="cta-small">
              <div>
                <div class="amount-raised">
                  <h4>$15,050</h4>
                  <p>raised of $100,000</p>
                </div>
                <img :src="AmountRaisedIndicator3" alt="img" />
              </div>
              <RouterLink to="/" class="button">Donate</RouterLink>
              <!-- <Link href={"/"} class=button}>
                  Donate
                </Link> -->
            </div>
          </div>
        </div>
        <div class="ongoing-fundraising-small-card">
          <img :src="img3" alt="img" />
          <div>
            <div>
              <p class="h4">Community Kitchen Project</p>
              <p>
                Contribute to our campaign to establish a community kitchen
                providing meals to tho...
              </p>
            </div>
            <div class="cta-small">
              <div>
                <div class="amount-raised">
                  <h4>$4,400</h4>
                  <p>raised of $45,000</p>
                </div>
                <img :src="AmountRaisedIndicator4" alt="img" />
              </div>
              <RouterLink to="/" class="button">Donate</RouterLink>
            </div>
          </div>
        </div>
        <div class="ongoing-fundraising-small-card">
          <img :src="empWomen" alt="img" />
          <div>
            <div>
              <p class="h4">Empower Women Entrepreneurs</p>
              <p>
                Donate to provide training programs and essential equipment for
                aspiring entrepre...
              </p>
            </div>
            <div class="cta-small">
              <div>
                <div class="amount-raised">
                  <h4>$8,650</h4>
                  <p>raised of $12,000</p>
                </div>
                <img :src="AmountRaisedIndicator5" alt="img" />
              </div>
              <RouterLink to="/" class="button">Donate</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  width: 930px;
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
  width: 411px;
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
.hero-images {
  padding: 0 100px;
  display: flex;
  gap: 16px;
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
.center {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.descriptors {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.descriptors-card {
  display: flex;
  padding: 24px 16px;
  gap: 10px;
  background-color: #fffbf8;
  border-radius: 24px;
  color: #390e00;
  align-items: center;
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
.initiative-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.initiative-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border-radius: 24px;
  border: 1px solid #f0eded;
  color: #390e00;
  background-color: #f5f3f3;
}
.initiative-card > div {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.initiative-card > div h3 {
  font-size: 22px;
  font-weight: 500;
  line-height: 38px;
}
.head {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.head p {
  font-size: 14px;
}
.ongoing-camp-container {
  background-color: #fffbf8;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 50px 100px;
}
.ongoing-fundraising-bottom {
  display: flex;
  gap: 16px;
}
.ongoing-fundraising-big-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.ongoing-fundraising-right-sec {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.ongoing-fundraising-right-sec > div {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.ongoing-fundraising-big-card > div {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.ongoing-fundraising-small-card > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ongoing-fundraising-big-card > div .h3 {
  font-size: 22px;
  font-weight: 600;
  line-height: 38px;
}
.ongoing-fundraising-small-card > div .h4 {
  font-size: 17px;
  font-weight: 600;
}
.ongoing-fundraising-big-card > div > div p {
  font-size: 14px;
  line-height: 20px;
}
.ongoing-fundraising-small-card > div > div p {
  font-size: 12px;
  line-height: 20px;
}
.cta,
.cta-small {
  display: flex;
  justify-content: space-between;
}
.cta > div {
  display: flex;
  flex-direction: column;
  gap: 17px;
}
.cta-small > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.amount-raised {
  display: flex;
  gap: 5px;
}
.button {
  padding: 8px 18px;
  background-color: #fffbf7;
  border: 1px solid #b66100;
  border-radius: 1000px;
  font-size: 14px;
  color: #b66100;
  width: fit-content;
  display: flex;
  align-items: center;
}
</style>
