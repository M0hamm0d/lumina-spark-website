<script setup>
import blogHero1 from '../../public/blogHero1.png'
import blogHero2 from '../../public/blogHero2.png'
import blogHero3 from '../../public/blogHero3.png'
import blogProfile from '../../public/blogProfile.png'
import BlogRecent1 from '../../public/BlogRecent1.png'
import blogProfile1 from '../../public/blogProfile.png'
</script>
<template>
  <div class="hero-container">
    <div class="header">
      <h1>Featured Article</h1>
      <p>Insights, Stories, and Updates from Our Work Across Africa</p>
    </div>
    <div class="header-body">
      <div class="left">
        <img :src="blogHero1" alt="img" />
        <div class="bottom">
          <div class="date-sec">
            <div class="date">
              <p>May 25, 2024</p>
              <p>I</p>
              <p>5 mins read</p>
            </div>
            <div class="date-right">Digital Skills</div>
          </div>
          <div class="bottom-body">
            <div class="body-top">
              <h3>
                Bridging the Digital Divide: Digital Skills Training for African
                Youths
              </h3>
              <p>
                Recently, we established several learning centers equipped with
                state-of-the-art technology, providing students with hands-on
                experience.
              </p>
            </div>
            <div class="body-bottom">
              <img :src="blogProfile" alt="img" />
              <div>
                <h5>Muhammad Adeyemi</h5>
                <p>Founder/CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right1">
          <img :src="blogHero2" alt="img" />
          <div class="bottom-small">
            <div class="date-sec">
              <div class="date">
                <p>May 25, 2024</p>
                <p>I</p>
                <p>5 mins read</p>
              </div>
              <div class="date-right">Women Empowerment</div>
            </div>
            <div class="bottom-body-small">
              <div class="body-top-small">
                <h3>Empowering Women Entrepreneurs: Stories of Success</h3>
                <p>
                  Take Aisha, for example. After participating in our vocational
                  training and receiving a micro-loan, she launched a tailoring
                  business in her community in Kenya.
                </p>
              </div>
              <div class="body-bottom">
                <img :src="blogProfile" alt="img" />
                <div>
                  <h5>Muhammad Adeyemi</h5>
                  <p>Founder/CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right1">
          <img :src="blogHero3" alt="img" />
          <div class="bottom-small">
            <div class="date-sec">
              <div class="date">
                <p>May 25, 2024</p>
                <p>I</p>
                <p>5 mins read</p>
              </div>
              <div class="date-right">Digital Skills</div>
            </div>
            <div class="bottom-body-small">
              <div class="body-top-small">
                <h3>Empowering Women Entrepreneurs: Stories of Success</h3>
                <p>
                  Take Aisha, for example. After participating in our vocational
                  training and receiving a micro-loan, she launched a tailoring
                  business in her community in Kenya.
                </p>
              </div>
              <div class="body-bottom">
                <img :src="blogProfile" alt="img" />
                <div>
                  <h5>Muhammad Adeyemi</h5>
                  <p>Founder/CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Need Adjustment -->
  <div class="container">
    <h2>Recent Post</h2>
    <div class="right1">
      <img :src="BlogRecent1" alt="img" />
      <div class="bottomSmall">
        <div class="dateSec">
          <div class="date">
            <p>May 25, 2024</p>
            <p>I</p>
            <p>5 mins read</p>
          </div>
          <div class="dateRight">Shelter and Food</div>
        </div>
        <div class="bottomBodySmall">
          <div class="bodyTopSmall">
            <h3>
              Providing Shelter and Food for the Homeless: A Lifeline for Many
            </h3>
            <p>
              One success story is Emmanuel, who, after losing his home, found
              refuge in our shelter. With the support of our programs, he
              secured employment and moved into his own apartment within six
              months.
            </p>
          </div>
          <div class="bodyBottom">
            <img :src="blogProfile1" alt="img" />
            <div>
              <h5>Muhammad Adeyemi</h5>
              <p>Founder/CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right1">
      <img :src="BlogRecent1" alt="img" />
      <div class="bottomSmall">
        <div class="dateSec">
          <div class="date">
            <p>May 25, 2024</p>
            <p>I</p>
            <p>5 mins read</p>
          </div>
          <div class="dateRight">Water and Solar Energy</div>
        </div>
        <div class="bottomBodySmall">
          <div class="bodyTopSmall">
            <h3>
              Clean Water and Solar Power: Enhancing Community Living Standards
            </h3>
            <p>
              In rural Tanzania, we recently completed a project that brought
              clean drinking water to a village of 3,000 people. Prior to this,
              residents had to walk miles to access water, which was often
              contaminated.
            </p>
          </div>
          <div class="bodyBottom">
            <img :src="blogProfile" alt="img" />
            <div>
              <h5>Muhammad Adeyemi</h5>
              <p>Founder/CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right1">
      <img :src="BlogRecent1" alt="img" />
      <div class="bottomSmall">
        <div class="dateSec">
          <div class="date">
            <p>May 25, 2024</p>
            <p>I</p>
            <p>5 mins read</p>
          </div>
          <div class="dateRight">Education</div>
        </div>
        <div class="bottomBodySmall">
          <div class="bodyTopSmall">
            <h3>Educational Scholarships: Building Brighter Futures</h3>
            <p>
              One inspiring story is that of Mary, a young girl from Uganda.
              With the support of our scholarship program, she was able to
              complete her secondary education and is now pursuing a degree in
              engineering.
            </p>
          </div>
          <div class="bodyBottom">
            <img :src="blogProfile" alt="img" />
            <div>
              <h5>Muhammad Adeyemi</h5>
              <p>Founder/CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right1">
      <img :src="BlogRecent1" alt="img" />
      <div class="bottomSmall">
        <div class="dateSec">
          <div class="date">
            <p>May 25, 2024</p>
            <p>I</p>
            <p>5 mins read</p>
          </div>
          <div class="dateRight">Education</div>
        </div>
        <div class="bottomBodySmall">
          <div class="bodyTopSmall">
            <h3>Collaborating for Impact: Partnerships that Drive Change</h3>
            <p>
              One notable partnership is with a major tech company that supports
              our digital skills training programs. This collaboration has
              provided us with the resources to expand our reach and enhance the
              quality of our training.
            </p>
          </div>
          <div class="bodyBottom">
            <img :src="blogProfile" alt="img" />
            <div>
              <h5>Muhammad Adeyemi</h5>
              <p>Founder/CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 50px 100px 0;
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
  padding-bottom: 50px;
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
.body-bottom {
  display: flex;
  gap: 8px;
}
.body-bottom > div h5 {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.1%;
  line-height: 20px;
}
.body-bottom > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.body-bottom > div p {
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 0.5px;
  color: #514440;
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
/* need adjustment */
.container {
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #fffbf8;
}
.right1 {
  display: flex;
  gap: 16px;
}
.bottomSmall {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.dateSec {
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
.dateRight {
  padding: 8px 12px;
  border: 1px solid #df3800;
  background-color: #fffbf8;
  border-radius: 1000px;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.bottomBodySmall {
  display: flex;
  flex-direction: column;
  gap: 44px;
}
.bodyTopSmall {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 12px;
}
.bodyTopSmall h3 {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  letter-spacing: 0.4%;
}
.bodyTopSmall p {
  letter-spacing: 0.5px;
  line-height: 20px;
  font-size: 14px;
}
.bodyBottom {
  display: flex;
  gap: 8px;
}
.bodyBottom > div h5 {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.1%;
  line-height: 20px;
}
.bodyBottom > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.bodyBottom > div p {
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 0.5px;
  color: #514440;
}
</style>
