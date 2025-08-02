<template>
  <div class="bg-bg text-text min-h-screen font-family">
    <Header />
    
    <main class="p-6 mt-8">
      <!-- هنا ضعي محتوى الصفحة الرئيسية -->
      
  <router-view />

    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>

<style>
/* يمكن تركه فارغاً أو إضافة تنسيقات عامة */
</style>
