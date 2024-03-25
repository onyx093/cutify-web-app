<template>
  <Card class="max-w-[285px]">
    <CardContent class="h-[205px] p-0 overflow-hidden">
      <img
        class="object-fill w-full h-auto"
        :src="getArticleImage(article.imgSrc)"
        alt="Testing"
      />
    </CardContent>
    <CardFooter class="flex justify-between px-4 pb-6">
      <div class="articleDetails">
        <p class="articleDetails__title">{{ article.articleTitle }}</p>
        <div class="articleDetails__publishedDate">
          <p>{{ article.publishedDate }}</p>
          <p class="text-right"><ArrowRight /></p>
        </div>
      </div>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { PropType, defineProps } from "vue";
import { Card, CardContent, CardFooter } from "../ui/card";
import type { Article } from "../../types/Article";
import { ArrowRight } from "lucide-vue-next";

defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
});

const getArticleImage = (img: string) => `../../src/assets/img/${img}`;
</script>

<style scoped>
.articleDetails {
  @apply pt-4;
}

.articleDetails__title {
  @apply text-left font-medium text-lg;
}

.articleDetails__publishedDate {
  @apply flex justify-between;
}
</style>
