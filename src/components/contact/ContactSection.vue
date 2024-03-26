<template>
  <div class="contactSection">
    <div class="contactInfo">
      <h2 class="contactInfo__heading">Our Contact Info</h2>
      <div class="contactDetails">
        <div class="contactEmail">
          <Mail class="contactEmail__icon" />
          <p class="contactEmail__address">cutify_ng@info.com</p>
        </div>
        <div class="contactPhone">
          <Phone class="contactPhone__icon" />
          <p class="contactPhone__number">+234-8123456789</p>
        </div>
        <div class="contactLocation">
          <MapPin class="contactLocation__icon" />
          <p class="contactLocation__description">
            Goldlink House, 2 Harere Street, Off<br />Rabat Street, Zone 6,
            Abuja
          </p>
        </div>
        <div class="contactDetails__anime">
          <img src="../../assets/contact-us-anime.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="contactForm">
      <Card class="shadow-md" :class="cn('w-[380px]', $attrs.class ?? '')">
        <CardHeader>
          <CardTitle class="text-left text-[32px] text-[#212227]"
            >Send a message</CardTitle
          >
          <CardDescription
            class="text-left text-base font-normal text-[#46474B]"
            >Feel free to contact us anytime. We will get to you as soon as we
            can.</CardDescription
          >
        </CardHeader>
        <form>
          <CardContent class="grid gap-4">
            <div class="flex items-center space-x-4">
              <div class="flex-1 space-y-6">
                <Input type="name" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Textarea
                  class="outline-none"
                  placeholder="Write your message here."
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button class="w-full"> Send message </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mail, Phone, MapPin } from "lucide-vue-next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
</script>

<style scoped>
.contactSection {
  @apply relative w-full h-auto flex pt-10 px-[120px];
}

.contactInfo {
  @apply relative w-7/12;
}

.contactInfo__heading {
  @apply text-[#212227] text-[32px] leading-[48px] font-semibold text-left mb-10;
}

.contactDetails {
  @apply flex flex-col space-y-8 pb-[262px];
}

.contactEmail,
.contactPhone,
.contactLocation {
  @apply flex items-center justify-start;
}

.contactEmail__icon,
.contactPhone__icon,
.contactLocation__icon {
  @apply mr-4;
}

.contactDetails__anime {
  @apply absolute w-[400px] h-[240px] bottom-0 right-0 m-0 pb-8;
}

.contactLocation__description {
  @apply text-left;
}

.contactForm {
  @apply absolute w-5/12 right-0 -top-12;
}
</style>
