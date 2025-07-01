<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 py-20 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 right-10 w-24 h-24 bg-rose-300 rounded-full blur-xl"></div>
        <div class="absolute bottom-20 left-20 w-32 h-32 bg-pink-300 rounded-full blur-xl"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center">
          <span class="inline-block bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            🍰 {{ t('products.collection') }}
          </span>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            {{ t('products.title').split(' ')[0] }}
            <span class="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              {{ t('products.title').split(' ').slice(1).join(' ') }}
            </span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {{ t('products.description') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            :class="[ 
              selectedCategory === category 
                ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg scale-105' 
                : 'bg-white text-rose-600 border-2 border-rose-200 hover:border-rose-400 hover:bg-rose-50',
              'px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-md' 
            ]"
          >
            {{ t(`products.${category.toLowerCase()}`) || category }}
          </button>
        </div>

        <!-- Products Count -->
        <div class="text-center mb-8">
          <p class="text-gray-600">
            <span class="font-semibold text-rose-600">{{ filteredProducts.length }}</span> 
            {{ filteredProducts.length > 1 ? t('products.available') : t('products.availableSingle') }}
          </p>
        </div>
        
        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            v-for="product in filteredProducts" 
            :key="product.id"
            :product="product"
            :show-category="true"
            @order="handleOrder"
          />
        </div>

        <!-- Empty State -->
        <div v-if="filteredProducts.length === 0" class="text-center py-16">
          <div class="bg-gradient-to-br from-rose-100 to-pink-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <Search class="h-12 w-12 text-rose-400" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ t('products.noResults') }}</h3>
          <p class="text-gray-600 mb-6">{{ t('products.noResultsDesc') }}</p>
          <button 
            @click="selectedCategory = 'Tous'"
            class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-200"
          >
            {{ t('products.seeAll') }}
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-white rounded-2xl p-8 shadow-xl">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            {{ t('products.customCake') }}
          </h2>
          <p class="text-gray-600 mb-6 text-lg">
            {{ t('products.customCakeDesc') }}
          </p>
          <router-link 
            to="/reservation"
            class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center"
          >
            <Calendar class="h-5 w-5 mr-2" />
            {{ t('products.consultation') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Search, Calendar } from 'lucide-vue-next'
import ProductCard from '../components/ProductCard.vue'
import { useI18n } from '../composables/useI18n'

export default defineComponent({
  name: 'ProductsPage',
  components: {
    ProductCard,
    Search,
    Calendar
  },
  setup() {
    const { t } = useI18n()
    const selectedCategory = ref('Tous')

    const categories = ['Tous', 'Classiques', 'Tartes', 'Signature']

    const allProducts = [
      {
        id: 1,
        name: "Chocolat Fondant",
        description: "Un gâteau au chocolat riche et fondant, parfait pour les amateurs de chocolat.",
        price: 30,
        category: "Classiques",
      },
      {
        id: 2,
        name: "Tarte aux Fraises",
        description: "Tarte fraîche avec une crème pâtissière légère et des fraises de saison.",
        price: 28,
        category: "Tartes",
      },
      {
        id: 3,
        name: "Signature Rose",
        description: "Notre gâteau signature avec une décoration délicate à base de roses comestibles.",
        price: 45,
        category: "Signature",
      },
      {
        id: 4,
        name: "Tarte Citron Meringuée",
        description: "Classique tarte au citron avec une meringue légère et croustillante.",
        price: 27,
        category: "Tartes",
      },
      {
        id: 5,
        name: "Gâteau Vanille-Framboise",
        description: "Gâteau moelleux à la vanille avec une compote de framboises fraîches.",
        price: 35,
        category: "Classiques",
      },
      {
        id: 6,
        name: "Signature Chocolat Blanc",
        description: "Gâteau signature avec chocolat blanc et éclats de pistaches.",
        price: 48,
        category: "Signature",
      },
      {
        id: 7,
        name: "Tarte aux Pommes",
        description: "Tarte traditionnelle aux pommes avec une pâte sablée maison.",
        price: 26,
        category: "Tartes",
      },
      {
        id: 8,
        name: "Gâteau Forêt Noire",
        description: "Classique gâteau Forêt Noire avec cerises et crème chantilly.",
        price: 38,
        category: "Classiques",
      },
      {
        id: 9,
        name: "Signature Caramel Salé",
        description: "Notre création signature au caramel salé et noisettes croquantes.",
        price: 50,
        category: "Signature",
      },
    ]

    const filteredProducts = computed(() => {
      if (selectedCategory.value === 'Tous') {
        return allProducts
      }
      return allProducts.filter(product => product.category === selectedCategory.value)
    })

    const handleOrder = (product: any) => {
      alert(`${t('products.order')} : ${product.name}`)
    }

    return {
      selectedCategory,
      categories,
      filteredProducts,
      handleOrder,
      t
    }
  }
})
</script>
