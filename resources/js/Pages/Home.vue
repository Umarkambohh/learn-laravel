<template>
  <app-layout>
    <Banner class="mb-24" />

    <div class="grid grid-cols-4 gap-6 container pb-20">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    <div class="grid grid-cols-4 gap-6 container pb-20">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>

  </app-layout>
</template>

<script setup>
import { ref } from 'vue';
import Banner from "@/App/Components/Banner.vue";
import ProductCard from "@/App/Components/ProductCard.vue";
import Card from "@/App/Components/Card.vue";
</script>