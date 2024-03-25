<template>
  <div class="reviews">
    <div class="reviewsWrapper">
      <div class="reviewsCaption">
        <h2 class="caption__heading">What people are<br />saying about us?</h2>
        <p class="caption__text">
          Check out what customers and professionals are happily sharing about
          their cutify experiences
        </p>
      </div>
      <div class="reviewItems">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReviewItem from "./ReviewItem.vue";
</script>

<style scoped>
.reviews {
  @apply w-full h-auto bg-white pt-[100px] px-[72px];
}

.reviewsWrapper {
  @apply w-auto flex bg-[#F8FCFE] px-12;
}

.reviewsCaption {
  @apply max-w-[330px] h-[350px] text-left mt-[72px];
}

.caption__heading {
  @apply text-[#212227] text-3xl leading-[46px] font-semibold;
}

.caption__text {
  @apply text-[#212227] text-base leading-[32px] font-normal;
}

.reviewItems {
  @apply flex items-center gap-x-4;
}
</style>
