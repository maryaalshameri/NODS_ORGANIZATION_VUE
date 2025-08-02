<!-- components/Sidebar.vue -->
<template>
  <aside class="w-64 bg-btnbg shadow-md md:block hidden fixed md:static top-0 right-0 max-h-full z-40 mb-6">
    <div class="p-4 text-center border-b">
      <img src="../assets/image/logo.png" alt="Logo" class="w-50 mx-auto mb-2" />
      <h2 class="text-lg font-bold text-accent">منظمة NODS</h2>
    </div>
    <nav class="mt-6 px-4 space-y-4 text-right">
      <a href="#" class="flex items-center justify-between px-4 py-2 rounded bg-accent text-bg">
        <i class="fas fa-home"></i><span>لوحة التحكم</span>
      </a>
      <a href="#users" class="flex items-center justify-between px-4 py-2 hover:bg-highlight rounded">
        <i class="fas fa-users"></i><span>المستخدمين</span>
      </a>
      <a href="#projects" class="flex items-center justify-between px-4 py-2 hover:bg-highlight rounded">
        <i class="fas fa-folder"></i><span>المشاريع</span>
      </a>
      <a href="#messages" class="flex items-center justify-between px-4 py-2 hover:bg-highlight rounded">
        <i class="fas fa-envelope"></i><span>الرسائل</span>
      </a>
      <a href="#" class="flex items-center justify-between px-4 py-2 hover:bg-highlight rounded">
        <i class="fas fa-cog"></i><span>الإعدادات</span>
      </a>
      <a href="#" class="flex items-center justify-between px-4 py-2 hover:bg-highlight text-red-600 rounded">
        <i class="fas fa-sign-out-alt"></i><span>تسجيل الخروج</span>
      </a>
    </nav>
  </aside>
</template>
