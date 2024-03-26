<template>
  <Header />
  <MainSection>
    <HeadSection head-text="Blog" head-img="blog_head_img.jpg" />
    <ArticleCardList />
  </MainSection>
  <Footer />
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MainSection from "@/components/MainSection.vue";
import HeadSection from "../components/HeadSection.vue";
import ArticleCardList from "../components/blog/ArticleCardList.vue";
</script>

<style scoped></style>
