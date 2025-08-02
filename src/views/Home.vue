<template>
  <section class="relative overflow-hidden h-[90vh]">
    <div id="slidesWrapper" class="relative h-full">
      <!-- Slides -->
      <div
        v-for="(img, i) in [img1, img2, img3, img4]"
        :key="i"
        class="slide flex flex-col-reverse md:flex-row w-full h-full"
        :class="{ active: currentSlide === i }"
      >
        <div class="w-full md:w-1/2 flex flex-col justify-center items-start p-6 bg-gradient-to-t from-teal-500 to-indigo-600 text-bg">
          <h1 class="text-2xl md:text-4xl font-bold mb-4">
            {{
              ['تمكين المرأة', 'تأهيل الشباب مهنيا', 'برنامج رعاية وكفالة الأيتام', 'مكافحة الأمية وتعليم الكبار'][i]
            }}
          </h1>
          <button
            class="bg-accent text-bg hover:bg-highlight py-2 px-6 rounded-md font-semibold transition"
          >
            تبرع الآن
          </button>
        </div>
        <div
          class="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center relative"
          :style="{ backgroundImage: `url(${img})` }"
        >
          <div class="w-full h-full bg-overlaybg"></div>
        </div>
      </div>
    </div>

    <!-- Navigation buttons -->
    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20"
    >
      <button
        @click="prevSlide"
        class="bg-bg text-accent w-10 h-10 rounded-full shadow hover:bg-btnbg"
      >
        &#10094;
      </button>
      <button
        @click="nextSlide"
        class="bg-bg text-accent w-10 h-10 rounded-full shadow hover:bg-btnbg"
      >
        &#10095;
      </button>
    </div>
  </section>
 <section class="section1 bg-btnbg py-12 px-4">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold mb-4 text-center">من نحن؟</h1>
    <p class="leading-loose text-justify">
      تأسست المنظمة في 6 فبراير 1997 باسم مركز الصديق للتأهيل، بترخيص رقم [84] من وزارة التربية والتعليم.
      وفي 19 فبراير 2006 منحت ترخيصاً رقم [36] من وزارة الشؤون الاجتماعية والعمل، باسم "المنظمة الوطنية لتنمية المجتمع NODS YEMEN" كمؤسسة أهلية.
      وفي 1 أكتوبر 2006 حصلت على ترخيص رسمي لمزاولة التدريب من وزارة التعليم الفني والتدريب المهني رقم [15] باسم "مركز NODS YEMEN للتدريب".
    </p>
  </div>
</section>
   <section class="section1 my-16">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-10">
            <h2 class="text-2xl font-bold">مشاريعنا</h2>
            <p class="text-sm text-btnbg">اكتشف أبرز مشاريعنا التي ننفذها في اليمن</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-bg shadow-md rounded-lg overflow-hidden">
              <img src="@/assets/image/p1.jfif" alt="" class="w-full h-48 object-cover">
              <div class="p-4">
                <h3 class="font-semibold text-lg">التوعية بالنظام المدني</h3>
                <p class="text-sm">الوثيقة المدنية</p>
                <div class="flex justify-between text-xs mt-2 text-accent">
                  <span><i class="far fa-calendar-alt"></i> 2015-02-20</span>
                  <span><i class="fas fa-map-marker-alt"></i> صنعاء، حجة، تعز</span>
                </div>
              </div>
            </div>

            <div class="bg-bg shadow-md rounded-lg overflow-hidden">
              <img src="@/assets/image/p2.jpg" alt="" class="w-full h-48 object-cover">
              <div class="p-4">
                <h3 class="font-semibold text-lg">تعزيز السلم والامن المجتمعي</h3>
                <p class="text-sm">برنامج تعزيز التعايش</p>
                <div class="flex justify-between text-xs mt-2 text-accent">
                  <span><i class="far fa-calendar-alt"></i> 2015-02-20</span>
                  <span><i class="fas fa-map-marker-alt"></i> عدن، لحج</span>
                </div>
              </div>
            </div>

            <div class="bg-bg shadow-md rounded-lg overflow-hidden">
              <img src="@/assets/image/p3.jfif" alt="" class="w-full h-48 object-cover">
              <div class="p-4">
                <h3 class="font-semibold text-lg">الديمقراطية وحقوق الإنسان</h3>
                <p class="text-sm"> تدريب الخطباء والواعظات بالتواصل الاعلامي وحقوق الانسان</p>
                <div class="flex justify-between text-xs mt-2 text-accent">
                  <span><i class="far fa-calendar-alt"></i> 2015-02-20</span>
                  <span><i class="fas fa-map-marker-alt"></i> مأرب، الجوف</span>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-6">
            <router-link to="/projects" class="inline-block bg-accent text-bg px-6 py-2 rounded-md hover:bg-highlight">
              عرض جميع المشاريع
            </router-link>
          </div>
        </div>
      </section>
      <section class="section1 bg-btnbg overflow-hidden">
        <h2 class="text-xl font-bold mb-4">شركاؤنا</h2>
  <div class="items-center mx-auto px-4">
    <!-- السلايدر - المحتوى سيتكرر لعمل دوران -->
    <div class="relative w-full overflow-hidden">
      <div class="slider-track flex w-max animate-scroll gap-6">
        <!-- مجموعة الشركاء الأصلية -->
        <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c1.jpg" alt="شريك 1" class="max-h-16 object-contain" />
        </div>
        <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c2.jpg" alt="شريك 2" class="max-h-16 object-contain" />
        </div>
        <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c3.jpg" alt="شريك 3" class="max-h-16 object-contain" />
        </div>
        <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c4.jpg" alt="شريك 4" class="max-h-16 object-contain" />
        </div>
        <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c5.jpg" alt="شريك 5" class="max-h-16 object-contain" />
        </div>
         <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c6.jpg" alt="شريك 4" class="max-h-16 object-contain" />
        </div>
        <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c8.jpg" alt="شريك 5" class="max-h-16 object-contain" />
        </div>

        <!-- تكرار نفس العناصر لعمل دوران لانهائي -->
        <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c1.jpg" alt="شريك 1" class="max-h-16 object-contain" />
        </div>
        <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c2.jpg" alt="شريك 2" class="max-h-16 object-contain" />
        </div>
        <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c3.jpg" alt="شريك 3" class="max-h-16 object-contain" />
        </div>
        <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c4.jpg" alt="شريك 4" class="max-h-16 object-contain" />
        </div>
        <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c5.jpg" alt="شريك 5" class="max-h-16 object-contain" />
        </div>
         <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c6.jpg" alt="شريك 4" class="max-h-16 object-contain" />
        </div>
        <div class="partner-item min-w-[150px] h-24 bg-highlight rounded-lg flex items-center justify-center shadow">
          <img src="@/assets/image/c8.jpg" alt="شريك 5" class="max-h-16 object-contain" />
        </div>
      </div>
    </div>
  </div>
