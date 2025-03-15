<template>
    <div
        class="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div
            class="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float">
        </div>
        <div
            class="absolute w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-2xl animate-float-delayed">
        </div>

        <div
            class="relative z-10 max-w-4xl text-center backdrop-blur-lg bg-gray-900/50 rounded-2xl p-12 border border-gray-700/30 shadow-2xl transform transition-all hover:bg-gray-900/60">
            <h1
                class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-shine">
                Unleash AI Creativity
            </h1>

            <div class="mt-6 inline-block relative group">
                <p class="text-xl text-gray-300 font-medium transition-all duration-300 group-hover:text-gray-100">
                    Transform Words into Stunning Visual Masterpieces
                </p>
                <div
                    class="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 group-hover:w-full">
                </div>
            </div>

            <br>

            <RouterLink to="/generate"
                class="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:from-blue-400 hover:to-purple-400 group">
                <svg class="w-6 h-6 text-white animate-pulse group-hover:animate-spin" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Creating Magic
                <span
                    class="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
            </RouterLink>

            <p class="mt-8 text-sm text-gray-400 font-medium">
                Powered by Stable Diffusion 3 & GPT-4 Vision
                <span class="mx-2">⚡</span>
                Fast Generation API
            </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@keyframes float {

    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-20px) rotate(5deg);
    }
}

@keyframes text-shine {
    0% {
        background-position: 0% 50%;
    }

    100% {
        background-position: 100% 50%;
    }
}

.animate-float {
    animation: float 12s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float 14s ease-in-out infinite 2s;
}

.animate-text-shine {
    background-size: 300% auto;
    animation: text-shine 8s linear infinite;
}
</style>