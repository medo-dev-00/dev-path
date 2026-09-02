"use client";

import { fetures } from "@/data/home/fetures";
import { motion } from "motion/react";

export default function WhyLearn() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-[#f5f5f5] px-6 py-12 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          المميزات{" "}
        </motion.h2>

        <div className="flex justify-between gap-10 flex-wrap">
          {fetures.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center flex-1 basis-xs"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#0057d9] text-white shadow-sm">
                  <Icon size={30} strokeWidth={2} />
                </div>

                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>

                <p className="mx-auto max-w-62.5 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
