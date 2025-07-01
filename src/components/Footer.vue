<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo and Description -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center mb-6">
            <div class="bg-gradient-to-br from-rose-500 to-pink-600 p-3 rounded-xl mr-4">
              <Cake class="h-8 w-8 text-white" />
            </div>
            <div>
              <span class="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                Délices Sucrés
              </span>
              <p class="text-sm text-gray-400">{{ t('footer.since') }}</p>
            </div>
          </div>
          <p class="text-gray-300 mb-6 leading-relaxed">
            {{ t('footer.description') }}
          </p>
          <div class="flex space-x-4">
            <a href="#" class="bg-gradient-to-br from-rose-500 to-pink-600 rounded-full p-3 hover:scale-110 transition-transform duration-200 group">
              <Phone class="h-5 w-5 group-hover:animate-pulse" />
            </a>
            <a href="#" class="bg-gradient-to-br from-rose-500 to-pink-600 rounded-full p-3 hover:scale-110 transition-transform duration-200 group">
              <Mail class="h-5 w-5 group-hover:animate-pulse" />
            </a>
            <a href="#" class="bg-gradient-to-br from-rose-500 to-pink-600 rounded-full p-3 hover:scale-110 transition-transform duration-200 group">
              <MapPin class="h-5 w-5 group-hover:animate-pulse" />
            </a>
            <a href="#" class="bg-gradient-to-br from-rose-500 to-pink-600 rounded-full p-3 hover:scale-110 transition-transform duration-200 group">
              <Instagram class="h-5 w-5 group-hover:animate-pulse" />
            </a>
          </div>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-rose-300">{{ t('footer.contact') }}</h3>
          <div class="space-y-4 text-gray-300">
            <div class="flex items-center group hover:text-rose-300 transition-colors">
              <div class="bg-rose-500/20 rounded-lg p-2 mr-3 group-hover:bg-rose-500/30 transition-colors">
                <Phone class="h-4 w-4 text-rose-400" />
              </div>
              <span>01 23 45 67 89</span>
            </div>
            <div class="flex items-center group hover:text-rose-300 transition-colors">
              <div class="bg-rose-500/20 rounded-lg p-2 mr-3 group-hover:bg-rose-500/30 transition-colors">
                <Mail class="h-4 w-4 text-rose-400" />
              </div>
              <span>contact@delices-sucres.fr</span>
            </div>
            <div class="flex items-start group hover:text-rose-300 transition-colors">
              <div class="bg-rose-500/20 rounded-lg p-2 mr-3 mt-0.5 group-hover:bg-rose-500/30 transition-colors">
                <MapPin class="h-4 w-4 text-rose-400" />
              </div>
              <div>
                <p>123 Rue de la Pâtisserie</p>
                <p>75001 Paris, France</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Hours -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-rose-300">{{ t('footer.hours') }}</h3>
          <div class="space-y-3 text-gray-300">
            <div class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
              <span class="font-medium">{{ t('footer.monFri') }}</span>
              <span class="text-rose-300">7h - 19h</span>
            </div>
            <div class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
              <span class="font-medium">{{ t('footer.saturday') }}</span>
              <span class="text-rose-300">8h - 20h</span>
            </div>
            <div class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
              <span class="font-medium">{{ t('footer.sunday') }}</span>
              <span class="text-rose-300">9h - 18h</span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            &copy; 2024 Délices Sucrés. {{ t('footer.rights') }}
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-rose-300 text-sm transition-colors">{{ t('footer.legal') }}</a>
            <a href="#" class="text-gray-400 hover:text-rose-300 text-sm transition-colors">{{ t('footer.privacy') }}</a>
            <a href="#" class="text-gray-400 hover:text-rose-300 text-sm transition-colors">{{ t('footer.terms') }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Cake, Phone, Mail, MapPin, Instagram } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'

export default defineComponent({
  name: 'Footer',
  components: {
    Cake,
    Phone,
    Mail,
    MapPin,
    Instagram
  },
  setup() {
    const { t } = useI18n()

    return { t }
  }
})
</script>
