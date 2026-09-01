import { Roadmap } from "@/types/roadmap";
import {
  Code2,
  Globe,
  GitBranch,
  Database,
  Server,
  ShieldCheck,
  TestTube,
  Workflow,
  Boxes,
  Network,
  Search,
  Radio,
  Layers,
  Gauge,
  Container,
  Cloud,
} from "lucide-react";

export const backendRoadmap: Roadmap = {
  slug: "backend",

  title: "تطوير الواجهات الخلفية",

  description:
    "تعلم تطوير الواجهات الخلفية وبناء APIs وقواعد البيانات والأنظمة القابلة للتوسع من الصفر حتى المستوى المتقدم.",

  level: "مبتدئ إلى متقدم",

  stages: 20,

  sections: [
    {
      id: 1,
      title: "اختيار لغة البرمجة",
      description: "اختر لغة برمجة واحدة وابدأ ببناء أساس قوي في البرمجة.",
      icon: Code2,
      topics: [
        {
          name: "JavaScript",
          slug: "javascript",
          resources: [
            {
              title: "MDN JavaScript",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
              title: "كورس جافاسكريب كامل لأكاديمية الزيرو",
              type: "video",
              url: "https://youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&si=ruZ4oLQG4SMrqz4T",
            },
            {
              title: "كورس جافاسكريب لأكاديمية ترميز",
              type: "video",
              url: "https://youtube.com/playlist?list=PLYyqC4bNbCIeLEjcSPO61bsGPKEvYceb0&si=O2uB_rm6ZjJ5yeJh",
            },
          ],
        },
        {
          name: "Go",
          slug: "go",
          resources: [
            {
              title: "Go Documentation",
              type: "documentation",
              url: "https://go.dev/doc/",
            },
            {
              title: "كورس عربي",
              type: "documentation",
              url: "https://youtube.com/playlist?list=PLD0Vy7NjzXS63cTV76LPnqDttqcIIPrpM&si=XFN60ByMOmH3PS6S",
            },
          ],
        },
        {
          name: "Python",
          slug: "python",
          resources: [
            {
              title: "Python Documentation",
              type: "documentation",
              url: "https://docs.python.org/3/",
            },
            {
              title: "كورس عربي",
              type: "video",
              url: "https://youtube.com/playlist?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&si=PbiwJvJxZYNdQVgm",
            },
          ],
        },
        {
          name: "Ruby",
          slug: "ruby",
          resources: [
            {
              title: "Ruby Documentation",
              type: "documentation",
              url: "https://www.ruby-lang.org/en/documentation/",
            },
            {
              title: "كورس عربي",
              type: "video",
              url: "https://youtube.com/playlist?list=PLhiFu-f80eo9cXpAh2Kv0m6Aq0eSWT8MC&si=n8nDVjQQe03uDpKa",
            },
          ],
        },
        {
          name: "Java",
          slug: "java",
          resources: [
            {
              title: "Java Documentation",
              type: "documentation",
              url: "https://dev.java/learn/",
            },
            {
              title: "كورس عربي كامل",
              type: "video",
              url: "https://satr.tuwaiq.edu.sa/path/rcqQIkvMEE/view",
            },
          ],
        },
        {
          name: "C#",
          slug: "csharp",
          resources: [
            {
              title: "C# Documentation",
              type: "documentation",
              url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
            },
            {
              title: "كورس المستوى المبتدأ",
              type: "video",
              url: "https://satr.tuwaiq.edu.sa/course/uxpcCprKpV/view",
            },
            {
              title: "كورس المستوى المتوسط",
              type: "video",
              url: "https://satr.tuwaiq.edu.sa/course/hVDUiTYsLD/view",
            },
          ],
        },
        {
          name: "PHP",
          slug: "php",
          resources: [
            {
              title: "PHP Documentation",
              type: "documentation",
              url: "https://www.php.net/docs.php",
            },
            {
              title: "كورس عربي",
              type: "video",
              url: "https://youtube.com/playlist?list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq&si=AInxewGy0uOlUWWx",
            },
          ],
        },
        {
          name: "Rust",
          slug: "rust",
          resources: [
            {
              title: "The Rust Book",
              type: "documentation",
              url: "https://doc.rust-lang.org/book/",
            },
          ],
        },
      ],
    },

    {
      id: 2,
      title: "الإنترنت",
      description: "افهم الأساسيات التي يعتمد عليها أي Backend Developer.",
      icon: Globe,
      topics: [
        {
          name: "كيف يعمل الإنترنت؟",
          slug: "how-internet-works",
          resources: [
            {
              title: "How the Web works - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
            },
            {
              title: "كيف تعمل شبكة الإنترنت؟",
              type: "video",

              url: "https://www.youtube.com/watch?v=s054qiBUUZY",
            },
            {
              title: "How the Internet Works - CodeHelp",
              type: "video",

              url: "https://www.youtube.com/watch?v=AEaKrq3SpW8",
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
              title: "HTTP and HTML - Khan Academy",
              type: "video",

              url: "https://www.khanacademy.org/computing/in-class-12-informatics-practices/xff33116e05f5bf2a:internet-and-web/xff33116e05f5bf2a:applications-of-internet/v/the-internet-http-and-html",
            },
          ],
        },

        {
          name: "Domain Name",
          slug: "domain-name",
          resources: [
            {
              title: "DNS and Domain Names - Cloudflare",
              type: "documentation",
              url: "https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/",
            },
            {
              title: "ما هو اسم النطاق؟",
              type: "video",

              url: "https://maharatech.gov.eg/course/view.php?id=515&lang=ar",
            },
          ],
        },

        {
          name: "الاستضافة",
          slug: "hosting",
          resources: [
            {
              title: "What is a Web Server? - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server",
            },
            {
              title: "How the Internet Actually Works",
              type: "video",

              url: "https://www.youtube.com/watch?v=7_LPdttKXPc",
            },
          ],
        },

        {
          name: "DNS وكيف يعمل",
          slug: "dns",
          resources: [
            {
              title: "What is DNS? - Cloudflare",
              type: "documentation",
              url: "https://www.cloudflare.com/learning/dns/what-is-dns/",
            },
            {
              title: "أنظمة أسماء النطاقات DNS - Mahara-Tech",
              type: "video",

              url: "https://maharatech.gov.eg/course/view.php?id=515&lang=ar",
            },
            {
              title: "How DNS Works",
              type: "video",

              url: "https://www.youtube.com/watch?v=72snZctFFtA",
            },
          ],
        },

        {
          name: "كيف تعمل المتصفحات؟",
          slug: "browsers",
          resources: [
            {
              title: "How browsers work",
              type: "article",
              url: "https://web.dev/articles/howbrowserswork",
            },
            {
              title: "How Does a Browser Work?",
              type: "video",

              url: "https://www.youtube.com/watch?v=jdoTyLP5Rm4",
            },
          ],
        },
      ],
    },

    {
      id: 3,
      title: "Git و GitHub",
      description: "تعلم إدارة مشاريعك وأكوادك باستخدام Git وGitHub.",
      icon: GitBranch,

      topics: [
        {
          name: " Git و GitHub",
          slug: "git-basics",

          resources: [
            {
              title: "Git Documentation",
              type: "documentation",
              url: "https://git-scm.com/doc",
            },
            {
              title: "كورس أكاديمية المدرسة",
              type: "video",
              url: "https://almdrasa.com/tracks/programming-foundations/courses/git-github/",
            },
            {
              title: "كورس غريب الشيخ",
              type: "video",
              url: "https://youtu.be/fDkR0TDR9dI?si=VGbqAK8EnuFCUIzJ",
            },
          ],
        },
      ],
    },

    {
      id: 4,
      title: "قواعد البيانات العلائقية",
      description: "تعلم تخزين البيانات وإدارتها باستخدام قواعد البيانات SQL.",
      icon: Database,
      topics: [
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
              title: "شرح PostgreSQL بالعربي",
              type: "video",

              url: "https://youtube.com/playlist?list=PLoFK1uFTEWmJUwUq0r6eVNlNIywNQB0U-&si=Qzj5w2ZLhpKxr64p",
            },
            {
              title: "PostgreSQL Tutorial",
              type: "video",

              url: "https://www.youtube.com/results?search_query=PostgreSQL+Tutorial",
            },
          ],
        },

        {
          name: "MySQL",
          slug: "mysql",
          resources: [
            {
              title: "MySQL Documentation",
              type: "documentation",
              url: "https://dev.mysql.com/doc/",
            },
            {
              title: "شرح MySQL بالعربي",
              type: "video",

              url: "https://www.youtube.com/results?search_query=شرح+MySQL+بالعربي",
            },
            {
              title: "MySQL Tutorial for Beginners",
              type: "video",

              url: "https://www.youtube.com/results?search_query=MySQL+Tutorial+for+Beginners",
            },
          ],
        },

        {
          name: "MariaDB",
          slug: "mariadb",
          resources: [
            {
              title: "MariaDB Documentation",
              type: "documentation",
              url: "https://mariadb.com/docs/",
            },
            {
              title: "شرح MariaDB بالعربي",
              type: "video",

              url: "https://www.youtube.com/results?search_query=شرح+MariaDB+بالعربي",
            },
            {
              title: "MariaDB Tutorial",
              type: "video",

              url: "https://www.youtube.com/results?search_query=MariaDB+Tutorial",
            },
          ],
        },

        {
          name: "MS SQL",
          slug: "mssql",
          resources: [
            {
              title: "SQL Server Documentation",
              type: "documentation",
              url: "https://learn.microsoft.com/en-us/sql/sql-server/",
            },
            {
              title: "شرح SQL Server بالعربي",
              type: "video",

              url: "https://youtube.com/playlist?list=PLe_UJpVeP8qCHeTPVPc2gQXuQr7AniUbn&si=U6LpXOuooSpjBrmp",
            },
            {
              title: "SQL Server Tutorial for Beginners",
              type: "video",

              url: "https://www.youtube.com/results?search_query=SQL+Server+Tutorial+for+Beginners",
            },
          ],
        },

        {
          name: "Oracle",
          slug: "oracle",
          resources: [
            {
              title: "Oracle Database Documentation",
              type: "documentation",
              url: "https://docs.oracle.com/en/database/",
            },
            {
              title: "شرح Oracle Database بالعربي",
              type: "video",

              url: "https://www.youtube.com/results?search_query=شرح+Oracle+Database+بالعربي",
            },
            {
              title: "Oracle Database Tutorial",
              type: "video",

              url: "https://www.youtube.com/results?search_query=Oracle+Database+Tutorial",
            },
          ],
        },

        {
          name: "SQLite",
          slug: "sqlite",
          resources: [
            {
              title: "SQLite Documentation",
              type: "documentation",
              url: "https://www.sqlite.org/docs.html",
            },
            {
              title: "شرح SQLite بالعربي",
              type: "video",

              url: "https://www.youtube.com/results?search_query=شرح+SQLite+بالعربي",
            },
            {
              title: "SQLite Tutorial for Beginners",
              type: "video",

              url: "https://www.youtube.com/results?search_query=SQLite+Tutorial+for+Beginners",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "التخزين المؤقت Caching",
      description: "تعلم تقليل زمن الاستجابة وتحسين أداء التطبيقات.",
      icon: Gauge,
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
              title: "شرح Redis بالعربي",
              type: "video",
              url: "https://www.youtube.com/results?search_query=شرح+Redis+بالعربي",
            },
            {
              title: "Redis Tutorial for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Redis+Tutorial+for+Beginners",
            },
          ],
        },

        {
          name: "Memcached",
          slug: "memcached",
          resources: [
            {
              title: "Memcached Documentation",
              type: "documentation",
              url: "https://memcached.org/",
            },
            {
              title: "شرح Memcached بالعربي",
              type: "video",
              url: "https://www.youtube.com/results?search_query=شرح+Memcached+بالعربي",
            },
            {
              title: "Memcached Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Memcached+Tutorial",
            },
          ],
        },

        {
          name: "Server Side Caching",
          slug: "server-side-caching",
          resources: [
            {
              title: "HTTP Caching - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching",
            },
            {
              title: "شرح Server Side Caching بالعربي",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Server+Side+Caching+بالعربي",
            },
            {
              title: "Server-Side Caching Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Server+Side+Caching+Explained",
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
              title: "شرح CDN بالعربي",
              type: "video",
              url: "https://www.youtube.com/results?search_query=شرح+CDN+بالعربي",
            },
            {
              title: "What is a CDN?",
              type: "video",
              url: "https://www.youtube.com/results?search_query=What+is+a+CDN+explained",
            },
          ],
        },

        {
          name: "Client Side Caching",
          slug: "client-side-caching",
          resources: [
            {
              title: "HTTP Caching - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching",
            },
            {
              title: "شرح Client Side Caching بالعربي",
              type: "video",
              url: "https://www.youtube.com/results?search_query=شرح+Client+Side+Caching+بالعربي",
            },
            {
              title: "Client-Side Caching Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Client+Side+Caching+Explained",
            },
          ],
        },
      ],
    },

    {
      id: 6,
      title: "واجهات برمجة التطبيقات APIs",
      description: "تعلم تصميم وبناء والتعامل مع أنواع APIs المختلفة.",
      icon: Server,
      topics: [
        {
          name: "HATEOAS",
          slug: "hateoas",
          resources: [
            {
              title: "REST HATEOAS - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Glossary/HATEOAS",
            },
            {
              title: "HATEOAS Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=HATEOAS+REST+API+tutorial",
            },
          ],
        },
        {
          name: "OpenAPI Specifications",
          slug: "openapi",
          resources: [
            {
              title: "OpenAPI Specification",
              type: "documentation",
              url: "https://spec.openapis.org/oas/latest.html",
            },
            {
              title: "OpenAPI / Swagger Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=OpenAPI+Swagger+tutorial",
            },
          ],
        },
        {
          name: "REST",
          slug: "rest",
          resources: [
            {
              title: "REST API - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
            },
            {
              title: "REST API Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=REST+API+tutorial+for+beginners",
            },
          ],
        },
        {
          name: "JSON APIs",
          slug: "json-apis",
          resources: [
            {
              title: "JSON - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON",
            },
            {
              title: "JSON API Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=JSON+API+tutorial",
            },
          ],
        },
        {
          name: "SOAP",
          slug: "soap",
          resources: [
            {
              title: "SOAP - W3C",
              type: "documentation",
              url: "https://www.w3.org/TR/soap/",
            },
            {
              title: "SOAP Web Services Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=SOAP+web+services+tutorial",
            },
          ],
        },
        {
          name: "gRPC",
          slug: "grpc",
          resources: [
            {
              title: "gRPC Documentation",
              type: "documentation",
              url: "https://grpc.io/docs/",
            },
            {
              title: "gRPC Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=gRPC+tutorial+for+beginners",
            },
          ],
        },
        {
          name: "GraphQL",
          slug: "graphql",
          resources: [
            {
              title: "GraphQL Documentation",
              type: "documentation",
              url: "https://graphql.org/learn/",
            },
            {
              title: "GraphQL Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=GraphQL+tutorial+for+beginners",
            },
          ],
        },
      ],
    },

    {
      id: 7,
      title: "المصادقة Authentication",
      description:
        "تعلم طرق تسجيل الدخول والتحقق من هوية المستخدمين وإدارة الصلاحيات.",
      icon: ShieldCheck,
      topics: [
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
              title: "JWT Authentication Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=JWT+authentication+tutorial",
            },
          ],
        },
        {
          name: "OAuth",
          slug: "oauth",
          resources: [
            {
              title: "OAuth 2.0 - RFC",
              type: "documentation",
              url: "https://oauth.net/2/",
            },
            {
              title: "OAuth 2.0 Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=OAuth+2.0+tutorial+for+beginners",
            },
          ],
        },
        {
          name: "Basic Authentication",
          slug: "basic-authentication",
          resources: [
            {
              title: "HTTP Authentication - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication",
            },
            {
              title: "HTTP Basic Authentication",
              type: "video",
              url: "https://www.youtube.com/results?search_query=HTTP+Basic+Authentication+tutorial",
            },
          ],
        },
        {
          name: "Token Authentication",
          slug: "token-authentication",
          resources: [
            {
              title: "Bearer Authentication - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication",
            },
            {
              title: "Token Based Authentication",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Token+based+authentication+tutorial",
            },
          ],
        },
        {
          name: "Cookie Based Authentication",
          slug: "cookie-authentication",
          resources: [
            {
              title: "Using HTTP cookies - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies",
            },
            {
              title: "Cookie Based Authentication",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Cookie+based+authentication+tutorial",
            },
          ],
        },
        {
          name: "OpenID",
          slug: "openid",
          resources: [
            {
              title: "OpenID Connect",
              type: "documentation",
              url: "https://openid.net/developers/how-connect-works/",
            },
            {
              title: "OpenID Connect Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=OpenID+Connect+tutorial",
            },
          ],
        },
        {
          name: "SAML",
          slug: "saml",
          resources: [
            {
              title: "SAML - OASIS",
              type: "documentation",
              url: "https://www.oasis-open.org/standard/saml/",
            },
            {
              title: "SAML Authentication Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=SAML+authentication+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 8,
      title: "أمان الويب",
      description:
        "تعلم حماية تطبيقاتك وواجهاتك وقواعد بياناتك من الثغرات الشائعة.",
      icon: ShieldCheck,
      topics: [
        {
          name: "MD5",
          slug: "md5",
          resources: [
            {
              title: "MD5 - RFC",
              type: "documentation",
              url: "https://www.rfc-editor.org/rfc/rfc1321",
            },
            {
              title: "MD5 Hashing Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=MD5+hashing+explained",
            },
          ],
        },
        {
          name: "SHA",
          slug: "sha",
          resources: [
            {
              title: "SHA-2 - NIST",
              type: "documentation",
              url: "https://csrc.nist.gov/projects/hash-functions",
            },
            {
              title: "SHA Hashing Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=SHA+hashing+algorithm+explained",
            },
          ],
        },
        {
          name: "scrypt",
          slug: "scrypt",
          resources: [
            {
              title: "scrypt - RFC",
              type: "documentation",
              url: "https://www.rfc-editor.org/rfc/rfc7914",
            },
            {
              title: "scrypt Password Hashing",
              type: "video",
              url: "https://www.youtube.com/results?search_query=scrypt+password+hashing+tutorial",
            },
          ],
        },
        {
          name: "bcrypt",
          slug: "bcrypt",
          resources: [
            {
              title: "OWASP Password Storage",
              type: "documentation",
              url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
            },
            {
              title: "bcrypt Password Hashing",
              type: "video",
              url: "https://www.youtube.com/results?search_query=bcrypt+password+hashing+tutorial",
            },
          ],
        },
        {
          name: "Hashing Algorithms",
          slug: "hashing",
          resources: [
            {
              title: "OWASP Cryptographic Storage",
              type: "documentation",
              url: "https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html",
            },
            {
              title: "Hashing Algorithms Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=hashing+algorithms+explained",
            },
          ],
        },
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
              url: "https://www.youtube.com/results?search_query=HTTPS+explained+for+beginners",
            },
          ],
        },
        {
          name: "OWASP Risks",
          slug: "owasp-risks",
          resources: [
            {
              title: "OWASP Top 10",
              type: "documentation",
              url: "https://owasp.org/www-project-top-ten/",
            },
            {
              title: "OWASP Top 10 Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=OWASP+Top+10+tutorial",
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
              url: "https://www.youtube.com/results?search_query=CORS+explained+tutorial",
            },
          ],
        },
        {
          name: "SSL/TLS",
          slug: "ssl-tls",
          resources: [
            {
              title: "Transport Layer Security - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security",
            },
            {
              title: "SSL TLS Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=SSL+TLS+explained",
            },
          ],
        },
        {
          name: "CSP",
          slug: "csp",
          resources: [
            {
              title: "CSP - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP",
            },
            {
              title: "Content Security Policy Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Content+Security+Policy+CSP+tutorial",
            },
          ],
        },
        {
          name: "Server Security",
          slug: "server-security",
          resources: [
            {
              title: "OWASP Cheat Sheet Series",
              type: "documentation",
              url: "https://cheatsheetseries.owasp.org/",
            },
            {
              title: "Web Server Security Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=web+server+security+tutorial",
            },
          ],
        },
        {
          name: "API Security Best Practices",
          slug: "api-security",
          resources: [
            {
              title: "OWASP API Security",
              type: "documentation",
              url: "https://owasp.org/API-Security/",
            },
            {
              title: "API Security Best Practices",
              type: "video",
              url: "https://www.youtube.com/results?search_query=API+security+best+practices+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 9,
      title: "اختبار التطبيقات",
      description: "تعلم اختبار الـBackend والتأكد من صحة وجودة الكود.",
      icon: TestTube,
      topics: [
        {
          name: "Integration Testing",
          slug: "integration-testing",
          resources: [
            {
              title: "Martin Fowler - Integration Testing",
              type: "article",
              url: "https://martinfowler.com/bliki/IntegrationTest.html",
            },
            {
              title: "Integration Testing Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=integration+testing+tutorial",
            },
          ],
        },
        {
          name: "Unit Testing",
          slug: "unit-testing",
          resources: [
            {
              title: "Martin Fowler - Unit Test",
              type: "article",
              url: "https://martinfowler.com/bliki/UnitTest.html",
            },
            {
              title: "Unit Testing Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=unit+testing+tutorial+for+beginners",
            },
          ],
        },
        {
          name: "Functional Testing",
          slug: "functional-testing",
          resources: [
            {
              title: "OWASP Testing Guide",
              type: "documentation",
              url: "https://owasp.org/www-project-web-security-testing-guide/",
            },
            {
              title: "Functional Testing Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=functional+testing+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 10,
      title: "CI / CD",
      description: "تعلم أتمتة الاختبارات والبناء والنشر.",
      icon: Workflow,
      topics: [
        {
          name: "Continuous Integration",
          slug: "continuous-integration",
          resources: [
            {
              title: "GitHub Actions",
              type: "documentation",
              url: "https://docs.github.com/en/actions",
            },
            {
              title: "Continuous Integration Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=continuous+integration+CI+tutorial",
            },
          ],
        },
        {
          name: "Continuous Delivery",
          slug: "continuous-delivery",
          resources: [
            {
              title: "GitHub Actions",
              type: "documentation",
              url: "https://docs.github.com/en/actions",
            },
            {
              title: "Continuous Delivery Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=continuous+delivery+tutorial",
            },
          ],
        },
        {
          name: "Continuous Deployment",
          slug: "continuous-deployment",
          resources: [
            {
              title: "GitHub Actions",
              type: "documentation",
              url: "https://docs.github.com/en/actions",
            },
            {
              title: "Continuous Deployment Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=continuous+deployment+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 11,
      title: "قواعد البيانات بشكل متقدم",
      description:
        "تعمق في تصميم قواعد البيانات وتحسين الأداء والتعامل مع المعاملات.",
      icon: Database,
      topics: [
        {
          name: "ORMs",
          slug: "orms",
          resources: [
            {
              title: "Prisma Documentation",
              type: "documentation",
              url: "https://www.prisma.io/docs",
            },
            {
              title: "Prisma ORM Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Prisma+ORM+tutorial",
            },
          ],
        },
        {
          name: "ACID",
          slug: "acid",
          resources: [
            {
              title: "PostgreSQL Transactions",
              type: "documentation",
              url: "https://www.postgresql.org/docs/current/tutorial-transactions.html",
            },
            {
              title: "ACID Transactions Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=ACID+transactions+database+explained",
            },
          ],
        },
        {
          name: "Transactions",
          slug: "transactions",
          resources: [
            {
              title: "PostgreSQL Transactions",
              type: "documentation",
              url: "https://www.postgresql.org/docs/current/tutorial-transactions.html",
            },
            {
              title: "Database Transactions Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=database+transactions+tutorial",
            },
          ],
        },
        {
          name: "N+1 Problem",
          slug: "n-plus-one",
          resources: [
            {
              title: "Prisma Query Optimization",
              type: "documentation",
              url: "https://www.prisma.io/docs/orm/prisma-client/queries/query-optimization-performance",
            },
            {
              title: "N+1 Query Problem Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=N%2B1+query+problem+explained",
            },
          ],
        },
        {
          name: "Normalization",
          slug: "normalization",
          resources: [
            {
              title: "Database Normalization",
              type: "article",
              url: "https://www.postgresql.org/docs/current/ddl-constraints.html",
            },
            {
              title: "Database Normalization Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=database+normalization+tutorial",
            },
          ],
        },
        {
          name: "Failure Modes",
          slug: "failure-modes",
          resources: [
            {
              title: "PostgreSQL Reliability",
              type: "documentation",
              url: "https://www.postgresql.org/docs/current/high-availability.html",
            },
            {
              title: "Database Failure and Recovery",
              type: "video",
              url: "https://www.youtube.com/results?search_query=database+failure+recovery+tutorial",
            },
          ],
        },
        {
          name: "Performance Profiling",
          slug: "performance-profiling",
          resources: [
            {
              title: "PostgreSQL EXPLAIN",
              type: "documentation",
              url: "https://www.postgresql.org/docs/current/using-explain.html",
            },
            {
              title: "PostgreSQL EXPLAIN Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=PostgreSQL+EXPLAIN+tutorial",
            },
          ],
        },
        {
          name: "Migrations",
          slug: "migrations",
          resources: [
            {
              title: "Prisma Migrate",
              type: "documentation",
              url: "https://www.prisma.io/docs/orm/prisma-migrate",
            },
            {
              title: "Database Migrations Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=database+migrations+tutorial+Prisma",
            },
          ],
        },
      ],
    },

    {
      id: 12,
      title: "توسعة قواعد البيانات",
      description:
        "تعلم تقنيات جعل قواعد البيانات قادرة على التعامل مع أحجام وأحمال أكبر.",
      icon: Layers,
      topics: [
        {
          name: "Database Indexes",
          slug: "database-indexes",
          resources: [
            {
              title: "PostgreSQL Indexes",
              type: "documentation",
              url: "https://www.postgresql.org/docs/current/indexes.html",
            },
            {
              title: "Database Indexing Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=database+indexing+explained",
            },
          ],
        },
        {
          name: "Data Replication",
          slug: "data-replication",
          resources: [
            {
              title: "PostgreSQL Replication",
              type: "documentation",
              url: "https://www.postgresql.org/docs/current/high-availability.html",
            },
            {
              title: "Database Replication Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=database+replication+explained",
            },
          ],
        },
        {
          name: "Sharding Strategies",
          slug: "sharding",
          resources: [
            {
              title: "PostgreSQL Partitioning",
              type: "documentation",
              url: "https://www.postgresql.org/docs/current/ddl-partitioning.html",
            },
            {
              title: "Database Sharding Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=database+sharding+explained",
            },
          ],
        },
        {
          name: "CAP Theorem",
          slug: "cap-theorem",
          resources: [
            {
              title: "CAP Theorem",
              type: "article",
              url: "https://martinfowler.com/articles/patterns-of-distributed-systems/cap-theorem.html",
            },
            {
              title: "CAP Theorem Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=CAP+theorem+explained",
            },
          ],
        },
      ],
    },

    {
      id: 13,
      title: "تصميم وهندسة البرمجيات",
      description: "تعلم أساسيات تصميم الأنظمة والبرمجيات القابلة للصيانة.",
      icon: Layers,
      topics: [
        {
          name: "Software Design",
          slug: "software-design",
          resources: [
            {
              title: "Software Design and Architecture",
              type: "documentation",
              url: "https://roadmap.sh/software-design-architecture",
            },
            {
              title: "Software Design Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=software+design+tutorial",
            },
          ],
        },
        {
          name: "Software Architecture",
          slug: "software-architecture",
          resources: [
            {
              title: "Software Architecture Roadmap",
              type: "documentation",
              url: "https://roadmap.sh/software-design-architecture",
            },
            {
              title: "Software Architecture Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=software+architecture+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 14,
      title: "مبادئ التصميم والتطوير",
      description:
        "تعلم الأنماط والمبادئ التي تساعدك على كتابة أنظمة منظمة وقابلة للتوسع.",
      icon: Code2,
      topics: [
        {
          name: "GOF Design Patterns",
          slug: "gof-design-patterns",
          resources: [
            {
              title: "Refactoring Guru - Design Patterns",
              type: "tutorial",
              url: "https://refactoring.guru/design-patterns",
            },
            {
              title: "Design Patterns Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=design+patterns+tutorial+programming",
            },
          ],
        },
        {
          name: "Domain Driven Design",
          slug: "domain-driven-design",
          resources: [
            {
              title: "Domain-Driven Design",
              type: "article",
              url: "https://martinfowler.com/bliki/DomainDrivenDesign.html",
            },
            {
              title: "Domain Driven Design Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=domain+driven+design+DDD+explained",
            },
          ],
        },
        {
          name: "Test Driven Development",
          slug: "test-driven-development",
          resources: [
            {
              title: "Test Driven Development",
              type: "article",
              url: "https://martinfowler.com/bliki/TestDrivenDevelopment.html",
            },
            {
              title: "TDD Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=test+driven+development+TDD+tutorial",
            },
          ],
        },
        {
          name: "CQRS",
          slug: "cqrs",
          resources: [
            {
              title: "CQRS",
              type: "article",
              url: "https://martinfowler.com/bliki/CQRS.html",
            },
            {
              title: "CQRS Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=CQRS+explained+tutorial",
            },
          ],
        },
        {
          name: "Event Sourcing",
          slug: "event-sourcing",
          resources: [
            {
              title: "Event Sourcing",
              type: "article",
              url: "https://martinfowler.com/eaaDev/EventSourcing.html",
            },
            {
              title: "Event Sourcing Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=event+sourcing+explained",
            },
          ],
        },
      ],
    },

    {
      id: 15,
      title: "الحاويات والافتراضية",
      description:
        "تعلم تشغيل التطبيقات داخل بيئات معزولة وإدارتها على نطاق واسع.",
      icon: Container,
      topics: [
        {
          name: "Docker",
          slug: "docker",
          resources: [
            {
              title: "Docker Documentation",
              type: "documentation",
              url: "https://docs.docker.com/",
            },
            {
              title: "Docker Tutorial for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Docker+tutorial+for+beginners",
            },
          ],
        },
        {
          name: "LXC",
          slug: "lxc",
          resources: [
            {
              title: "LXC Documentation",
              type: "documentation",
              url: "https://linuxcontainers.org/lxc/documentation/",
            },
            {
              title: "LXC Containers Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=LXC+containers+tutorial",
            },
          ],
        },
        {
          name: "Kubernetes",
          slug: "kubernetes",
          resources: [
            {
              title: "Kubernetes Documentation",
              type: "documentation",
              url: "https://kubernetes.io/docs/home/",
            },
            {
              title: "Kubernetes Tutorial for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Kubernetes+tutorial+for+beginners",
            },
          ],
        },
      ],
    },

    {
      id: 16,
      title: "الأنماط المعمارية",
      description: "تعرف على أشهر طرق بناء الأنظمة الخلفية وتوزيع مكوناتها.",
      icon: Network,
      topics: [
        {
          name: "Monolithic Apps",
          slug: "monolithic-apps",
          resources: [
            {
              title: "Monolith First",
              type: "article",
              url: "https://martinfowler.com/bliki/MonolithFirst.html",
            },
            {
              title: "Monolithic Architecture Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=monolithic+architecture+explained",
            },
          ],
        },
        {
          name: "Microservices",
          slug: "microservices",
          resources: [
            {
              title: "Microservices",
              type: "article",
              url: "https://martinfowler.com/articles/microservices.html",
            },
            {
              title: "Microservices Architecture Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=microservices+architecture+tutorial",
            },
          ],
        },
        {
          name: "SOA",
          slug: "soa",
          resources: [
            {
              title: "Service-Oriented Architecture",
              type: "article",
              url: "https://martinfowler.com/articles/orientation.html",
            },
            {
              title: "SOA Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=service+oriented+architecture+SOA+explained",
            },
          ],
        },
        {
          name: "Serverless",
          slug: "serverless",
          resources: [
            {
              title: "AWS Serverless",
              type: "documentation",
              url: "https://aws.amazon.com/serverless/",
            },
            {
              title: "Serverless Architecture Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=serverless+architecture+tutorial",
            },
          ],
        },
        {
          name: "Service Mesh",
          slug: "service-mesh",
          resources: [
            {
              title: "Istio Documentation",
              type: "documentation",
              url: "https://istio.io/latest/docs/",
            },
            {
              title: "Service Mesh Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=service+mesh+explained+Istio",
            },
          ],
        },
        {
          name: "Twelve Factor Apps",
          slug: "twelve-factor-apps",
          resources: [
            {
              title: "The Twelve-Factor App",
              type: "documentation",
              url: "https://12factor.net/",
            },
            {
              title: "Twelve-Factor App Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=twelve+factor+app+explained",
            },
          ],
        },
      ],
    },

    {
      id: 17,
      title: "Web Servers",
      description: "تعلم دور خوادم الويب وكيفية إعدادها لتشغيل تطبيقاتك.",
      icon: Server,
      topics: [
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
              title: "Nginx Tutorial for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Nginx+tutorial+for+beginners",
            },
          ],
        },
        {
          name: "Apache",
          slug: "apache",
          resources: [
            {
              title: "Apache HTTP Server Documentation",
              type: "documentation",
              url: "https://httpd.apache.org/docs/",
            },
            {
              title: "Apache Web Server Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Apache+web+server+tutorial",
            },
          ],
        },
        {
          name: "Caddy",
          slug: "caddy",
          resources: [
            {
              title: "Caddy Documentation",
              type: "documentation",
              url: "https://caddyserver.com/docs/",
            },
            {
              title: "Caddy Web Server Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Caddy+web+server+tutorial",
            },
          ],
        },
        {
          name: "MS IIS",
          slug: "iis",
          resources: [
            {
              title: "IIS Documentation",
              type: "documentation",
              url: "https://learn.microsoft.com/en-us/iis/",
            },
            {
              title: "IIS Web Server Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=IIS+web+server+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 18,
      title: "محركات البحث",
      description:
        "تعلم استخدام محركات البحث والفهرسة داخل تطبيقات الـBackend.",
      icon: Search,
      topics: [
        {
          name: "Elasticsearch",
          slug: "elasticsearch",
          resources: [
            {
              title: "Elasticsearch Documentation",
              type: "documentation",
              url: "https://www.elastic.co/docs",
            },
            {
              title: "Elasticsearch Tutorial for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Elasticsearch+tutorial+for+beginners",
            },
          ],
        },
        {
          name: "Solr",
          slug: "solr",
          resources: [
            {
              title: "Apache Solr Documentation",
              type: "documentation",
              url: "https://solr.apache.org/guide/",
            },
            {
              title: "Apache Solr Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Apache+Solr+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 19,
      title: "Message Brokers",
      description:
        "تعلم تمرير الرسائل بين الخدمات وبناء الأنظمة المعتمدة على الأحداث.",
      icon: Radio,
      topics: [
        {
          name: "RabbitMQ",
          slug: "rabbitmq",
          resources: [
            {
              title: "RabbitMQ Documentation",
              type: "documentation",
              url: "https://www.rabbitmq.com/docs",
            },
            {
              title: "RabbitMQ Tutorial for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=RabbitMQ+tutorial+for+beginners",
            },
          ],
        },
        {
          name: "Kafka",
          slug: "kafka",
          resources: [
            {
              title: "Apache Kafka Documentation",
              type: "documentation",
              url: "https://kafka.apache.org/documentation/",
            },
            {
              title: "Apache Kafka Tutorial for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Apache+Kafka+tutorial+for+beginners",
            },
          ],
        },
      ],
    },

    {
      id: 20,
      title: "البيانات في الوقت الحقيقي",
      description: "تعلم بناء تطبيقات تحتاج إلى تحديث البيانات بشكل لحظي.",
      icon: Radio,
      topics: [
        {
          name: "Server Sent Events",
          slug: "server-sent-events",
          resources: [
            {
              title: "Server-sent events - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events",
            },
            {
              title: "Server Sent Events Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Server+Sent+Events+tutorial",
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
              url: "https://www.youtube.com/results?search_query=WebSockets+tutorial+for+beginners",
            },
          ],
        },
        {
          name: "Long Polling",
          slug: "long-polling",
          resources: [
            {
              title: "Long Polling",
              type: "article",
              url: "https://ably.com/topic/long-polling",
            },
            {
              title: "Long Polling Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=long+polling+explained",
            },
          ],
        },
        {
          name: "Short Polling",
          slug: "short-polling",
          resources: [
            {
              title: "Polling",
              type: "article",
              url: "https://ably.com/topic/long-polling",
            },
            {
              title: "HTTP Polling Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=HTTP+polling+tutorial",
            },
          ],
        },
        {
          name: "GraphQL",
          slug: "graphql-realtime",
          resources: [
            {
              title: "GraphQL Documentation",
              type: "documentation",
              url: "https://graphql.org/learn/",
            },
            {
              title: "GraphQL Subscriptions Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=GraphQL+subscriptions+realtime+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 21,
      title: "قواعد بيانات NoSQL",
      description:
        "تعرف على أنواع قواعد البيانات غير العلائقية ومتى تستخدم كل نوع.",
      icon: Database,
      topics: [
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
              title: "MongoDB Tutorial for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=MongoDB+tutorial+for+beginners",
            },
          ],
        },
        {
          name: "CouchDB",
          slug: "couchdb",
          resources: [
            {
              title: "CouchDB Documentation",
              type: "documentation",
              url: "https://docs.couchdb.org/",
            },
            {
              title: "CouchDB Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=CouchDB+tutorial",
            },
          ],
        },
        {
          name: "Redis",
          slug: "redis-nosql",
          resources: [
            {
              title: "Redis Documentation",
              type: "documentation",
              url: "https://redis.io/docs/latest/",
            },
            {
              title: "Redis Tutorial for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Redis+tutorial+for+beginners",
            },
          ],
        },
        {
          name: "DynamoDB",
          slug: "dynamodb",
          resources: [
            {
              title: "Amazon DynamoDB Documentation",
              type: "documentation",
              url: "https://docs.aws.amazon.com/dynamodb/",
            },
            {
              title: "DynamoDB Tutorial for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=DynamoDB+tutorial+for+beginners",
            },
          ],
        },
        {
          name: "Firebase",
          slug: "firebase",
          resources: [
            {
              title: "Firebase Documentation",
              type: "documentation",
              url: "https://firebase.google.com/docs",
            },
            {
              title: "Firebase Tutorial for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Firebase+tutorial+for+beginners",
            },
          ],
        },
        {
          name: "RethinkDB",
          slug: "rethinkdb",
          resources: [
            {
              title: "RethinkDB Documentation",
              type: "documentation",
              url: "https://rethinkdb.com/docs/",
            },
            {
              title: "RethinkDB Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=RethinkDB+tutorial",
            },
          ],
        },
        {
          name: "InfluxDB",
          slug: "influxdb",
          resources: [
            {
              title: "InfluxDB Documentation",
              type: "documentation",
              url: "https://docs.influxdata.com/",
            },
            {
              title: "InfluxDB Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=InfluxDB+tutorial",
            },
          ],
        },
        {
          name: "TimescaleDB",
          slug: "timescaledb",
          resources: [
            {
              title: "Timescale Documentation",
              type: "documentation",
              url: "https://docs.timescale.com/",
            },
            {
              title: "TimescaleDB Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=TimescaleDB+tutorial",
            },
          ],
        },
        {
          name: "Cassandra",
          slug: "cassandra",
          resources: [
            {
              title: "Apache Cassandra Documentation",
              type: "documentation",
              url: "https://cassandra.apache.org/doc/latest/",
            },
            {
              title: "Apache Cassandra Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Apache+Cassandra+tutorial",
            },
          ],
        },
        {
          name: "Neo4j",
          slug: "neo4j",
          resources: [
            {
              title: "Neo4j Documentation",
              type: "documentation",
              url: "https://neo4j.com/docs/",
            },
            {
              title: "Neo4j Graph Database Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Neo4j+graph+database+tutorial",
            },
          ],
        },
        {
          name: "AWS Neptune",
          slug: "aws-neptune",
          resources: [
            {
              title: "Amazon Neptune Documentation",
              type: "documentation",
              url: "https://docs.aws.amazon.com/neptune/",
            },
            {
              title: "AWS Neptune Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=AWS+Neptune+tutorial",
            },
          ],
        },
      ],
    },

    {
      id: 22,
      title: "بناء الأنظمة القابلة للتوسع",
      description:
        "تعلم كيف تجعل أنظمتك أكثر تحملًا للأحمال والأعطال وقابلة للمراقبة.",
      icon: Cloud,
      topics: [
        {
          name: "Migration Strategies",
          slug: "migration-strategies",
          resources: [
            {
              title: "Strangler Fig Pattern",
              type: "article",
              url: "https://martinfowler.com/bliki/StranglerFigApplication.html",
            },
            {
              title: "Migration Strategies Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=software+migration+strategies+tutorial",
            },
          ],
        },
        {
          name: "Types of Scaling",
          slug: "types-of-scaling",
          resources: [
            {
              title: "AWS Auto Scaling",
              type: "documentation",
              url: "https://docs.aws.amazon.com/autoscaling/",
            },
            {
              title: "Horizontal vs Vertical Scaling",
              type: "video",
              url: "https://www.youtube.com/results?search_query=horizontal+vs+vertical+scaling+explained",
            },
          ],
        },
        {
          name: "Graceful Degradation",
          slug: "graceful-degradation",
          resources: [
            {
              title: "Graceful Degradation",
              type: "article",
              url: "https://martinfowler.com/bliki/FailFast.html",
            },
            {
              title: "Graceful Degradation Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=graceful+degradation+software+architecture",
            },
          ],
        },
        {
          name: "Throttling",
          slug: "throttling",
          resources: [
            {
              title: "API Rate Limiting",
              type: "article",
              url: "https://cloud.google.com/architecture/rate-limiting-strategies-techniques",
            },
            {
              title: "API Rate Limiting and Throttling",
              type: "video",
              url: "https://www.youtube.com/results?search_query=API+rate+limiting+throttling+tutorial",
            },
          ],
        },
        {
          name: "Backpressure",
          slug: "backpressure",
          resources: [
            {
              title: "Reactive Streams",
              type: "documentation",
              url: "https://www.reactive-streams.org/",
            },
            {
              title: "Backpressure Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=backpressure+distributed+systems+explained",
            },
          ],
        },
        {
          name: "Loadshifting",
          slug: "loadshifting",
          resources: [
            {
              title: "AWS Queue-Based Load Leveling",
              type: "documentation",
              url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/queue-based-load-leveling.html",
            },
            {
              title: "Queue Based Load Leveling",
              type: "video",
              url: "https://www.youtube.com/results?search_query=queue+based+load+leveling+architecture",
            },
          ],
        },
        {
          name: "Circuit Breaker",
          slug: "circuit-breaker",
          resources: [
            {
              title: "Circuit Breaker",
              type: "article",
              url: "https://martinfowler.com/bliki/CircuitBreaker.html",
            },
            {
              title: "Circuit Breaker Pattern Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=circuit+breaker+pattern+explained",
            },
          ],
        },
        {
          name: "Instrumentation",
          slug: "instrumentation",
          resources: [
            {
              title: "OpenTelemetry Documentation",
              type: "documentation",
              url: "https://opentelemetry.io/docs/",
            },
            {
              title: "OpenTelemetry Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=OpenTelemetry+tutorial",
            },
          ],
        },
        {
          name: "Monitoring",
          slug: "monitoring",
          resources: [
            {
              title: "Prometheus Documentation",
              type: "documentation",
              url: "https://prometheus.io/docs/",
            },
            {
              title: "Prometheus Monitoring Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Prometheus+monitoring+tutorial",
            },
          ],
        },
        {
          name: "Telemetry",
          slug: "telemetry",
          resources: [
            {
              title: "OpenTelemetry Documentation",
              type: "documentation",
              url: "https://opentelemetry.io/docs/",
            },
            {
              title: "Telemetry and OpenTelemetry Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=telemetry+OpenTelemetry+explained",
            },
          ],
        },
        {
          name: "Logging",
          slug: "logging",
          resources: [
            {
              title: "OpenTelemetry Logs",
              type: "documentation",
              url: "https://opentelemetry.io/docs/concepts/signals/logs/",
            },
            {
              title: "Application Logging Tutorial",
              type: "video",
              url: "https://www.youtube.com/results?search_query=application+logging+best+practices+tutorial",
            },
          ],
        },
        {
          name: "Observability",
          slug: "observability",
          resources: [
            {
              title: "OpenTelemetry Documentation",
              type: "documentation",
              url: "https://opentelemetry.io/docs/",
            },
            {
              title: "Observability Explained",
              type: "video",
              url: "https://www.youtube.com/results?search_query=observability+tutorial+OpenTelemetry",
            },
          ],
        },
      ],
    },

    {
      id: 23,
      title: "المعرفة الأساسية بالبنية التحتية",
      description:
        "تعلم الأساسيات التي تحتاجها لفهم وتشغيل الأنظمة الخلفية في بيئة الإنتاج.",
      icon: Boxes,
      topics: [
        {
          name: "Linux",
          slug: "linux",
          resources: [
            {
              title: "Linux Documentation",
              type: "documentation",
              url: "https://docs.kernel.org/",
            },
            {
              title: "Linux for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Linux+for+beginners+tutorial",
            },
          ],
        },
        {
          name: "Networking Basics",
          slug: "networking-basics",
          resources: [
            {
              title: "Computer Networking - MDN",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
            },
            {
              title: "Computer Networking for Beginners",
              type: "video",
              url: "https://www.youtube.com/results?search_query=computer+networking+for+beginners",
            },
          ],
        },
        {
          name: "Processes and Ports",
          slug: "processes-and-ports",
          resources: [
            {
              title: "Linux Networking Documentation",
              type: "documentation",
              url: "https://docs.kernel.org/networking/",
            },
            {
              title: "Linux Processes and Ports",
              type: "video",
              url: "https://www.youtube.com/results?search_query=Linux+processes+and+ports+tutorial",
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
              url: "https://www.youtube.com/results?search_query=environment+variables+explained+programming",
            },
          ],
        },
      ],
    },
  ],
};
export const backEndProjects = [
  
  {
    id: 1,
    title: "Build REST API with Node.js & Express",
    url: "https://www.youtube.com/results?search_query=node.js+express+rest+api+project",
    stack: ["Node.js", "Express", "REST API"],
  },
  {
    id: 2,
    title: "Build Authentication API with JWT",
    url: "https://www.youtube.com/results?search_query=node.js+jwt+authentication+api+project",
    stack: ["Node.js", "Express", "JWT"],
  },
  {
    id: 3,
    title: "Build E-Commerce Backend API",
    url: "https://www.youtube.com/results?search_query=node.js+express+ecommerce+backend+api+project",
    stack: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 4,
    title: "Build Blog REST API",
    url: "https://www.youtube.com/results?search_query=node.js+express+blog+rest+api+project",
    stack: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 5,
    title: "Build URL Shortener API",
    url: "https://www.youtube.com/results?search_query=node.js+url+shortener+api+project",
    stack: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 6,
    title: "Build Real-Time Chat Application",
    url: "https://www.youtube.com/results?search_query=node.js+socket.io+real+time+chat+project",
    stack: ["Node.js", "Express", "Socket.io"],
  },
  {
    id: 7,
    title: "Build File Upload API",
    url: "https://www.youtube.com/results?search_query=node.js+express+file+upload+api+project",
    stack: ["Node.js", "Express", "Multer"],
  },
  {
    id: 8,
    title: "Build Inventory Management Backend",
    url: "https://www.youtube.com/results?search_query=node.js+inventory+management+backend+project",
    stack: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    id: 9,
    title: "Build Payment API",
    url: "https://www.youtube.com/results?search_query=node.js+express+payment+api+project",
    stack: ["Node.js", "Express", "Stripe"],
  },
  {
    id: 10,
    title: "Build REST API with PostgreSQL & Prisma",
    url: "https://www.youtube.com/results?search_query=node.js+postgresql+prisma+rest+api+project",
    stack: ["Node.js", "PostgreSQL", "Prisma"],
  },
  {
    id: 11,
    title: "Build GraphQL API",
    url: "https://www.youtube.com/results?search_query=node.js+graphql+api+project",
    stack: ["Node.js", "GraphQL", "MongoDB"],
  },
  {
    id: 12,
    title: "Build Backend with Go & Gin",
    url: "https://www.youtube.com/results?search_query=golang+gin+rest+api+project",
    stack: ["Go", "Gin", "PostgreSQL"],
  },
  {
    id: 13,
    title: "Build Microservices with Node.js",
    url: "https://www.youtube.com/results?search_query=node.js+microservices+project",
    stack: ["Node.js", "Microservices", "Docker"],
  },
  {
    id: 14,
    title: "Build REST API with Docker",
    url: "https://www.youtube.com/results?search_query=node.js+rest+api+docker+project",
    stack: ["Node.js", "Express", "Docker"],
  },
  {
    id: 15,
    title: "Backend Projects - YouTube",
    url: "https://www.youtube.com/results?search_query=backend+development+projects",
    stack: ["Backend", "Node.js", "Go", "Python"],
  },
];
