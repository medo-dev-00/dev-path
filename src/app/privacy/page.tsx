"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-[#191C1D]">سياسة الخصوصية</h1>

          <p className="mt-4 text-gray-500">
            تعرف على كيفية تعامل منصة تحول لمبرمج مع بيانات الزوار
          </p>
        </motion.header>

        {/* Content */}
        <div className="space-y-10 text-[#191C1D] leading-8">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-3 text-2xl font-bold">مقدمة</h2>

            <p className="text-gray-600">
              نحن في منصة تحول لمبرمج نحترم خصوصية زوار الموقع ونسعى للحفاظ على
              تجربة استخدام بسيطة وآمنة. توضح هذه السياسة طبيعة البيانات التي
              يتم التعامل معها أثناء استخدام المنصة.
            </p>
          </motion.section>

          {/* No accounts */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="mb-3 text-2xl font-bold">عدم وجود حسابات</h2>

            <p className="text-gray-600">
              لا تتطلب منصة تحول لمبرمج إنشاء حساب أو تسجيل الدخول لاستخدام
              المسارات التعليمية أو الوصول إلى المصادر التعليمية الموجودة على
              الموقع.
            </p>
          </motion.section>

          {/* No progress tracking */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-3 text-2xl font-bold">عدم تتبع تقدم المستخدم</h2>

            <p className="text-gray-600">
              لا تقوم المنصة بتتبع تقدم المستخدم في المسارات التعليمية، ولا يتم
              إنشاء ملف شخصي لتسجيل الدروس أو المواضيع التي قام المستخدم
              بدراستها.
            </p>
          </motion.section>

          {/* Data collection */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="mb-3 text-2xl font-bold">البيانات التي يتم جمعها</h2>

            <p className="text-gray-600">
              المنصة لا تطلب من المستخدم تقديم بيانات شخصية مثل الاسم، البريد
              الإلكتروني، رقم الهاتف أو كلمة المرور من أجل استخدام المحتوى
              الأساسي للموقع.
            </p>
          </motion.section>

          {/* External links */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="mb-3 text-2xl font-bold">
              الروابط والمصادر الخارجية
            </h2>

            <p className="text-gray-600">
              تحتوي المنصة على روابط لمصادر تعليمية ومواقع خارجية مثل التوثيقات
              الرسمية والمقالات والفيديوهات التعليمية. عند الانتقال إلى أحد هذه
              المواقع، تصبح خاضعًا لسياسة الخصوصية وشروط الاستخدام الخاصة
              بالموقع الخارجي.
            </p>
          </motion.section>

          {/* Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="mb-3 text-2xl font-bold">
              ملفات تعريف الارتباط (Cookies)
            </h2>

            <p className="text-gray-600">
              لا تعتمد المنصة على ملفات تعريف الارتباط لتسجيل حسابات المستخدمين
              أو حفظ تقدمهم التعليمي.
            </p>
          </motion.section>

          {/* Third party */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="mb-3 text-2xl font-bold">خدمات الطرف الثالث</h2>

            <p className="text-gray-600">
              قد تحتوي بعض صفحات المنصة على روابط أو محتوى مقدم من خدمات خارجية.
              هذه الخدمات قد يكون لديها سياسات خصوصية مستقلة، ولذلك ننصح بمراجعة
              سياسات الخصوصية الخاصة بها عند استخدامها.
            </p>
          </motion.section>

          {/* Security */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="mb-3 text-2xl font-bold">حماية البيانات</h2>

            <p className="text-gray-600">
              نظرًا لأن المنصة لا تعتمد على نظام حسابات ولا تطلب بيانات شخصية
              لاستخدام المحتوى التعليمي، فإننا لا نحتفظ بملف شخصي للمستخدم داخل
              المنصة.
            </p>
          </motion.section>

          {/* Changes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="mb-3 text-2xl font-bold">تحديث سياسة الخصوصية</h2>

            <p className="text-gray-600">
              قد نقوم بتحديث سياسة الخصوصية من وقت لآخر في حال إضافة ميزات جديدة
              أو تغيير طريقة عمل المنصة. سيتم نشر أي تغييرات على هذه الصفحة.
            </p>
          </motion.section>

          {/* Last update */}
          <div className="border-t border-gray-200 pt-6 text-sm text-gray-500">
            آخر تحديث: سبتمبر 2026
          </div>
        </div>
      </div>
    </main>
  );
}
