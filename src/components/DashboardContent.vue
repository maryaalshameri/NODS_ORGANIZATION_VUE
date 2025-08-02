<!-- components/DashboardContent.vue -->
<template>
  <section class="space-y-6" dir="rtl">
    <!-- المشاريع -->
    <div id="projects" class="bg-btnbg shadow rounded p-4">
      <h3 class="text-lg font-semibold mb-4">أحدث المشاريع</h3>
      <table class="w-full text-sm text-right">
        <thead>
          <tr class="border-b text-accent">
            <th class="p-2">#</th>
            <th class="p-2">اسم المشروع</th>
            <th class="p-2">التاريخ</th>
            <th class="p-2">الحالة</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-highlight">
            <td class="p-2">1</td>
            <td class="p-2">تمكين المرأة</td>
            <td class="p-2">2024-01-10</td>
            <td class="p-2 text-green-600 font-bold">نشط</td>
          </tr>
          <tr class="hover:bg-highlight">
            <td class="p-2">2</td>
            <td class="p-2">تعليم الكبار</td>
            <td class="p-2">2024-01-05</td>
            <td class="p-2 text-yellow-600 font-bold">معلّق</td>
          </tr>
          <tr class="hover:bg-highlight">
            <td class="p-2">3</td>
            <td class="p-2">رعاية الأيتام</td>
            <td class="p-2">2023-12-29</td>
            <td class="p-2 text-red-600 font-bold">منتهي</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- إدارة المشاريع -->
    <div class="bg-btnbg shadow rounded p-4">
      <h3 class="text-lg font-semibold mb-4">إدارة المشاريع</h3>
      <ul class="space-y-2">
        <li class="border-b py-2">تمكين المرأة - نشط</li>
        <li class="border-b py-2">مكافحة الأمية - معلّق</li>
        <li class="border-b py-2">رعاية الأيتام - منتهي</li>
      </ul>
    </div>

    <!-- الرسائل -->
    <div id="messages" class="bg-btnbg shadow rounded p-4">
      <h3 class="text-lg font-semibold mb-4">الرسائل الأخيرة</h3>
      <ul class="space-y-2">
        <li class="border-b py-2">رسالة من أحمد - استفسار حول التبرع</li>
        <li class="border-b py-2">اقتراح من سلمى - مشروع جديد</li>
        <li class="border-b py-2">شكوى من فاطمة - تأخير في الرد</li>
      </ul>
    </div>

    <!-- المستخدمين -->
    <div id="users" class="bg-btnbg shadow rounded p-4">
      <h3 class="text-lg font-semibold mb-4">إدارة المستخدمين</h3>
      <ul class="space-y-2">
        <li class="border-b py-2">أحمد - admin</li>
        <li class="border-b py-2">سلمى - محرر</li>
        <li class="border-b py-2">فاطمة - زائر</li>
      </ul>
    </div>
  </section>
</template>
