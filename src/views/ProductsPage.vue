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
            🍰 Notre Collection
          </span>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Nos Délicieux 
            <span class="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Gâteaux
            </span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explorez notre collection complète de gâteaux artisanaux, créés avec passion pour sublimer toutes vos occasions spéciales.
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
            {{ category }}
          </button>
        </div>

        <!-- Products Count -->
        <div class="text-center mb-8">
          <p class="text-gray-600">
            <span class="font-semibold text-rose-600">{{ filteredProducts.length }}</span> 
            {{ filteredProducts.length > 1 ? 'gâteaux disponibles' : 'gâteau disponible' }}
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
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Aucun gâteau trouvé</h3>
          <p class="text-gray-600 mb-6">Essayez de sélectionner une autre catégorie</p>
          <button 
            @click="selectedCategory = 'Tous'"
            class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-200"
          >
            Voir tous les gâteaux
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-white rounded-2xl p-8 shadow-xl">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Envie d'un Gâteau Personnalisé ?
          </h2>
          <p class="text-gray-600 mb-6 text-lg">
            Nos pâtissiers peuvent créer le gâteau de vos rêves selon vos goûts et préférences.
          </p>
          <router-link 
            to="/reservation"
            class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center"
          >
            <Calendar class="h-5 w-5 mr-2" />
            Réserver une Consultation
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

export default defineComponent({
  name: 'ProductsPage',
  components: {
    ProductCard,
    Search,
    Calendar
  },
  setup() {
    const selectedCategory = ref('Tous')
    const categories = ['Tous', 'Classiques', 'Tartes', 'Signature']

    const allProducts = [
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
      },
      {
        id: 4,
        name: 'Saint-Honoré',
        description: 'Pâte feuilletée, choux caramélisés et crème Chiboust',
        price: 35,
        category: 'Signature'
      },
      {
        id: 5,
        name: 'Tarte aux Fraises',
        description: 'Pâte sucrée, crème pâtissière vanille et fraises de saison',
        price: 26,
        category: 'Tartes'
      },
      {
        id: 6,
        name: 'Millefeuille Traditionnel',
        description: 'Pâte feuilletée croustillante et crème pâtissière onctueuse',
        price: 22,
        category: 'Classiques'
      },
      {
        id: 7,
        name: 'Fraisier Premium',
        description: 'Génoise moelleuse, fraises fraîches et crème mousseline',
        price: 30,
        category: 'Signature'
      },
      {
        id: 8,
        name: 'Tarte Tatin',
        description: 'Pommes caramélisées sur pâte brisée, servie tiède',
        price: 20,
        category: 'Tartes'
      },
      {
        id: 9,
        name: 'Paris-Brest',
        description: 'Pâte à choux pralinée garnie de crème mousseline pralin',
        price: 25,
        category: 'Classiques'
      }
    ]

    const filteredProducts = computed(() => {
      if (selectedCategory.value === 'Tous') {
        return allProducts
      }
      return allProducts.filter(product => product.category === selectedCategory.value)
    })

    const handleOrder = (product: any) => {
      alert(`Commande pour ${product.name} ajoutée !`)
    }

    return {
      selectedCategory,
      categories,
      filteredProducts,
      handleOrder
    }
  }
})
</script>
