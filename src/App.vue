<template>
    <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
        <h1 class="text-3xl font-bold mb-6">AI Image Generator</h1>
        <ImageGenerator />
    </div>
</template>

<script setup>
import ImageGenerator from "./components/ImageGenerator.vue";
</script>