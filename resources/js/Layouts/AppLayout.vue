<template>
    <Header @open-modal="showModal = true" />
    <slot></slot>
    <!-- <footer>
        footer
    </footer> -->
    <FeedbackModel v-model="showModal" />
</template>

<script setup>
import { ref } from "vue";
import Header from '@/Components/App/Header.vue';
import FeedbackModel from '@/Components/App/FeedbackModel.vue';

const showModal = ref(false);

</script>
