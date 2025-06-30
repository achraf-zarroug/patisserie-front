<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 py-20 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-20 h-20 bg-rose-300 rounded-full blur-xl"></div>
        <div class="absolute bottom-10 right-20 w-28 h-28 bg-pink-300 rounded-full blur-xl"></div>
      </div>
      
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <span class="inline-block bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
          📅 Réservation
        </span>
        <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Réservez Votre 
          <span class="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Gâteau
          </span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Commandez votre gâteau personnalisé pour vos événements spéciaux. Nos pâtissiers s'occupent de tout avec passion et expertise.
        </p>
      </div>
    </section>

    <!-- Reservation Form -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-rose-100">
          <!-- Form Header -->
          <div class="text-center mb-8">
            <div class="bg-gradient-to-br from-rose-100 to-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calendar class="h-8 w-8 text-rose-500" />
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Formulaire de Réservation</h2>
            <p class="text-gray-600">Remplissez ce formulaire et nous vous contacterons sous 24h</p>
          </div>

          <form @submit.prevent="submitReservation" class="space-y-8">
            <!-- Personal Information -->
            <div class="bg-rose-50/50 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <User class="h-5 w-5 text-rose-500 mr-2" />
                Informations Personnelles
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                  <input 
                    v-model="reservation.name"
                    type="text" 
                    required
                    class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom complet"
                  >
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    v-model="reservation.email"
                    type="email" 
                    required
                    class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                  >
                </div>
              </div>
              
              <div class="mt-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                <input 
                  v-model="reservation.phone"
                  type="tel" 
                  required
                  class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                  placeholder="06 12 34 56 78"
                >
              </div>
            </div>

            <!-- Event Details -->
            <div class="bg-pink-50/50 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Cake class="h-5 w-5 text-rose-500 mr-2" />
                Détails de votre Commande
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Date souhaitée *</label>
                  <input 
                    v-model="reservation.date"
                    type="date" 
                    required
                    :min="minDate"
                    class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                  >
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nombre de personnes *</label>
                  <input 
                    v-model="reservation.guests"
                    type="number" 
                    min="1"
                    max="100"
                    required
                    class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                    placeholder="8"
                  >
                </div>
              </div>

              <div class="mt-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">Type de gâteau *</label>
                <select 
                  v-model="reservation.cakeType"
                  required
                  class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choisir un type</option>
                  <option value="anniversaire">🎂 Gâteau d'anniversaire</option>
                  <option value="mariage">💒 Gâteau de mariage</option>
                  <option value="bapteme">👶 Gâteau de baptême</option>
                  <option value="communion">⛪ Gâteau de communion</option>
                  <option value="entreprise">🏢 Événement d'entreprise</option>
                  <option value="personnalise">✨ Gâteau personnalisé</option>
                </select>
              </div>
            </div>

            <!-- Special Instructions -->
            <div class="bg-rose-50/30 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <MessageSquare class="h-5 w-5 text-rose-500 mr-2" />
                Instructions Spéciales
              </h3>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Message / Préférences particulières
                </label>
                <textarea 
                  v-model="reservation.message"
                  rows="4"
                  class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Décrivez vos souhaits : saveurs préférées, allergies, décorations souhaitées, thème de l'événement..."
                ></textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="text-center pt-4">
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send class="h-5 w-5 mr-2" />
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer la Réservation' }}
              </button>
              <p class="text-sm text-gray-500 mt-3">
                * Champs obligatoires - Nous vous répondrons sous 24h
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Comment ça marche ?</h2>
          <p class="text-gray-600 text-lg">Un processus simple en 4 étapes</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in processSteps" :key="index" class="text-center">
            <div class="bg-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span class="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                {{ index + 1 }}
              </span>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ step.title }}</h3>
            <p class="text-gray-600 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Calendar, User, Cake, MessageSquare, Send } from 'lucide-vue-next'

export default defineComponent({
  name: 'ReservationPage',
  components: {
    Calendar,
    User,
    Cake,
    MessageSquare,
    Send
  },
  setup() {
    const isSubmitting = ref(false)
    
    const reservation = ref({
      name: '',
      email: '',
      phone: '',
      date: '',
      cakeType: '',
      guests: '',
      message: ''
    })

    const minDate = computed(() => {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 2) // Minimum 2 jours à l'avance
      return tomorrow.toISOString().split('T')[0]
    })

    const processSteps = [
      {
        title: 'Remplissez le formulaire',
        description: 'Indiquez-nous vos préférences et les détails de votre événement'
      },
      {
        title: 'Nous vous contactons',
        description: 'Notre équipe vous appelle sous 24h pour affiner votre commande'
      },
      {
        title: 'Création sur mesure',
        description: 'Nos pâtissiers préparent votre gâteau avec passion'
      },
      {
        title: 'Livraison ou retrait',
        description: 'Récupérez votre création ou faites-vous livrer'
      }
    ]

    const submitReservation = async () => {
      isSubmitting.value = true
      
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      alert('🎉 Merci pour votre réservation ! Nous vous contactons sous 24h pour finaliser votre commande.')
      
      // Reset form
      reservation.value = {
        name: '',
        email: '',
        phone: '',
        date: '',
        cakeType: '',
        guests: '',
        message: ''
      }
      
      isSubmitting.value = false
    }

    return {
      reservation,
      minDate,
      processSteps,
      isSubmitting,
      submitReservation
    }
  }
})
</script>
