<template>
  <div :class="isRTL ? 'rtl' : 'ltr'">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 py-24 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-20 h-20 bg-rose-300 rounded-full blur-xl"></div>
        <div class="absolute top-40 right-20 w-32 h-32 bg-pink-300 rounded-full blur-xl"></div>
        <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-rose-400 rounded-full blur-xl"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div :class="['grid grid-cols-1 lg:grid-cols-2 gap-12 items-center', isRTL ? 'lg:grid-flow-col-dense' : '']">
          <div :class="['text-center lg:text-left', isRTL ? 'lg:text-right lg:col-start-2' : '']">
            <div class="mb-8">
              <span class="inline-block bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                ✨ {{ t('home.tagline') }}
              </span>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              {{ t('home.welcome') }}
              <span class="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent block">
                {{ t('home.brandName') }}
              </span>
            </h1>
            <p class="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              {{ t('home.description') }}
            </p>
            <div :class="['flex flex-col sm:flex-row gap-4 justify-center lg:justify-start', isRTL ? 'lg:justify-end' : '']">
              <router-link 
                to="/products"
                :class="[
                  'bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center',
                  isRTL ? 'flex-row-reverse' : ''
                ]"
              >
                <ShoppingBag :class="['h-5 w-5', isRTL ? 'ml-2 mr-0' : 'mr-2']" />
                {{ t('home.discoverCakes') }}
              </router-link>
              <router-link 
                to="/reservation"
                :class="[
                  'border-2 border-rose-500 text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-rose-500 hover:text-white transition-all duration-200 hover:scale-105 inline-flex items-center justify-center',
                  isRTL ? 'flex-row-reverse' : ''
                ]"
              >
                <Calendar :class="['h-5 w-5', isRTL ? 'ml-2 mr-0' : 'mr-2']" />
                {{ t('home.reserveNow') }}
              </router-link>
            </div>
          </div>
          
          <!-- Hero Image -->
          <div :class="['relative', isRTL ? 'lg:col-start-1' : '']">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=500&fit=crop&crop=center" 
                alt="Gâteaux artisanaux"
                class="w-full h-96 object-cover"
                loading="eager"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>
            </div>
            
            <!-- Floating Cards -->
            <div :class="['absolute -top-6 bg-white rounded-xl p-4 shadow-xl', isRTL ? '-right-6' : '-left-6']">
              <div class="flex items-center space-x-2">
                <Star class="h-5 w-5 text-yellow-400 fill-current" />
                <span class="text-sm font-semibold text-gray-800">4.9/5</span>
              </div>
              <p class="text-xs text-gray-600">+500 avis</p>
            </div>
            
            <div :class="['absolute -bottom-6 bg-white rounded-xl p-4 shadow-xl', isRTL ? '-left-6' : '-right-6']">
              <div class="flex items-center space-x-2">
                <Award class="h-5 w-5 text-rose-500" />
                <span class="text-sm font-semibold text-gray-800">Artisan</span>
              </div>
              <p class="text-xs text-gray-600">{{ t('home.tagline').split(' ').slice(-1)[0] }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {{ t('home.ourCreations') }}
          </span>
          <h2 class="text-4xl font-bold text-gray-800 mb-6">{{ t('home.specialties') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {{ t('home.specialtiesDesc') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id"
            :product="product"
            @order="handleOrder"
          />
        </div>
        
        <div class="text-center mt-12">
          <router-link 
            to="/products"
            :class="['inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold group', isRTL ? 'flex-row-reverse' : '']"
          >
            {{ t('home.seeCollection') }}
            <ArrowRight :class="['h-5 w-5 group-hover:translate-x-1 transition-transform', isRTL ? 'mr-2 ml-0 rotate-180 group-hover:-translate-x-1' : 'ml-2']" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            📸 {{ t('home.gallery') }}
          </span>
          <h2 class="text-4xl font-bold text-gray-800 mb-6">{{ t('home.galleryTitle') }}</h2>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(image, index) in galleryImages" :key="index" class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                :src="image.src" 
                :alt="image.alt"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div :class="['absolute bottom-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300', isRTL ? 'right-4' : 'left-4']">
                <p class="text-sm font-semibold">{{ image.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {{ t('home.commitments') }}
          </span>
          <h2 class="text-4xl font-bold text-gray-800 mb-6">{{ t('home.whyChoose') }}</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center group">
            <div class="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Heart class="h-10 w-10 text-rose-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">{{ t('home.madeWithLove') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ t('home.madeWithLoveDesc') }}</p>
          </div>
          
          <div class="text-center group">
            <div class="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Star class="h-10 w-10 text-rose-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">{{ t('home.premiumIngredients') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ t('home.premiumIngredientsDesc') }}</p>
          </div>
          
          <div class="text-center group">
            <div class="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Clock class="h-10 w-10 text-rose-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">{{ t('home.freshness') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ t('home.freshnessDesc') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Heart, Star, Clock, ShoppingBag, Calendar, ArrowRight, Award } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'
import ProductCard from '../components/ProductCard.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    Heart,
    Star,
    Clock,
    ShoppingBag,
    Calendar,
    ArrowRight,
    Award,
    ProductCard
  },
  setup() {
    const { t, isRTL } = useI18n()

    const featuredProducts = [
      {
        id: 1,
        name: 'Forêt Noire Royale',
        description: 'Un classique revisité avec cerises fraîches et chantilly maison',
        price: 28,
        category: 'Classiques'
      },
      {
        id: 2,
        name: 'Tarte Citron Meringuée',
        description: 'Pâte sablée, crème citron acidulée et meringue dorée',
        price: 24,
        category: 'Tartes'
      },
      {
        id: 3,
        name: 'Opéra Chocolat',
        description: 'Biscuit Joconde, ganache chocolat et glaçage miroir',
        price: 32,
        category: 'Signature'
      }
    ]

    const galleryImages = [
      {
        src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&crop=center',
        alt: 'Notre atelier de pâtisserie',
        title: 'Notre Atelier'
      },
      {
        src: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=300&h=300&fit=crop&crop=center',
        alt: 'Gâteau de mariage élégant',
        title: 'Gâteaux de Mariage'
      },
      {
        src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&crop=center',
        alt: 'Pâtissier au travail',
        title: 'Savoir-faire'
      },
      {
        src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop&crop=center',
        alt: 'Vitrine avec nos gâteaux',
        title: 'Notre Vitrine'
      },
      {
        src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop&crop=center',
        alt: 'Décoration de gâteau',
        title: 'Décoration'
      },
      {
        src: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop&crop=center',
        alt: 'Ingrédients frais et naturels',
        title: 'Ingrédients Premium'
      },
      {
        src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=300&fit=crop&crop=center',
        alt: 'Notre équipe de pâtissiers',
        title: 'Notre Équipe'
      },
      {
        src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop&crop=center',
        alt: 'Gâteau d\'anniversaire coloré',
        title: 'Anniversaires'
      }
    ]

    const handleOrder = (product: any) => {
      alert(`Commande pour ${product.name} ajoutée !`)
    }

    return {
      t,
      isRTL,
      featuredProducts,
      galleryImages,
      handleOrder
    }
  }
})
</script>
