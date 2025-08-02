<template>
  <div class="min-h-screen bg-bg text-text pt-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 border-b border-accent pb-2">جميع المشاريع</h1>

      <!-- بطاقات المشاريع (مثال ثابت - يمكن استبداله ببيانات من API لاحقًا) -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
          <h2 class="text-xl font-semibold mb-2">مشروع 1</h2>
          <p class="text-sm text-gray-700 dark:text-gray-300">وصف موجز عن المشروع الأول.</p>
        </div>

        <div class="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
          <h2 class="text-xl font-semibold mb-2">مشروع 2</h2>
          <p class="text-sm text-gray-700 dark:text-gray-300">وصف موجز عن المشروع الثاني.</p>
        </div>

        <div class="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
          <h2 class="text-xl font-semibold mb-2">مشروع 3</h2>
          <p class="text-sm text-gray-700 dark:text-gray-300">وصف موجز عن المشروع الثالث.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// لا حاجة حاليًا لسكريبت إلا إذا أردتِ جلب البيانات ديناميكيًا
</script>

<style scoped>
/* يمكن إضافة تنسيقات خاصة هنا */
</style>
