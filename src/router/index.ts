import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView.vue'
import DocumentsPage from '@pages/DocumentsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          component: DocumentsPage
        }
      ]
    }
  ]
})

export default router
