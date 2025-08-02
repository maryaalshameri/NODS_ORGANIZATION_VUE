<template>
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

</template>

<style scoped>
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