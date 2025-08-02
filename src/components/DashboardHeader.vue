<!-- components/DashboardHeader.vue -->
<template>
  <header class="bg-white shadow p-4 flex justify-between items-center">
    <button @click="$emit('toggleSidebar')" class="md:hidden text-accent text-xl">
      <i class="fas fa-bars"></i>
    </button>
    <h1 class="text-xl font-semibold text-btntext">مرحبًا بك في لوحة التحكم</h1>
  </header>
</template>
