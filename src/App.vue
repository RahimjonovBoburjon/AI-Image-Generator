<template>
    <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>