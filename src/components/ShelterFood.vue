<script setup></script>
<template>
  <div class="topSection">
    <div class="topHeaders">Shelter and Food</div>
    <div class="topBody">
      <div class="bodyRight">
        <p>
          No one should have to worry about where their next meal will come from
          or where they will sleep at night. Our Shelter and Food Program
          addresses these urgent needs by providing safe shelters and nutritious
          meals.
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
                  <span>Shelter Provision:</span>
                  We commit to building and maintaining safe housing for the
                  homeless.
                </p>
              </div>
            </div>
            <div>
              <div class="logo">
                <img src="/Money.png" alt="img" />
              </div>
              <div class="paragraph">
                <p>
                  <span>Meal Programs:</span>
                  We offer regular meals and nutrition support to those in need.
                </p>
              </div>
            </div>
            <div>
              <div class="logo">
                <img src="/mentorship.png" alt="img" />
              </div>
              <div class="paragraph">
                <p>
                  <span>Long-Term Solutions:</span>
                  We provide job training and placement services to help
                  individuals regain stability.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="stat">
          <img src="/Growth.png" alt="growth" />
          <p>Provided shelter and meals to over 5,000 homeless individuals</p>
        </div>
      </div>
      <img src="/shelter1.png" alt="img" />
    </div>
  </div>
  <div class="bottomSec">
    <img src="/shelter2.png" alt="growth" />
    <img src="/shelter3.png" alt="growth" />
    <img src="/shelter4.png" alt="growth" />
    <img src="/shelter5.png" alt="growth" />
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.bottomSec > img {
  width: 100%;
}
@media (max-width: 700px) {
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
