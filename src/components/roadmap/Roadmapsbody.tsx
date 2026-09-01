"use client";

import { RoadmapWithoutIcons } from "@/types/roadmap";
import { getIconForSection } from "@/utils/sectionIconMap";
import {
  BookOpen,
  ExternalLink,
  GraduationCap,
  PlayCircle,
} from "lucide-react";
import { motion } from "motion/react";

export default function RoadmapBody({
  currentRoadMap,
}: {
  currentRoadMap: RoadmapWithoutIcons;
}) {
  return (
    <>
      <div className="mt-14 space-y-8">
        {currentRoadMap.sections.map((section, index) => {
          const Icon = getIconForSection(section.id);

          return (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="rounded-2xl border bg-white p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon size={24} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    {section.id}. {section.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                {section.topics.map((topic, index) => (
                  <div
                    key={topic.slug}
                    className="rounded-xl border p-4 transition hover:border-blue-500
                      flex-1 basis-xs"
                  >
                    {/* Topic */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-400">{index + 1}</span>

                      <span className="font-medium">
                        {topic.name ? topic.name : "المصادر"}
                      </span>
                    </div>

                    {/* Resources */}
                    {topic.resources?.length > 0 && (
                      <div className="mt-4 border-t pt-4">
                        {topic.resources.length > 1 && (
                          <h3 className="mb-3 text-sm font-semibold text-gray-700">
                            المصادر
                          </h3>
                        )}

                        <div className="space-y-2">
                          {topic.resources.map((resource, index) => {
                            const Icon =
                              resource.type === "video"
                                ? PlayCircle
                                : resource.type === "course"
                                  ? GraduationCap
                                  : BookOpen;

                            return (
                              <a
                                key={index}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-between rounded-lg border p-3 text-sm transition ${
                                  resource.type === "video"
                                    ? "border-red-100 bg-red-50 hover:border-red-300"
                                    : resource.type === "course"
                                      ? "border-purple-100 bg-purple-50 hover:border-purple-300"
                                      : "border-gray-100 bg-gray-50 hover:border-blue-300"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <Icon
                                    size={20}
                                    className={
                                      resource.type === "video"
                                        ? "text-red-500"
                                        : resource.type === "course"
                                          ? "text-purple-500"
                                          : "text-blue-500"
                                    }
                                  />

                                  <div>
                                    <p className="font-medium">
                                      {resource.title}
                                    </p>

                                    <span className="text-xs text-gray-500">
                                      {resource.type === "video"
                                        ? "فيديو"
                                        : resource.type === "course"
                                          ? "كورس"
                                          : "توثيق"}
                                    </span>
                                  </div>
                                </div>

                                <ExternalLink
                                  size={16}
                                  className="text-gray-400"
                                />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </>
  );
}
