import Link from "next/link";

export type RoadmapCardProps = {
  roadmap: {
    name: string;
    description: string;
    level: string;
    stages: number;
    icon: React.ElementType;
    href: string;
  };
};

export default function RoadmapCard({ roadmap }: RoadmapCardProps) {
  const Icon = roadmap.icon;

  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-300 bg-white p-6">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>

      <h3 className="text-2xl font-bold">{roadmap.name}</h3>

      <p className="min-h-15 leading-7 text-gray-600 mt-2 mb-4">
        {roadmap.description}
      </p>

      <div className="mb-4 flex items-center gap-6 text-sm text-gray-500">
        <span>المستوى: {roadmap.level}</span>

        <span>{roadmap.stages} مراحل</span>
      </div>

      <Link
        href={`roadmaps/${roadmap.href}`}
        className="block rounded-lg bg-gray-100 py-2.5 text-center font-bold text-blue-600 transition hover:bg-blue-50"
      >
        عرض المسار
      </Link>
    </div>
  );
}
