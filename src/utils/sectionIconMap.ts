import {
  Smartphone,
  Code2,
  GitBranch,
  Braces,
  Atom,
  Server,
  Database,
  Layers,
  TestTube,
  Rocket,
  Zap,
  Box,
  Settings,
  BookOpen,
  ExternalLink,
  GraduationCap,
  PlayCircle,
} from "lucide-react";

type IconMap = {
  [key: number]: typeof Smartphone;
};

// Map section IDs to icon components
export const sectionIconMap: IconMap = {
  1: Smartphone,
  2: Code2,
  3: GitBranch,
  4: Braces,
  5: Atom,
  6: Server,
  7: Database,
  8: Layers,
  9: TestTube,
  10: Rocket,
  11: Zap,
  12: Box,
  13: Settings,
};

export const getIconForSection = (sectionId: number) => {
  return sectionIconMap[sectionId] || Smartphone;
};
