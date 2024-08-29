<template>
  <div class="relative bg-cover bg-center py-24" :style="{ backgroundImage: `url(${business})` }">
    <div class="absolute inset-0 bg-blue-500 opacity-50"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
      <h1 class="text-4xl font-bold mb-4">Welcome to Kiel.FamilienApp</h1>
      <p class="text-lg lg:w-1/3">Discover a wide range of services and facilities tailored for families in Kiel. Stay
        informed, get involved, and enjoy everything our community has to offer.</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import business from "/resources/images/banners/small-business-website.png";

const bannerData = ref([]);

// ]const getData = () => {
//   axios.get('')
//     .then((res) => {
//       bannerData.value = res.data
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

getData()
</script>