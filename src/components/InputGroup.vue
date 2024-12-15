<script setup>
import sendMessage from '/send-message.png'
</script>
<template>
  <div class="container">
    <div class="contact">
      <div class="descriptionHeader">
        <h3>Get in touch</h3>
        <p>
          Call us, send us a message, or reach out to us on our social media
          platforms
        </p>
      </div>
      <div class="inputGroup">
        <div class="inputSec">
          <div class="leftSection">
            <form>
              <label class="label">
                <div>Full Name<span>*</span></div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                />
              </label>
              <label class="label">
                Email Address:
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Email Address"
                />
              </label>
            </form>
          </div>
          <div class="rightSection">
            <form>
              <label class="label">
                <div>Message<span>*</span></div>
                <textarea placeholder="Enter Your Message"></textarea>
              </label>
            </form>
          </div>
        </div>
        <button class="sendMessage">
          Send Message
          <img :src="sendMessage" alt="img" />
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding: 50px 100px;
  background-color: #fffbf8;
}
.contact {
  padding: 50px 91px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #faf9f9;
  border: 1px solid #d0c4c0;
  border-radius: 24px;
}
.descriptionHeader {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 408px;
}
.descriptionHeader h3 {
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
}
.descriptionHeader p {
  font-size: 16px;
  line-height: 24px;
}
.inputGroup {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.inputSec {
  display: flex;
  gap: 16px;
}
.leftSection {
  width: 100%;
}
.rightSection {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.rightSection form {
  height: 100%;
}
.rightSection form .label {
  gap: 4px;
  height: 100%;
}
.rightSection .label input,
.rightSection .label textarea {
  outline: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
}
.leftSection form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  flex: 1;
}
.label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}
.label span {
  color: #c70002;
}
.label input,
.label textarea {
  padding: 16px;
  background-color: #f5f3f3;
  border: 1px solid #d0c4c0;
  border-radius: 16px;
  width: 100%;
  outline: none;
}
.sendMessage {
  padding: 12px 20px;
  border-radius: 1000px;
  background-color: #df3800;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
@media (max-width: 700px) {
  .inputSec {
    flex-direction: column;
  }
}
</style>
