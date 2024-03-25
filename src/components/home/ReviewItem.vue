<template>
  <div class="reviewItem">
    <div class="reviewItem__box">
      <p class="reviewText">
        I love how convenient it is to book my favourite spa treatments through
        this platform. The service providers are top-notch!
      </p>
    </div>
    <div class="authorInfo">
      <div class="authorImg">
        <img src="../assets/img/Ellipse_8.png" alt="" />
      </div>
      <div class="authorNameDate">
        <p class="authorName">Jessica T.</p>
        <p class="authorDate">13th May 2024</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
