"use client";

import Link from "next/link";
import { Mail, Heart } from "lucide-react";
import { footerLinks } from "@/data/home/footer";
import { LiaLinkedin } from "react-icons/lia";
import { DiGithub } from "react-icons/di";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-14">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="mb-4 inline-block text-2xl font-bold text-[#0057d9]"
            >
              تحول لمبرمج
            </Link>

            <p className="max-w-sm text-sm leading-7 text-gray-600">
              منصة تعليمية عربية تساعدك على تعلم البرمجة من خلال مسارات تعليمية
              منظمة، ومصادر موثوقة، ومشاريع عملية تساعدك على تطوير مهاراتك وبناء
              مستقبلك كمطور.
            </p>
          </motion.div>

          {/* Dynamic Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            >
              <h3 className="mb-5 text-base font-bold text-gray-900">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition hover:text-[#0057d9]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="mb-5 text-base font-bold text-gray-900">المنصة</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/roadmaps"
                  className="text-sm text-gray-600 transition hover:text-[#0057d9]"
                >
                  المسارات التعليمية
                </Link>
              </li>

              <li>
                <Link
                  href="/resources"
                  className="text-sm text-gray-600 transition hover:text-[#0057d9]"
                >
                  المصادر التعليمية
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="text-sm text-gray-600 transition hover:text-[#0057d9]"
                >
                  المشاريع
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} تحول لمبرمج. جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>صُنع بـ</span>

            <Heart size={15} className="fill-red-500 text-red-500" />

            <span>للمطورين العرب</span>
          </div>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 transition hover:text-[#0057d9]"
            >
              سياسة الخصوصية
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
