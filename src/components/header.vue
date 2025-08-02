<template>
  <header class="shadow-md fixed top-0 left-0 w-full z-50 bg-bg text-text">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">

      <!-- الشعار -->
      <div class="w-32 h-16">
        <img src="../assets/image/logo.png" alt="Logo" class="w-full h-full object-cover" />
      </div>

      <!-- زر الهامبرغر للعرض على الشاشات الصغيرة -->
      <button ref="menuButton" @click="toggleMenu" class="md:hidden text-text text-2xl focus:outline-none">
        <i class="fas fa-bars"></i>
      </button>

      <!-- القائمة -->
      <nav
        ref="mobileMenu"
        :class="[
          'absolute top-full right-4 w-44 bg-bg rounded-md shadow-md',
          'md:static md:flex md:flex-row-reverse md:space-x-6 md:space-x-reverse md:items-center md:w-auto md:shadow-none md:bg-transparent md:rounded-none',
          isMenuOpen ? 'flex flex-col' : 'hidden'
        ]"
      >
        <!-- زر تبديل الوضع الليلي -->
        <button class="text-2xl block px-4 py-2 text-accent" @click="toggleTheme">
          <i :class="`fas ${themeIcon}`"></i>
        </button>

        <!-- روابط التنقل باستخدام router-link -->
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="block px-4 py-2 hover:text-accent border-b-2"
          :class="{
            'border-accent text-accent': currentPath === link.to,
            'border-transparent': currentPath !== link.to,
          }"
          @click="isMenuOpen = false"
        >
          {{ link.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const themeIcon = ref('fa-moon')
const mobileMenu = ref(null)
const menuButton = ref(null)

const route = useRoute()
const currentPath = ref(route.path)

watch(() => route.path, (newPath) => {
  currentPath.value = newPath
})

const navLinks = [
  { label: 'الرئيسية', to: '/' },
  { label: 'من نحن؟', to: '/about' },
  { label: 'مشاريعنا', to: '/projects' },
  { label: 'آخر الأخبار', to: '/news' },
  { label: 'تواصل معنا', to: '/contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleTheme = () => {
  const isDark = document.documentElement.classList.toggle('dark')
  themeIcon.value = isDark ? 'fa-sun' : 'fa-moon'
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
}

const applyTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  const isDark = savedTheme === 'dark'
  document.documentElement.classList.toggle('dark', isDark)
  themeIcon.value = isDark ? 'fa-sun' : 'fa-moon'
}

const handleClickOutside = (e) => {
  const clickedInside = mobileMenu.value?.contains(e.target)
  const clickedToggle = menuButton.value?.contains(e.target)

  if (!clickedInside && !clickedToggle) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  applyTheme()
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* يمكن إضافة تنسيقات إضافية حسب الحاجة */
</style>
