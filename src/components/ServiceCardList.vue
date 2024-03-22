<template>
  <div class="serviceCardWrapper">
    <ServiceCard
      v-for="service in services"
      :key="service.id"
      :service-info="service"
    />
  </div>
</template>

<script setup lang="ts">
import ServiceCard from "@/components/ServiceCard.vue";
import type { ServiceInfo } from "@/types/ServiceInfo";

const services: ServiceInfo[] = [
  {
    id: 1,
    serviceName: "Service 1",
    address: "Address 1",
    imgSrc: "Rectangle_10.png",
    rating: 5,
    reviewCount: 5,
  },
  {
    id: 2,
    serviceName: "Service 2",
    address: "Address 2",
    imgSrc: "Rectangle_12.png",
    rating: 5,
    reviewCount: 5,
  },
  {
    id: 3,
    serviceName: "Service 3",
    address: "Address 3",
    imgSrc: "Rectangle_13.png",
    rating: 5,
    reviewCount: 5,
  },
  {
    id: 4,
    serviceName: "Service 4",
    address: "Address 4",
    imgSrc: "Rectangle_14.png",
    rating: 5,
    reviewCount: 5,
  },
  {
    id: 5,
    serviceName: "Service 5",
    address: "Address 5",
    imgSrc: "Rectangle_14.png",
    rating: 5,
    reviewCount: 5,
  },
  {
    id: 6,
    serviceName: "Service 6",
    address: "Address 6",
    imgSrc: "Rectangle_14.png",
    rating: 5,
    reviewCount: 5,
  },
];
</script>

<style scoped>
.serviceCardWrapper {
  @apply grid grid-cols-3;
}
</style>
