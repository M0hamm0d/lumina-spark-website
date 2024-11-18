<script setup>
import Button from '@/components/TheButton.vue'
const cards = [
  {
    src: '../../public/OngoingFundraisingImagePortrait.png',
    h3: 'Build mobile medical clinics for remote communities',
    text: 'Help us raise funds to buy new, well-equipped vehicle to expand our free medical outreach program and deliver critical healthcare services to even more remote...',
    raisedAmount: '$20,650',
    raisedTotal: 'raised of $50,000',
    indicatorSrc: '../../public/AmountRaisedIndicator1.png',
  },
  {
    src: '../../public/img1.png',
    h3: 'Educate the Next Generation',
    text: 'Support our scholarship program for girls and empower them to pursue their dreams.',
    raisedAmount: '$35,000',
    raisedTotal: 'raised of $45,000',
    indicatorSrc: '../../public/AmountRaisedIndicator2.png',
  },
  {
    src: '../../public/safe-haven.png',
    h3: 'Safe Haven for the Homeless',
    text: 'Help us raise funds to establish a new and safe shelter to the Internally Displaced Per...',
    raisedAmount: '$15,050',
    raisedTotal: 'raised of $100,000',
    indicatorSrc: '../../public/indicator3.png',
  },
  {
    src: '../../public/img3.png',
    h3: 'Community Kitchen Project',
    text: 'Contribute to our campaign to establish a community kitchen providing meals to tho...',
    raisedAmount: '$4,400',
    raisedTotal: 'raised of $45,000',
    indicatorSrc: '../../public/indicator4.png',
  },
  {
    src: '../../public/empWomen.png',
    h3: 'Empower Women Entrepreneurs',
    text: 'Donate to provide training programs and essential equipment for aspiring entrepre...',
    raisedAmount: '$8,650',
    raisedTotal: 'raised of $12,000',
    indicatorSrc: '../../public/indicator5.png',
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
      <img :src="item.src" alt="img" />
      <div>
        <div>
          <p class="h3">{{ item.h3 }}</p>
          <p>{{ item.text }}</p>
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
        <img :src="item.src" alt="img" />
        <div>
          <div>
            <p class="h4">{{ item.h3 }}</p>
            <p>{{ item.text }}</p>
          </div>
          <div class="cta-small">
            <div>
              <div class="amount-raised">
                <h4>{{ item.raisedAmount }}</h4>
                <p>{{ item.raisedTotal }}</p>
              </div>
              <img :src="item.indicatorSrc" alt="img" />
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
  line-height: 30px;
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
