<template>
    <div
        class="w-1/3 max-lg:w-3/4 max-sm:w-11/12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl space-y-6 transform transition-all duration-300 hover:shadow-3xl">
        <div class="relative group">
            <input v-model="prompt" type="text" placeholder=" "
                class="w-full p-4 text-lg bg-gray-700/30 backdrop-blur-sm rounded-xl border-2 border-gray-600/50 focus:border-blue-500/80 outline-none text-white placeholder-transparent transition-all duration-300 peer"
                @keyup.enter="generateImage" />
            <label
                class="absolute left-4 -top-5 px-1 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-sm opacity-80 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500 transition-all duration-300 pointer-events-none">
                Enter your comment to AI...
            </label>
        </div>

        <button @click="generateImage" :disabled="loading"
            class="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-lg rounded-xl transform transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed relative overflow-hidden group">
            <span class="relative z-10 flex items-center justify-center gap-2">
                <svg v-if="!loading" class="w-6 h-6 text-white animate-pulse" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {{ loading ? 'Creating...' : 'Creating an image' }}
            </span>
            <div
                class="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
        </button>

        <transition enter-active-class="transition-all duration-500 ease-out"
            leave-active-class="transition-all duration-200 ease-in" enter-from-class="opacity-0 transform scale-95"
            leave-to-class="opacity-0 transform scale-95">
            <div v-if="imageUrl" class="mt-6 space-y-4">
                <div class="relative group">
                    <img :src="imageUrl" alt="Generated Image"
                        class="w-full rounded-xl shadow-xl transform transition-transform duration-300 group-hover:scale-[1.02] cursor-zoom-in" />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-xl pointer-events-none" />
                </div>

                <a :href="imageUrl" download="generated-image.jpg"
                    class="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700/90 text-white/90 hover:text-white rounded-lg transition-all duration-300 border border-gray-700 hover:border-blue-500/50">
                    <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                </a>
            </div>
        </transition>

        <div v-if="loading" class="animate-pulse space-y-4">
            <div class="h-96 bg-gray-700/50 rounded-xl"></div>
            <div class="h-12 bg-gray-700/50 rounded-lg w-1/3 mx-auto"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const prompt = ref("");
const imageUrl = ref("");
const loading = ref(false);

const generateImage = async () => {
    if (!prompt.value.trim()) {
        alert("Prompt is required!");
        return;
    }

    loading.value = true;

    const formData = new FormData();
    formData.append("prompt", prompt.value);
    formData.append("width", 1024);
    formData.append("height", 1024);
    formData.append("steps", 50);
    formData.append("cfg_scale", 7.5);
    formData.append("samples", 1);

    try {
        const response = await fetch("https://api.stability.ai/v2beta/stable-image/generate/sd3", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_STABILITY_API_KEY}`,
                "Accept": "image/*"
            },
            body: formData,
        });

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        imageUrl.value = url;

    } catch (error) {
        console.error("Error generating image:", error);
        alert("Failed to generate image: " + error.message);
    }

    loading.value = false;
};
</script>