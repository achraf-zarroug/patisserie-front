<template>
  <div id="app" :class="['min-h-screen bg-rose-50', isRTL ? 'rtl' : 'ltr']" :dir="isRTL ? 'rtl' : 'ltr'">
    <Navbar />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useI18n } from './composables/useI18n'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  setup() {
    const { isRTL, setLocale } = useI18n()

    onMounted(() => {
      // Set initial locale from localStorage or browser language
      const savedLocale = localStorage.getItem('locale')
      if (savedLocale && ['fr', 'en', 'ar'].includes(savedLocale)) {
        setLocale(savedLocale as any)
      } else {
        // Detect browser language
        const browserLang = navigator.language.split('-')[0]
        if (['fr', 'en', 'ar'].includes(browserLang)) {
          setLocale(browserLang as any)
        }
      }
    })

    return {
      isRTL
    }
  }
})
</script>

<style>
/* RTL Support */
.rtl {
  direction: rtl;
}

.ltr {
  direction: ltr;
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #e11d48;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #be185d;
}

/* RTL specific styles */
.rtl .space-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}

/* Ensure proper text alignment for Arabic */
.rtl h1, .rtl h2, .rtl h3, .rtl h4, .rtl h5, .rtl h6 {
  text-align: right;
}

.rtl p {
  text-align: right;
}

/* Fix for Arabic font rendering */
.rtl {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, 'Arabic UI Text', 'Geeza Pro', 'Traditional Arabic';
}
</style>
