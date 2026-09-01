"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const links = [
  { label: "الرئيسية", href: "/" },
  { label: "المسارات", href: "/roadmaps" },
  { label: "المصادر", href: "/resources" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-20 items-center p-4 max-w-400 mx-auto px-4">
      <Link href={"/"} className="text-[#004AC6] text-[24px] font-semibold">
        تحول لمبرمج
      </Link>

      <ul className="flex items-center gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li
              key={link.href}
              className={`relative font-medium ${
                isActive ? "text-[#004AC6]" : "text-[#5F5E5E]"
              }`}
            >
              <Link href={link.href} className="block py-2">
                {link.label}

                {isActive && (
                  <motion.div
                    layoutId="active-link"
                    className="absolute bottom-0 right-0 left-0 h-0.5 bg-[#004AC6]"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 0.2,
                    }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
