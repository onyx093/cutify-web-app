<template>
  <div class="headSection">
    <div class="headSection__bgImg">
      <img src="../../assets/img/6a010aeb16043b509900d2c63b31281d.jpg" alt="" />
    </div>
    <div class="headSection__bgcolor"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.headSection {
  @apply relative w-full h-[252px] overflow-hidden;
}

.headSection__bgImg {
  @apply absolute -top-[238px] object-cover z-0;
}

.headSection__bgcolor {
  @apply w-full h-[252px] bg-[#57AEDD] bg-opacity-60 z-50;
}
</style>
