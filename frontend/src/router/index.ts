import { createRouter, createWebHistory } from 'vue-router'
import Storefront from '@/views/Storefront.vue'
import ArticleDetails from '@/views/ArticleDetails.vue'
import NotFound from '@/views/NotFound.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'storefront',
            component: Storefront,
        },
        {
            path: '/articles/:id',
            name: 'articleDetails',
            component: ArticleDetails
        },
        {
            path: '/not-found',
            name: 'notFound',
            component: NotFound,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ],
})

export default router
