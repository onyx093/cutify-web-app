<template>
  <Header />
  <MainSection>
    <HeadSection />
    <ArticleCardList />
  </MainSection>
  <Footer />
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MainSection from "@/components/MainSection.vue";
import HeadSection from "../components/blog/HeadSection.vue";
import ArticleCardList from "../components/blog/ArticleCardList.vue";
</script>

<style scoped></style>
