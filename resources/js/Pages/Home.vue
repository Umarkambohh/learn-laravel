<template>
    <app-layout>
        <h1>Home</h1>

        <h1>page info:{{ $page.component }}</h1>
    </app-layout>
</template>
<script>
import AppLayout from '@/Layouts/AppLayout.vue';
export default {
    components: {
        AppLayout,
    },
    setup() {
        return {}
    }
}

</script>