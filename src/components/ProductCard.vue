<template>
  <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-rose-100">
    <div class="relative h-48 overflow-hidden">
      <img 
        :src="productImage" 
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="absolute top-4 right-4">
        <button class="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg">
          <Heart class="h-4 w-4 text-rose-400 hover:text-rose-600 hover:fill-current transition-colors" />
        </button>
      </div>
      <div v-if="showCategory" class="absolute top-4 left-4">
        <span class="bg-white/90 backdrop-blur-sm text-rose-700 text-xs px-3 py-1 rounded-full font-medium">
          {{ product.category }}
        </span>
      </div>
    </div>
    <div class="p-6">
      <div class="flex justify-between items-start mb-3">
        <h3 class="text-xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
          {{ product.name }}
        </h3>
      </div>
      <p class="text-gray-600 mb-4 leading-relaxed">{{ product.description }}</p>
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <span class="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            {{ product.price }}€
          </span>
          <span class="text-xs text-gray-500">Prix TTC</span>
        </div>
        <button 
          @click="handleOrder"
          class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center"
        >
          <ShoppingCart class="h-4 w-4 mr-2" />
          Commander
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from 'vue'
import { Heart, ShoppingCart } from 'lucide-vue-next'

interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
}

export default defineComponent({
  name: 'ProductCard',
  components: {
    Heart,
    ShoppingCart
  },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    },
    showCategory: {
      type: Boolean,
      default: false
    }
  },
  emits: ['order'],
  setup(props, { emit }) {
    const handleOrder = () => {
      emit('order', props.product)
    }

    // Images de placeholder utilisant Unsplash
    const productImage = computed(() => {
      const imageMap: { [key: number]: string } = {
        1: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center',
        2: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop&crop=center',
        3: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&crop=center',
        4: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop&crop=center',
        5: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop&crop=center',
        6: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
        7: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop&crop=center',
        8: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop&crop=center',
        9: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=300&fit=crop&crop=center'
      }
      return imageMap[props.product.id] || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center'
    })

    return {
      handleOrder,
      productImage
    }
  }
})
</script>
