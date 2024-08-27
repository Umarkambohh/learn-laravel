<template>
  <div class="dashboard-sidebar">
    <Sidebar />
    <div class="p-5 bg-kodama w-dvw">
      <slot  />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/Components/Dashboard/Sidebar.vue';
</script>
