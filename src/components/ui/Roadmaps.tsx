"use client";

import { frontendRoadmap } from "@/data/roadmaps/frontend";
import { fullstackRoadmap } from "@/data/roadmaps/fullstack";
import { mobileRoadmap } from "@/data/roadmaps/mobile";
import RoadmapCard from "../ui/RoadmapCard";

import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { backendRoadmap } from "@/data/roadmaps/backend";
import { BiServer } from "react-icons/bi";
import { MdPhoneIphone } from "react-icons/md";
import { motion } from "motion/react";

export default function Roadmaps() {
  const roadmaps = [
    {
      ...frontendRoadmap,
      icon: FaReact,
    },
    {
      ...backendRoadmap,
      icon: FaServer,
    },
    {
      ...mobileRoadmap,
      icon: MdPhoneIphone,
    },
    {
      ...fullstackRoadmap,
      icon: BiServer,
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <motion.header
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold">المسارات التعليمية</h1>

        <p className="mt-4 text-gray-500">
          اختر المسار المناسب لهدفك وابدأ رحلة تعلم واضحة ومنظمة.
        </p>
      </motion.header>

      <div className="flex gap-4 flex-wrap">
        {roadmaps.map((roadmap, index) => (
          <RoadmapCard
            key={roadmap.title}
            roadmap={{
              name: roadmap.title,
              href: roadmap.slug,
              description: roadmap.description,
              icon: roadmap.icon,
              level: roadmap.level,
              stages: roadmap.stages,
            }}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