</section>
 <section id="sendme" class="section1">
  <h2 class="text-xl font-bold mb-4">اقتراحاتك</h2>
  <form id="contactForm" class="flex flex-col gap-4 w-full max-w-xl mx-auto">
    <div class="relative">
      <i class="fas fa-user absolute right-3 top-1/2 -translate-y-1/2 text-accent"></i>
      <input type="text" id="contact-name" placeholder="اسمك" class="w-full py-2 pr-10 pl-4 border rounded-md">
    </div>
    <div class="relative">
      <i class="fas fa-envelope absolute right-3 top-1/2 -translate-y-1/2 text-accent"></i>
      <input type="email" id="contact-email" placeholder="إيميلك" class="w-full py-2 pr-10 pl-4 border rounded-md">
    </div>
    <select id="topic" required class="max-w-full p-2 border rounded-md">
      <option value="">-- اختر الموضوع --</option>
      <option value="استفسار">استفسار</option>
      <option value="مقترح">مقترح</option>
      <option value="شكوى">شكوى</option>
      <option value="تطوع">تطوع</option>
      <option value="تبرع">تبرع</option>
    </select>
    <div class="relative">
      <i class="fas fa-comment-dots absolute right-3 top-3 text-accent"></i>
      <textarea id="message" rows="4" placeholder="رسالتك" class="w-full py-2 pr-10 pl-4 border rounded-md"></textarea>
    </div>
    <button type="submit" class="bg-accent text-bg hover:bg-highlight px-6 py-2 rounded-md flex justify-center items-center gap-2">
      إرسال
      <i class="fas fa-paper-plane"></i>
    </button>
  </form>
  <div id="success" class="text-accent font-bold mt-4 hidden">
    <i class="fa-solid fa-check"></i> تم إرسال الرسالة بنجاح!
  </div>
</section>


</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import img1 from '@/assets/image/h3.jpg'
import img2 from '@/assets/image/h2.jpg'
import img3 from '@/assets/image/h1.webp'
import img4 from '@/assets/image/8.jpg'

const currentSlide = ref(0)
const totalSlides = 4
let intervalId = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 3000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 1s ease-in-out;
  display: flex;
}
.slide.active {
  opacity: 1;
  pointer-events: auto;
  z-index: 10;
}
 @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .animate-scroll {
    animation: scroll 30s linear infinite;
  }

  input::placeholder,
textarea::placeholder,
select::placeholder {
  text-align: right;
  direction: rtl;
}

input, textarea, select {
  direction: rtl;
  text-align: right;
}
</style>
