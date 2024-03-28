<template>
  <div class="reviewItem">
    <div class="reviewItem__box">
      <p class="reviewText">
        {{ review.reviewText }}
      </p>
    </div>
    <div class="authorInfo">
      <div class="authorImg">
        <img :src="getArticleImage(review.imgSrc)" alt="" />
      </div>
      <div class="authorNameDate">
        <p class="authorName">Jessica T.</p>
        <p class="authorDate">13th May 2024</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, defineProps } from "vue";
import type { ReviewItem } from "../../types/ReviewItem";

defineProps({
  review: {
    type: Object as PropType<ReviewItem>,
    required: true,
  },
});

const getArticleImage = (theImgSrc: string) => `../src/assets/img/${theImgSrc}`;
</script>

<style scoped>
.reviewItem {
  @apply w-auto flex flex-col;
}

.reviewItem__box {
  @apply max-w-[272px] h-auto bg-white shadow-sm rounded-sm p-4;
}

.reviewText {
  @apply text-sm leading-[28px] text-left font-medium pb-8;
}

.authorInfo {
  @apply flex items-center mt-4 ml-10 gap-4;
}

.authorNameDate {
  @apply flex flex-col text-left;
}

.authorName {
  @apply font-semibold text-base;
}

.authorDate {
  @apply text-sm;
}
</style>
