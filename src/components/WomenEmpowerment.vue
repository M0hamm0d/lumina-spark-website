<script setup></script>
<template>
  <div class="topSection">
    <div class="topHeader">Women Empowerment</div>
    <div class="topBody">
      <img src="/women-1.png" alt="img" />
      <div class="bodyRight">
        <p>
          We believe that empowering women is key to fostering sustainable
          development. Our Women Empowerment Program aims to equip women with
          the skills, resources, and support needed to start and grow their own
          businesses.
        </p>
        <div class="middle">
          <h3>Key Initiative</h3>
          <div class="initiative">
            <div>
              <div class="logo">
                <img src="/initiative1.png" alt="img" />
              </div>
              <div class="paragraph">
                <p>
                  <span>Vocational Training:</span>
                  We offer training in various trades, enabling women to acquire
                  the skills necessary to start their own businesses.
                </p>
              </div>
            </div>
            <div>
              <div class="logo">
                <img src="/Money.png" alt="img" />
              </div>
              <div class="paragraph">
                <p>
                  <span>Micro-Loans :</span>
                  Financial support is provided to help women entrepreneurs
                  launch and expand their enterprises.
                </p>
              </div>
            </div>
            <div>
              <div class="logo">
                <img src="/mentorship.png" alt="img" />
              </div>
              <div class="paragraph">
                <p>
                  <span>Mentorship Program:</span>
                  Mentors provide guidance to entrepreneurs, helping them
                  navigate the challenges of running a business.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="stat">
          <img src="/Growth.png" alt="growth" />
          <p>
            Over 10,000 women trained and supported to build successful business
            startups.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="bottomSec">
    <img src="/women2.png" alt="growth" />
    <img src="/women3.png" alt="growth" />
    <img src="/women4.png" alt="growth" />
    <img src="/women5.png" alt="growth" />
  </div>
</template>
<style scoped>
.topSection {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.topHeader,
.topHeaders {
  background-color: #ffd4ba;
  padding: 8px 16px;
  border-left: 3px solid #df3800;
  width: 441px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5%;
}
.topHeaders {
  width: 615px;
}
.topBody {
  display: flex;
  gap: 16px;
}
.bodyRight {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.bodyRight P {
  line-height: 24px;
}
.middle {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.initiative {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.initiative > div {
  display: flex;
  gap: 19px;
}
.logo {
  padding: 16px;
  border: 1px solid #e5e2e1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.paragraph {
  display: flex;
}
.paragraph span {
  font-weight: 600;
  margin-right: 5px;
}
.stat {
  display: flex;
  gap: 10px;
  border-radius: 24px;
  width: fit-content;
  padding: 8px 16px;
  border: 1px solid #df3800;
  background-color: #fffbf8;
  font-size: 14px;
  align-items: center;
}
.bottomSec {
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;
}
.bottomSec > img {
  width: 100%;
}
.topBody > img {
  width: 100%;
}
@media (max-width: 700px) {
  .topBody {
    flex-direction: column;
  }
  .topBody > img {
    width: 100%;
  }
  .topHeader {
    width: 100%;
  }
  .bottomSec {
    display: none;
  }
}
</style>
