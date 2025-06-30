import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ReservationPage from '../views/ReservationPage.vue'
import AboutPage from '../views/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
  },
  {
    path: "/reservation",
    name: "Reservation",
    component: ReservationPage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  
  ]
})


export default router
