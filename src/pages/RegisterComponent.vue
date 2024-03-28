<template>
  <Header />
  <MainSection>
    <div class="signUp">
      <div class="left">
        <div class="left__bgImgWrapper">
          <img class="left__bgImg" src="../assets/img/auth_bg_img.jpg" alt="" />
        </div>
        <div class="bgOverlay"></div>
        <div class="leftContent">
          <h2 class="leftContent__heading">Cutify</h2>
          <p class="leftContent__text">
            Embrace self-care and indulge in a world of beauty and wellness.
            Explore our curated selection of services and effortlessly book
            appointments right in your neighborhood
          </p>
        </div>
      </div>
      <div class="right">
        <div class="signUpFormWrapper">
          <div class="signUpHeadingText">
            <h2 class="signUpHeadingText__first">Sign up as a customer</h2>
            <p class="signUpHeadingText__second">
              Please enter your details to continue with your account creation.
            </p>
          </div>
          <div class="ssoSignUp">
            <Facebook class="ssoSignUp__icon" />
            <Apple class="ssoSignUp__icon" />
            <Apple class="ssoSignUp__icon" />
          </div>
          <div class="flex items-center mb-6">
            <div class="flex-grow bg bg-gray-300 h-0.5"></div>
            <div class="flex-grow-0 mx-5 text dark:text-white">or</div>
            <div class="flex-grow bg bg-gray-300 h-0.5"></div>
          </div>
          <div class="signUpForm">
            <div class="grid grid-cols-2 gap-x-5 gap-y-6">
              <div class="inputGroup">
                <Input type="text" placeholder="First name" />
              </div>
              <div class="inputGroup">
                <Input type="text" placeholder="Last name" />
              </div>
              <div class="inputGroup">
                <Input type="text" placeholder="Email address" />
              </div>
              <div class="inputGroup">
                <Input type="text" placeholder="Phone number" />
              </div>
              <div class="inputGroup">
                <Input type="password" placeholder="Password" />
              </div>
              <div class="inputGroup">
                <Input type="password" placeholder="Confirm Password" />
              </div>
            </div>
            <div class="authCheck">
              <div class="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  for="terms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  By registering you are agreeing to our
                  <span
                    ><RouterLink
                      class="forgotPassword"
                      :to="{ name: 'register' }"
                      >terms of use</RouterLink
                    ></span
                  >
                  and
                  <span
                    ><RouterLink
                      class="forgotPassword"
                      :to="{ name: 'register' }"
                      >privacy policy</RouterLink
                    ></span
                  >
                </label>
              </div>
            </div>
            <div class="inputGroup">
              <Button class="w-full bg-[#57AEDD]">Sign up</Button>
            </div>
          </div>
          <div class="signInLink">
            <p class="signInLink__heading">
              Don't have an account?<RouterLink
                class="text-[#4991B8] ml-1"
                :to="{ name: 'login' }"
                >Login</RouterLink
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </MainSection>
  <Footer />
</template>

<script setup lang="ts">
import { Facebook, Apple } from "lucide-vue-next";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MainSection from "@/components/MainSection.vue";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
</script>

<style scoped>
.signUp {
  @apply flex w-full;
}

.left {
  @apply relative w-5/12;
}

.left__bgImgWrapper {
  @apply relative w-full h-full;
}

.left__bgImg {
  @apply absolute w-full h-full object-cover top-0 bottom-0 left-0 right-0;
}

.bgOverlay {
  @apply absolute w-full top-0 left-0 bottom-0 right-0 bg-[#4891B8] bg-opacity-65;
}

.leftContent {
  @apply absolute w-full top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center text-white;
}

.leftContent__heading {
  @apply text-[92px] mb-6;
}

.leftContent__text {
  @apply w-[440px] leading-[36px] font-semibold;
}

.right {
  @apply w-7/12 pl-32 pr-[120px] pt-[120px] pb-[148px];
}

.signUpFormWrapper {
  @apply border rounded-md w-full h-auto text-left p-12;
}

.signUpHeadingText {
  @apply flex-1;
}

.signUpHeadingText__first {
  @apply text-[40px] leading-[64px] font-bold text-[#212227];
}

.signUpHeadingText__second {
  @apply text-base font-normal text-[#212227];
}

.ssoSignUp {
  @apply w-full h-12 mt-8 flex items-center justify-center gap-x-12;
}

.ssoSignUp__icon {
  @apply relative;
}

.signUpForm {
  @apply flex flex-col space-y-6;
}

.inputGroup {
  @apply flex-1;
}

.authCheck {
  @apply flex items-center justify-between;
}

.forgotPassword {
  @apply text-[#4991B8] font-medium;
}

.signInLink {
  @apply w-full h-auto mt-8 space-y-4;
}

.signInLink__heading {
  @apply text-lg font-medium text-[#212227] text-center;
}
</style>
