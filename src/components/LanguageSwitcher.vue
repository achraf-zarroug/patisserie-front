<template>
  <div class="relative" ref="dropdownRef">
    <button
      @click="isOpen = !isOpen"
      :class="[
        'flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200',
        isRTL ? 'space-x-reverse' : '',
        'hover:bg-rose-50 text-gray-700 hover:text-rose-600'
      ]"
    >
      <span class="text-lg">{{ currentLocale.flag }}</span>
      <span class="text-sm font-medium hidden sm:block">{{ currentLocale.name }}</span>
      <ChevronDown :class="['h-4 w-4 transition-transform duration-200', isOpen ? 'rotate-180' : '']" />
    </button>

    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        :class="[
          'absolute top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-rose-100 py-2 z-50',
          isRTL ? 'left-0' : 'right-0'
        ]"
      >
        <button
          v-for="localeOption in availableLocales"
          :key="localeOption.code"
          @click="changeLocale(localeOption.code)"
          :class="[
            'w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-rose-50 transition-colors duration-200',
            isRTL ? 'space-x-reverse text-right' : '',
            locale === localeOption.code ? 'bg-rose-50 text-rose-600' : 'text-gray-700'
          ]"
        >
          <span class="text-lg">{{ localeOption.flag }}</span>
          <span class="font-medium">{{ localeOption.name }}</span>
          <Check v-if="locale === localeOption.code" class="h-4 w-4 text-rose-500 ml-auto" />
        </button>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from 'vue'
import { ChevronDown, Check } from 'lucide-vue-next'
import { useI18n, type Locale } from '../composables/useI18n'

export default defineComponent({
  name: 'LanguageSwitcher',
  components: {
    ChevronDown,
    Check
  },
  setup() {
    const { locale, isRTL, setLocale, availableLocales } = useI18n()
    const isOpen = ref(false)
    const dropdownRef = ref<HTMLElement>()

    const currentLocale = computed(() => 
      availableLocales.find(l => l.code === locale.value) || availableLocales[0]
    )

    const changeLocale = (newLocale: Locale) => {
      setLocale(newLocale)
      isOpen.value = false
    }

    const handleClickOutside = (event: Event) => {
      if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false
      }
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      locale,
      isRTL,
      isOpen,
      dropdownRef,
      currentLocale,
      availableLocales,
      changeLocale
    }
  }
})
</script>
