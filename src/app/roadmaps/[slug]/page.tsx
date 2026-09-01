import { frontendRoadmap, frontEndProjects } from "@/data/frontend";
import { backEndProjects, backendRoadmap } from "@/data/backend";
import {
  BookOpen,
  PlayCircle,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { fullStackProjects, fullstackRoadmap } from "@/data/fullstack";

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const currentRoadMap = [
    frontendRoadmap,
    backendRoadmap,
    fullstackRoadmap,
  ].find((road) => road.slug === slug);
  const projects =
    slug === "frontend"
      ? frontEndProjects
      : slug === "backend"
        ? backEndProjects
        : fullStackProjects;

  if (!currentRoadMap) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">المسار غير موجود</h1>
      </main>
    );
  }
  return (
    <main dir="rtl" className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold">{currentRoadMap.title}</h1>

        <p className="mt-4 text-gray-600">{currentRoadMap.description}</p>

        <div className="mt-6 flex gap-6 text-sm text-gray-500">
          <span>{currentRoadMap.level}</span>
          <span>{currentRoadMap.stages} مرحلة</span>
        </div>

        <div className="mt-14 space-y-8">
          {currentRoadMap.sections.map((section) => {
            const Icon = section.icon;

            return (
              <section
                key={section.id}
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
                        <span className="text-sm text-gray-400">
                          {index + 1}
                        </span>

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
              </section>
            );
          })}
        </div>
        <section className="mt-6 rounded-2xl border bg-white p-6">
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
        </section>
      </section>
    </main>
  );
}
