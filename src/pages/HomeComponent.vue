<template>
  <Header />
  <MainSection>
    <HeroSection />
    <ServiceLocationSection />
    <ExploreSection />
    <ReasonSection />
    <ReviewSection />
  </MainSection>
  <Footer />
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import MainSection from "@/components/MainSection.vue";
import Footer from "@/components/Footer.vue";
import HeroSection from "../components/home/HeroSection.vue";
import ServiceLocationSection from "../components/home/ServiceLocationSection.vue";
import ExploreSection from "../components/home/ExploreSection.vue";
import ReasonSection from "../components/home/ReasonSection.vue";
import ReviewSection from "../components/home/ReviewSection.vue";
</script>

<style scoped></style>
