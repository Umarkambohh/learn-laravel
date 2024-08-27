<template>
    <div class="navigation bg-whisper py-3 flex">
        <div class="container flex justify-between items-center">
            <div class="flex items-center">
                <button class="bg-white shadow-navigation p-2 lg:p-3 rounded-full" @click="goToBack">
                    <ArrowLeft class="hover:opacity-50 transition" />
                </button>
                <div class="sm:ms-7 ms-3 text-shark font-semibold capitalize text-sm sm:text-base hidden sm:block">
                    <span class="pr-2">Zurück</span>
                    <!-- <span class="pr-2">angebote</span>
            <span class="navigation__breadcrumb--divider">Beratung</span> -->
                </div>
            </div>

            <div class="grid grid-flow-col lg:gap-7 gap-4 sm:gap-6 w-full sm:w-auto justify-end">
                <button class="flex items-center font-semibold text-sm text-dead-pixel hover:opacity-50 transition">
                    <Bookmark class="md:mr-3 mr-1 hover:opacity-50 transition" />
                    Merken
                </button>
                <button class="flex items-center font-semibold text-sm text-dead-pixel hover:opacity-50 transition">
                    <Share2 class="md:mr-3 mr-1" />
                    Teilen
                </button>
                <button
                    class="flex items-center bg-burnt-orange hover:bg-burnt-orange-inverse text-white text-sm font-bold rounded-6 lg:px-10 px-2 lg:py-3 py-2">
                    <OctagonAlert class="text-white md:mr-3" />
                    <span class="hidden sm:flex ml-2">Inhalt melden</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowLeft, Bookmark, OctagonAlert, Share2, } from "lucide-vue-next";

const goToBack = () => {
    history.back()
}
</script>