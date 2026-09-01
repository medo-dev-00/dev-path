import visualStudioCode from "./icons/icons8-visual-studio-code-48.png";
import github from "./icons/icons8-github-logo-94.png";
import git from "./icons/icons8-git-48.png";
import postman from "./icons/icons8-postman-api-64.png";
import figma from "./icons/icons8-figma-48.png";
import npm from "./icons/icons8-npm-48.png";
import docker from "./icons/icons8-docker-48.png";
import vercel from "./icons/icons8-vercel-50.png";
import netlify from "./icons/icons8-netlify-48.png";
import toolsIcon from "./icons/icons8-tools-50.png";
import react from "./icons/icons8-react-40.png";
import lighthouse from "./icons/icons8-lighthouse-48.png";
import speed from "./icons/icons8-speed-50.png";

export const toolsData = [
  {
    name: "Visual Studio Code",
    slug: "visual-studio-code",
    description: "محرر أكواد قوي ومفتوح المصدر من Microsoft",
    category: "Code Editor",
    url: "https://code.visualstudio.com/",
    icon: visualStudioCode,
    tags: ["Editor", "Development", "Microsoft"],
  },
  {
    name: "GitHub",
    slug: "github",
    description: "منصة لاستضافة وإدارة مشاريع Git والتعاون عليها",
    category: "Version Control",
    url: "https://github.com/",
    icon: github,
    tags: ["Git", "GitHub", "Open Source"],
  },
  {
    name: "Git",
    slug: "git",
    description: "نظام التحكم في الإصدارات وتتبع تغييرات المشروع",
    category: "Version Control",
    url: "https://git-scm.com/",
    icon: git,
    tags: ["Git", "Version Control"],
  },
  {
    name: "Postman",
    slug: "postman",
    description: "أداة لاختبار وبناء وتوثيق REST APIs",
    category: "API",
    url: "https://www.postman.com/",
    icon: postman,
    tags: ["API", "REST", "Testing"],
  },
  {
    name: "Figma",
    slug: "figma",
    description: "أداة لتصميم واجهات وتجارب المستخدم والتعاون عليها",
    category: "Design",
    url: "https://www.figma.com/",
    icon: figma,
    tags: ["UI", "UX", "Design"],
  },
  {
    name: "npm",
    slug: "npm",
    description: "مدير الحزم الرسمي لمنظومة JavaScript وNode.js",
    category: "Package Manager",
    url: "https://www.npmjs.com/",
    icon: npm,
    tags: ["JavaScript", "Node.js", "Packages"],
  },
  {
    name: "Docker",
    slug: "docker",
    description: "منصة لبناء وتشغيل ونشر التطبيقات باستخدام Containers",
    category: "DevOps",
    url: "https://www.docker.com/",
    icon: docker,
    tags: ["Docker", "Containers", "DevOps"],
  },
  {
    name: "Vercel",
    slug: "vercel",
    description: "منصة لنشر واستضافة تطبيقات الويب الحديثة",
    category: "Deployment",
    url: "https://vercel.com/",
    icon: vercel,
    tags: ["Deployment", "Next.js", "Hosting"],
  },
  {
    name: "Netlify",
    slug: "netlify",
    description: "منصة لنشر واستضافة مواقع وتطبيقات الويب",
    category: "Deployment",
    url: "https://www.netlify.com/",
    icon: netlify,
    tags: ["Deployment", "Hosting", "Frontend"],
  },
  {
    name: "Chrome DevTools",
    slug: "chrome-devtools",
    description: "مجموعة أدوات متكاملة لفحص وتصحيح تطبيقات الويب",
    category: "Development",
    url: "https://developer.chrome.com/docs/devtools/",
    icon: toolsIcon,
    tags: ["Debugging", "Chrome", "Web Development"],
  },
  {
    name: "React Developer Tools",
    slug: "react-developer-tools",
    description: "أداة لفحص وتصحيح تطبيقات React",
    category: "Development",
    url: "https://react.dev/learn/react-developer-tools",
    icon: react,
    tags: ["React", "Debugging", "Development"],
  },
  {
    name: "Lighthouse",
    slug: "lighthouse",
    description: "أداة لتحليل أداء وجودة صفحات الويب وتحسينها",
    category: "Performance",
    url: "https://developer.chrome.com/docs/lighthouse/",
    icon: lighthouse,
    tags: ["SEO", "Performance", "Accessibility"],
  },
  {
    name: "PageSpeed Insights",
    slug: "pagespeed-insights",
    description: "تحليل أداء صفحات الويب على الأجهزة المختلفة",
    category: "Performance",
    url: "https://pagespeed.web.dev/",
    icon: speed,
    tags: ["Performance", "SEO", "Google"],
  },
];
