"use client";

import { Project } from "@/types/roadmap";
import { motion } from "motion/react";

export default function RoadmapProjects({ projects }: { projects: Project[] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-6 rounded-2xl border bg-white p-6"
    >
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
        المشاريع
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border p-4 transition-all hover:border-black hover:shadow-sm"
          >
            <h3 className="font-medium leading-7 transition group-hover:underline">
              {project.title}
            </h3>

            <span className="mt-3 block text-sm text-gray-500">
              مشاهدة المشروع →
            </span>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700"
                >
                  {s}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
