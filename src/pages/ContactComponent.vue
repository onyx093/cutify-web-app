<template>
  <Header />
  <MainSection>
    <HeadSection head-text="Contact us" head-img="contact_head_img.jpg" />
    <ContactSection />
  </MainSection>
  <Footer />
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MainSection from "@/components/MainSection.vue";
import HeadSection from "../components/HeadSection.vue";
import ContactSection from "../components/contact/ContactSection.vue";
</script>

<style scoped></style>
