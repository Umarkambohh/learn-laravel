<template>
    <el-input class="font-normal text-nevada"  placeholder="Suchbegriff eingeben ...">
      <template #prefix>
        <Search class="mr-2 text-gray" />
      </template>
    </el-input>
  </template>
  
  <script setup lang="ts">
  import { Search } from 'lucide-vue-next';
  
//   const emit = defineEmits(['hideOverlay']);
//   const router = useRouter();
//   const search = ref(null);

//   const handleKeydown = () => {
//     emit('hideOverlay');
//     router.push('/search');
//   };
  </script>
  