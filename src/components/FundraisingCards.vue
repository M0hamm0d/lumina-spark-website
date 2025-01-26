<script setup>
import Button from '@/components/TheButton.vue'
const cards = [
  {
    src: '/OngoingFundraisingImagePortrait.png',
    header: 'Build mobile medical clinics for remote communities',
    description:
      'Help us raise funds to buy new, well-equipped vehicle to expand our free medical outreach program and deliver critical healthcare services to even more remote...',
    raisedAmount: '$20,650',
    raisedTotal: 'raised of $50,000',
    indicatorSrc: '/AmountRaisedIndicator1.png',
  },
  {
    src: '/img1.png',
    header: 'Educate the Next Generation',
    description:
      'Support our scholarship program for girls and empower them to pursue their dreams.',
    raisedAmount: '$35,000',
    raisedTotal: 'raised of $45,000',
    indicatorSrc: '/AmountRaisedIndicator2.png',
  },
  {
    src: '/safe-haven.png',
    header: 'Safe Haven for the Homeless',
    description:
      'Help us raise funds to establish a new and safe shelter to the Internally Displaced Per...',
    raisedAmount: '$15,050',
    raisedTotal: 'raised of $100,000',
    indicatorSrc: '/indicator3.png',
  },
  {
    src: '/img3.png',
    header: 'Community Kitchen Project',
    description:
      'Contribute to our campaign to establish a community kitchen providing meals to tho...',
    raisedAmount: '$4,400',
    raisedTotal: 'raised of $45,000',
    indicatorSrc: '/indicator4.png',
  },
  {
    src: '/empWomen.png',
    header: 'Empower Women Entrepreneurs',
    description:
      'Donate to provide training programs and essential equipment for aspiring entrepre...',
    raisedAmount: '$8,650',
    raisedTotal: 'raised of $12,000',
    indicatorSrc: '/indicator5.png',
  },
]
</script>
<template>
  <div class="ongoing-fundraising-bottom">
    <div
      v-for="(item, index) in cards.slice(0, 1)"
      :key="index"
      class="ongoing-fundraising-big-card"
    >
      <div class="">
        <img :src="item.src" alt="img" />
      </div>
      <div>
        <div>
          <p class="header">{{ item.header }}</p>
          <p>{{ item.description }}</p>
        </div>
        <div class="cta">
          <div>
            <div class="amount-raised">
              <h4>{{ item.raisedAmount }}</h4>
              <p>{{ item.raisedTotal }}</p>
            </div>
            <img :src="item.indicatorSrc" alt="img" />
          </div>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
    <div class="ongoing-fundraising-right-sec">
      <div
        v-for="(item, index) in cards.slice(1)"
        :key="index"
        class="ongoing-fundraising-small-card"
      >
        <div class="">
          <img :src="item.src" alt="img" />
        </div>
        <div>
          <div>
            <p class="h4">{{ item.header }}</p>
            <p>{{ item.description }}</p>
          </div>
          <div class="cta-small">
            <div>
              <div class="amount-raised">
                <h4>{{ item.raisedAmount }}</h4>
                <p>{{ item.raisedTotal }}</p>
              </div>
              <div class="">
                <img :src="item.indicatorSrc" alt="img" />
              </div>
            </div>
            <RouterLink class="button">Donate</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
  height: min-content;
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
.ongoing-fundraising-big-card div:first-child img,
.ongoing-fundraising-small-card div:first-child img {
  width: 100%;
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
.ongoing-fundraising-big-card > div .header {
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
}
.ongoing-fundraising-small-card > div .h4 {
  font-size: 17px;
  font-weight: 600;
}
.ongoing-fundraising-small-card img {
  width: 100%;
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
  width: 100%;
  flex: 1;
  align-items: center;
}
.cta > div {
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100%;
}
.cta-small > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}
.cta-small img {
  width: 100%;
  height: 5.74px;
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
@media (max-width: 700px) {
  .ongoing-fundraising-bottom {
    flex-direction: column;
  }
  .ongoing-fundraising-right-sec {
    grid-template-columns: 1fr;
  }
  .cta img {
    width: 100%;
  }
}
</style>
