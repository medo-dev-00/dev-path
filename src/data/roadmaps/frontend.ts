import { Roadmap } from "@/types/roadmap";
import {
  Globe,
  Code2,
  GitBranch,
  Braces,
  Atom,
  Database,
  Server,
  Palette,
  TestTube,
  Gauge,
  Rocket,
} from "lucide-react";

export const frontendRoadmap: Roadmap = {
  slug: "frontend",

  title: "تطوير الواجهات الأمامية",

  description:
    "تعلم تطوير واجهات الويب الحديثة من الصفر حتى بناء تطبيقات احترافية.",

  level: "مبتدئ إلى متقدم",

  stages: 12,

  sections: [
    // =========================
    // 01 - أساسيات الويب
    // =========================
    {
      id: 1,
      title: "أساسيات الويب",
      description: "تعلم الأساسيات التي تحتاجها قبل البدء في تطوير الواجهات.",
      icon: Globe,
      topics: [
        {
          name: "كيف يعمل الويب؟",
          slug: "how-web-works",
          resources: [
            {
              title: "كيف يعمل الويب؟",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
            },
            {
              title: "كيف يعمل الويب؟",
              type: "video",
              url: "https://youtu.be/jN3Rx3VyvdU?si=lW40aS6HGv4E-0QO",
            },
          ],
        },
        {
          name: "HTML",
          slug: "html",
          resources: [
            {
              title: "MDN - HTML",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            {
              title: "كورس HTML عربي",
              type: "video",
              url: "https://youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji",
            },
          ],
        },
        {
          name: "CSS",
          slug: "css",
          resources: [
            {
              title: "MDN - CSS",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            },
            {
              title: "كورس CSS عربي",
              type: "video",
              url: "https://youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe",
            },
          ],
        },
        {
          name: "التصميم المتجاوب",
          slug: "responsive-design",
          resources: [
            {
              title: "MDN - Responsive Design",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
            },
            {
              title: "كورس عربي",
              type: "video",
              url: "https://youtu.be/Vo3rQCgapMo?si=squnLEs0qe13NDf5",
            },
          ],
        },
        {
          name: "أدوات المطور في المتصفح",
          slug: "devtools",
          resources: [
            {
              title: "Chrome DevTools",
              type: "documentation",
              url: "https://developer.chrome.com/docs/devtools/",
            },
            {
              title: "شرح Chrome DevTools",
              type: "video",
              url: "https://youtu.be/_IKTGQosYMo?si=TfrTdAJhZ8DHeN1K",
            },
          ],
        },
      ],
    },

    // =========================
    // 02 - JavaScript
    // =========================
    {
      id: 2,
      title: "JavaScript",
      description: "تعلم لغة البرمجة الأساسية لبناء واجهات ويب تفاعلية.",
      icon: Code2,
      topics: [
        {
          name: "أساسيات JavaScript",
          slug: "javascript-fundamentals",
          resources: [
            {
              title: "JavaScript.info",
              type: "tutorial",
              url: "https://javascript.info/",
            },
            {
              title: "MDN - JavaScript",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
              title: "كورس JavaScript كامل - أكاديمية الزيرو",
              type: "video",
              url: "https://youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv",
            },
            {
              title: "كورس JavaScript - ترميز",
              type: "video",
              url: "https://youtube.com/playlist?list=PLYyqC4bNbCIeLEjcSPO61bsGPKEvYceb0",
            },
          ],
        },
        {
          name: "جافاسكريبت المستوى المتقدم",
          slug: "fetch-api",
          resources: [
            {
              title: "MDN - Fetch API",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
            },
            {
              title: "كورس JavaScript متقدم - ترميز",
              type: "video",
              url: "https://youtube.com/playlist?list=PLYyqC4bNbCIdvviLNbvYKfvHqszFPnUkj",
            },
          ],
        },
      ],
    },

    // =========================
    // 03 - Git & GitHub
    // =========================
    {
      id: 3,
      title: "Git و GitHub",
      description: "تعلم إدارة مشاريعك وأكوادك باستخدام Git وGitHub.",
      icon: GitBranch,
      topics: [
        {
          name: "Git و GitHub",
          slug: "git-basics",
          resources: [
            {
              title: "Git Documentation",
              type: "documentation",
              url: "https://git-scm.com/doc",
            },
            {
              title: "كورس Git و GitHub - أكاديمية المدرسة",
              type: "video",
              url: "https://almdrasa.com/tracks/programming-foundations/courses/git-github/",
            },
            {
              title: "كورس Git و GitHub",
              type: "video",
              url: "https://youtu.be/fDkR0TDR9dI?si=VGbqAK8EnuFCUIzJ",
            },
          ],
        },
      ],
    },

    // =========================
    // 04 - TypeScript
    // =========================
    {
      id: 4,
      title: "TypeScript",
      description:
        "تعلم TypeScript وإضافة نظام أنواع قوي إلى مشاريع JavaScript.",
      icon: Braces,
      topics: [
        {
          name: "الأنواع Types",
          slug: "types",
          resources: [
            {
              title: "TypeScript Handbook",
              type: "documentation",
              url: "https://www.typescriptlang.org/docs/handbook/intro.html",
            },
            {
              title: "كورس TypeScript عربي",
              type: "video",
              url: "https://youtube.com/playlist?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ",
            },
          ],
        },
      ],
    },

    // =========================
    // 05 - React
    // =========================
    {
      id: 5,
      title: "React",
      description: "تعلم بناء واجهات المستخدم الحديثة باستخدام React.",
      icon: Atom,
      topics: [
        {
          name: "المكونات",
          slug: "components",
          resources: [
            {
              title: "React - Your First Component",
              type: "documentation",
              url: "https://react.dev/learn/your-first-component",
            },
            {
              title: "كورس React",
              type: "video",
              url: "https://youtube.com/playlist?list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS",
            },
          ],
        },
      ],
    },

    // =========================
    // 06 - State Management
    // =========================
    {
      id: 6,
      title: "إدارة الحالة والبيانات State Management",
      description:
        "تعلم إدارة حالة التطبيقات والتعامل مع البيانات بشكل احترافي.",
      icon: Database,
      topics: [
        {
          name: "Redux Toolkit",
          slug: "redux-toolkit",
          resources: [
            {
              title: "Redux Toolkit Documentation",
              type: "documentation",
              url: "https://redux-toolkit.js.org/",
            },
            {
              title: "Redux Toolkit Course",
              type: "video",
              url: "https://youtu.be/5yEG6GhoJBs?si=k2zky8Gn4-HKH0xU",
            },
            {
              title: "كورس Redux - ترميز",
              type: "video",
              url: "https://youtube.com/playlist?list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS",
            },
          ],
        },
        {
          name: "Zustand",
          slug: "zustand",
          resources: [
            {
              title: "Zustand Documentation",
              type: "documentation",
              url: "https://zustand.docs.pmnd.rs/",
            },
            {
              title: "Zustand Course",
              type: "video",
              url: "https://youtu.be/_ngCLZ5Iz-0?si=_zWco6wJ6l5lgXu_",
            },
          ],
        },
        {
          name: "TanStack Query",
          slug: "tanstack-query",
          resources: [
            {
              title: "TanStack Query Documentation",
              type: "documentation",
              url: "https://tanstack.com/query/latest/docs/framework/react/overview",
            },
            {
              title: "TanStack Query Course",
              type: "video",
              url: "https://youtu.be/KcKkwF55Pes?si=qwlM4gbBGegNJVPI",
            },
          ],
        },
      ],
    },

    // =========================
    // 07 - APIs
    // =========================
    {
      id: 7,
      title: "التعامل مع APIs",
      description:
        "تعلم ربط الواجهة الأمامية بالـ Backend والتعامل مع البيانات.",
      icon: Server,
      topics: [
        {
          name: "واجهات REST API",
          slug: "rest-api",
          resources: [
            {
              title: "MDN - HTTP",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
            },
            {
              title: "كورس REST API - أكاديمية سطر",
              type: "video",
              url: "https://satr.tuwaiq.edu.sa/course/oiLuiMJRJw/view",
            },
          ],
        },
        {
          name: "طرق HTTP",
          slug: "http-methods",
          resources: [
            {
              title: "MDN - HTTP Methods",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods",
            },
            {
              title: "شرح HTTP Methods",
              type: "video",
              url: "https://youtu.be/iYM2zFP3Zn0",
            },
          ],
        },
        {
          name: "صيغة JSON",
          slug: "json",
          resources: [
            {
              title: "MDN - JSON",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON",
            },
            {
              title: "JSON Crash Course",
              type: "video",
              url: "https://youtu.be/iiADhChRriM",
            },
          ],
        },
        {
          name: "المصادقة",
          slug: "authentication",
          resources: [
            {
              title: "MDN - HTTP Authentication",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication",
            },
            {
              title: "Authentication Explained",
              type: "video",
              url: "https://youtu.be/2PPSXonhIck",
            },
          ],
        },
        {
          name: "حالات التحميل والأخطاء",
          slug: "loading-error-states",
          resources: [
            {
              title: "React - Managing State",
              type: "documentation",
              url: "https://react.dev/learn/managing-state",
            },
            {
              title: "React Loading and Error States",
              type: "video",
              url: "https://youtu.be/TNhaISOUy6Q",
            },
          ],
        },
      ],
    },

    // =========================
    // 08 - Tailwind CSS
    // =========================
    {
      id: 8,
      title: "Tailwind CSS",
      description: "تعلم بناء واجهات حديثة ومتجاوبة باستخدام Tailwind CSS.",
      icon: Palette,
      topics: [
        {
          name: "أساسيات Tailwind CSS",
          slug: "tailwind-basics",
          resources: [
            {
              title: "Tailwind CSS Documentation",
              type: "documentation",
              url: "https://tailwindcss.com/docs",
            },
            {
              title: "كورس Tailwind CSS - ترميز",
              type: "video",
              url: "https://youtu.be/Pk3hhCJG2Dk?si=eU0xH5w5FbwQqa4o",
            },
          ],
        },
        {
          name: "التصميم المتجاوب",
          slug: "tailwind-responsive",
          resources: [
            {
              title: "Tailwind - Responsive Design",
              type: "documentation",
              url: "https://tailwindcss.com/docs/responsive-design",
            },
            {
              title: "Tailwind Responsive Design",
              type: "video",
              url: "https://youtu.be/jUgJ4m5Hn68",
            },
          ],
        },
        {
          name: "الوضع الداكن",
          slug: "dark-mode",
          resources: [
            {
              title: "Tailwind - Dark Mode",
              type: "documentation",
              url: "https://tailwindcss.com/docs/dark-mode",
            },
            {
              title: "Tailwind Dark Mode",
              type: "video",
              url: "https://youtu.be/jUgJ4m5Hn68",
            },
          ],
        },
        {
          name: "المكونات القابلة لإعادة الاستخدام",
          slug: "reusable-components",
          resources: [
            {
              title: "Tailwind CSS Documentation",
              type: "documentation",
              url: "https://tailwindcss.com/docs",
            },
            {
              title: "Reusable Components with Tailwind CSS",
              type: "video",
              url: "https://youtu.be/5F_JUvPq410",
            },
          ],
        },
      ],
    },

    // =========================
    // 09 - Next.js
    // =========================
    {
      id: 9,
      title: "Next.js",
      description: "تعلم بناء تطبيقات React حديثة باستخدام Next.js.",
      icon: Rocket,
      topics: [
        {
          name: "موجه التطبيقات",
          slug: "app-router",
          resources: [
            {
              title: "Next.js App Router",
              type: "documentation",
              url: "https://nextjs.org/docs/app",
            },
            {
              title: "Next.js Course",
              type: "video",
              url: "https://youtube.com/playlist?list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY",
            },
            {
              title: "Next.js 13 Course",
              type: "video",
              url: "https://youtube.com/playlist?list=PLuqzHerFBD5Bw9QwzoTufiMAM0npEcnoX",
              note: "بص على الموقع الرسمي لترى التحديثات",
            },
          ],
        },
        {
          name: "التخطيطات",
          slug: "layouts",
          resources: [
            {
              title: "Next.js - Layouts and Pages",
              type: "documentation",
              url: "https://nextjs.org/docs/app/getting-started/layouts-and-pages",
            },
            {
              title: "Next.js Layouts",
              type: "video",
              url: "https://youtu.be/5Vw8GZcVf0k",
            },
          ],
        },
        {
          name: "المسارات الديناميكية",
          slug: "dynamic-routes",
          resources: [
            {
              title: "Next.js - Dynamic Segments",
              type: "documentation",
              url: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
            },
            {
              title: "Next.js Dynamic Routes بالعربي",
              type: "video",
              url: "https://www.youtube.com/watch?v=8NLxYc0tI6o",
            },
          ],
        },
        {
          name: "مكونات الخادم",
          slug: "server-components",
          resources: [
            {
              title: "Next.js - Server Components",
              type: "documentation",
              url: "https://nextjs.org/docs/app/getting-started/server-and-client-components",
            },
            {
              title: "Next.js Server Components",
              type: "video",
              url: "https://youtu.be/Zecr0XfR8vQ",
            },
          ],
        },
        {
          name: "مكونات العميل",
          slug: "client-components",
          resources: [
            {
              title: "Next.js - Client Components",
              type: "documentation",
              url: "https://nextjs.org/docs/app/getting-started/server-and-client-components",
            },
            {
              title: "Next.js Client Components",
              type: "video",
              url: "https://youtu.be/Zecr0XfR8vQ",
            },
          ],
        },
        {
          name: "البيانات الوصفية وتحسين محركات البحث",
          slug: "metadata-seo",
          resources: [
            {
              title: "Next.js - Metadata",
              type: "documentation",
              url: "https://nextjs.org/docs/app/getting-started/metadata-and-og-images",
            },
            {
              title: "Next.js SEO and Metadata",
              type: "video",
              url: "https://youtu.be/7eLh5d9Y8xM",
            },
          ],
        },
        {
          name: "تحسين الصور",
          slug: "image-optimization",
          resources: [
            {
              title: "Next.js - Image Optimization",
              type: "documentation",
              url: "https://nextjs.org/docs/app/getting-started/images",
            },
            {
              title: "Next.js Image Optimization",
              type: "video",
              url: "https://youtu.be/y8x4XxP3c5A",
            },
          ],
        },
      ],
    },

    // =========================
    // 10 - Testing
    // =========================
    {
      id: 10,
      title: "اختبار التطبيقات",
      description: "تعلم اختبار التطبيقات والتأكد من جودة الكود.",
      icon: TestTube,
      topics: [
        {
          name: "اختبار الوحدات",
          slug: "unit-testing",
          resources: [
            {
              title: "Vitest Documentation",
              type: "documentation",
              url: "https://vitest.dev/guide/",
            },
            {
              title: "كورس Unit Testing - أكاديمية الزيرو",
              type: "video",
              url: "https://youtube.com/playlist?list=PLDoPjvoNmBAwSrfBPERTnCmWAbcMAwG9O",
            },
          ],
        },
        {
          name: "React Testing Library",
          slug: "react-testing-library",
          resources: [
            {
              title: "React Testing Library",
              type: "documentation",
              url: "https://testing-library.com/docs/react-testing-library/intro/",
            },
            {
              title: "React Testing Library + Vitest",
              type: "video",
              url: "https://www.youtube.com/watch?v=6dOpQIwyV6g",
            },
          ],
        },
        {
          name: "Vitest",
          slug: "vitest",
          resources: [
            {
              title: "Vitest",
              type: "documentation",
              url: "https://vitest.dev/",
            },
            {
              title: "Vitest Full Course",
              type: "video",
              url: "https://www.youtube.com/watch?v=6dOpQIwyV6g",
            },
          ],
        },
      ],
    },

    // =========================
    // 11 - Performance
    // =========================
    {
      id: 11,
      title: "الأداء وتحسين السرعة",
      description: "تعلم تحسين سرعة وأداء تطبيقات الويب.",
      icon: Gauge,
      topics: [
        {
          name: "مؤشرات أداء الويب الأساسية",
          slug: "core-web-vitals",
          resources: [
            {
              title: "web.dev - Core Web Vitals",
              type: "documentation",
              url: "https://web.dev/articles/vitals",
            },
            {
              title: "Core Web Vitals",
              type: "video",
              url: "https://youtu.be/5fLW5Q5ODiE",
            },
          ],
        },
        {
          name: "التحميل الكسول",
          slug: "lazy-loading",
          resources: [
            {
              title: "MDN - Lazy Loading",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading",
            },
            {
              title: "Lazy Loading Explained",
              type: "video",
              url: "https://youtu.be/2bKkK8XJ5xA",
            },
          ],
        },
        {
          name: "تقسيم الأكواد",
          slug: "code-splitting",
          resources: [
            {
              title: "Next.js - Lazy Loading",
              type: "documentation",
              url: "https://nextjs.org/docs/app/guides/lazy-loading",
            },
            {
              title: "Code Splitting Explained",
              type: "video",
              url: "https://youtu.be/5I6X0Jp0Z5E",
            },
          ],
        },
        {
          name: "تحسين الصور",
          slug: "performance-images",
          resources: [
            {
              title: "web.dev - Optimize Images",
              type: "article",
              url: "https://web.dev/learn/images",
            },
            {
              title: "Web Image Optimization",
              type: "video",
              url: "https://youtu.be/0fONene3OIA",
            },
          ],
        },
      ],
    },
  ],
};

export const frontEndProjects = [

  {
    id: 1,
    title: "HTML & CSS Crash Course [Arabic] | شرح بالعربي",
    url: "https://www.youtube.com/watch?v=aHzw_8wWl48&list=PLuXY3ddo_8nwyBVa1I3xHXYgpQHJ1Z0wn&index=1",
    stack: ["HTML", "CSS"],
  },
  {
    id: 2,
    title: "Build a Portfolio Website Using HTML & CSS",
    url: "https://www.youtube.com/watch?v=cARGOrtiWt4&list=PLuXY3ddo_8nwyBVa1I3xHXYgpQHJ1Z0wn&index=2",
    stack: ["HTML", "CSS"],
  },
  {
    id: 3,
    title: "Build YouTube Clone Using HTML & CSS",
    url: "https://www.youtube.com/watch?v=aHzw_8wWl48&list=PLuXY3ddo_8nwyBVa1I3xHXYgpQHJ1Z0wn&index=3",
    stack: ["HTML", "CSS"],
  },
  {
    id: 4,
    title: "Memory Blocks Game",
    url: "https://www.youtube.com/playlist?list=PLDoPjvoNmBAzSymugTQZDuEOG5I64uhyU",
    stack: ["HTML", "CSS", "JavaScript"],
  },

  {
    id: 5,
    title: "Landing Page",
    url: "https://www.youtube.com/results?search_query=html+css+landing+page+project",
    stack: ["HTML", "CSS"],
  },
  {
    id: 6,
    title: "Responsive Restaurant Website",
    url: "https://www.youtube.com/results?search_query=responsive+restaurant+website+html+css+javascript",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    title: "E-Commerce Website",
    url: "https://www.youtube.com/results?search_query=ecommerce+website+html+css+javascript+project",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 8,
    title: "Todo List App",
    url: "https://www.youtube.com/results?search_query=javascript+todo+list+project",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    title: "Weather App",
    url: "https://www.youtube.com/results?search_query=javascript+weather+app+api+project",
    stack: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    id: 10,
    title: "Quiz App",
    url: "https://www.youtube.com/results?search_query=javascript+quiz+app+project",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 11,
    title: "Calculator App",
    url: "https://www.youtube.com/results?search_query=javascript+calculator+app+project",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 12,
    title: "Image Gallery",
    url: "https://www.youtube.com/results?search_query=javascript+image+gallery+project",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 13,
    title: "Product Filter & Search",
    url: "https://www.youtube.com/results?search_query=javascript+product+filter+search+project",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 14,
    title: "Shopping Cart",
    url: "https://www.youtube.com/results?search_query=javascript+shopping+cart+project",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 15,
    title: "Admin Dashboard",
    url: "https://www.youtube.com/results?search_query=frontend+admin+dashboard+html+css+javascript+project",
    stack: ["HTML", "CSS", "JavaScript"],
  },

  {
    id: 16,
    title: "React Todo App",
    url: "https://www.youtube.com/results?search_query=react+todo+app+project",
    stack: ["React", "JavaScript"],
  },
  {
    id: 17,
    title: "React E-Commerce Website",
    url: "https://www.youtube.com/results?search_query=react+ecommerce+website+project",
    stack: ["React", "JavaScript", "API"],
  },
  {
    id: 18,
    title: "React Weather App",
    url: "https://www.youtube.com/results?search_query=react+weather+app+api+project",
    stack: ["React", "JavaScript", "API"],
  },
  {
    id: 19,
    title: "React Admin Dashboard",
    url: "https://www.youtube.com/results?search_query=react+admin+dashboard+project",
    stack: ["React", "JavaScript"],
  },
  {
    id: 20,
    title: "React Movie App",
    url: "https://www.youtube.com/results?search_query=react+movie+app+api+project",
    stack: ["React", "JavaScript", "API"],
  },

  {
    id: 21,
    title: "Next.js E-Commerce",
    url: "https://www.youtube.com/results?search_query=nextjs+ecommerce+project",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 22,
    title: "Next.js Dashboard",
    url: "https://www.youtube.com/results?search_query=nextjs+admin+dashboard+project",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 23,
    title: "Next.js Blog",
    url: "https://www.youtube.com/results?search_query=nextjs+blog+project",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 24,
    title: "Next.js Authentication App",
    url: "https://www.youtube.com/results?search_query=nextjs+authentication+project",
    stack: ["Next.js", "TypeScript"],
  },
  {
    id: 25,
    title: "Next.js Full Stack Project",
    url: "https://www.youtube.com/results?search_query=nextjs+fullstack+project+typescript",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
  },

  // =========================
  // YouTube Search
  // =========================

  {
    id: 26,
    title: "ابحث عن مشاريع Frontend على YouTube",
    url: "https://www.youtube.com/results?search_query=frontend+projects+html+css+javascript+react+nextjs",
    stack: ["Frontend"],
  },
];
