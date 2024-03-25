<template>
  <div class="articleCardList">
    <div class="articleCardList__text">
      <h2 class="articleCardList__heading">
        Our Blog: Your Beauty and Wellness Guide
      </h2>
      <p>
        Explore our weekly tips for maintaining gorgeous hair and managing your
        facial glow.
      </p>
      <p>We're here to help you master the art of self-care.</p>
    </div>
    <div class="articleCardList__inner">
      <ArticleCard v-for="article in articles" :article="article" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Article } from "@/types/Article";
import ArticleCard from "./ArticleCard.vue";

const articles: Article[] = [
  {
    id: 1,
    articleTitle: "The ultimate guide to stress free spa days at home.",
    imgSrc: "article_card_img_1.jpg",
    publishedDate: "2 days ago",
  },
  {
    id: 2,
    articleTitle: "Essential fitness habits for a healthier lifestyle.",
    imgSrc: "article_card_img_2.jpg",
    publishedDate: "2 days ago",
  },
  {
    id: 3,
    articleTitle: "The ultimate guide to stress free spa days at home.",
    imgSrc: "article_card_img_3.jpg",
    publishedDate: "2 days ago",
  },
  {
    id: 4,
    articleTitle: "The ultimate guide to stress free spa days at home.",
    imgSrc: "article_card_img_4.png",
    publishedDate: "2 days ago",
  },
  {
    id: 5,
    articleTitle: "The ultimate guide to stress free spa days at home.",
    imgSrc: "article_card_img_1.jpg",
    publishedDate: "2 days ago",
  },
  {
    id: 6,
    articleTitle: "Essential fitness habits for a healthier lifestyle.",
    imgSrc: "article_card_img_2.jpg",
    publishedDate: "2 days ago",
  },
  {
    id: 7,
    articleTitle: "The ultimate guide to stress free spa days at home.",
    imgSrc: "article_card_img_3.jpg",
    publishedDate: "2 days ago",
  },
  {
    id: 8,
    articleTitle: "The ultimate guide to stress free spa days at home.",
    imgSrc: "article_card_img_4.png",
    publishedDate: "2 days ago",
  },
];
</script>

<style scoped>
.articleCardList {
  @apply w-full h-auto relative pt-12 pb-[72px] px-[120px];
}

.articleCardList__text {
  @apply text-center pb-6;
}

.articleCardList__heading {
  @apply text-[32px] leading-[48px] font-semibold;
}

.articleCardList__inner {
  @apply grid grid-cols-4 gap-x-5 gap-y-6;
}
</style>
