<template>
  <nav class="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-rose-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center group">
            <div class="bg-gradient-to-br from-rose-500 to-pink-600 p-2 rounded-xl mr-3 group-hover:scale-105 transition-transform duration-200">
              <Cake class="h-8 w-8 text-white" />
            </div>
            <div>
              <span class="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Délices Sucrés
              </span>
              <p class="text-xs text-gray-500 -mt-1">Pâtisserie Artisanale</p>
            </div>
          </router-link>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-1">
            <router-link 
              v-for="item in navigation" 
              :key="item.name"
              :to="item.path"
              :class="[
                $route.path === item.path 
                  ? 'bg-rose-50 text-rose-700 border-rose-200' 
                  : 'text-gray-700 hover:bg-rose-50 hover:text-rose-600 border-transparent',
                'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border-2 hover:scale-105'
              ]"
            >
              <component :is="item.icon" class="h-4 w-4 mr-2 inline" />
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <router-link 
            to="/reservation"
            class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center"
          >
            <Calendar class="h-4 w-4 mr-2" />
            Réserver
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-700 hover:text-rose-600 p-2 rounded-lg hover:bg-rose-50 transition-colors"
          >
            <Menu v-if="!mobileMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-rose-100 bg-white/95 backdrop-blur-md">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.path"
            @click="mobileMenuOpen = false"
            :class="[
              $route.path === item.path 
                ? 'bg-rose-50 text-rose-700 border-l-4 border-rose-500' 
                : 'text-gray-700 hover:bg-rose-50 hover:text-rose-600',
              'block px-4 py-3 rounded-r-lg text-base font-medium transition-colors flex items-center'
            ]"
          >
            <component :is="item.icon" class="h-5 w-5 mr-3" />
            {{ item.name }}
          </router-link>
          
          <router-link 
            to="/reservation"
            @click="mobileMenuOpen = false"
            class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-3 rounded-lg font-semibold flex items-center mt-4 mx-2"
          >
            <Calendar class="h-5 w-5 mr-3" />
            Réserver Maintenant
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Cake, Menu, X, Home, ShoppingBag, Calendar, Users } from 'lucide-vue-next'

export default defineComponent({
  name: 'Navbar',
  components: {
    Cake,
    Menu,
    X,
    Home,
    ShoppingBag,
    Calendar,
    Users
  },
  setup() {
    const mobileMenuOpen = ref(false)

    const navigation = [
      { name: 'Accueil', path: '/', icon: 'Home' },
      { name: 'Nos Gâteaux', path: '/products', icon: 'ShoppingBag' },
      { name: 'Réservation', path: '/reservation', icon: 'Calendar' },
      { name: 'À Propos', path: '/about', icon: 'Users' }
    ]

    return {
      mobileMenuOpen,
      navigation
    }
  }
})
</script>
