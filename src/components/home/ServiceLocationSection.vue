<template>
  <div class="serviceAndLocations">
    <h2 class="serviceAndLocations__heading">
      Find beauty and wellness services near you
    </h2>
    <div class="searchLocationForm">
      <form>
        <div class="searchInputCollection">
          <div class="inputGroup">
            <label for="location"></label>
            <input type="text" id="location" name="location" placeholder="" />
          </div>
          <div class="inputGroup">
            <label for="location"></label>
            <input type="text" id="location" name="location" placeholder="" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.serviceAndLocations {
  @apply w-full h-auto bg-[#4991B8] pt-16 pb-12;
}

.serviceAndLocations__heading {
  @apply text-white text-3xl leading-[40px] font-semibold;
}
</style>
