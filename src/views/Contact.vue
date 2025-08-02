<template>
  <section id="sendme" class="section1">
    <h2 class="text-xl font-bold mb-4">تواصل معنا</h2>
    <p class="text-xl mb-4">نحن هنا للإجابة على استفساراتك واقتراحاتك</p>
    <FormContact />
  </section>

  <section class="section1">
    <Mapp />
  </section>
</template>

<script>
import FormContact from '@/components/Fcontact.vue'
import Mapp from '@/components/Mapp.vue'

export default {
  components: {
    FormContact,
    Mapp
  }
}
</script>
