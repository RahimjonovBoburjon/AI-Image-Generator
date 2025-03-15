<template>
    <nav
        class="w-full bg-gradient-to-br from-gray-800 to-gray-700 text-white p-5 fixed top-0 left-0 right-0 shadow-xl backdrop-blur-md bg-opacity-90 animate-slide-down border-b-2 border-blue-500 z-50">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <RouterLink to="/"
                class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300">
                AI Image Generator
            </RouterLink>

            <div class="space-x-6">
                <RouterLink to="/" class="text-lg font-medium hover:text-yellow-300 transition-colors duration-300">
                    Home
                </RouterLink>
                <RouterLink to="/generate"
                    class="text-lg font-medium hover:text-yellow-300 transition-colors duration-300">
                    Generate
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<style>
@keyframes slide-down {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-down {
    animation: slide-down 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>