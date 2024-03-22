<template>
  <div class="heroSection">
    <h2 class="heroSection__heading">
      <span class="heading__emphasized">Discover and book</span> for a beauty<br />and
      wellness services near you.
    </h2>
    <p class="heroSection__desc">
      Embrace self-care and indulge in a world of beauty and wellness. Explore
      our curated<br />selection of services and effortlessly book appointments
      right in your neighborhood.
    </p>
    <Button>Search and book an appointment</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<style scoped>
.heroSection {
  @apply bg-[#DDEFF8] pt-[108px] pb-[270px];
}

.heroSection__heading {
  @apply text-[55px] leading-[68px];
}

.heading__emphasized {
  @apply text-[#4991B8] font-black;
}

.heroSection__desc {
  @apply text-xl mb-9 leading-8;
}
</style>
