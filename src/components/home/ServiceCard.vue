<template>
  <Card class="w-[350px]">
    <CardContent class="p-0">
      <img :src="getArticleImage(serviceInfo.imgSrc)" alt="Testing" />
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6">
      <Button variant="outline"> Cancel </Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardFooter } from "../ui/card";
import { PropType, defineProps } from "vue";
import type { ServiceInfo } from "../../types/ServiceInfo";

defineProps({
  serviceInfo: {
    type: Object as PropType<ServiceInfo>,
    required: true,
  },
});

const getArticleImage = (theImgSrc: string) => `../src/assets/img/${theImgSrc}`;
</script>

<style scoped></style>
