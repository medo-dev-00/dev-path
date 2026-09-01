"use client";

import { resourceCategories, resources } from "@/data/resources";
import { useMemo, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "motion/react";

export default function ResourceCards() {
  const [active, setActive] = useState("All");
  const renderedResources = useMemo(() => {
    if (active === "All") {
      return resources;
    }

    return resources.filter((r) => r.category === active);
  }, [active]);

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
        <ul className="flex flex-wrap gap-4 items-center mb-8">
          <li
            onClick={() => setActive("All")}
            className={`text-nowrap text-black px-4 py-1 rounded-md bg-blue-100 border cursor-pointer
               border-blue-600 ${active === "All" && "bg-blue-600 text-white"}`}
          >
            All
          </li>
          {resourceCategories.slice(1).map((one) => (
            <li
              key={one}
              onClick={() => setActive(one)}
              className={`text-nowrap text-black px-4 py-1 rounded-md bg-blue-100 border cursor-pointer
                 border-blue-400 ${active === one && "bg-blue-600 text-white"}`}
            >
              {one}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4">
          {renderedResources.map((resource, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.15, delay: index * 0.1 }}
              className="flex-1 basis-lg bg-white border border-[#C3C6D7] rounded-lg p-4"
            >
              <h3 className="flex gap-4 items-center text-[#191C1D] text-[24px] font-semibold leading-[33.6px]">
                <span className="p-1">{<resource.icon />}</span>
                {resource.title}
              </h3>
              <p className="text-[#5F5E5E] text-[16px] leading-[25.6px] my-2">
                {resource.description}
              </p>
              <a
                href={resource.url}
                className="w-fit text-[#004AC6] text-[16px] leading-[25.6px] flex items-center gap-2 hover:text-[#004AC6] hover:underline"
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
