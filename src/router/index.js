import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path : '/',
            name : 'home',
            component : HomeView
        },
        {

            path : '/jobs',
            name : 'jobs',
            component : JobsView
        },
        {
            path : '/:catchAll(.*)',
            name : '404',
            component : NotFoundView
        }
    ]
})

export default router