<template>
  <div class="exploreSection">
    <div class="exploreSection__headingWrapper">
      <h2 class="exploreSection__heading">
        Explore popular services on Cutify
      </h2>
      <p class="exploreSection__desc">
        Check our top-rated services for an exceptional beauty and wellness
        experience. From relaxing spa<br />treatments to expert styling.
      </p>
      <div class="ctaTextWrapper">
        <p class="ctaText">
          Have a service you want to onboard?
          <a class="text-[#57AEDD] ml-2" href="/sign-up"
            >Sign up as a professional</a
          >
        </p>
        <p class="loadMore">See more</p>
      </div>
    </div>
    <ServiceCardList />
  </div>
</template>

<script setup lang="ts">
import ServiceCardList from "./ServiceCardList.vue";
</script>

<style scoped>
.exploreSection {
  @apply w-full h-auto bg-white pt-[100px] pb-[50px];
}

.exploreSection__headingWrapper {
  @apply w-full;
}

.exploreSection__heading {
  @apply text-3xl leading-[40px] font-semibold text-[#212227] text-left;
}

.exploreSection__desc {
  @apply text-base leading-[32px] text-left;
}

.ctaTextWrapper {
  @apply flex justify-between;
}

.ctaText {
  @apply flex;
}

.loadMore {
  @apply text-[#57AEDD] font-semibold;
}
</style>
