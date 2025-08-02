<template>
  <div id="dashboard" class="min-h-screen flex mt-10">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <DashboardHeader @toggleSidebar="toggleSidebar" />
      <main class="p-6 space-y-6">
        <DashboardCards />
        <DashboardContent />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import DashboardHeader from '@/components/DashboardHeader.vue'
import DashboardCards from '@/components/DashboardCards.vue'
import DashboardContent from '@/components/DashboardContent.vue'

export default {
  components: {
    Sidebar,
    DashboardHeader,
    DashboardCards,
    DashboardContent
  },
  methods: {
    toggleSidebar() {
      // toggle logic if needed
    }
  }
}
</script>
