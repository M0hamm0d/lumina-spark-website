<script setup></script>
<template>
  <div class="topSection">
    <div class="topHeaders">Educational Support</div>
    <div class="topBody">
      <img class="mobile-view" src="/education1.png" alt="img" />
      <div class="bodyRight">
        <p>
          Education is the cornerstone of a brighter future. Educational Support
          Program is dedicated to enhancing educational opportunities for youths
          in underserved communities through scholarships, learning centers, and
          digital skills training.
        </p>
        <div class="middle">
          <h3>Key Initiative</h3>
          <div class="initiative">
            <div>
              <div class="logo">
                <img src="/initiative-1.png" alt="img" />
              </div>
              <div class="paragraph">
                <p>
                  <span>Scholarships:</span>
                  Financial assistance is provided to students in need, ensuring
                  they have the resources to continue their education.
                </p>
              </div>
            </div>
            <div>
              <div class="logo">
                <img src="/Money.png" alt="img" />
              </div>
              <div class="paragraph">
                <p>
                  <span>Learning Centers: </span>
                  We establish centers equipped with educational materials and
                  resources to support students’ learning.
                </p>
              </div>
            </div>
            <div>
              <div class="logo">
                <img src="/mentorship.png" alt="img" />
              </div>
              <div class="paragraph">
                <p>
                  <span>Digital Skills Training:</span>
                  Teaching youths essential digital literacy and skills to
                  prepare them for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="stat">
          <img src="/Growth.png" alt="growth" />
          <p>
            Supported the education of 20,000+ youths and established multiple
            learning centers.
          </p>
        </div>
      </div>
      <img class="desktop-view" src="/education1.png" alt="img" />
    </div>
  </div>
  <div class="bottomSec">
    <img src="/education2.png" alt="growth" />
    <img src="/education3.png" alt="growth" />
    <img src="/education4.png" alt="growth" />
    <img src="/education5.png" alt="growth" />
  </div>
</template>
<style scoped>
.desktop-view {
  display: flex;
}
.mobile-view {
  display: none;
}
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.bottomSec > img {
  width: 100%;
}
@media (max-width: 700px) {
  .desktop-view {
    display: none;
  }
  .mobile-view {
    display: flex;
  }
  .topHeaders {
    width: 100%;
  }
  .topBody {
    flex-direction: column;
  }
  .bottomSec {
    display: none;
  }
}
</style>
