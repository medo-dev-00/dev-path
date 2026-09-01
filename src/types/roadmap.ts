import { LucideIcon } from "lucide-react";

export interface Resource {
  title: string;
  type: "documentation" | "video" | "course" | "article" | "tutorial";
  url: string;
  note?: string;
}

export interface Topic {
  name: string;
  slug: string;
  resources: Resource[];
}

export interface RoadmapSection {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  topics: Topic[];
}

export interface RoadmapSectionWithoutIcon {
  id: number;
  title: string;
  description: string;
  topics: Topic[];
}

export interface Project {
  id: number;
  title: string;
  url: string;
  stack: string[];
}

export interface Roadmap {
  slug: string;
  title: string;
  description: string;
  level: string;
  stages: number;
  sections: RoadmapSection[];
}

export interface RoadmapWithoutIcons {
  slug: string;
  title: string;
  description: string;
  level: string;
  stages: number;
  sections: RoadmapSectionWithoutIcon[];
}
