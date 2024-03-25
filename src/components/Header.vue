<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <div class="nav">
      <Navigation />
      <Button as-child variant="outline" class="border-2">
        <a class="text-[#212227] hover:text-[#212227]" href="/sign-up"
          >Create account</a
        >
      </Button>
      <Button as-child>
        <a class="text-white hover:text-white" href="/sign-in">Login</a>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from "./Navigation.vue";
import { Button } from "@/components/ui/button";
</script>

<style scoped>
.header {
  @apply w-full h-[100px] bg-white flex items-center justify-between px-[120px] py-5;
}

.logo {
  @apply w-[84px] h-[60.5px];
}

.nav {
  @apply flex gap-4;
}
</style>
