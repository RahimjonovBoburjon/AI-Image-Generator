<template>
    <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
        <Header />
        <router-view />
    </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>