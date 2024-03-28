<template>
  <Header />
  <MainSection>
    <div class="signIn">
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
        <div class="loginFormWrapper">
          <div class="loginHeadingText">
            <h2 class="loginHeadingText__first">Welcome back</h2>
            <p class="loginHeadingText__second">
              Enter your details to login into your account.
            </p>
          </div>
          <div class="ssoLogin">
            <Facebook class="ssoLogin__icon" />
            <Apple class="ssoLogin__icon" />
            <Apple class="ssoLogin__icon" />
          </div>
          <div class="flex items-center mb-6">
            <div class="flex-grow bg bg-gray-300 h-0.5"></div>
            <div class="flex-grow-0 mx-5 text dark:text-white">or</div>
            <div class="flex-grow bg bg-gray-300 h-0.5"></div>
          </div>
          <div class="loginForm">
            <div class="inputGroup">
              <Input type="name" placeholder="Name" />
            </div>
            <div class="inputGroup">
              <Input type="password" placeholder="Password" />
            </div>
            <div class="authCheck">
              <div class="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  for="terms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <div class="flex">
                <RouterLink class="forgotPassword" :to="{ name: 'register' }"
                  >Forgot password?</RouterLink
                >
              </div>
            </div>
            <div class="inputGroup">
              <Button class="w-full bg-[#57AEDD]">Login</Button>
            </div>
          </div>
          <div class="signUpButtons">
            <p class="signUpButtons__heading">Don't have an account?</p>
            <RouterLink
              :to="{ name: 'register' }"
              :class="
                buttonVariants({
                  variant: 'default',
                  class:
                    'w-full text-white hover:text-white bg-[#4991B8] hover:bg-[#4991B8]',
                })
              "
              >Sign up as customer</RouterLink
            >
            <RouterLink
              :to="{ name: 'register' }"
              :class="
                buttonVariants({
                  variant: 'default',
                  class:
                    'w-full text-white hover:text-white bg-[#293683] hover:bg-[#293683]',
                })
              "
            >
              Sign up as a professional
            </RouterLink>
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
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
</script>

<style scoped>
.signIn {
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

.loginFormWrapper {
  @apply border rounded-md w-full h-auto text-left p-12;
}

.loginHeadingText {
  @apply relative;
}

.loginHeadingText__first {
  @apply text-[40px] leading-[64px] font-bold text-[#212227];
}

.loginHeadingText__second {
  @apply text-base font-normal text-[#212227];
}

.ssoLogin {
  @apply w-full h-12 mt-8 flex items-center justify-center gap-x-12;
}

.ssoLogin__icon {
  @apply relative;
}

.dividerText {
  @apply text-center h-8 text-[#46474B] before:bg-[#46474B] after:bg-[#46474B] before:content-[""] after:content-[""] before:inline-block after:inline-block before:h-[1px] after:h-[1px] before:relative after:relative before:align-middle after:align-middle before:w-1/2 after:w-1/2 before:right-2 before:-ml-[50%] after:left-2 after:-mr-[50%];
}

.loginForm {
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

.signUpButtons {
  @apply w-full h-auto mt-8 space-y-4;
}

.signUpButtons__heading {
  @apply text-lg font-medium text-[#212227] text-center;
}
</style>
