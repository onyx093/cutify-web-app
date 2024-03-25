<template>
  <div class="footer">
    <div class="footer__inner">
      <div class="logo">
        <img class="logo__img" src="../assets/logo.svg" alt="" />
        <p class="logo__caption">...Book Beauty & Health Services</p>
      </div>
      <div class="footer__navigation">
        <div class="navigation__headings">
          <p class="navigation__heading">quick links</p>
          <p class="navigation__heading">our categories</p>
        </div>
        <div class="navigation__group">
          <div class="navigation__links">
            <a href="#" class="navigation__link">Services</a>
            <a href="#" class="navigation__link">Testimonials</a>
            <a href="#" class="navigation__link">Blog</a>
            <a href="#" class="navigation__link">Contact Us</a>
          </div>
          <div class="navigation__links">
            <a href="#" class="navigation__link">Hair Salons</a>
            <a href="#" class="navigation__link">Barbing Shops</a>
            <a href="#" class="navigation__link">Spa</a>
            <a href="#" class="navigation__link">Gym Center</a>
          </div>
          <div class="navigation__links">
            <a href="#" class="navigation__link">Hair Salons</a>
            <a href="#" class="navigation__link">Barbing Shops</a>
            <a href="#" class="navigation__link">Spa</a>
            <a href="#" class="navigation__link">Gym Center</a>
          </div>
        </div>
      </div>
      <div class="mediaMarketing">
        <div class="socialMedia">
          <p class="socialMedia__text">Follow us</p>
          <div class="socialMedia__links">
            <div class="socialMedia__link">
              <Facebook />
            </div>
            <div class="socialMedia__link">
              <Instagram />
            </div>
            <div class="socialMedia__link">
              <Twitter />
            </div>
            <div class="socialMedia__link">
              <Linkedin />
            </div>
          </div>
        </div>
        <div class="newsletter">
          <p class="newsletter__caption">
            Subscribe to our newsletter to get updates from us.
          </p>
          <div class="newsletter__form">
            <form>
              <input
                class="formInput"
                type="text"
                placeholder="Email address"
              />
              <button class="formButton" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <p class="copyrightText">
        Copyright &copy; 2022 Genleaders. All right reserved.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-vue-next";
</script>

<style scoped>
.footer {
  @apply w-full h-auto bg-[#4991B8];
}

.footer__inner {
  @apply w-full flex items-center justify-between px-[120px];
}

.logo {
  @apply w-[200px] h-auto flex flex-col justify-start;
}

.logo__img {
  @apply w-full h-auto;
}

.logo__caption {
  @apply w-full text-white text-sm font-bold;
}

.footer__navigation {
  @apply text-white flex flex-col pt-[56px] pb-9;
}

.navigation__headings {
  @apply flex gap-x-[62px] font-bold capitalize mb-4;
}

.navigation__group {
  @apply w-full flex gap-x-[56px];
}

.navigation__links {
  @apply flex flex-col gap-y-2;
}

.navigation__link {
  @apply text-white no-underline text-left leading-[24px] font-normal;
}

.mediaMarketing {
  @apply relative;
}

.socialMedia {
  @apply flex pb-8;
}

.socialMedia__text {
  @apply text-white font-bold mr-4;
}

.socialMedia__links {
  @apply flex gap-4;
}

.socialMedia__link {
  @apply w-8 h-8 bg-white rounded-full flex items-center justify-center;
}

.newsletter {
  @apply relative;
}

.newsletter__caption {
  @apply text-white text-sm text-left;
}

.newsletter__form {
  @apply max-w-[380px] mt-4 flex;
}

.formInput {
  @apply w-[245px] h-12 outline-none pl-2 placeholder:text-sm placeholder:text-[#212227];
}

.formButton {
  @apply w-[135px] h-12 bg-[#57AEDD] text-white font-medium;
}

.footer__copyright {
  @apply pt-9 pb-14 border-t border-t-[#D3D3D4];
}

.copyrightText {
  @apply text-white;
}
</style>
