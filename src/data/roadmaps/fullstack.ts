import {
  Globe,
  FileCode2,
  Palette,
  Braces,
  Type,
  GitBranch,
  Atom,
  Paintbrush,
  Server,
  Boxes,
  Database,
  LockKeyhole,
  ShieldCheck,
  HardDrive,
  TestTube2,
  Container,
  Cloud,
  Network,
} from "lucide-react";

export const fullstackRoadmap = {
  slug: "fullstack",

  title: "Full Stack Development",

  description:
    "مسار شامل لتعلم تطوير تطبيقات الويب Full Stack من الأساسيات حتى بناء الأنظمة المتقدمة والقابلة للتوسع.",

  level: "متوسط إلى متقدم",

  stages: 20,

  sections: [
    {
      id: 1,
      title: "أساسيات الويب",
      description:
        "تعلم الأساسيات التي تحتاجها قبل البدء في تطوير تطبيقات Full Stack.",
      icon: Globe,

      topics: [
        {
          name: "كيف يعمل الويب؟",
          slug: "how-web-works",

          resources: [
            {
              title: "How the Web Works - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
            },
            {
              title: "How the Internet Works",
              type: "video",
              url: "https://www.youtube.com/results?search_query=how+the+internet+works+web+development",
            },
          ],
        },

        {
          name: "HTTP",
          slug: "http",

          resources: [
            {
              title: "HTTP - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
            },
            {
              title: "HTTP Crash Course",
              type: "video",
              url: "https://www.youtube.com/results?search_query=HTTP+crash+course+web+development",
            },
          ],
        },

        {
          name: "DNS",
          slug: "dns",

          resources: [
            {
              title: "What is DNS? - Cloudflare",
              type: "documentation",
              url: "https://www.cloudflare.com/learning/dns/what-is-dns/",
            },
            {
              title: "DNS Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=DNS+explained+for+developers",
            },
          ],
        },

        {
          name: "Domain Names",
          slug: "domain-names",

          resources: [
            {
              title: "What is a Domain Name? - Cloudflare",
              type: "documentation",
              url: "https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/",
            },
            {
              title: "Domain Names Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=domain+names+explained+web+development",
            },
          ],
        },

        {
          name: "Hosting",
          slug: "hosting",

          resources: [
            {
              title: "What is a Web Server? - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server",
            },
            {
              title: "Web Hosting Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=web+hosting+explained+for+beginners",
            },
          ],
        },
      ],
    },

    {
      id: 2,
      title: "HTML",
      description: "تعلم بناء هيكل صفحات الويب باستخدام HTML.",
      icon: FileCode2,

      topics: [
        {
          name: "HTML Basics",
          slug: "html-basics",

          resources: [
            {
              title: "HTML - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            {
              title: "HTML Full Course",
              type: "video",
              url: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
            },
            {
              title: "كورس عربي كامل",
              type: "video",
              url: "https://youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji&si=HZ1TWL_fomBCcBnA",
            },
          ],
        },

        {
          name: "Semantic HTML",
          slug: "semantic-html",

          resources: [
            {
              title: "Semantic HTML - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
            },
            {
              title: "Semantic HTML Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=semantic+HTML+explained",
            },
          ],
        },

        {
          name: "Forms",
          slug: "html-forms",

          resources: [
            {
              title: "HTML Forms - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms",
            },
            {
              title: "HTML Forms Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=HTML+forms+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 3,
      title: "CSS",
      description: "تعلم تصميم واجهات الويب وجعلها متجاوبة مع جميع الشاشات.",
      icon: Palette,

      topics: [
        {
          name: "CSS Basics",
          slug: "css-basics",

          resources: [
            {
              title: "CSS - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            },
            {
              title: "CSS Full Course",
              type: "video",
              url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
            },
          ],
        },

        {
          name: "Flexbox",
          slug: "flexbox",

          resources: [
            {
              title: "Flexbox - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
            },
            {
              title: "Flexbox Crash Course",
              type: "video",
              url: "https://www.youtube.com/results?search_query=CSS+Flexbox+crash+course",
            },
          ],
        },

        {
          name: "CSS Grid",
          slug: "css-grid",

          resources: [
            {
              title: "CSS Grid - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
            },
            {
              title: "CSS Grid Crash Course",
              type: "video",
              url: "https://www.youtube.com/results?search_query=CSS+Grid+crash+course",
            },
          ],
        },

        {
          name: "Responsive Design",
          slug: "responsive-design",

          resources: [
            {
              title: "Responsive Design - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
            },
            {
              title: "Responsive Web Design",
              type: "video",
              url: "https://www.youtube.com/results?search_query=responsive+web+design+CSS+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 4,
      title: "JavaScript",
      description:
        "تعلم JavaScript لبناء تطبيقات ويب تفاعلية وفهم أساسيات البرمجة.",
      icon: Braces,

      topics: [
        {
          name: "JavaScript Fundamentals",
          slug: "javascript-fundamentals",

          resources: [
            {
              title: "JavaScript Guide - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            },
            {
              title: "JavaScript Full Course",
              type: "video",
              url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
            },
          ],
        },

        {
          name: "DOM",
          slug: "dom",

          resources: [
            {
              title: "DOM - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
            },
            {
              title: "JavaScript DOM Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=JavaScript+DOM+tutorial",
            },
          ],
        },

        {
          name: "Async JavaScript",
          slug: "async-javascript",

          resources: [
            {
              title: "Asynchronous JavaScript - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS",
            },
            {
              title: "Async JavaScript Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=async+JavaScript+promises+async+await",
            },
          ],
        },

        {
          name: "Fetch API",
          slug: "fetch-api",

          resources: [
            {
              title: "Fetch API - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
            },
            {
              title: "Fetch API Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=JavaScript+Fetch+API+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 5,
      title: "TypeScript",
      description: "تعلم TypeScript لكتابة JavaScript أكثر أمانًا وتنظيمًا.",
      icon: Type,

      topics: [
        {
          name: "TypeScript Basics",
          slug: "typescript-basics",

          resources: [
            {
              title: "TypeScript Handbook",
              type: "documentation",
              url: "https://www.typescriptlang.org/docs/handbook/intro.html",
            },
            {
              title: "TypeScript Full Course",
              type: "video",
              url: "https://www.youtube.com/watch?v=30LWjhZzg50",
            },
          ],
        },

        {
          name: "Types",
          slug: "typescript-types",

          resources: [
            {
              title: "Everyday Types",
              type: "documentation",
              url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
            },
            {
              title: "TypeScript Types Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=TypeScript+types+tutorial",
            },
          ],
        },

        {
          name: "Interfaces",
          slug: "typescript-interfaces",

          resources: [
            {
              title: "Object Types",
              type: "documentation",
              url: "https://www.typescriptlang.org/docs/handbook/2/objects.html",
            },
            {
              title: "TypeScript Interfaces",
              type: "video",
              url: "https://www.youtube.com/results?search_query=TypeScript+interfaces+tutorial",
            },
          ],
        },

        {
          name: "Generics",
          slug: "typescript-generics",

          resources: [
            {
              title: "Generics",
              type: "documentation",
              url: "https://www.typescriptlang.org/docs/handbook/2/generics.html",
            },
            {
              title: "TypeScript Generics",
              type: "video",
              url: "https://www.youtube.com/results?search_query=TypeScript+generics+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 6,
      title: "Git و GitHub",
      description:
        "تعلم إدارة المشاريع والإصدارات والتعاون باستخدام Git وGitHub.",
      icon: GitBranch,

      topics: [
        {
          name: "Git Basics",
          slug: "git-basics",

          resources: [
            {
              title: "Git Documentation",
              type: "documentation",
              url: "https://git-scm.com/doc",
            },
            {
              title: "Git and GitHub Full Course",
              type: "video",
              url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
            },
          ],
        },

        {
          name: "GitHub",
          slug: "github",

          resources: [
            {
              title: "GitHub Documentation",
              type: "documentation",
              url: "https://docs.github.com/",
            },
            {
              title: "GitHub Tutorial for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=GitHub+tutorial+for+beginners",
            },
          ],
        },

        {
          name: "Branching",
          slug: "git-branching",

          resources: [
            {
              title: "Git Branching",
              type: "documentation",
              url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell",
            },
            {
              title: "Git Branching Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Git+branching+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 7,
      title: "React",
      description: "تعلم بناء واجهات المستخدم الحديثة باستخدام React.",
      icon: Atom,

      topics: [
        {
          name: "Components",
          slug: "react-components",

          resources: [
            {
              title: "Your First Component - React",
              type: "documentation",
              url: "https://react.dev/learn/your-first-component",
            },
            {
              title: "React Components Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=React+components+tutorial",
            },
          ],
        },

        {
          name: "Props",
          slug: "react-props",

          resources: [
            {
              title: "Passing Props - React",
              type: "documentation",
              url: "https://react.dev/learn/passing-props-to-a-component",
            },
            {
              title: "React Props Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=React+props+tutorial",
            },
          ],
        },

        {
          name: "State",
          slug: "react-state",

          resources: [
            {
              title: "State: A Component's Memory",
              type: "documentation",
              url: "https://react.dev/learn/state-a-components-memory",
            },
            {
              title: "React State Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=React+state+useState+tutorial",
            },
          ],
        },

        {
          name: "Hooks",
          slug: "react-hooks",

          resources: [
            {
              title: "Built-in React Hooks",
              type: "documentation",
              url: "https://react.dev/reference/react",
            },
            {
              title: "React Hooks Course",
              type: "video",
              url: "https://www.youtube.com/results?search_query=React+Hooks+useEffect+useState+tutorial",
            },
          ],
        },

        {
          name: "Forms",
          slug: "react-forms",

          resources: [
            {
              title: "React Learn",
              type: "documentation",
              url: "https://react.dev/learn",
            },
            {
              title: "React Forms Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=React+forms+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 8,
      title: "Styling و UI",
      description:
        "تعلم بناء واجهات احترافية ومتجاوبة باستخدام أدوات التصميم الحديثة.",
      icon: Paintbrush,

      topics: [
        {
          name: "Tailwind CSS",
          slug: "tailwind-css",

          resources: [
            {
              title: "Tailwind CSS Documentation",
              type: "documentation",
              url: "https://tailwindcss.com/docs",
            },
            {
              title: "Tailwind CSS Full Course",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Tailwind+CSS+full+course",
            },
          ],
        },

        {
          name: "Responsive UI",
          slug: "responsive-ui",

          resources: [
            {
              title: "Responsive Design",
              type: "documentation",
              url: "https://tailwindcss.com/docs/responsive-design",
            },
            {
              title: "Responsive Design with Tailwind CSS",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Tailwind+CSS+responsive+design+tutorial",
            },
          ],
        },

        {
          name: "Dark Mode",
          slug: "dark-mode",

          resources: [
            {
              title: "Dark Mode",
              type: "documentation",
              url: "https://tailwindcss.com/docs/dark-mode",
            },
            {
              title: "Tailwind CSS Dark Mode",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Tailwind+CSS+dark+mode+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 9,
      title: "Next.js",
      description: "تعلم بناء تطبيقات Full Stack حديثة باستخدام Next.js.",
      icon: Server,

      topics: [
        {
          name: "App Router",
          slug: "nextjs-app-router",

          resources: [
            {
              title: "Next.js App Router",
              type: "documentation",
              url: "https://nextjs.org/docs/app",
            },
            {
              title: "Next.js Full Course",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Next.js+App+Router+full+course",
            },
          ],
        },

        {
          name: "Layouts",
          slug: "nextjs-layouts",

          resources: [
            {
              title: "Layouts and Pages",
              type: "documentation",
              url: "https://nextjs.org/docs/app/getting-started/layouts-and-pages",
            },
            {
              title: "Next.js Layouts and Pages",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Next.js+layouts+pages+tutorial",
            },
          ],
        },

        {
          name: "Dynamic Routes",
          slug: "nextjs-dynamic-routes",

          resources: [
            {
              title: "Dynamic Segments",
              type: "documentation",
              url: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
            },
            {
              title: "Next.js Dynamic Routes",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Next.js+dynamic+routes+tutorial",
            },
          ],
        },

        {
          name: "Server Components",
          slug: "server-components",

          resources: [
            {
              title: "Server and Client Components",
              type: "documentation",
              url: "https://nextjs.org/docs/app/getting-started/server-and-client-components",
            },
            {
              title: "Next.js Server Components",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Next.js+Server+Components+tutorial",
            },
          ],
        },

        {
          name: "Server Actions",
          slug: "server-actions",

          resources: [
            {
              title: "Server Functions",
              type: "documentation",
              url: "https://nextjs.org/docs/app/api-reference/directives/use-server",
            },
            {
              title: "Next.js Server Actions",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Next.js+Server+Actions+tutorial",
            },
          ],
        },

        {
          name: "Authentication",
          slug: "nextjs-authentication",

          resources: [
            {
              title: "Authentication - Next.js",
              type: "documentation",
              url: "https://nextjs.org/docs/app/guides/authentication",
            },
            {
              title: "Next.js Authentication",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Next.js+authentication+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 10,
      title: "إدارة الحالة والبيانات",
      description:
        "تعلم إدارة حالة التطبيقات والتعامل مع البيانات القادمة من الـ APIs.",
      icon: Boxes,

      topics: [
        {
          name: "Redux Toolkit",
          slug: "redux-toolkit",

          resources: [
            {
              title: "Redux Toolkit",
              type: "documentation",
              url: "https://redux-toolkit.js.org/",
            },
            {
              title: "Redux Toolkit Full Course",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Redux+Toolkit+full+course",
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
              title: "Zustand Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Zustand+React+tutorial",
            },
          ],
        },

        {
          name: "TanStack Query",
          slug: "tanstack-query",

          resources: [
            {
              title: "TanStack Query",
              type: "documentation",
              url: "https://tanstack.com/query/latest/docs/framework/react/overview",
            },
            {
              title: "TanStack Query Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=TanStack+Query+React+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 11,
      title: "أساسيات الـ Backend",
      description: "تعلم المفاهيم الأساسية لبناء الخوادم وواجهات البرمجة.",
      icon: Server,

      topics: [
        {
          name: "Node.js",
          slug: "nodejs",

          resources: [
            {
              title: "Node.js Documentation",
              type: "documentation",
              url: "https://nodejs.org/docs/latest/api/",
            },
            {
              title: "Node.js Full Course",
              type: "video",
              url: "https://www.youtube.com/watch?v=Oe421EPjeBE",
            },
          ],
        },

        {
          name: "Express.js",
          slug: "expressjs",

          resources: [
            {
              title: "Express Documentation",
              type: "documentation",
              url: "https://expressjs.com/",
            },
            {
              title: "Express.js Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Express.js+full+course",
            },
          ],
        },

        {
          name: "REST APIs",
          slug: "rest-apis",

          resources: [
            {
              title: "REST - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
            },
            {
              title: "REST API Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=REST+API+tutorial+for+beginners",
            },
          ],
        },

        {
          name: "Middleware",
          slug: "middleware",

          resources: [
            {
              title: "Express Middleware",
              type: "documentation",
              url: "https://expressjs.com/en/guide/using-middleware.html",
            },
            {
              title: "Express Middleware Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Express+middleware+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 12,
      title: "قواعد البيانات",
      description:
        "تعلم تخزين البيانات وإدارتها باستخدام قواعد البيانات العلائقية وغير العلائقية.",
      icon: Database,

      topics: [
        {
          name: "SQL",
          slug: "sql",

          resources: [
            {
              title: "SQL Tutorial",
              type: "tutorial",
              url: "https://www.w3schools.com/sql/",
            },
            {
              title: "SQL Full Course",
              type: "video",
              url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
            },
          ],
        },

        {
          name: "PostgreSQL",
          slug: "postgresql",

          resources: [
            {
              title: "PostgreSQL Documentation",
              type: "documentation",
              url: "https://www.postgresql.org/docs/",
            },
            {
              title: "PostgreSQL Full Course",
              type: "video",
              url: "https://www.youtube.com/results?search_query=PostgreSQL+full+course",
            },
          ],
        },

        {
          name: "MongoDB",
          slug: "mongodb",

          resources: [
            {
              title: "MongoDB Documentation",
              type: "documentation",
              url: "https://www.mongodb.com/docs/",
            },
            {
              title: "MongoDB Full Course",
              type: "video",
              url: "https://www.youtube.com/results?search_query=MongoDB+full+course",
            },
          ],
        },

        {
          name: "Database Relationships",
          slug: "database-relationships",

          resources: [
            {
              title: "PostgreSQL Constraints",
              type: "documentation",
              url: "https://www.postgresql.org/docs/current/ddl-constraints.html",
            },
            {
              title: "Database Relationships Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=database+relationships+one+to+many+many+to+many",
            },
          ],
        },
      ],
    },

    {
      id: 13,
      title: "ORM",
      description: "تعلم التعامل مع قواعد البيانات من خلال ORM حديث.",
      icon: Boxes,

      topics: [
        {
          name: "Prisma",
          slug: "prisma",

          resources: [
            {
              title: "Prisma Documentation",
              type: "documentation",
              url: "https://www.prisma.io/docs",
            },
            {
              title: "Prisma ORM Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Prisma+ORM+full+course",
            },
          ],
        },

        {
          name: "Migrations",
          slug: "database-migrations",

          resources: [
            {
              title: "Prisma Migrate",
              type: "documentation",
              url: "https://www.prisma.io/docs/orm/prisma-migrate",
            },
            {
              title: "Prisma Migrations",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Prisma+migrations+tutorial",
            },
          ],
        },

        {
          name: "Relations",
          slug: "prisma-relations",

          resources: [
            {
              title: "Prisma Relations",
              type: "documentation",
              url: "https://www.prisma.io/docs/orm/prisma-schema/data-model/relations",
            },
            {
              title: "Prisma Relations Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Prisma+relations+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 14,
      title: "المصادقة والصلاحيات",
      description: "تعلم بناء أنظمة تسجيل الدخول والصلاحيات وحماية التطبيقات.",
      icon: LockKeyhole,

      topics: [
        {
          name: "Authentication",
          slug: "authentication",

          resources: [
            {
              title: "Next.js Authentication",
              type: "documentation",
              url: "https://nextjs.org/docs/app/guides/authentication",
            },
            {
              title: "Authentication Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=web+authentication+login+system+tutorial",
            },
          ],
        },

        {
          name: "JWT",
          slug: "jwt",

          resources: [
            {
              title: "JWT Introduction",
              type: "documentation",
              url: "https://jwt.io/introduction",
            },
            {
              title: "JWT Authentication Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=JWT+authentication+tutorial",
            },
          ],
        },

        {
          name: "Cookies",
          slug: "cookies",

          resources: [
            {
              title: "HTTP Cookies - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies",
            },
            {
              title: "HTTP Cookies Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=HTTP+cookies+explained+web+development",
            },
          ],
        },

        {
          name: "OAuth",
          slug: "oauth",

          resources: [
            {
              title: "OAuth 2.0",
              type: "documentation",
              url: "https://oauth.net/2/",
            },
            {
              title: "OAuth 2.0 Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=OAuth+2.0+explained+tutorial",
            },
          ],
        },

        {
          name: "Role Based Access Control",
          slug: "rbac",

          resources: [
            {
              title: "Authorization - OWASP",
              type: "documentation",
              url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html",
            },
            {
              title: "RBAC Authorization Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=RBAC+role+based+access+control+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 15,
      title: "أمان تطبيقات الويب",
      description:
        "تعلم حماية الـ Frontend والـ Backend والـ APIs من أشهر الثغرات.",
      icon: ShieldCheck,

      topics: [
        {
          name: "HTTPS",
          slug: "https",

          resources: [
            {
              title: "HTTPS - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS",
            },
            {
              title: "HTTPS Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=HTTPS+explained+for+developers",
            },
          ],
        },

        {
          name: "CORS",
          slug: "cors",

          resources: [
            {
              title: "CORS - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS",
            },
            {
              title: "CORS Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=CORS+explained+web+development",
            },
          ],
        },

        {
          name: "XSS",
          slug: "xss",

          resources: [
            {
              title: "Cross-site scripting - OWASP",
              type: "documentation",
              url: "https://owasp.org/www-community/attacks/xss/",
            },
            {
              title: "XSS Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=XSS+cross+site+scripting+explained",
            },
          ],
        },

        {
          name: "SQL Injection",
          slug: "sql-injection",

          resources: [
            {
              title: "SQL Injection - OWASP",
              type: "documentation",
              url: "https://owasp.org/www-community/attacks/SQL_Injection",
            },
            {
              title: "SQL Injection Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=SQL+injection+explained+OWASP",
            },
          ],
        },

        {
          name: "OWASP Top 10",
          slug: "owasp-top-10",

          resources: [
            {
              title: "OWASP Top 10",
              type: "documentation",
              url: "https://owasp.org/www-project-top-ten/",
            },
            {
              title: "OWASP Top 10 Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=OWASP+Top+10+explained",
            },
          ],
        },
      ],
    },

    {
      id: 16,
      title: "Caching",
      description: "تعلم تخزين البيانات مؤقتًا وتحسين سرعة واستجابة التطبيقات.",
      icon: HardDrive,

      topics: [
        {
          name: "Redis",
          slug: "redis",

          resources: [
            {
              title: "Redis Documentation",
              type: "documentation",
              url: "https://redis.io/docs/latest/",
            },
            {
              title: "Redis Full Course",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Redis+full+course",
            },
          ],
        },

        {
          name: "HTTP Caching",
          slug: "http-caching",

          resources: [
            {
              title: "HTTP Caching - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching",
            },
            {
              title: "HTTP Caching Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=HTTP+caching+explained",
            },
          ],
        },

        {
          name: "CDN",
          slug: "cdn",

          resources: [
            {
              title: "CDN - Cloudflare",
              type: "documentation",
              url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/",
            },
            {
              title: "CDN Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=CDN+explained+Cloudflare",
            },
          ],
        },
      ],
    },

    {
      id: 17,
      title: "اختبار التطبيقات",
      description:
        "تعلم اختبار الـ Frontend والـ Backend والتأكد من جودة التطبيق.",
      icon: TestTube2,

      topics: [
        {
          name: "Unit Testing",
          slug: "unit-testing",

          resources: [
            {
              title: "Vitest Documentation",
              type: "documentation",
              url: "https://vitest.dev/",
            },
            {
              title: "Unit Testing with Vitest",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Vitest+unit+testing+tutorial",
            },
          ],
        },

        {
          name: "Integration Testing",
          slug: "integration-testing",

          resources: [
            {
              title: "Integration Testing - Martin Fowler",
              type: "article",
              url: "https://martinfowler.com/bliki/IntegrationTest.html",
            },
            {
              title: "Integration Testing Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=integration+testing+explained",
            },
          ],
        },

        {
          name: "E2E Testing",
          slug: "e2e-testing",

          resources: [
            {
              title: "Playwright Documentation",
              type: "documentation",
              url: "https://playwright.dev/docs/intro",
            },
            {
              title: "Playwright E2E Testing",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Playwright+E2E+testing+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 18,
      title: "Docker",
      description:
        "تعلم تشغيل التطبيقات داخل Containers وإعداد بيئات التطوير والإنتاج.",
      icon: Container,

      topics: [
        {
          name: "Docker Basics",
          slug: "docker-basics",

          resources: [
            {
              title: "Docker Documentation",
              type: "documentation",
              url: "https://docs.docker.com/",
            },
            {
              title: "Docker Full Course",
              type: "video",
              url: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
            },
          ],
        },

        {
          name: "Docker Compose",
          slug: "docker-compose",

          resources: [
            {
              title: "Docker Compose",
              type: "documentation",
              url: "https://docs.docker.com/compose/",
            },
            {
              title: "Docker Compose Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Docker+Compose+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 19,
      title: "النشر و DevOps",
      description: "تعلم نشر التطبيقات وإدارتها في بيئة الإنتاج.",
      icon: Cloud,

      topics: [
        {
          name: "Linux",
          slug: "linux",

          resources: [
            {
              title: "Linux Kernel Documentation",
              type: "documentation",
              url: "https://docs.kernel.org/",
            },
            {
              title: "Linux Full Course",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Linux+full+course+for+developers",
            },
          ],
        },

        {
          name: "Nginx",
          slug: "nginx",

          resources: [
            {
              title: "Nginx Documentation",
              type: "documentation",
              url: "https://nginx.org/en/docs/",
            },
            {
              title: "Nginx Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Nginx+full+course+tutorial",
            },
          ],
        },

        {
          name: "CI/CD",
          slug: "ci-cd",

          resources: [
            {
              title: "GitHub Actions",
              type: "documentation",
              url: "https://docs.github.com/en/actions",
            },
            {
              title: "GitHub Actions CI/CD",
              type: "video",
              url: "https://www.youtube.com/results?search_query=GitHub+Actions+CI+CD+tutorial",
            },
          ],
        },

        {
          name: "Environment Variables",
          slug: "environment-variables",

          resources: [
            {
              title: "The Twelve-Factor App",
              type: "documentation",
              url: "https://12factor.net/config",
            },
            {
              title: "Environment Variables Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=environment+variables+web+development+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 20,
      title: "مفاهيم متقدمة",
      description:
        "تعلم المفاهيم التي تحتاجها لبناء أنظمة Full Stack كبيرة وقابلة للتوسع.",
      icon: Network,

      topics: [
        {
          name: "System Design",
          slug: "system-design",

          resources: [
            {
              title: "System Design - roadmap.sh",
              type: "article",
              url: "https://roadmap.sh/system-design",
            },
            {
              title: "System Design Full Course",
              type: "video",
              url: "https://www.youtube.com/results?search_query=System+Design+full+course+for+developers",
            },
          ],
        },

        {
          name: "WebSockets",
          slug: "websockets",

          resources: [
            {
              title: "WebSocket API - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
            },
            {
              title: "WebSockets Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=WebSockets+Node.js+tutorial",
            },
          ],
        },

        {
          name: "Message Queues",
          slug: "message-queues",

          resources: [
            {
              title: "RabbitMQ Documentation",
              type: "documentation",
              url: "https://www.rabbitmq.com/docs",
            },
            {
              title: "Message Queues Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=message+queues+RabbitMQ+tutorial",
            },
          ],
        },

        {
          name: "Microservices",
          slug: "microservices",

          resources: [
            {
              title: "Microservices - Martin Fowler",
              type: "article",
              url: "https://martinfowler.com/articles/microservices.html",
            },
            {
              title: "Microservices Architecture Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=microservices+architecture+full+course",
            },
          ],
        },
      ],
    },
  ],
};
export const fullStackProjects = [
  // =========================
  // Beginner
  // =========================

  {
    id: 1,
    title: "Personal Portfolio",
    description: "بناء Portfolio شخصي لعرض المهارات والمشاريع والخبرات.",
    url: "https://www.youtube.com/results?search_query=nextjs+portfolio+tutorial",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },

  {
    id: 2,
    title: "Todo App",
    description: "تطبيق لإضافة وتعديل وحذف المهام مع حفظ البيانات.",
    url: "https://www.youtube.com/results?search_query=nextjs+todo+app+tutorial",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },

  {
    id: 3,
    title: "Weather App",
    description: "تطبيق يعرض حالة الطقس باستخدام API خارجي.",
    url: "https://www.youtube.com/results?search_query=nextjs+weather+app+tutorial",
    stack: ["Next.js", "TypeScript", "API"],
  },

  // =========================
  // Intermediate
  // =========================

  {
    id: 4,
    title: "Blog Platform",
    description: "منصة Blog كاملة تحتوي على المستخدمين والمقالات والتعليقات.",
    url: "https://www.youtube.com/results?search_query=nextjs+full+stack+blog+tutorial",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },

  {
    id: 5,
    title: "Authentication System",
    description: "نظام تسجيل دخول وإنشاء حساب واستعادة كلمة المرور والصلاحيات.",
    url: "https://www.youtube.com/results?search_query=nextjs+authentication+full+stack+tutorial",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },

  {
    id: 6,
    title: "Inventory Management",
    description: "نظام لإدارة المنتجات والمخزون والمبيعات والمستخدمين.",
    url: "https://www.youtube.com/results?search_query=nextjs+inventory+management+system+tutorial",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },

  {
    id: 7,
    title: "E-Commerce Store",
    description:
      "متجر إلكتروني كامل مع المنتجات والسلة والطلبات وحسابات المستخدمين.",
    url: "https://www.youtube.com/results?search_query=nextjs+full+stack+ecommerce+tutorial",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
  },

  // =========================
  // Advanced
  // =========================

  {
    id: 8,
    title: "Admin Dashboard",
    description:
      "لوحة تحكم متكاملة لإدارة المستخدمين والمنتجات والطلبات والإحصائيات.",
    url: "https://www.youtube.com/results?search_query=nextjs+admin+dashboard+full+stack+tutorial",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },

  {
    id: 9,
    title: "Real-Time Chat App",
    description:
      "تطبيق دردشة لحظية بين المستخدمين مع إرسال واستقبال الرسائل مباشرة.",
    url: "https://www.youtube.com/results?search_query=nextjs+realtime+chat+app+websocket+tutorial",
    stack: ["Next.js", "TypeScript", "Node.js", "WebSockets", "PostgreSQL"],
  },

  {
    id: 10,
    title: "Project Management System",
    description: "نظام لإدارة المشاريع والمهام وأعضاء الفريق والصلاحيات.",
    url: "https://www.youtube.com/results?search_query=nextjs+project+management+full+stack+tutorial",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis"],
  },

  {
    id: 11,
    title: "Learning Management System",
    description:
      "منصة تعليمية تحتوي على الكورسات والدروس والمستخدمين والتقدم الدراسي.",
    url: "https://www.youtube.com/results?search_query=nextjs+learning+management+system+full+stack+tutorial",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Authentication"],
  },

  {
    id: 12,
    title: "SaaS Application",
    description:
      "بناء تطبيق SaaS كامل يحتوي على المستخدمين والاشتراكات ولوحة تحكم.",
    url: "https://www.youtube.com/results?search_query=nextjs+saas+full+stack+tutorial",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker"],
  },

  {
    id: 13,
    title: "Social Media Platform",
    description:
      "منصة اجتماعية تحتوي على الحسابات والمنشورات والإعجابات والتعليقات والمتابعة.",
    url: "https://www.youtube.com/results?search_query=nextjs+social+media+full+stack+tutorial",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "WebSockets",
    ],
  },

  {
    id: 14,
    title: "Full Stack E-Commerce",
    description:
      "مشروع متكامل بمستوى Production يحتوي على المتجر ولوحة التحكم والطلبات والمستخدمين.",
    url: "https://www.youtube.com/results?search_query=nextjs+production+ecommerce+full+stack+tutorial",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "CI/CD",
    ],
  },

  // =========================
  // Search
  // =========================

  {
    id: 15,
    title: "ابحث عن مشاريع Full Stack على YouTube",
    description: "مجموعة نتائج بحث تساعدك على اكتشاف مشاريع Full Stack جديدة.",
    url: "https://www.youtube.com/results?search_query=full+stack+project+nextjs+typescript",
    stack: ["Next.js", "TypeScript", "Full Stack"],
  },
];
