<template>
  <nav :class="[
    'bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-rose-100',
    isRTL ? 'rtl' : 'ltr'
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div :class="['flex justify-between items-center h-20', isRTL ? 'flex-row-reverse' : '']">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center group">
            <div class="bg-gradient-to-br from-rose-500 to-pink-600 p-2 rounded-xl mr-3 group-hover:scale-105 transition-transform duration-200">
              <Cake class="h-8 w-8 text-white" />
            </div>
            <div>
              <span class="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                {{ t('home.brandName') }}
              </span>
              <p class="text-xs text-gray-500 -mt-1">{{ t('home.subtitle') }}</p>
            </div>
          </router-link>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div :class="['ml-10 flex items-center space-x-1', isRTL ? 'space-x-reverse mr-10 ml-0' : '']">
            <router-link 
              v-for="item in navigation" 
              :key="item.name"
              :to="item.path"
              :class="[
                $route.path === item.path 
                  ? 'bg-rose-50 text-rose-700 border-rose-200' 
                  : 'text-gray-700 hover:bg-rose-50 hover:text-rose-600 border-transparent',
                'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border-2 hover:scale-105 flex items-center',
                isRTL ? 'flex-row-reverse' : ''
              ]"
            >
              <component :is="item.icon" :class="['h-4 w-4 inline', isRTL ? 'ml-2 mr-0' : 'mr-2']" />
              {{ t(item.nameKey) }}
            </router-link>
          </div>
        </div>

        <!-- Language Switcher & CTA -->
        <div :class="['hidden md:flex items-center space-x-4', isRTL ? 'space-x-reverse' : '']">
          <LanguageSwitcher />
          
          <router-link 
            to="/reservation"
            :class="[
              'bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center',
              isRTL ? 'flex-row-reverse' : ''
            ]"
          >
            <Calendar :class="['h-4 w-4', isRTL ? 'ml-2 mr-0' : 'mr-2']" />
            {{ t('nav.reserve') }}
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div :class="['md:hidden flex items-center space-x-2', isRTL ? 'space-x-reverse' : '']">
          <LanguageSwitcher />
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
              'block px-4 py-3 rounded-r-lg text-base font-medium transition-colors flex items-center',
              isRTL ? 'flex-row-reverse border-r-4 border-l-0 rounded-l-lg rounded-r-none' : ''
            ]"
          >
            <component :is="item.icon" :class="['h-5 w-5', isRTL ? 'ml-3 mr-0' : 'mr-3']" />
            {{ t(item.nameKey) }}
          </router-link>
          
          <router-link 
            to="/reservation"
            @click="mobileMenuOpen = false"
            :class="[
              'bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-3 rounded-lg font-semibold flex items-center mt-4 mx-2',
              isRTL ? 'flex-row-reverse' : ''
            ]"
          >
            <Calendar :class="['h-5 w-5', isRTL ? 'ml-3 mr-0' : 'mr-3']" />
            {{ t('nav.reserve') }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Cake, Menu, X, Home, ShoppingBag, Calendar, Users } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    Cake,
    Menu,
    X,
    Home,
    ShoppingBag,
    Calendar,
    Users,
    LanguageSwitcher
  },
  setup() {
    const { t, isRTL } = useI18n()
    const mobileMenuOpen = ref(false)

    const navigation = [
      { name: 'Home', nameKey: 'nav.home', path: '/', icon: 'Home' },
      { name: 'Products', nameKey: 'nav.products', path: '/products', icon: 'ShoppingBag' },
      { name: 'Reservation', nameKey: 'nav.reservation', path: '/reservation', icon: 'Calendar' },
      { name: 'About', nameKey: 'nav.about', path: '/about', icon: 'Users' }
    ]

    return {
      t,
      isRTL,
      mobileMenuOpen,
      navigation
    }
  }
})
</script>
