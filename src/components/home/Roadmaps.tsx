import { frontendRoadmap } from "@/data/frontend";
import { fullstackRoadmap } from "@/data/fullstack";
import RoadmapCard from "./RoadmapCard";

import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { backendRoadmap } from "@/data/backend";
import { BiServer } from "react-icons/bi";

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
      ...fullstackRoadmap,
      icon: BiServer,
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold">المسارات التعليمية</h1>

        <p className="mt-4 text-gray-500">
          اختر المسار المناسب لهدفك وابدأ رحلة تعلم واضحة ومنظمة.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roadmaps.map((roadmap) => (
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
          />
        ))}
      </div>
    </section>
  );
}
