<template>
  <div :class="isRTL ? 'rtl' : 'ltr'">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 py-20 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-20 h-20 bg-rose-300 rounded-full blur-xl"></div>
        <div class="absolute bottom-10 right-20 w-28 h-28 bg-pink-300 rounded-full blur-xl"></div>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <span
          class="inline-block bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
        >
          📅 {{ t('reservation.title') }}
        </span>
        <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          {{ t('reservation.reserveYour') }}
          <span class="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            {{ t('reservation.cake') }}
          </span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {{ t('reservation.description') }}
        </p>
      </div>
    </section>

    <!-- Reservation Form -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-rose-100">
          <div class="text-center mb-8">
            <div
              class="bg-gradient-to-br from-rose-100 to-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
            >
              <Calendar class="h-8 w-8 text-rose-500" />
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ t('reservation.formTitle') }}</h2>
            <p class="text-gray-600">{{ t('reservation.formDesc') }}</p>
          </div>

          <form @submit.prevent="submitReservation" class="space-y-8">
            <!-- Personal Information -->
            <div class="bg-rose-50/50 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <User class="h-5 w-5 text-rose-500 mr-2" />
                {{ t('reservation.personalInfo') }}
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('reservation.fullName') }} *</label>
                  <input
                    v-model="reservation.name"
                    type="text"
                    required
                    :placeholder="t('reservation.fullName')"
                    class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('reservation.email') }} *</label>
                  <input
                    v-model="reservation.email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
              <div class="mt-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('reservation.phone') }} *</label>
                <input
                  v-model="reservation.phone"
                  type="tel"
                  required
                  placeholder="06 12 34 56 78"
                  class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <!-- Order Details -->
            <div class="bg-pink-50/50 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Cake class="h-5 w-5 text-rose-500 mr-2" />
                {{ t('reservation.orderDetails') }}
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('reservation.desiredDate') }} *</label>
                  <input
                    v-model="reservation.date"
                    type="date"
                    required
                    :min="minDate"
                    class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('reservation.guests') }} *</label>
                  <input
                    v-model="reservation.guests"
                    type="number"
                    min="1"
                    max="100"
                    required
                    placeholder="8"
                    class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
              <div class="mt-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('reservation.cakeType') }} *</label>
                <select
                  v-model="reservation.cakeType"
                  required
                  class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">{{ t('reservation.chooseCakeType') }}</option>
                  <option value="anniversaire">🎂 {{ t('reservation.birthday') }}</option>
                  <option value="mariage">💒 {{ t('reservation.wedding') }}</option>
                  <option value="bapteme">👶 {{ t('reservation.baptism') }}</option>
                  <option value="communion">⛪ {{ t('reservation.communion') }}</option>
                  <option value="entreprise">🏢 {{ t('reservation.corporate') }}</option>
                  <option value="personnalise">✨ {{ t('reservation.custom') }}</option>
                </select>
              </div>
            </div>

            <!-- Special Instructions -->
            <div class="bg-rose-50/30 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <MessageSquare class="h-5 w-5 text-rose-500 mr-2" />
                {{ t('reservation.specialInstructions') }}
              </h3>
              <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('reservation.message') }}</label>
              <textarea
                v-model="reservation.message"
                rows="4"
                :placeholder="t('reservation.messagePlaceholder')"
                class="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 resize-none"
              ></textarea>
            </div>

            <!-- Submit -->
            <div class="text-center pt-4">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send class="h-5 w-5 mr-2" />
                {{ isSubmitting ? t('reservation.submitting') : t('reservation.submit') }}
              </button>
              <p class="text-sm text-gray-500 mt-3">{{ t('reservation.required') }}</p>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ t('reservation.howItWorks') }}</h2>
          <p class="text-gray-600 text-lg">{{ t('reservation.process') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in processSteps" :key="index" class="text-center">
            <div
              class="bg-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg"
            >
              <span class="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">{{
                index + 1
              }}</span>
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
import { useI18n } from '../composables/useI18n' // adapte chemin

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
    const { t, isRTL } = useI18n()

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
      const d = new Date()
      d.setDate(d.getDate() + 2)
      return d.toISOString().split('T')[0]
    })

    const processSteps = [
      { title: t('reservation.step1'), description: t('reservation.step1Desc') },
      { title: t('reservation.step2'), description: t('reservation.step2Desc') },
      { title: t('reservation.step3'), description: t('reservation.step3Desc') },
      { title: t('reservation.step4'), description: t('reservation.step4Desc') }
    ]

    const submitReservation = async () => {
      isSubmitting.value = true
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert(t('reservation.thankYouMessage'))
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
      t,
      isRTL,
      reservation,
      minDate,
      processSteps,
      isSubmitting,
      submitReservation
    }
  }
})
</script>
