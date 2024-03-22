<template>
  <div class="reviews">
    <div class="reviewsWrapper">
      <div class="reviewsCaption">
        <h2 class="caption__heading">What people are saying about us?</h2>
        <p class="caption__text">
          Check out what customers and professionals are happily sharing about
          their cutify experiences
        </p>
      </div>
      <div class="reviewItems">
        <div class="reviewItem">
          <div class="reviewItem__box">
            <p class="reviewText">
              I love how convenient it is to book my favourite spa treatments
              through this platform. The service providers are top-notch!
            </p>
          </div>
          <div class="review__author">
            <div class="authorImg">
              <img src="../assets/img/Ellipse_8.png" alt="" />
            </div>
            <div class="authorNameDate">
              <p class="authorName">Jessica T.</p>
              <p class="authorDate">13th May 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.reviews {
  @apply w-full h-auto bg-white pt-[100px] px-[72px];
}

.reviewsWrapper {
  @apply w-auto flex bg-[#F8FCFE];
}

.reviewsCaption {
  @apply max-w-[330px] h-[350px] text-left mt-[72px] ml-12;
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

.reviewItem {
  @apply w-auto flex flex-col;
}

.reviewItem__box {
  @apply w-[272px] h-auto bg-white shadow-sm rounded-sm p-4;
}

.reviewText {
  @apply text-sm leading-[28px] text-left font-medium pb-8;
}

.review__author {
  @apply flex items-center mt-4;
}
</style>
