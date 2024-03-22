<template>
  <div class="mainSection">
    <HeroSection />
    <ServiceLocationSection />
    <ExploreSection />
    <ReasonSection />
    <ReviewSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import ServiceLocationSection from "@/components/ServiceLocationSection.vue";
import ExploreSection from "@/components/ExploreSection.vue";
import ReasonSection from "@/components/ReasonSection.vue";
import ReviewSection from "@/components/ReviewSection.vue";
</script>

<style scoped>
.mainSection {
  @apply w-full h-auto;
}
</style>
