<template>
    <div class="w-full flex flex-col items-center justify-center min-h-screen py-20 bg-gray-900 text-white">
        <h1 class="text-3xl text-center font-bold mb-6">Generate AI Images</h1>
        <ImageGenerator />
    </div>
</template>

<script setup>
import ImageGenerator from "../components/ImageGenerator.vue";
</script>