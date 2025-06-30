<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 py-20 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-20 w-32 h-32 bg-rose-300 rounded-full blur-xl"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-pink-300 rounded-full blur-xl"></div>
        <div class="absolute top-1/2 left-1/4 w-20 h-20 bg-rose-400 rounded-full blur-xl"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center">
          <span class="inline-block bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            👥 Notre Histoire
          </span>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            À Propos de 
            <span class="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Délices Sucrés
            </span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depuis plus de 15 ans, nous créons des moments de bonheur à travers nos créations pâtissières exceptionnelles, alliant tradition et innovation.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="inline-block bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Notre Aventure
            </span>
            <h2 class="text-4xl font-bold text-gray-800 mb-8">Une Histoire de Passion</h2>
            <div class="space-y-6 text-gray-600 leading-relaxed">
              <p class="text-lg">
                Fondée en <strong class="text-rose-600">2008</strong> par Marie et Pierre Dubois, Délices Sucrés est née d'une passion commune pour la pâtisserie traditionnelle française et l'innovation culinaire.
              </p>
              <p>
                Nos maîtres pâtissiers combinent techniques ancestrales et créativité moderne pour vous offrir des gâteaux d'exception, préparés quotidiennement avec les meilleurs ingrédients sélectionnés avec soin.
              </p>
              <p>
                Chaque création raconte une histoire, chaque bouchée est un voyage gustatif unique qui fait de vos moments spéciaux des souvenirs inoubliables.
              </p>
            </div>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 mt-10">
              <div class="text-center">
                <div class="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">15+</div>
                <div class="text-sm text-gray-600 font-medium">Années d'expérience</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">5000+</div>
                <div class="text-sm text-gray-600 font-medium">Clients satisfaits</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">50+</div>
                <div class="text-sm text-gray-600 font-medium">Créations uniques</div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop&crop=center" 
                alt="Marie et Pierre Dubois, fondateurs de Délices Sucrés"
                class="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
            <!-- Floating Elements -->
            <div class="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
              <Award class="h-8 w-8 text-rose-500" />
            </div>
            <div class="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <Heart class="h-8 w-8 text-pink-500" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Behind the Scenes -->
    <section class="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🎬 Dans les Coulisses
          </span>
          <h2 class="text-4xl font-bold text-gray-800 mb-6">Notre Atelier en Action</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(scene, index) in behindScenes" :key="index" class="group">
            <div class="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                :src="scene.image" 
                :alt="scene.title"
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <h3 class="text-lg font-semibold mb-2">{{ scene.title }}</h3>
                <p class="text-sm opacity-90">{{ scene.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nos Engagements
          </span>
          <h2 class="text-4xl font-bold text-gray-800 mb-6">Nos Valeurs Fondamentales</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Des principes qui guident chacune de nos actions et créations
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="value in values" :key="value.title" class="group text-center">
            <div class="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
              <component :is="value.icon" class="h-10 w-10 text-rose-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">{{ value.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Notre Équipe
          </span>
          <h2 class="text-4xl font-bold text-gray-800 mb-6">Les Artisans de vos Rêves</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Rencontrez les passionnés qui donnent vie à vos créations sucrées avec talent et dévouement.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.name" class="group text-center">
            <div class="relative mb-6">
              <div class="rounded-2xl overflow-hidden w-40 h-40 mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <img 
                  :src="member.photo" 
                  :alt="member.name"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <!-- Badge -->
              <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-lg border-2 border-rose-100">
                <component :is="member.badge" class="h-4 w-4 text-rose-500" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">{{ member.name }}</h3>
            <p class="text-rose-600 font-semibold mb-3">{{ member.role }}</p>
            <p class="text-gray-600 text-sm leading-relaxed">{{ member.description }}</p>
            
            <!-- Skills -->
            <div class="flex flex-wrap justify-center gap-2 mt-4">
              <span v-for="skill in member.skills" :key="skill" class="bg-rose-100 text-rose-700 text-xs px-2 py-1 rounded-full">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-white rounded-2xl p-12 shadow-2xl">
          <div class="bg-gradient-to-br from-rose-100 to-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <MessageCircle class="h-10 w-10 text-rose-500" />
          </div>
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Prêt à Créer Ensemble ?
          </h2>
          <p class="text-gray-600 mb-8 text-lg leading-relaxed">
            Nous serions ravis de discuter de votre projet et de créer le gâteau parfait pour votre occasion spéciale.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/reservation"
              class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
            >
              <Calendar class="h-5 w-5 mr-2" />
              Réserver une Consultation
            </router-link>
            <a 
              href="tel:0123456789"
              class="border-2 border-rose-500 text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-rose-500 hover:text-white transition-all duration-200 hover:scale-105 inline-flex items-center justify-center"
            >
              <Phone class="h-5 w-5 mr-2" />
              Nous Appeler
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { 
  Award, Heart, Leaf, Users, User, Star, Clock, Shield, 
  Calendar, Phone, MessageCircle 
} from 'lucide-vue-next'

export default defineComponent({
  name: 'AboutPage',
  components: {
    Award,
    Heart,
    Leaf,
    Users,
    User,
    Star,
    Clock,
    Shield,
    Calendar,
    Phone,
    MessageCircle
  },
  setup() {
    const behindScenes = [
      {
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center',
        title: 'Préparation des Pâtes',
        description: 'Chaque pâte est préparée avec soin selon nos recettes traditionnelles'
      },
      {
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center',
        title: 'Décoration Artistique',
        description: 'Nos pâtissiers créent des œuvres d\'art comestibles uniques'
      },
      {
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop&crop=center',
        title: 'Cuisson Parfaite',
        description: 'Surveillance constante pour une cuisson optimale de chaque création'
      }
    ]

    const values = [
      {
        icon: 'Award',
        title: 'Excellence',
        description: 'Nous visons l\'excellence dans chaque création, du choix des ingrédients à la présentation finale.'
      },
      {
        icon: 'Heart',
        title: 'Passion',
        description: 'La passion guide chacun de nos gestes et se ressent dans chaque bouchée de nos créations.'
      },
      {
        icon: 'Leaf',
        title: 'Naturel',
        description: 'Ingrédients naturels et de qualité premium, sélectionnés avec soin auprès de producteurs locaux.'
      },
      {
        icon: 'Shield',
        title: 'Confiance',
        description: 'Une relation de confiance avec nos clients, basée sur la transparence et la qualité constante.'
      }
    ]

    const team = [
      {
        name: 'Marie Dubois',
        role: 'Chef Pâtissière & Fondatrice',
        description: 'Diplômée de l\'École Ferrandi, Marie apporte 20 ans d\'expérience et sa passion pour l\'excellence culinaire.',
        photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
        badge: 'Award',
        skills: ['Pâtisserie Fine', 'Création', 'Formation']
      },
      {
        name: 'Pierre Dubois',
        role: 'Maître Chocolatier & Co-fondateur',
        description: 'Spécialiste du chocolat et des créations artistiques, Pierre sublime chaque gâteau avec son expertise unique.',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        badge: 'Star',
        skills: ['Chocolaterie', 'Sculpture', 'Innovation']
      },
      {
        name: 'Sophie Martin',
        role: 'Pâtissière Senior',
        description: 'Experte en pâtisserie française traditionnelle, Sophie perpétue les recettes ancestrales avec modernité.',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        badge: 'Heart',
        skills: ['Tradition', 'Viennoiserie', 'Qualité']
      }
    ]

    return {
      behindScenes,
      values,
      team
    }
  }
})
</script>
