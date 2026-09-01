"use client";

import { motion } from "motion/react";

export default function ResourcesHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-10 text-center"
    >
      <h1 className="text-4xl font-bold">المصادر التعليمية للمطورين</h1>

      <p className="mx-auto mt-4 max-w-3xl text-gray-500">
        مكتبة شاملة من التوثيقات الرسمية، المقالات، الدروس المرئية، الأدوات
        والمراجع الموثوقة لدعم رحلتك في تعلم البرمجة وبناء تطبيقات الويب
        الحديثة.
      </p>
    </motion.header>
  );
}
