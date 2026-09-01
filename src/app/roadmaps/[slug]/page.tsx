import { frontendRoadmap, frontEndProjects } from "@/data/roadmaps/frontend";
import { backEndProjects, backendRoadmap } from "@/data/roadmaps/backend";
import { mobileProjects, mobileRoadmap } from "@/data/roadmaps/mobile";
import { fullStackProjects, fullstackRoadmap } from "@/data/roadmaps/fullstack";
import { RoadmapWithoutIcons } from "@/types/roadmap";
import RoadmapProjects from "@/components/roadmap/RoadmapProjects";
import RoadmapHeader from "@/components/roadmap/RoadmapHeader";
import RoadmapBody from "@/components/roadmap/Roadmapsbody";

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const currentRoadMap = [
    frontendRoadmap,
    backendRoadmap,
    mobileRoadmap,
    fullstackRoadmap,
  ].find((road) => road.slug === slug);
  const projects =
    slug === "frontend"
      ? frontEndProjects
      : slug === "backend"
        ? backEndProjects
        : slug === "mobile"
          ? mobileProjects
          : fullStackProjects;

  if (!currentRoadMap) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">المسار غير موجود</h1>
      </main>
    );
  }

  // Create clean versions without icon functions for Client Components
  const roadmapDataWithoutIcons = {
    slug: currentRoadMap.slug,
    title: currentRoadMap.title,
    description: currentRoadMap.description,
    level: currentRoadMap.level,
    stages: currentRoadMap.stages,
    sections: currentRoadMap.sections.map((section) => ({
      id: section.id,
      title: section.title,
      description: section.description,
      topics: section.topics as typeof section.topics,
    })),
  } as RoadmapWithoutIcons;

  const roadmapData = {
    title: currentRoadMap.title,
    description: currentRoadMap.description,
    level: currentRoadMap.level,
    stages: currentRoadMap.stages,
  };

  return (
    <main dir="rtl" className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <RoadmapHeader currentRoadMap={roadmapData} />
        <RoadmapBody currentRoadMap={roadmapDataWithoutIcons} />
        <RoadmapProjects projects={projects} />
      </section>
    </main>
  );
}
