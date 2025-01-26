<script setup>
const slides = ref([
  {
    description:
      'Thanks to Lumina Spark Foundation, I have been able to start my own tailoring business. The training and equipment provided have given me the skills and confidence to support my family. I am forever grateful for this opportunity to build a better future.',
    name: 'Amina Ahmad',
    role: 'Entrepreneur, Nigeria',
    img: '/aminah-muhammad.png',
  },
  {
    description:
      'Before Lumina Spark Foundation came to our community, I had little hope of continuing my education. Now, I am learning new things every day and even have access to digital skills training. This foundation has changed my life and given me hope for a brighter future.',
    name: 'Jacob Haron',
    role: 'Student, Kenya',
    img: '/jacob.png',
  },
  {
    description:
      'Working with Lumina Spark Foundation on their medical outreach program has been incredibly rewarding. Their dedication to improving healthcare access in remote areas is inspiring, and together we have been able to provide essential medical services to those who need it most.',
    name: 'Dr. Michael Adisa',
    role: 'Healthcare Partner, Nigeria',
    img: '/micheal.png',
  },
  {
    description:
      'Our partnership with Lumina Spark Foundation has empowered countless women in our region. By combining our resources and expertise, we have been able to provide vocational training and support that has transformed lives and strengthened our communities.',
    name: 'Mary Okeke',
    role: 'Women’s Cooperative Leader, Ghana',
    img: '/mary.png',
  },
  {
    description:
      "Lumina Spark Foundation's holistic approach to community development aligns perfectly with our mission. We are proud to support their initiatives, which have demonstrated significant impact in improving the quality of life for many underserved populations in Africa.",
    name: 'Jane Wilson',
    role: 'Development Partner, USAID',
    img: '/lane.png',
  },
  {
    description:
      'Funding Lumina Spark Foundation’s educational programs has been a deeply fulfilling experience. Their commitment to providing quality education and digital skills to youths is creating a ripple effect of positive change across communities.',
    name: 'David Liu',
    role: 'Funding Partner, Global Education Fund',
    img: '/david.png',
  },
  {
    description:
      'Lumina Spark Foundation has been an exemplary partner in our efforts to improve living standards in rural areas. Their projects in healthcare and basic amenities have complemented our governmental initiatives and helped us reach more people effectively.',
    name: 'Akintunde Akinleye',
    role: 'Minister of Health, Nigeria',
    img: '/akintunde.png',
  },
  {
    description:
      'The collaborative efforts with Lumina Spark Foundation have significantly contributed to our community development goals. Their programs in shelter provision and food security have addressed critical needs and have been instrumental in our fight against poverty and hunger.',
    name: 'Robert John',
    role: 'Regional Development Coordinator, Kenya',
    img: '/robert.png',
  },
])
const currentIndex = ref(0)
function prevBtn() {
  const isFirstSlide = currentIndex.value === 0
  const newIndex = isFirstSlide
    ? slides.value.length - 1
    : currentIndex.value - 1
  currentIndex.value = newIndex
}
function nextBtn() {
  const isLastSlide = currentIndex.value === slides.value.length - 1
  const newIndex = isLastSlide ? 0 : currentIndex.value + 1
  currentIndex.value = newIndex
}
function goToSlide(slideIndex) {
  currentIndex.value = slideIndex
}

const carouselInfiniteScroll = () => {
  if (currentIndex.value === slides.value.length - 1) {
    return (currentIndex.value = 0)
  }
  return (currentIndex.value += 1)
}
setInterval(() => {
  carouselInfiniteScroll()
}, 3000)
function carouselCondition(slideIndex) {
  return currentIndex.value === slideIndex
}
import { ref } from 'vue'
</script>
<template>
  <div class="container">
    <div class="testimonialSec">
      <div class="">
        <img src="/aboutQuote.png" alt="" />
      </div>
      <p class="testimony">{{ slides[currentIndex].description }}</p>
      <div class="details">
        <img :src="slides[currentIndex].img" alt="img" />
        <div>
          <h3>{{ slides[currentIndex].name }}</h3>
          <p>{{ slides[currentIndex].role }}</p>
        </div>
      </div>
      <div class="btnControl">
        <button class="btn" @click="prevBtn">←</button>
        <div class="dots">
          <div
            v-for="(slide, slideIndex) in slides"
            :class="{ active: carouselCondition(slideIndex), dot: true }"
            :key="slideIndex"
            @click="() => goToSlide(slideIndex)"
          ></div>
        </div>
        <button class="btn" @click="nextBtn">→</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding: 50px 100px;
  background-color: #fffbf8;
}
.testimonialSec {
  display: flex;
  flex-direction: column;
  gap: 64px;
  position: relative;
}
.testimony {
  max-width: 822px;
  font-size: 24px;
  line-height: 32px;
}
.btnControl {
  position: absolute;
  bottom: 0;
  /* right: 0; */
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 12px;
}
.btn {
  padding: 16px;
  background-color: #df3800;
  border-radius: 1000px;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dots {
  display: flex;
  gap: 8px;
}
.dot {
  display: flex;
  width: 8px;
  height: 8px;
  gap: 10px;
  background-color: #f0eded;
  border-radius: 1000px;
  transition: 1s;
}
.details {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #390e00;
}
.details p {
  letter-spacing: 0.5%;
}
.details > img {
  width: 60px;
  height: 60px;
}
.active {
  background-color: #514440;
  width: 24px;
}
@media (min-width: 700px) {
  .btnControl {
    right: 0%;
  }
}
@media (max-width: 1025px) {
  .container {
    padding: 50px;
  }
}
@media (max-width: 700px) {
  .container {
    padding: 25px 25px 75px;
  }
  .testimony {
    font-size: 20px;
    line-height: 1.5;
  }
  .testimonialSec {
    gap: 40px;
  }
  .btnControl {
    top: 50%;
    left: 50%;
    /* top: 0; */
    transform: translate(-50%, 70%);
  }
}
@media (max-width: 500px) {
  .testimony {
    height: 250px;
  }
}
</style>
