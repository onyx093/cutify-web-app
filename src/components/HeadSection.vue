<template>
  <div class="headSection">
    <div class="headSection__bgImgWrapper">
      <img
        class="headSection__bgImg"
        :src="getHeadBackgroundImage(headImg)"
        alt=""
      />
    </div>
    <div class="headSection__bgcolor">
      <p class="headText">{{ headText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  headImg: {
    type: String,
    required: true,
  },
  headText: {
    type: String,
    required: true,
  },
});

const getHeadBackgroundImage = (imgSrc: string) =>
  `../../src/assets/img/${imgSrc}`;
</script>

<style scoped>
.headSection {
  @apply relative w-full h-[252px] overflow-hidden;
}

.headSection__bgImgWrapper {
  @apply relative w-full;
}

.headSection__bgImg {
  @apply absolute -top-[238px] object-cover;
}

.headSection__bgcolor {
  @apply absolute top-0 bottom-0 left-0 right-0 flex items-center justify-start pl-[120px] bg-[#57AEDD] bg-opacity-60;
}

.headText {
  @apply text-white text-xl font-semibold before:content-[""] before:w-10 before:h-4 before:border-t-2;
}
</style>
