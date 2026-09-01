import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/home/NavBar";

const ibm = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://turn-to-developer.vercel.app"),

  title: {
    default: "تحول لمبرمج | مسارات تعلم البرمجة",
    template: "%s | Developer Roadmap",
  },

  description:
    "منصة تساعدك على تعلم البرمجة من خلال مسارات تعليمية منظمة ومصادر موثوقة لتطوير مهاراتك في Frontend وBackend وMobile Development وغيرها",

  keywords: [
    "Developer Roadmap",
    "مسارات تعلم البرمجة",
    "تعلم البرمجة",
    "Frontend Roadmap",
    "Backend Roadmap",
    "Full Stack Roadmap",
    "React Roadmap",
    "Next.js Roadmap",
    "Mobile Development Roadmap",
    "Web Development",
  ],

  authors: [{ name: "Developer Roadmap" }],

  creator: "Developer Roadmap",
  publisher: "Developer Roadmap",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "/",
    siteName: "Developer Roadmap",
    title: "Developer Roadmap | مسارات تعلم البرمجة",
    description:
      "مسارات تعليمية منظمة ومصادر موثوقة تساعدك على تطوير مهاراتك في البرمجة",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Developer Roadmap",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Developer Roadmap | مسارات تعلم البرمجة",
    description: "تعلم البرمجة من خلال مسارات تعليمية منظمة ومصادر موثوقة",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${ibm.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="border-b border-b-[#C3C6D7]">
          <NavBar />
        </header>
        <main dir="rtl" className="min-h-screen bg-[#f8f9fa] px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
