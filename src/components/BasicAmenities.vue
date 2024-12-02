<script setup></script>
<template>
  <div class="topSection">
    <div class="topHeader">Basic Amenities</div>
    <div class="topBody">
      <img src="/solar1.png" alt="img" />
      <div class="bodyRight">
        <p>
          Access to basic amenities like clean water, electricity, and housing
          is crucial for the well-being of any community. This Program focuses
          on improving living conditions by installing clean water systems,
          solar panels, and affordable housing.
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
                  <span>Water Filtration Systems:</span>
                  We install systems to ensure access to clean drinking water.
                </p>
              </div>
            </div>
            <div>
              <div class="logo">
                <img src="/Money.png" alt="img" />
              </div>
              <div class="paragraph">
                <p>
                  <span>Solar Panel Installations:</span>
                  We provide sustainable electricity solutions to communities.
                </p>
              </div>
            </div>
            <div>
              <div class="logo">
                <img src="/mentorship.png" alt="img" />
              </div>
              <div class="paragraph">
                <p>
                  <span>Affordable Housing Projects:</span>
                  We build and renovate homes to improve living standards.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="stat">
          <img src="/Growth.png" alt="growth" />
          <p>
            Installed over 200 water filtration systems and 100 solar panel
            units
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="bottomSec">
    <img src="/solar2.png" alt="growth" />
    <img src="/solar3.png" alt="growth" />
    <img src="/solar4.png" alt="growth" />
    <img src="/solar5.png" alt="growth" />
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
  display: flex;
  gap: 16px;
}
</style>
