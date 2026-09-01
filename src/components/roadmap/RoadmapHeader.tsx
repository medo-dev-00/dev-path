"use client";
import { motion } from "motion/react";

interface RoadmapHeaderProps {
  currentRoadMap: {
    title: string;
    description: string;
    level: string;
    stages: number;
  };
}

export default function RoadmapHeader({ currentRoadMap }: RoadmapHeaderProps) {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        {currentRoadMap.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-gray-600"
      >
        {currentRoadMap.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 flex gap-6 text-sm text-gray-500"
      >
        <span>{currentRoadMap.level}</span>
        <span>{currentRoadMap.stages} مرحلة</span>
      </motion.div>
    </>
  );
}
