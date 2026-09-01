import Link from "next/link";
import { Share2, Link as LinkIcon, Mail } from "lucide-react";
import { footerLinks } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-10">
          {/* Brand */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-[#0057d9]">
              تحول لمبرمج
            </h2>

            <p className="max-w-xs text-sm leading-7 text-gray-600">
              منصة تعليمية تهدف إلى تبسيط مسارات تعلم البرمجة بخطوات واضحة
              ومنهجية للمبتدئين باللغة العربية.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 font-bold">{section.title}</h3>

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
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
