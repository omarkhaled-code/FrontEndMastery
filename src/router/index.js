import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import BlogsView from '@/views/BlogsView.vue';
import CoursesView from '@/views/CoursesView.vue';
import TeachersView from '@/views/TeachersView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: "/contact",
    name: 'contact',
    component: ContactView
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogsView
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesView
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: TeachersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
