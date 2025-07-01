import { ref, computed } from "vue"

export type Locale = "fr" | "en" | "ar"

const currentLocale = ref<Locale>("fr")

const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      products: "Nos Gâteaux",
      reservation: "Réservation",
      about: "À Propos",
      reserve: "Réserver",
    },
    // Home Page
    home: {
      tagline: "Pâtisserie Artisanale depuis 2008",
      welcome: "Bienvenue chez",
      brandName: "Délices Sucrés",
      subtitle: "Pâtisserie Artisanale",
      description:
        "Découvrez nos créations artisanales exceptionnelles, des gâteaux préparés avec amour, passion et les meilleurs ingrédients sélectionnés avec soin.",
      discoverCakes: "Découvrir nos Gâteaux",
      reserveNow: "Réserver Maintenant",
      ourCreations: "Nos Créations",
      specialties: "Nos Spécialités du Moment",
      specialtiesDesc:
        "Découvrez une sélection de nos créations les plus appréciées, préparées quotidiennement par nos maîtres pâtissiers avec passion et savoir-faire.",
      seeCollection: "Voir toute notre collection",
      gallery: "Notre Atelier",
      galleryTitle: "Nos Créations en Images",
      commitments: "Nos Engagements",
      whyChoose: "Pourquoi Nous Choisir ?",
      madeWithLove: "Fait avec Amour",
      madeWithLoveDesc:
        "Chaque gâteau est préparé avec passion, attention aux détails et un savoir-faire transmis de génération en génération.",
      premiumIngredients: "Ingrédients Premium",
      premiumIngredientsDesc:
        "Nous sélectionnons uniquement les meilleurs ingrédients naturels et de première qualité pour nos créations.",
      freshness: "Fraîcheur Garantie",
      freshnessDesc:
        "Nos gâteaux sont préparés quotidiennement dans notre atelier pour vous garantir une fraîcheur optimale.",
    },
    // Products
    products: {
      collection: "Notre Collection",
      title: "Nos Délicieux Gâteaux",
      description:
        "Explorez notre collection complète de gâteaux artisanaux, créés avec passion pour sublimer toutes vos occasions spéciales.",
      all: "Tous",
      classics: "Classiques",
      tarts: "Tartes",
      signature: "Signature",
      available: "gâteaux disponibles",
      availableSingle: "gâteau disponible",
      order: "Commander",
      priceLabel: "Prix TTC",
      noResults: "Aucun gâteau trouvé",
      noResultsDesc: "Essayez de sélectionner une autre catégorie",
      seeAll: "Voir tous les gâteaux",
      customCake: "Envie d'un Gâteau Personnalisé ?",
      customCakeDesc: "Nos pâtissiers peuvent créer le gâteau de vos rêves selon vos goûts et préférences.",
      consultation: "Réserver une Consultation",
    },
    // Reservation
    reservation: {
      title: "Réservez",
      reserveYour: "Réservez Votre",
      cake: "Gâteau",
      description:
        "Commandez votre gâteau personnalisé pour vos événements spéciaux. Nos pâtissiers s'occupent de tout avec passion et expertise.",
      formTitle: "Formulaire de Réservation",
      formDesc: "Remplissez ce formulaire et nous vous contacterons sous 24h",
      personalInfo: "Informations Personnelles",
      fullName: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      orderDetails: "Détails de votre Commande",
      desiredDate: "Date souhaitée",
      guests: "Nombre de personnes",
      cakeType: "Type de gâteau",
      chooseCakeType: "Choisir un type",
      birthday: "Gâteau d'anniversaire",
      wedding: "Gâteau de mariage",
      baptism: "Gâteau de baptême",
      communion: "Gâteau de communion",
      corporate: "Événement d'entreprise",
      custom: "Gâteau personnalisé",
      specialInstructions: "Instructions Spéciales",
      message: "Message / Préférences particulières",
      messagePlaceholder:
        "Décrivez vos souhaits : saveurs préférées, allergies, décorations souhaitées, thème de l'événement...",
      submit: "Envoyer la Réservation",
      submitting: "Envoi en cours...",
      required: "Champs obligatoires - Nous vous répondrons sous 24h",
      howItWorks: "Comment ça marche ?",
      process: "Un processus simple en 4 étapes",
      step1: "Remplissez le formulaire",
      step1Desc: "Indiquez-nous vos préférences et les détails de votre événement",
      step2: "Nous vous contactons",
      step2Desc: "Notre équipe vous appelle sous 24h pour affiner votre commande",
      step3: "Création sur mesure",
      step3Desc: "Nos pâtissiers préparent votre gâteau avec passion",
      step4: "Livraison ou retrait",
      step4Desc: "Récupérez votre création ou faites-vous livrer",
    },
    // About
    about: {
      ourStory: "Notre Histoire",
      title: "À Propos de Délices Sucrés",
      description:
        "Depuis plus de 15 ans, nous créons des moments de bonheur à travers nos créations pâtissières exceptionnelles, alliant tradition et innovation.",
      ourAdventure: "Notre Aventure",
      passionStory: "Une Histoire de Passion",
      foundedText:
        "Fondée en 2008 par Marie et Pierre Dubois, Délices Sucrés est née d'une passion commune pour la pâtisserie traditionnelle française et l'innovation culinaire.",
      yearsExp: "Années d'expérience",
      satisfiedClients: "Clients satisfaits",
      uniqueCreations: "Créations uniques",
      behindScenes: "Dans les Coulisses",
      workshopTitle: "Notre Atelier en Action",
      values: "Nos Engagements",
      fundamentalValues: "Nos Valeurs Fondamentales",
      valuesDesc: "Des principes qui guident chacune de nos actions et créations",
      excellence: "Excellence",
      excellenceDesc:
        "Nous visons l'excellence dans chaque création, du choix des ingrédients à la présentation finale.",
      passion: "Passion",
      passionDesc: "La passion guide chacun de nos gestes et se ressent dans chaque bouchée de nos créations.",
      natural: "Naturel",
      naturalDesc: "Ingrédients naturels et de qualité premium, sélectionnés avec soin auprès de producteurs locaux.",
      trust: "Confiance",
      trustDesc: "Une relation de confiance avec nos clients, basée sur la transparence et la qualité constante.",
      ourTeam: "Notre Équipe",
      teamTitle: "Les Artisans de vos Rêves",
      teamDesc: "Rencontrez les passionnés qui donnent vie à vos créations sucrées avec talent et dévouement.",
      readyToCreate: "Prêt à Créer Ensemble ?",
      readyDesc:
        "Nous serions ravis de discuter de votre projet et de créer le gâteau parfait pour votre occasion spéciale.",
      callUs: "Nous Appeler",
    },
    // Footer
    footer: {
      since: "Pâtisserie Artisanale depuis 2008",
      description:
        "Votre pâtisserie artisanale de confiance. Nous créons des moments de bonheur à travers nos délicieuses créations, préparées avec passion et les meilleurs ingrédients.",
      contact: "Contact",
      hours: "Horaires d'Ouverture",
      monFri: "Lun - Ven",
      saturday: "Samedi",
      sunday: "Dimanche",
      rights: "Tous droits réservés.",
      legal: "Mentions Légales",
      privacy: "Politique de Confidentialité",
      terms: "CGV",
    },
    // Common
    common: {
      loading: "Chargement...",
      error: "Une erreur est survenue",
      success: "Succès !",
      close: "Fermer",
      cancel: "Annuler",
      confirm: "Confirmer",
      save: "Enregistrer",
      edit: "Modifier",
      delete: "Supprimer",
      search: "Rechercher",
      filter: "Filtrer",
      sort: "Trier",
      price: "Prix",
      category: "Catégorie",
      name: "Nom",
      description: "Description",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      products: "Our Cakes",
      reservation: "Reservation",
      about: "About Us",
      reserve: "Reserve",
    },
    // Home Page
    home: {
      tagline: "Artisan Pastry since 2008",
      welcome: "Welcome to",
      brandName: "Sweet Delights",
      subtitle: "Artisan Pastry",
      description:
        "Discover our exceptional artisan creations, cakes prepared with love, passion and the finest carefully selected ingredients.",
      discoverCakes: "Discover our Cakes",
      reserveNow: "Reserve Now",
      ourCreations: "Our Creations",
      specialties: "Our Current Specialties",
      specialtiesDesc:
        "Discover a selection of our most appreciated creations, prepared daily by our master pastry chefs with passion and expertise.",
      seeCollection: "See our full collection",
      gallery: "Our Workshop",
      galleryTitle: "Our Creations in Pictures",
      commitments: "Our Commitments",
      whyChoose: "Why Choose Us?",
      madeWithLove: "Made with Love",
      madeWithLoveDesc:
        "Each cake is prepared with passion, attention to detail and know-how passed down from generation to generation.",
      premiumIngredients: "Premium Ingredients",
      premiumIngredientsDesc: "We select only the finest natural and premium quality ingredients for our creations.",
      freshness: "Guaranteed Freshness",
      freshnessDesc: "Our cakes are prepared daily in our workshop to guarantee optimal freshness.",
    },
    // Products
    products: {
      collection: "Our Collection",
      title: "Our Delicious Cakes",
      description:
        "Explore our complete collection of artisan cakes, created with passion to enhance all your special occasions.",
      all: "All",
      classics: "Classics",
      tarts: "Tarts",
      signature: "Signature",
      available: "cakes available",
      availableSingle: "cake available",
      order: "Order",
      priceLabel: "Price incl. VAT",
      noResults: "No cakes found",
      noResultsDesc: "Try selecting another category",
      seeAll: "See all cakes",
      customCake: "Want a Custom Cake?",
      customCakeDesc: "Our pastry chefs can create the cake of your dreams according to your tastes and preferences.",
      consultation: "Book a Consultation",
    },
    // Reservation
    reservation: {
      title: "Reserve",
      reserveYour: "Reserve Your",
      cake: "Cake",
      description:
        "Order your personalized cake for your special events. Our pastry chefs take care of everything with passion and expertise.",
      formTitle: "Reservation Form",
      formDesc: "Fill out this form and we will contact you within 24 hours",
      personalInfo: "Personal Information",
      fullName: "Full name",
      email: "Email",
      phone: "Phone",
      orderDetails: "Your Order Details",
      desiredDate: "Desired date",
      guests: "Number of people",
      cakeType: "Cake type",
      chooseCakeType: "Choose a type",
      birthday: "Birthday cake",
      wedding: "Wedding cake",
      baptism: "Baptism cake",
      communion: "Communion cake",
      corporate: "Corporate event",
      custom: "Custom cake",
      specialInstructions: "Special Instructions",
      message: "Message / Special preferences",
      messagePlaceholder: "Describe your wishes: preferred flavors, allergies, desired decorations, event theme...",
      submit: "Send Reservation",
      submitting: "Sending...",
      required: "Required fields - We will respond within 24h",
      howItWorks: "How does it work?",
      process: "A simple 4-step process",
      step1: "Fill out the form",
      step1Desc: "Tell us your preferences and event details",
      step2: "We contact you",
      step2Desc: "Our team calls you within 24h to refine your order",
      step3: "Custom creation",
      step3Desc: "Our pastry chefs prepare your cake with passion",
      step4: "Delivery or pickup",
      step4Desc: "Pick up your creation or have it delivered",
    },
    // About
    about: {
      ourStory: "Our Story",
      title: "About Sweet Delights",
      description:
        "For over 15 years, we have been creating moments of happiness through our exceptional pastry creations, combining tradition and innovation.",
      ourAdventure: "Our Adventure",
      passionStory: "A Story of Passion",
      foundedText:
        "Founded in 2008 by Marie and Pierre Dubois, Sweet Delights was born from a shared passion for traditional French pastry and culinary innovation.",
      yearsExp: "Years of experience",
      satisfiedClients: "Satisfied customers",
      uniqueCreations: "Unique creations",
      behindScenes: "Behind the Scenes",
      workshopTitle: "Our Workshop in Action",
      values: "Our Commitments",
      fundamentalValues: "Our Core Values",
      valuesDesc: "Principles that guide each of our actions and creations",
      excellence: "Excellence",
      excellenceDesc: "We aim for excellence in every creation, from ingredient selection to final presentation.",
      passion: "Passion",
      passionDesc: "Passion guides each of our gestures and can be felt in every bite of our creations.",
      natural: "Natural",
      naturalDesc: "Natural and premium quality ingredients, carefully selected from local producers.",
      trust: "Trust",
      trustDesc: "A relationship of trust with our customers, based on transparency and consistent quality.",
      ourTeam: "Our Team",
      teamTitle: "The Artisans of Your Dreams",
      teamDesc: "Meet the passionate people who bring your sweet creations to life with talent and dedication.",
      readyToCreate: "Ready to Create Together?",
      readyDesc: "We would be delighted to discuss your project and create the perfect cake for your special occasion.",
      callUs: "Call Us",
    },
    // Footer
    footer: {
      since: "Artisan Pastry since 2008",
      description:
        "Your trusted artisan pastry shop. We create moments of happiness through our delicious creations, prepared with passion and the finest ingredients.",
      contact: "Contact",
      hours: "Opening Hours",
      monFri: "Mon - Fri",
      saturday: "Saturday",
      sunday: "Sunday",
      rights: "All rights reserved.",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
    // Common
    common: {
      loading: "Loading...",
      error: "An error occurred",
      success: "Success!",
      close: "Close",
      cancel: "Cancel",
      confirm: "Confirm",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      price: "Price",
      category: "Category",
      name: "Name",
      description: "Description",
    },
  },
  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      products: "كعكاتنا",
      reservation: "الحجز",
      about: "من نحن",
      reserve: "احجز",
    },
    // Home Page
    home: {
      tagline: "حلويات حرفية منذ 2008",
      welcome: "مرحباً بكم في",
      brandName: "حلويات لذيذة",
      subtitle: "حلويات حرفية",
      description: "اكتشفوا إبداعاتنا الحرفية الاستثنائية، كعكات محضرة بحب وشغف وأفضل المكونات المختارة بعناية.",
      discoverCakes: "اكتشف كعكاتنا",
      reserveNow: "احجز الآن",
      ourCreations: "إبداعاتنا",
      specialties: "تخصصاتنا الحالية",
      specialtiesDesc:
        "اكتشفوا مجموعة مختارة من أكثر إبداعاتنا تقديراً، محضرة يومياً من قبل خبراء الحلويات لدينا بشغف وخبرة.",
      seeCollection: "شاهد مجموعتنا الكاملة",
      gallery: "ورشتنا",
      galleryTitle: "إبداعاتنا في الصور",
      commitments: "التزاماتنا",
      whyChoose: "لماذا تختارنا؟",
      madeWithLove: "صنع بحب",
      madeWithLoveDesc: "كل كعكة محضرة بشغف واهتمام بالتفاصيل ومعرفة متوارثة عبر الأجيال.",
      premiumIngredients: "مكونات فاخرة",
      premiumIngredientsDesc: "نختار فقط أفضل المكونات الطبيعية وعالية الجودة لإبداعاتنا.",
      freshness: "نضارة مضمونة",
      freshnessDesc: "كعكاتنا محضرة يومياً في ورشتنا لضمان النضارة المثلى.",
    },
    // Products
    products: {
      collection: "مجموعتنا",
      title: "كعكاتنا اللذيذة",
      description: "استكشفوا مجموعتنا الكاملة من الكعكات الحرفية، المصنوعة بشغف لتزيين جميع مناسباتكم الخاصة.",
      all: "الكل",
      classics: "كلاسيكية",
      tarts: "تارت",
      signature: "مميزة",
      available: "كعكة متوفرة",
      availableSingle: "كعكة متوفرة",
      order: "اطلب",
      priceLabel: "السعر شامل الضريبة",
      noResults: "لم يتم العثور على كعكات",
      noResultsDesc: "جرب اختيار فئة أخرى",
      seeAll: "شاهد جميع الكعكات",
      customCake: "تريد كعكة مخصصة؟",
      customCakeDesc: "يمكن لخبراء الحلويات لدينا إنشاء كعكة أحلامك وفقاً لأذواقك وتفضيلاتك.",
      consultation: "احجز استشارة",
    },
    // Reservation
    reservation: {
      title: "احجز ",
      reserveYour: "احجز",
      cake: "كعكتك",
      description: "اطلب كعكتك المخصصة لمناسباتك الخاصة. خبراء الحلويات لدينا يهتمون بكل شيء بشغف وخبرة.",
      formTitle: "نموذج الحجز",
      formDesc: "املأ هذا النموذج وسنتواصل معك خلال 24 ساعة",
      personalInfo: "المعلومات الشخصية",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      orderDetails: "تفاصيل طلبك",
      desiredDate: "التاريخ المرغوب",
      guests: "عدد الأشخاص",
      cakeType: "نوع الكعكة",
      chooseCakeType: "اختر نوعاً",
      birthday: "كعكة عيد ميلاد",
      wedding: "كعكة زفاف",
      baptism: "كعكة معمودية",
      communion: "كعكة مناولة",
      corporate: "مناسبة شركة",
      custom: "كعكة مخصصة",
      specialInstructions: "تعليمات خاصة",
      message: "رسالة / تفضيلات خاصة",
      messagePlaceholder: "صف رغباتك: النكهات المفضلة، الحساسية، الزينة المرغوبة، موضوع المناسبة...",
      submit: "إرسال الحجز",
      submitting: "جاري الإرسال...",
      required: "حقول مطلوبة - سنرد خلال 24 ساعة",
      howItWorks: "كيف يعمل؟",
      process: "عملية بسيطة من 4 خطوات",
      step1: "املأ النموذج",
      step1Desc: "أخبرنا بتفضيلاتك وتفاصيل مناسبتك",
      step2: "نتواصل معك",
      step2Desc: "فريقنا يتصل بك خلال 24 ساعة لتحسين طلبك",
      step3: "إنشاء مخصص",
      step3Desc: "خبراء الحلويات لدينا يحضرون كعكتك بشغف",
      step4: "التوصيل أو الاستلام",
      step4Desc: "استلم إبداعك أو اطلب التوصيل",
    },
    // About
    about: {
      ourStory: "قصتنا",
      title: "حول حلويات لذيذة",
      description:
        "لأكثر من 15 عاماً، نخلق لحظات سعادة من خلال إبداعاتنا الاستثنائية في الحلويات، نجمع بين التقليد والابتكار.",
      ourAdventure: "مغامرتنا",
      passionStory: "قصة شغف",
      foundedText:
        "تأسست في 2008 من قبل ماري وبيير دوبوا، ولدت حلويات لذيذة من شغف مشترك للحلويات الفرنسية التقليدية والابتكار الطهي.",
      yearsExp: "سنوات من الخبرة",
      satisfiedClients: "عميل راضٍ",
      uniqueCreations: "إبداع فريد",
      behindScenes: "خلف الكواليس",
      workshopTitle: "ورشتنا في العمل",
      values: "التزاماتنا",
      fundamentalValues: "قيمنا الأساسية",
      valuesDesc: "مبادئ توجه كل أعمالنا وإبداعاتنا",
      excellence: "التميز",
      excellenceDesc: "نهدف للتميز في كل إبداع، من اختيار المكونات إلى العرض النهائي.",
      passion: "الشغف",
      passionDesc: "الشغف يوجه كل حركاتنا ويُشعر به في كل قضمة من إبداعاتنا.",
      natural: "طبيعي",
      naturalDesc: "مكونات طبيعية وعالية الجودة، مختارة بعناية من منتجين محليين.",
      trust: "الثقة",
      trustDesc: "علاقة ثقة مع عملائنا، قائمة على الشفافية والجودة المستمرة.",
      ourTeam: "فريقنا",
      teamTitle: "حرفيو أحلامكم",
      teamDesc: "تعرفوا على المتحمسين الذين يحيون إبداعاتكم الحلوة بموهبة وتفانٍ.",
      readyToCreate: "مستعد للإبداع معاً؟",
      readyDesc: "سنكون سعداء لمناقشة مشروعك وإنشاء الكعكة المثالية لمناسبتك الخاصة.",
      callUs: "اتصل بنا",
    },
    // Footer
    footer: {
      since: "حلويات حرفية منذ 2008",
      description:
        "متجر الحلويات الحرفية الموثوق. نخلق لحظات سعادة من خلال إبداعاتنا اللذيذة، محضرة بشغف وأفضل المكونات.",
      contact: "اتصال",
      hours: "ساعات العمل",
      monFri: "الإثنين - الجمعة",
      saturday: "السبت",
      sunday: "الأحد",
      rights: "جميع الحقوق محفوظة.",
      legal: "إشعار قانوني",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
    },
    // Common
    common: {
      loading: "جاري التحميل...",
      error: "حدث خطأ",
      success: "نجح!",
      close: "إغلاق",
      cancel: "إلغاء",
      confirm: "تأكيد",
      save: "حفظ",
      edit: "تعديل",
      delete: "حذف",
      search: "بحث",
      filter: "تصفية",
      sort: "ترتيب",
      price: "السعر",
      category: "الفئة",
      name: "الاسم",
      description: "الوصف",
    },
  },
}

export function useI18n() {
  const locale = computed(() => currentLocale.value)
  const isRTL = computed(() => currentLocale.value === "ar")

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[currentLocale.value]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key "${key}" not found for locale "${currentLocale.value}"`)
        return key
      }
    }

    return typeof value === "string" ? value : key
  }

  const setLocale = (newLocale: Locale) => {
    currentLocale.value = newLocale
    // Update document direction for RTL support
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = newLocale
  }

  const availableLocales = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ] as const

  return {
    locale,
    isRTL,
    t,
    setLocale,
    availableLocales,
  }
}
