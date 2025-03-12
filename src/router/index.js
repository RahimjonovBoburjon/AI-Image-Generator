import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GenerateView from "../views/GenerateView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/generate", component: GenerateView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;