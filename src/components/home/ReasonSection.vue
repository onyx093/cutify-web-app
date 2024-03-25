<template>
  <div class="reasonsWrapper">
    <h2 class="reasons__heading">
      Why Cutify booking app is
      <span class="text-[#4991B8]">perfect for you</span>
    </h2>
    <div class="reasonItems">
      <div class="reasonItem">
        <div class="reason__icon">
          <CalendarCheck2 class="text-[#4991B8]" :size="94" />
        </div>
        <div class="reason__content">
          <h3 class="reason__heading">Easy booking</h3>
          <p class="reason__text">
            Say goodbye to long wait times and phone calls. Browse and book
            beauty and wellness services with ease with our user-friendly
            interface. Book your favorite services anytime, anywhere.
          </p>
        </div>
      </div>
      <div class="reasonItem">
        <div class="reason__icon">
          <Users class="text-[#4991B8]" :size="94" />
        </div>
        <div class="reason__content">
          <h3 class="reason__heading">Wide Range of Services</h3>
          <p class="reason__text">
            Discover a diverse array of beauty and wellness services all in one
            place. We have everything you need to look and feel your best.
          </p>
        </div>
      </div>
      <div class="reasonItem">
        <div class="reason__icon">
          <Bell class="text-[#4991B8]" :size="94" />
        </div>
        <div class="reason__content">
          <h3 class="reason__heading">Expert Professionals</h3>
          <p class="reason__text">
            Connect with top professionals who are dedicated to providing
            top-notch services tailored to your preferences.
          </p>
        </div>
      </div>
      <div class="reasonItem">
        <div class="reason__icon">
          <Settings class="text-[#4991B8]" :size="94" />
        </div>
        <div class="reason__content">
          <h3 class="reason__heading">Personalized Experience</h3>
          <p class="reason__text">
            Customize your appointments according to your schedule, preferences,
            and desired treatments. Enjoy a personalized experience that caters
            to your individual needs.
          </p>
        </div>
      </div>
      <div class="reasonItem">
        <div class="reason__icon">
          <User class="text-[#4991B8]" :size="94" />
        </div>
        <div class="reason__content">
          <h3 class="reason__heading">Convenient Reminders</h3>
          <p class="reason__text">
            Never miss an appointment again with our convenient reminder
            notifications. Stay organized and keep track of your upcoming beauty
            and wellness sessions effortlessly.
          </p>
        </div>
      </div>
      <div class="reasonItem">
        <div class="reason__icon">
          <ShieldCheck class="text-[#4991B8]" :size="94" />
        </div>
        <div class="reason__content">
          <h3 class="reason__heading">Secure Payment</h3>
          <p class="reason__text">
            Experience worry-free transactions with our secure payment options.
            Your financial information is protected, allowing you to focus
            solely on your self-care journey.
          </p>
        </div>
      </div>
    </div>

    <Button class="mt-12">Try Cutify Now</Button>
  </div>
</template>

<script setup lang="ts">
import {
  CalendarCheck2,
  Users,
  Bell,
  Settings,
  User,
  ShieldCheck,
} from "lucide-vue-next";

import { Button } from "../ui/button";
</script>

<style scoped>
.reasonsWrapper {
  @apply w-full h-auto pt-[50px] px-[120px];
}

.reasons__heading {
  @apply text-3xl leading-[40px] font-semibold mb-16;
}

.reasonItems {
  @apply grid grid-cols-2 gap-y-8;
}

.reasonItem {
  @apply flex gap-x-6;
}

.reason__content {
  @apply flex flex-col;
}

.reason__heading {
  @apply text-xl font-semibold leading-[32px] text-left;
}

.reason__text {
  @apply w-[400px] text-left;
}
</style>
