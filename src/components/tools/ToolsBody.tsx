"use client";

import { FaArrowLeft } from "react-icons/fa";
import { motion } from "motion/react";
import { toolsData } from "@/data/tools/tools";
import Image from "next/image";

export default function toolCards() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-[32px] leading-[41.6px] font-semibold border-b border-b-[#C3C6D7] mb-8 pb-2 "
      >
        مصادر مختارة
      </motion.h2>
      <section>
        <div className="flex flex-wrap gap-4">
          {toolsData.map((tool, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.15, delay: index * 0.1 }}
              className="flex-1 basis-lg bg-white border border-[#C3C6D7] rounded-lg p-4"
            >
              <h3 className="flex gap-4 items-center text-[#191C1D] text-[24px] font-semibold leading-[33.6px]">
                <Image src={tool.icon} alt="" width={30} height={30} />
                {tool.name}
              </h3>
              <p className="text-[#5F5E5E] text-[16px] leading-[25.6px] my-2">
                {tool.description}
              </p>

              <ul className="flex gap-4 mt-4">
                {tool.tags.map((tag) => (
                  <li key={tag} className="px-3 rounded-full bg-blue-400/50">
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                href={tool.url}
                target="_blank"
                className="w-fit mt-4 text-[#004AC6] text-[16px] leading-[25.6px] flex items-center gap-2
                 hover:text-[#004AC6] hover:underline"
              >
                <span> فتح المصدر </span>
                <FaArrowLeft size={13} />
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </section>
  );
}
