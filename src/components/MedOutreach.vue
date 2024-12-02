<script setup></script>
<template>
  <div class="topSection">
    <div class="topHeader">Medical Outreach</div>
    <div class="topBody">
      <img src="/medical1.png" alt="img" />
      <div class="bodyRight">
        <p>
          Access to quality healthcare is a fundamental right. Our Medical
          Outreach Program provides essential healthcare services and medical
          supplies to remote and underserved communities.
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
                  <span>Mobile Clinics:</span>
                  Bringing healthcare services directly to communities in need.
                </p>
              </div>
            </div>
            <div>
              <div class="logo">
                <img src="/Money.png" alt="img" />
              </div>
              <div class="paragraph">
                <p>
                  <span>Health Camps:</span>
                  Organizing camps that offer medical check-ups, treatments, and
                  health education.
                </p>
              </div>
            </div>
            <div>
              <div class="logo">
                <img src="/mentorship.png" alt="img" />
              </div>
              <div class="paragraph">
                <p>
                  <span>Medical Supplies Distribution:</span>
                  Supplying local healthcare providers with essential equipment
                  and medications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="stat">
          <img src="/Growth.png" alt="growth" />
          <p>
            Over 50,000 individuals received healthcare services; numerous
            health camps.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="bottomSec">
    <img src="/medical2.png" alt="growth" />
    <img src="/medical3.png" alt="growth" />
    <img src="/medical4.png" alt="growth" />
    <img src="/medical5.png" alt="growth" />
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
