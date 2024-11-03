<script setup>
import imgOne from '../../public/img-first.png'
import imgSec from '../../public/img-second.png'
import imgThird from '../../public/img-third.png'
import sustain from '../../public/sustain.png'
import shelter from '../../public/shelter.png'
import trained from '../../public/trained.png'
import volunteer from '../../public/volunteer.png'
import funding from '../../public/funding.png'
import partners from '../../public/partners.png'
import pause from '../../public/pause.png'
import aboutUs from '../../public/about-us.png'
import ourTeam from '../../public/our-team.png'
import AfricanLead from '../../public/african-lead.png'
import community from '../../public/community.png'
import sustainability from '../../public/sustainability.png'
import empowerment from '../../public/empowerment.png'
import amplifying from '../../public/amplifying-edu.png'
import empower from '../../public/empowering-women.png'
import bridge from '../../public/bridge.png'
import fulfil from '../../public/fulfil.png'
import healthCare from '../../public/health-care.png'
import learningEarly from '../../public/learningEarly.png'
import shelters from '../../public/shelter&home.png'
import disaster from '../../public/disaster.png'
import sustainable from '../../public/sustainable.png'
import education from '../../public/education.png'
import Button from '@/components/TheButton.vue'
import bigCardPortrait from '../../public/OngoingFundraisingImagePortrait.png'
import img1 from '../../public/img1.png'
import AmountRaisedIndicator1 from '../../public/AmountRaisedIndicator1.png'
import AmountRaisedIndicator2 from '../../public/AmountRaisedIndicator2.png'
import AmountRaisedIndicator3 from '../../public/indicator3.png'
import AmountRaisedIndicator4 from '../../public/indicator4.png'
import AmountRaisedIndicator5 from '../../public/indicator5.png'
import safeHaven from '../../public/safe-haven.png'
import img3 from '../../public/img3.png'
import empWomen from '../../public/empWomen.png'
import InputGroup from '@/components/InputGroup.vue'
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
      <img :src="imgOne" alt="File icon" />
      <img :src="imgSec" alt="File icon" />
      <img :src="imgThird" alt="File icon" />
    </div>
  </div>
  <div class="social-impact-wrapper">
    <div class="social-impact">
      <div class="si-metric-card">
        <img :src="funding" alt="File icon" />
        <div>
          <h1>$5M</h1>
          <p>Funding Raised</p>
        </div>
      </div>
      <div class="si-metric-card">
        <img :src="volunteer" alt="File icon" />
        <div>
          <h1>1000+</h1>
          <p>Volunteers Engaged</p>
        </div>
      </div>
      <div class="si-metric-card">
        <img :src="trained" alt="File icon" />
        <div>
          <h1>20,000</h1>
          <p>Youth Trained</p>
        </div>
      </div>
      <div class="si-metric-card">
        <img :src="shelter" alt="File icon" />
        <div>
          <h1>5000</h1>
          <p>Safe Shelter Provider</p>
        </div>
      </div>
      <div class="si-metric-card">
        <img :src="sustain" alt="File icon" />
        <div>
          <h1>50+</h1>
          <p>Sustainable Project</p>
        </div>
      </div>
    </div>
    <div class="partners-section">
      <h3>OUR PARTNERS FROM ALL OVER THE WORLD</h3>
      <img :src="partners" alt="File icon" />
    </div>
  </div>
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
  <div class="commitment-section">
    <h3>We are committed to:</h3>
    <div class="card-container">
      <div class="card">
        <img :src="amplifying" alt="File icon" />
        <div>
          <h3>Amplifying Education</h3>
          <p>
            We ensure access to quality education, the foundation for a better
            life.
          </p>
        </div>
      </div>
      <div class="card">
        <img :src="bridge" alt="File icon" />
        <div>
          <h3>Bridging the Digital Divide:</h3>
          <p>
            We equip individuals with digital literacy, opening doors to
            opportunity.
          </p>
        </div>
      </div>
      <div class="card">
        <img :src="empower" alt="File icon" />
        <div>
          <h3>Empowering Women:</h3>
          <p>
            We provide women with the skills and resources to achieve economic
            security.
          </p>
        </div>
      </div>
      <div class="card">
        <img :src="fulfil" alt="File icon" />
        <div>
          <h3>Fulfilling Basic Needs:</h3>
          <p>
            We offer vital support, including healthcare, shelter, and food
            security.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div id="our-initiatives" class="our-initiative">
    <div class="initiative-header">
      <h3>OUR INITIATIVE</h3>
      <p>
        Lumina Spark Foundation tackles Africa&lsquo;s most pressing challenges
        through a comprehensive approach that addresses the well-being of
        individuals and promotes sustainable growth within communities. Here are
        our core focus areas:
      </p>
    </div>
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
    <div class="ongoing-camp-top">
      <h3>ONGOING FUNDRAISING CAMPAIGNS</h3>
      <div>
        <h3>Make a Difference Today: Support Our Critical Initiatives</h3>
        <p>
          Lumina Spark Foundation relies on your generosity to continue
          empowering Africa&lsquo;s youth, women, and children. Here are some of
          our ongoing fundraising campaigns that directly address critical needs
          across the continent:
        </p>
      </div>
    </div>
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
.social-impact-wrapper {
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}
.social-impact {
  padding: 50px 24px;
  border: 1px solid #ffd4ba;
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
}
.si-metric-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 206px;
}
.si-metric-card:not(:last-child) {
  border-right: 1.5px solid #ffd4ba;
}
.si-metric-card > div {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.si-metric-card > div h1 {
  text-align: center;
}
.partners-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.partners-section h3 {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
}
.partners-section img {
  display: flex;
  margin: 0 auto;
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
.commitment-section {
  background-color: #ffdbb5;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 50px 100px;
}
.container > h3 {
  font-weight: 500;
  line-height: 32px;
  font-size: 24px;
  text-align: center;
}
.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.card {
  padding: 32px 24px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid #d0c4c0;
  border-radius: 24px;
  background-color: #f5f3f3;
  color: #390e00;
}
.card > div {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.card > div h3 {
  font-weight: 500;
  line-height: 32px;
  font-size: 24px;
}
.card img {
  width: 88px;
}
.our-initiative {
  padding: 50px 100px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  background-color: #fffbf8;
}
.initiative-header {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;
}
.initiative-header h3 {
  font-weight: 700;
  font-size: 16px;
  color: #df3800;
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
.ongoing-camp-top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ongoing-camp-top > h3 {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #df3800;
}
.ongoing-camp-top p {
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}
.ongoing-camp-top > div {
  width: 719px;
  margin: auto;
  text-align: center;
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
