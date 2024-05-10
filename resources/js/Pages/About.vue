<template>
    <app-layout>

        <head>
            <title>
                about
            </title>
        </head>
        
        <h1>About</h1>
        <h4>{{ user }}</h4>
    </app-layout>
</template>
<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head } from '@inertiajs/vue3';

export default {
    components: {
        AppLayout,
        Head,
    },
    props: {
        user: String
    },
    setup() {
        return {}
    }
}

</script>