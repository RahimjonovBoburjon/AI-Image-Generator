<template>
    <div class="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <input v-model="prompt" type="text" placeholder="Enter a prompt..."
            class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none" />

        <button @click="generateImage" :disabled="loading"
            class="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-600">
            {{ loading ? 'Generating...' : 'Generate Image' }}
        </button>

        <div v-if="imageUrl" class="mt-4">
            <img :src="imageUrl" alt="Generated Image" class="w-full rounded-lg shadow-lg" />
            <a :href="imageUrl" download="generated-image.jpg" class="mt-2 inline-block text-blue-400 underline">
                Download Image
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const prompt = ref("");
const imageUrl = ref("");
const loading = ref(false);

const generateImage = async () => {
    if (!prompt.value) return;
    loading.value = true;

    try {
        const response = await fetch("https://api.example.com/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: prompt.value }),
        });

        const data = await response.json();
        imageUrl.value = data.image_url;
    } catch (error) {
        console.error("Error generating image:", error);
    }

    loading.value = false;
};
</script>