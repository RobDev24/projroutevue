import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import( '../views/AboutView.vue')
  },
  {
    path:'/galeria',
    name: 'Galeria',

    component: () => import('@/views/Galeria.vue')
  },
  {
    path:'/sobre',
    name: 'Sobre-nós',

    component: () => import('@/views/Sobre.vue')
  },
  {
    path:'/contato',
    name: 'Contato',

    component: () => import('@/views/Contato.vue')
  },
  {
    path: '/cadastro',
    name: 'Cadastre-se',
    
    component: () => import( '@/views/Cadastro.vue')
  },
  {
    path:'/login',
    name: 'Login',

    component: () => import('@/views/Login.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
