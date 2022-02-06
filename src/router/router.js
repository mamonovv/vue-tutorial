import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import PostPage from '@/pages/PostPage.vue'
import About from '@/pages/About.vue'
import PostInfo from '@/pages/PostInfo.vue'
import PostPageWithStore from '@/pages/PostPageWithStore.vue'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts/:id',
    component: PostInfo,
  },
  {
    path: '/store',
    component: PostPageWithStore,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router
