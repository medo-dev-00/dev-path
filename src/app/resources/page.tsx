import type { Metadata } from "next";

import ResourceCards from "@/components/resources/ResourceCard";
import ResourcesHeader from "@/components/resources/ResourcesHeader";

export const metadata: Metadata = {
  title: "مصادر تعلم البرمجة",
  description:
    "اكتشف أفضل مصادر تعلم البرمجة من التوثيقات الرسمية والكورسات والأدوات والدروس والمراجع الموثوقة لتطوير مهاراتك كمطور",

  keywords: [
    "مصادر تعلم البرمجة",
    "تعلم البرمجة",
    "Programming Resources",
    "Developer Resources",
    "Web Development Resources",
    "Frontend Resources",
    "Backend Resources",
    "Mobile Development Resources",
  ],

  alternates: {
    canonical: "/resources",
  },

  openGraph: {
    title: "مصادر تعلم البرمجة | Developer Roadmap",
    description:
      "مجموعة مختارة من أفضل المصادر والأدوات والكورسات والتوثيقات للمطورين",
    url: "/resources",
    siteName: "Developer Roadmap",
    type: "website",
    locale: "ar_EG",
  },

  twitter: {
    card: "summary_large_image",
    title: "مصادر تعلم البرمجة | Developer Roadmap",
    description: "اكتشف أفضل المصادر التعليمية والأدوات للمطورين",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Resources() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <ResourcesHeader />
      <ResourceCards />
    </section>
  );
}
