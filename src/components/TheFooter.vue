<script setup>
import logo from '/footer-logo.png'
import linkdinLogo from '/linkedinLogo.png'
import xLogo from '/x-logo.png'
import facebookLogo from '/facebook-logo.png'
import ytLogo from '/yt-logo.png'
import tiktokLogo from '/tiktok-logo.png'
import emailLogo from '/email-logo.png'
import phoneLogo from '/phone-logo.png'
import locationLogo from '/location-logo.png'
</script>
<template>
  <footer class="">
    <div className="top-footer">
      <div className="about-lumina">
        <div>
          <img :src="logo" alt="File icon" />
          <p>
            We provide vital healthcare, education, and shelter to Africa&apos;s
            most vulnerable populations.
          </p>
        </div>
        <div className="social-account">
          <div>
            <img :src="linkdinLogo" alt="File icon" />
          </div>
          <div>
            <img :src="xLogo" alt="File icon" />
          </div>
          <div>
            <img :src="facebookLogo" alt="File icon" />
          </div>
          <div>
            <img :src="ytLogo" alt="File icon" />
          </div>
          <div>
            <img :src="tiktokLogo" alt="File icon" />
          </div>
        </div>
      </div>
      <div class="info">
        <div>
          <h4>Quick Links</h4>
          <ul class="ul">
            <li>
              <RouterLink href="/" class="nav"> Home </RouterLink>
            </li>
            <li>
              <RouterLink href="/about" class="nav"> About us </RouterLink>
            </li>
            <li>
              <RouterLink href="/" class="nav"> Programs </RouterLink>
            </li>
            <li>
              <RouterLink href="/" class="nav"> Get Involved </RouterLink>
            </li>
            <li>
              <RouterLink href="/" class="nav"> E-Learning Portal </RouterLink>
            </li>
            <li>
              <RouterLink href="/" class="nav"> Blogs </RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <h4>Our Programs</h4>
          <ul class="ul">
            <li>
              <RouterLink href="/" class="nav"> Healthcare for All </RouterLink>
            </li>
            <li>
              <RouterLink href="/" class="nav">
                Early Learning Initiative
              </RouterLink>
            </li>
            <li>
              <RouterLink href="/" class="nav"> Shelter & Hope </RouterLink>
            </li>
            <li>
              <RouterLink href="/" class="nav">
                Disaster Relief and Recovery
              </RouterLink>
            </li>
            <li>
              <RouterLink href="/" class="nav">
                Sustainability Initiative
              </RouterLink>
            </li>
            <li>
              <RouterLink href="/" class="nav">
                Educational & Empowerment
              </RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul class="ul">
            <li class="email">
              <img :src="emailLogo" alt="File icon" />
              <p class="nav">info@lumina.co</p>
            </li>
            <li class="phone">
              <img :src="phoneLogo" alt="File icon" />
              <p class="nav">+234 (0) 908 785 9357</p>
            </li>
            <li class="location">
              <img :src="locationLogo" alt="File icon" />
              <p class="nav">211B, Victoria Island, Lagos.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-btn">
      <div>
        <span>All right reserved</span>
        <span>.</span>
        <span>Lumina Spark Initiative</span>
      </div>
      <p>Terms and conditions</p>
    </div>
  </footer>
</template>
<style scoped>
a {
  color: #fff;
  text-decoration: none;
}
.top-footer {
  padding: 50px 100px;
  background-color: #390e00;
  color: white;
  gap: 166px;
  display: flex;
}
.about-lumina {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  width: 366px;
}
.about-lumina > :first-child {
  gap: 16px;
  display: flex;
  flex-direction: column;
}
.social-account {
  display: flex;
  align-items: center;
  gap: 16px;
}
.social-account > div {
  padding: 16px;
  border: 1px solid #d0c4c0;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info {
  gap: 32px;
  display: flex;
}
.info > div {
  gap: 8px;
  display: flex;
  flex-direction: column;
}
.ul {
  list-style: none;
}
.nav {
  font-size: 14px;
  line-height: 20px;
}
.location,
.phone,
.email {
  display: flex;
  align-items: center;
  gap: 8px;
}
.top-footer p {
  line-height: 24px;
}
.footer-btn {
  padding: 50px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #390e00;
  border-top: 1px solid #ffd4ba;
}
.footer-btn > div {
  display: flex;
  align-items: center;
  gap: 3px;
}
@media (max-width: 700px) {
  /* footer {
    display: none;
  } */
}
</style>
