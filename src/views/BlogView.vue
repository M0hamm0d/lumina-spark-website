<script setup>
import PublisherDetails from '@/components/PublisherDetails.vue'
const data = [
  {
    img: '/blogHero1.png',
    date: 'May 25, 2024',
    timeRead: '5 mins read',
    summary: 'Digital Skills',
    header:
      'Bridging the Digital Divide: Digital Skills Training for African Youths',
    body: 'Recently, we established several learning centers equipped with state-of-the-art technology, providing students with hands-on experience.',
  },
  {
    img: '/blogHero2.png',
    date: 'July 25, 2015',
    timeRead: '3 mins read',
    summary: 'Women Empowerment',
    header: 'Empowering Women Entrepreneurs: Stories of Success',
    body: 'Take Aisha, for example. After participating in our vocational training and receiving a micro-loan, she launched a tailoring business in her community in Kenya.',
  },
  {
    img: '/blogHero3.png',
    date: 'May 25, 2024',
    timeRead: '5 mins read',
    summary: 'Digital Skills',
    header: 'Empowering Women Entrepreneurs: Stories of Success',
    body: 'Take Aisha, for example. After participating in our vocational training and receiving a micro-loan, she launched a tailoring business in her community in Kenya.',
  },
  {
    img: '/shelter2.png',
    date: 'May 25, 2024',
    timeRead: '5 mins read',
    summary: 'Shelter and Food',
    header: 'Providing Shelter and Food for the Homeless: A Lifeline for Many',
    body: 'One success story is Emmanuel, who, after losing his home, found refuge in our shelter. With the support of our programs, he secured employment and moved into his own apartment within six months.',
  },
  {
    img: '/solar2.png',
    date: 'May 25, 2024',
    timeRead: '5 mins read',
    summary: 'Water and Solar Energy',
    header: 'Clean Water and Solar Power: Enhancing Community Living Standards',
    body: 'In rural Tanzania, we recently completed a project that brought clean drinking water to a village of 3,000 people. Prior to this, residents had to walk miles to access water, which was often contaminated.',
  },
  {
    img: '/education3.png',
    date: 'May 25, 2024',
    timeRead: '5 mins read',
    summary: 'Education',
    header: 'Educational Scholarships: Building Brighter Futures',
    body: 'Tone inspiring story is that of Mary, a young girl from Uganda. With the support of our scholarship program, she was able to complete her secondary education and is now pursuing a degree in engineering.',
  },
  {
    img: '/education5.png',
    date: 'May 25, 2024',
    timeRead: '5 mins read',
    summary: 'Education',
    header: 'Collaborating for Impact: Partnerships that Drive Change',
    body: 'One notable partnership is with a major tech company that supports our digital skills training programs. This collaboration has provided us with the resources to expand our reach and enhance the quality of our training.',
  },
]
</script>
<template>
  <div class="hero-container">
    <div class="header">
      <h1>Featured Article</h1>
      <p>Insights, Stories, and Updates from Our Work Across Africa</p>
    </div>
    <div class="header-body">
      <div v-for="(item, index) in data.slice(0, 1)" :key="index" class="left">
        <div class="thumbnail">
          <img :src="item.img" alt="img" />
        </div>
        <div class="bottom">
          <div class="date-sec">
            <div class="date">
              <p>{{ item.date }}</p>
              <p>I</p>
              <p>{{ item.timeRead }}</p>
            </div>
            <div class="date-right">{{ item.summary }}</div>
          </div>
          <div class="bottom-body">
            <div class="body-top">
              <h3>
                {{ item.header }}
              </h3>
              <p>
                {{ item.body }}
              </p>
            </div>
            <PublisherDetails />
          </div>
        </div>
      </div>
      <div class="right">
        <div
          v-for="(item, index) in data.slice(1, 3)"
          :key="index"
          class="right1"
        >
          <div class="thumbnail">
            <img :src="item.img" alt="img" />
          </div>
          <div class="bottom-small">
            <div class="date-sec">
              <div class="date">
                <p>{{ item.date }}</p>
                <p>I</p>
                <p>{{ item.timeRead }}</p>
              </div>
              <div class="date-right">{{ item.summary }}</div>
            </div>
            <div class="bottom-body-small">
              <div class="body-top-small">
                <h3>{{ item.header }}</h3>
                <p>
                  {{ item.body }}
                </p>
              </div>
              <PublisherDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Need Adjustment -->
  <div class="container">
    <h2>Recent Post</h2>
    <div v-for="(item, index) in data.slice(3)" :key="index" class="right1">
      <div class="recent-post-thumbnail">
        <img :src="item.img" alt="img" />
      </div>
      <div class="bottom-small">
        <div class="date-sec">
          <div class="date">
            <p>{{ item.date }}</p>
            <p>I</p>
            <p>{{ item.timeRead }}</p>
          </div>
          <div class="date-right">{{ item.summary }}</div>
        </div>
        <div class="bottom-body-small">
          <div class="body-top-small">
            <h3>
              {{ item.header }}
            </h3>
            <p>
              {{ item.body }}
            </p>
          </div>
          <PublisherDetails />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.thumbnail,
.thumbnail img {
  width: 100%;
  height: auto;
  /* object-fit: cover;
  object-position: center; */
}
.recent-post-thumbnail {
  width: 100%;
}
.hero-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 25px 0;
}
.header {
  padding-left: 100px;
}
.header h1 {
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
}
.header p {
  line-height: 24px;
  letter-spacing: 0.15%;
  font-weight: 500;
}
.header-body {
  padding: 50px 100px;
  border-bottom: 1px solid #e5e2e1;
  display: flex;
  gap: 16px;
}
.left {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #514440;
}
.left > div:first-child img {
  width: 100%;
}
.bottom {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.bottom-small {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.container .bottom-small {
  gap: 20px;
}
.date-sec {
  display: flex;
  gap: 8px;
  align-items: center;
}
.date {
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 7px;
  line-height: 24px;
  letter-spacing: 0.4%;
}
.date-right {
  padding: 8px 12px;
  border: 1px solid #df3800;
  background-color: #fffbf8;
  border-radius: 1000px;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.bottom-body {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.bottom-body-small {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
/* .container .bottom-body-small {
  gap: 48px;
} */
.body-top {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.body-top-small {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 12px;
}
.container .body-top-small {
  gap: 16px;
}
.body-top h3 {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  letter-spacing: 0.15%;
}
.body-top-small h3 {
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 0.4%;
}
.body-top p {
  letter-spacing: 0.1px;
  line-height: 20px;
  font-size: 14px;
}
.body-top-small p {
  letter-spacing: 0.5px;
  line-height: 16px;
  font-size: 11px;
}
.container .body-top-small p {
  line-height: 20px;
  font-size: 14px;
}

.container .body-top-small h3 {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  letter-spacing: 0.4%;
}
.right {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.right1 {
  display: flex;
  gap: 16px;
}
.right1 > :first-child {
  width: 100%;
}
.right1 > :first-child img {
  width: 100%;
}
.container {
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #fffbf8;
}
@media (max-width: 1025px) {
  .hero-container,
  .container {
    padding: 50px;
  }
  .header-body {
    padding: 0;
  }
}
@media (max-width: 700px) {
  .hero-container,
  .container {
    padding: 25px;
  }
  .header-body {
    flex-direction: column;
  }
  .right1 {
    flex-direction: column;
  }
  .header {
    padding-left: 0px;
  }
  .header-body {
    padding: 0;
  }
}
</style>
