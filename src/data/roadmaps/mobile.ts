import { Roadmap } from "@/types/roadmap";
import {
  Smartphone,
  Code2,
  GitBranch,
  Braces,
  Database,
  Server,
  TestTube,
  Rocket,
  Zap,
  Settings,
  Layers,
  Box,
  Atom,
} from "lucide-react";

export const mobileRoadmap: Roadmap = {
  slug: "mobile",

  title: "تطوير تطبيقات الهواتف الذكية",

  description:
    "رحلة شاملة من الصفر إلى الاحترافية في تطوير تطبيقات الهواتف الذكية. تعلم أسس التطوير، اختر مسارك (Flutter أو React Native)، وابني تطبيقات جاهزة للعمل.",

  level: "مبتدئ إلى متقدم",

  stages: 13,

  sections: [
    // =========================
    // 01 - أساسيات تطوير الهواتف الذكية
    // =========================
    {
      id: 1,
      title: "أساسيات تطوير الهواتف الذكية",
      description:
        "فهم المبادئ الأساسية لتطوير تطبيقات الهواتف والفروقات بين المنصات المختلفة.",
      icon: Smartphone,
      topics: [
        {
          name: "ما هو تطوير تطبيقات الهواتف؟",
          slug: "what-is-mobile-development",
          resources: [
            {
              title: "Introduction to Mobile Development",
              type: "documentation",
              url: "https://developer.android.com/docs/quality-guidelines/core-app-quality",
            },
            {
              title: "شرح أنواع تطبيقات الجوال",
              type: "video",
              url: "https://youtu.be/R_A5Ew3Jb8w",
            },
          ],
        },
        {
          name: "Native vs Cross-Platform",
          slug: "native-vs-crossplatform",
          resources: [
            {
              title: "Native vs Cross-Platform Development",
              type: "article",
              url: "https://www.monterail.com/blog/native-vs-cross-platform-app-development",
            },
            {
              title: "فرق Native و Cross-Platform",
              type: "video",
              url: "https://youtu.be/nTt6cH3Oa2s",
            },
          ],
        },
        {
          name: "Android vs iOS",
          slug: "android-vs-ios",
          resources: [
            {
              title: "Android vs iOS - Differences Explained",
              type: "article",
              url: "https://www.mobiloud.com/blog/android-vs-ios-app-development",
            },
            {
              title: "مقارنة بين Android و iOS",
              type: "video",
              url: "https://youtu.be/91eLjWs8bQ0",
            },
          ],
        },
        {
          name: "كيف تعمل تطبيقات الهواتف؟",
          slug: "how-mobile-apps-work",
          resources: [
            {
              title: "How Mobile Apps Work",
              type: "article",
              url: "https://www.simplilearn.com/how-mobile-app-development-works-article",
            },
            {
              title: "شرح دورة حياة التطبيق",
              type: "video",
              url: "https://youtu.be/OJUx3Jx8OZw",
            },
          ],
        },
        {
          name: "Mobile UI/UX Basics",
          slug: "mobile-ui-ux-basics",
          resources: [
            {
              title: "Mobile UX Design Best Practices",
              type: "article",
              url: "https://www.interaction-design.org/literature/article/mobile-ux-design",
            },
            {
              title: "أساسيات تصميم تطبيقات الهواتف",
              type: "video",
              url: "https://youtu.be/nKtRq3PQXCE",
            },
          ],
        },
        {
          name: "HTTP, APIs و JSON",
          slug: "http-apis-json",
          resources: [
            {
              title: "MDN - HTTP Overview",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
            },
            {
              title: "شرح الـ API و JSON",
              type: "video",
              url: "https://youtu.be/c6qIlCvLmXU",
            },
          ],
        },
        {
          name: "Git و GitHub Basics",
          slug: "git-github-basics",
          resources: [
            {
              title: "Git Documentation",
              type: "documentation",
              url: "https://git-scm.com/doc",
            },
            {
              title: "تعلم Git و GitHub من الصفر",
              type: "video",
              url: "https://youtu.be/Q6G-J54vgKc",
            },
          ],
        },
      ],
    },

    // =========================
    // 02 - أساسيات البرمجة
    // =========================
    {
      id: 2,
      title: "أساسيات البرمجة",
      description:
        "تعلم المفاهيم الأساسية للبرمجة التي ستحتاجها في أي لغة برمجة.",
      icon: Code2,
      topics: [
        {
          name: "المتغيرات وأنواع البيانات",
          slug: "variables-data-types",
          resources: [
            {
              title: "Variables and Data Types",
              type: "article",
              url: "https://www.w3schools.com/whatis/whatis_variable.asp",
            },
            {
              title: "شرح المتغيرات وأنواع البيانات",
              type: "video",
              url: "https://youtu.be/I9xQUVb1VGI",
            },
          ],
        },
        {
          name: "الشروط Conditions",
          slug: "conditions",
          resources: [
            {
              title: "If...Else Statements",
              type: "article",
              url: "https://www.w3schools.com/js/js_if_else.asp",
            },
            {
              title: "شرح الشروط والعمليات المنطقية",
              type: "video",
              url: "https://youtu.be/nOQoVbCbRSE",
            },
          ],
        },
        {
          name: "الحلقات Loops",
          slug: "loops",
          resources: [
            {
              title: "Loops in Programming",
              type: "article",
              url: "https://www.w3schools.com/whatis/whatis_loop.asp",
            },
            {
              title: "شرح أنواع الحلقات",
              type: "video",
              url: "https://youtu.be/3DLilG5C0OU",
            },
          ],
        },
        {
          name: "الدوال Functions",
          slug: "functions",
          resources: [
            {
              title: "Functions in Programming",
              type: "article",
              url: "https://www.w3schools.com/whatis/whatis_function.asp",
            },
            {
              title: "شرح الدوال والمعاملات",
              type: "video",
              url: "https://youtu.be/FOD408a7EIU",
            },
          ],
        },
        {
          name: "المصفوفات والكائنات Arrays & Objects",
          slug: "arrays-objects",
          resources: [
            {
              title: "Arrays and Objects",
              type: "article",
              url: "https://www.w3schools.com/js/js_arrays.asp",
            },
            {
              title: "شرح المصفوفات والكائنات",
              type: "video",
              url: "https://youtu.be/jQILfJdqXo0",
            },
          ],
        },
        {
          name: "البرمجة الكائنية التوجه OOP",
          slug: "oop",
          resources: [
            {
              title: "Object-Oriented Programming",
              type: "article",
              url: "https://www.w3schools.com/whatis/whatis_oop.asp",
            },
            {
              title: "شرح OOP والوراثة والتجريد",
              type: "video",
              url: "https://youtu.be/6ST2PlFPKns",
            },
          ],
        },
        {
          name: "معالجة الأخطاء Error Handling",
          slug: "error-handling",
          resources: [
            {
              title: "Error Handling Best Practices",
              type: "article",
              url: "https://www.w3schools.com/js/js_errors.asp",
            },
            {
              title: "شرح Try-Catch والأخطاء",
              type: "video",
              url: "https://youtu.be/cFTFtuEQ-10",
            },
          ],
        },
        {
          name: "البرمجة غير المتزامنة Async",
          slug: "async-programming",
          resources: [
            {
              title: "Asynchronous Programming",
              type: "article",
              url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
            },
            {
              title: "شرح Promises و Async/Await",
              type: "video",
              url: "https://youtu.be/VeQMj6T2EfI",
            },
          ],
        },
        {
          name: "Clean Code Basics",
          slug: "clean-code",
          resources: [
            {
              title: "Clean Code Principles",
              type: "article",
              url: "https://www.w3schools.com/whatis/whatis_cleancode.asp",
            },
            {
              title: "أساسيات كتابة الكود النظيف",
              type: "video",
              url: "https://youtu.be/nlg1LkBYcXE",
            },
          ],
        },
      ],
    },

    // =========================
    // 03 - اختيار مسار التطوير
    // =========================
    {
      id: 3,
      title: "اختيار مسار التطوير",
      description:
        "استكشف المسارات المختلفة لتطوير تطبيقات الهواتف واختر ما يناسبك.",
      icon: GitBranch,
      topics: [
        {
          name: "Flutter + Dart (الموصى به)",
          slug: "flutter-dart-path",
          resources: [
            {
              title: "Flutter - Build apps for any screen",
              type: "documentation",
              url: "https://flutter.dev/",
            },
            {
              title: "لماذا تختار Flutter؟",
              type: "video",
              url: "https://youtu.be/fDkR0TDR9dI",
            },
          ],
        },
        {
          name: "React Native + JavaScript",
          slug: "react-native-path",
          resources: [
            {
              title: "React Native Documentation",
              type: "documentation",
              url: "https://reactnative.dev/",
            },
            {
              title: "مقدمة عن React Native",
              type: "video",
              url: "https://youtu.be/0-S5a0eS84c",
            },
          ],
        },
        {
          name: "Native Android + Kotlin",
          slug: "native-android-path",
          resources: [
            {
              title: "Android Developers - Kotlin",
              type: "documentation",
              url: "https://developer.android.com/kotlin",
            },
            {
              title: "تطوير Native Android بـ Kotlin",
              type: "video",
              url: "https://youtu.be/fis26HvvDII",
            },
          ],
        },
        {
          name: "Native iOS + Swift",
          slug: "native-ios-path",
          resources: [
            {
              title: "Apple Developer - Swift",
              type: "documentation",
              url: "https://developer.apple.com/swift/",
            },
            {
              title: "تطوير Native iOS بـ Swift",
              type: "video",
              url: "https://youtu.be/comQ1-x2CJE",
            },
          ],
        },
      ],
    },

    // =========================
    // 04 - Dart و Flutter
    // =========================
    {
      id: 4,
      title: "Dart و Flutter",
      description:
        "تعلم لغة Dart وإطار عمل Flutter لبناء تطبيقات جميلة وسريعة.",
      icon: Braces,
      topics: [
        {
          name: "أساسيات Dart",
          slug: "dart-fundamentals",
          resources: [
            {
              title: "Dart Language Tour",
              type: "documentation",
              url: "https://dart.dev/guides/language/language-tour",
            },
            {
              title: "تعلم Dart للمبتدئين",
              type: "video",
              url: "https://youtu.be/Ej_Pcr4uC2Q",
            },
            {
              title: "شرح Dart من الصفر عربي",
              type: "video",
              url: "https://youtube.com/playlist?list=PLOTAyNV_m7WPMCH3ZKa0bwC_CdbEBQMAC",
            },
          ],
        },
        {
          name: "أساسيات Flutter",
          slug: "flutter-fundamentals",
          resources: [
            {
              title: "Flutter Getting Started",
              type: "documentation",
              url: "https://flutter.dev/docs/get-started/install",
            },
            {
              title: "Flutter Course for Beginners",
              type: "course",
              url: "https://www.udemy.com/course/flutter-bootcamp-with-dart/",
            },
            {
              title: "كورس Flutter عربي شامل",
              type: "video",
              url: "https://youtube.com/playlist?list=PLOTAyNV_m7WYEt9PW5Yd6Jk3L4l0jYJBe",
            },
          ],
        },
        {
          name: "الـ Widgets",
          slug: "widgets",
          resources: [
            {
              title: "Widget catalog",
              type: "documentation",
              url: "https://flutter.dev/docs/development/ui/widgets",
            },
            {
              title: "شرح الـ Widgets في Flutter",
              type: "video",
              url: "https://youtu.be/b9mrvvAPK58",
            },
          ],
        },
        {
          name: "StatelessWidget و StatefulWidget",
          slug: "stateless-stateful-widgets",
          resources: [
            {
              title: "State Management",
              type: "documentation",
              url: "https://flutter.dev/docs/development/data-and-backend/state-mgmt/intro",
            },
            {
              title: "الفرق بين Stateless و Stateful",
              type: "video",
              url: "https://youtu.be/gB3fYVJlnS4",
            },
          ],
        },
        {
          name: "الـ Layouts",
          slug: "flutter-layouts",
          resources: [
            {
              title: "Layouts in Flutter",
              type: "documentation",
              url: "https://flutter.dev/docs/development/ui/layout",
            },
            {
              title: "شرح الـ Layouts والـ Positioning",
              type: "video",
              url: "https://youtu.be/RJZiUL4-qwA",
            },
          ],
        },
        {
          name: "Navigation",
          slug: "flutter-navigation",
          resources: [
            {
              title: "Navigate to a new screen",
              type: "documentation",
              url: "https://flutter.dev/docs/cookbook/navigation/navigation-basics",
            },
            {
              title: "شرح الـ Navigation في Flutter",
              type: "video",
              url: "https://youtu.be/nyvQZlvrB5s",
            },
          ],
        },
        {
          name: "Forms و Validation",
          slug: "flutter-forms",
          resources: [
            {
              title: "Build a form with validation",
              type: "documentation",
              url: "https://flutter.dev/docs/cookbook/forms/validation",
            },
            {
              title: "شرح الـ Forms في Flutter",
              type: "video",
              url: "https://youtu.be/oAfJxXKaFVU",
            },
          ],
        },
        {
          name: "Lists",
          slug: "flutter-lists",
          resources: [
            {
              title: "Create lists with different types of items",
              type: "documentation",
              url: "https://flutter.dev/docs/cookbook/lists/mixed-list",
            },
            {
              title: "شرح ListView و GridView",
              type: "video",
              url: "https://youtu.be/ORApSukp3-c",
            },
          ],
        },
        {
          name: "الصور والـ Assets",
          slug: "flutter-images-assets",
          resources: [
            {
              title: "Display images",
              type: "documentation",
              url: "https://flutter.dev/docs/cookbook/images/network-image",
            },
            {
              title: "التعامل مع الصور والـ Assets",
              type: "video",
              url: "https://youtu.be/7I0EA-toYvM",
            },
          ],
        },
        {
          name: "الـ Animations",
          slug: "flutter-animations",
          resources: [
            {
              title: "Animations overview",
              type: "documentation",
              url: "https://flutter.dev/docs/development/ui/animations/overview",
            },
            {
              title: "شرح الـ Animations في Flutter",
              type: "video",
              url: "https://youtu.be/W8JA-B0gHDQ",
            },
          ],
        },
        {
          name: "Responsive UI",
          slug: "flutter-responsive",
          resources: [
            {
              title: "Building responsive apps",
              type: "documentation",
              url: "https://flutter.dev/docs/development/ui/layout/responsive",
            },
            {
              title: "بناء واجهات مستجيبة في Flutter",
              type: "video",
              url: "https://youtu.be/UUfXWzp0-DU",
            },
          ],
        },
        {
          name: "الـ Themes",
          slug: "flutter-themes",
          resources: [
            {
              title: "Use themes to share colors and font styles",
              type: "documentation",
              url: "https://flutter.dev/docs/cookbook/design/themes",
            },
            {
              title: "شرح الـ Themes والـ Dark Mode",
              type: "video",
              url: "https://youtu.be/WN9hVoXJ2wQ",
            },
          ],
        },
        {
          name: "إدارة الحالة State Management",
          slug: "flutter-state-management",
          resources: [
            {
              title: "State Management Guide",
              type: "documentation",
              url: "https://flutter.dev/docs/development/data-and-backend/state-mgmt/intro",
            },
            {
              title: "GetX State Management",
              type: "course",
              url: "https://www.udemy.com/course/getx-flutter/",
            },
            {
              title: "شرح Riverpod و GetX",
              type: "video",
              url: "https://youtube.com/playlist?list=PLOTAyNV_m7WY5Tz5mcxOSKPHpZMt5XVpf",
            },
          ],
        },
        {
          name: "التعامل مع الـ APIs",
          slug: "flutter-api-integration",
          resources: [
            {
              title: "Fetch data from the internet",
              type: "documentation",
              url: "https://flutter.dev/docs/cookbook/networking/fetch-data",
            },
            {
              title: "شرح Dio و HTTP package",
              type: "video",
              url: "https://youtu.be/KXFi1qleLB0",
            },
          ],
        },
        {
          name: "المصادقة Authentication",
          slug: "flutter-authentication",
          resources: [
            {
              title: "Firebase Authentication",
              type: "documentation",
              url: "https://firebase.google.com/docs/auth",
            },
            {
              title: "شرح Firebase Auth في Flutter",
              type: "video",
              url: "https://youtu.be/16LEIu1cHDg",
            },
          ],
        },
        {
          name: "التخزين المحلي Local Storage",
          slug: "flutter-local-storage",
          resources: [
            {
              title: "Persist data with SQLite",
              type: "documentation",
              url: "https://flutter.dev/docs/cookbook/persistence/sqlite",
            },
            {
              title: "SharedPreferences و Hive",
              type: "video",
              url: "https://youtu.be/jeF3lS2K_3s",
            },
          ],
        },
        {
          name: "Firebase",
          slug: "flutter-firebase",
          resources: [
            {
              title: "Firebase for Flutter",
              type: "documentation",
              url: "https://firebase.flutter.dev/",
            },
            {
              title: "كورس Firebase مع Flutter",
              type: "course",
              url: "https://www.udemy.com/course/flutter-firebase-complete-guide/",
            },
          ],
        },
        {
          name: "Push Notifications",
          slug: "flutter-push-notifications",
          resources: [
            {
              title: "Firebase Cloud Messaging",
              type: "documentation",
              url: "https://firebase.google.com/docs/cloud-messaging",
            },
            {
              title: "شرح Push Notifications في Flutter",
              type: "video",
              url: "https://youtu.be/9ytDZDLtDpQ",
            },
          ],
        },
        {
          name: "صلاحيات التطبيق App Permissions",
          slug: "flutter-permissions",
          resources: [
            {
              title: "Permission Handler Package",
              type: "documentation",
              url: "https://pub.dev/packages/permission_handler",
            },
            {
              title: "التعامل مع الصلاحيات في Flutter",
              type: "video",
              url: "https://youtu.be/Aol3CCBM0Z0",
            },
          ],
        },
        {
          name: "الاختبار Testing",
          slug: "flutter-testing",
          resources: [
            {
              title: "Testing in Flutter",
              type: "documentation",
              url: "https://flutter.dev/docs/testing",
            },
            {
              title: "شرح Unit Testing و Widget Testing",
              type: "video",
              url: "https://youtu.be/RDY6UsbNJYc",
            },
          ],
        },
        {
          name: "الـ Debugging",
          slug: "flutter-debugging",
          resources: [
            {
              title: "Debugging Flutter apps",
              type: "documentation",
              url: "https://flutter.dev/docs/testing/debugging",
            },
            {
              title: "أدوات الـ Debugging في Flutter",
              type: "video",
              url: "https://youtu.be/F85Dy1IgWOM",
            },
          ],
        },
        {
          name: "تحسين الأداء Performance",
          slug: "flutter-performance",
          resources: [
            {
              title: "Performance best practices",
              type: "documentation",
              url: "https://flutter.dev/docs/perf/rendering/best-practices",
            },
            {
              title: "نصائح لتحسين أداء التطبيق",
              type: "video",
              url: "https://youtu.be/SjrEqBKR94U",
            },
          ],
        },
      ],
    },

    // =========================
    // 05 - React Native
    // =========================
    {
      id: 5,
      title: "React Native",
      description:
        "تعلم بناء تطبيقات هواتف باستخدام React Native و JavaScript/TypeScript.",
      icon: Atom,
      topics: [
        {
          name: "أساسيات React",
          slug: "react-fundamentals-rn",
          resources: [
            {
              title: "React Documentation",
              type: "documentation",
              url: "https://react.dev/",
            },
            {
              title: "React for Beginners",
              type: "course",
              url: "https://www.udemy.com/course/react-the-complete-guide/",
            },
            {
              title: "شرح React من الصفر عربي",
              type: "video",
              url: "https://youtube.com/playlist?list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS",
            },
          ],
        },
        {
          name: "أساسيات React Native",
          slug: "react-native-fundamentals",
          resources: [
            {
              title: "React Native Documentation",
              type: "documentation",
              url: "https://reactnative.dev/docs/getting-started",
            },
            {
              title: "The Complete React Native Course",
              type: "course",
              url: "https://www.udemy.com/course/the-complete-react-native-and-redux-course/",
            },
          ],
        },
        {
          name: "الـ Components",
          slug: "rn-components",
          resources: [
            {
              title: "React Native API Reference",
              type: "documentation",
              url: "https://reactnative.dev/docs/components-and-apis",
            },
            {
              title: "شرح المكونات في React Native",
              type: "video",
              url: "https://youtu.be/x-uqg66J7yc",
            },
          ],
        },
        {
          name: "Styling",
          slug: "rn-styling",
          resources: [
            {
              title: "Styling in React Native",
              type: "documentation",
              url: "https://reactnative.dev/docs/style",
            },
            {
              title: "تصميم التطبيقات في React Native",
              type: "video",
              url: "https://youtu.be/Y2P3MBSn9C8",
            },
          ],
        },
        {
          name: "Navigation",
          slug: "rn-navigation",
          resources: [
            {
              title: "React Navigation",
              type: "documentation",
              url: "https://reactnavigation.org/",
            },
            {
              title: "شرح React Navigation",
              type: "video",
              url: "https://youtu.be/heLHSmVg0v0",
            },
          ],
        },
        {
          name: "Forms",
          slug: "rn-forms",
          resources: [
            {
              title: "Handling Text Input",
              type: "documentation",
              url: "https://reactnative.dev/docs/handling-text-input",
            },
            {
              title: "بناء النماذج في React Native",
              type: "video",
              url: "https://youtu.be/aFi28uyV-Sw",
            },
          ],
        },
        {
          name: "التعامل مع الـ APIs",
          slug: "rn-api-integration",
          resources: [
            {
              title: "Networking",
              type: "documentation",
              url: "https://reactnative.dev/docs/network",
            },
            {
              title: "شرح Fetch و Axios",
              type: "video",
              url: "https://youtu.be/1w5ghcJaEBU",
            },
          ],
        },
        {
          name: "المصادقة",
          slug: "rn-authentication",
          resources: [
            {
              title: "Firebase Authentication with React Native",
              type: "article",
              url: "https://rnfirebase.io/auth/usage",
            },
            {
              title: "شرح المصادقة في React Native",
              type: "video",
              url: "https://youtu.be/f7qV3l-pwM4",
            },
          ],
        },
        {
          name: "AsyncStorage",
          slug: "rn-async-storage",
          resources: [
            {
              title: "AsyncStorage",
              type: "documentation",
              url: "https://react-native-async-storage.github.io/async-storage/docs/install/",
            },
            {
              title: "شرح التخزين المحلي في React Native",
              type: "video",
              url: "https://youtu.be/zAZF2c3vI7E",
            },
          ],
        },
        {
          name: "إدارة الحالة",
          slug: "rn-state-management",
          resources: [
            {
              title: "Redux Documentation",
              type: "documentation",
              url: "https://redux.js.org/",
            },
            {
              title: "Redux في React Native",
              type: "course",
              url: "https://www.udemy.com/course/the-complete-react-native-and-redux-course/",
            },
          ],
        },
        {
          name: "Native Modules",
          slug: "rn-native-modules",
          resources: [
            {
              title: "Native Modules Introduction",
              type: "documentation",
              url: "https://reactnative.dev/docs/native-modules-intro",
            },
            {
              title: "شرح التعامل مع Native Code",
              type: "video",
              url: "https://youtu.be/7QD3mDflLg0",
            },
          ],
        },
        {
          name: "الصلاحيات",
          slug: "rn-permissions",
          resources: [
            {
              title: "react-native-permissions",
              type: "documentation",
              url: "https://github.com/zoontek/react-native-permissions",
            },
            {
              title: "التعامل مع الصلاحيات",
              type: "video",
              url: "https://youtu.be/Jyu2LMdZhRs",
            },
          ],
        },
        {
          name: "Push Notifications",
          slug: "rn-push-notifications",
          resources: [
            {
              title: "Firebase Cloud Messaging",
              type: "documentation",
              url: "https://rnfirebase.io/messaging/usage",
            },
            {
              title: "شرح الإشعارات في React Native",
              type: "video",
              url: "https://youtu.be/x5wUJ6iEfnc",
            },
          ],
        },
        {
          name: "Expo",
          slug: "rn-expo",
          resources: [
            {
              title: "Expo Documentation",
              type: "documentation",
              url: "https://docs.expo.dev/",
            },
            {
              title: "تطوير التطبيقات مع Expo",
              type: "course",
              url: "https://www.udemy.com/course/react-native-and-expo-course/",
            },
          ],
        },
        {
          name: "EAS",
          slug: "rn-eas",
          resources: [
            {
              title: "EAS Build",
              type: "documentation",
              url: "https://docs.expo.dev/build/introduction/",
            },
            {
              title: "بناء التطبيقات مع EAS",
              type: "video",
              url: "https://youtu.be/kUb-1J0N4hc",
            },
          ],
        },
        {
          name: "الاختبار",
          slug: "rn-testing",
          resources: [
            {
              title: "Testing",
              type: "documentation",
              url: "https://reactnative.dev/docs/testing-overview",
            },
            {
              title: "شرح Jest و React Native Testing",
              type: "video",
              url: "https://youtu.be/fDkR0TDR9dI",
            },
          ],
        },
        {
          name: "تحسين الأداء",
          slug: "rn-performance",
          resources: [
            {
              title: "Performance Tuning",
              type: "documentation",
              url: "https://reactnative.dev/docs/performance",
            },
            {
              title: "نصائح لتحسين الأداء",
              type: "video",
              url: "https://youtu.be/l2XHlBVRg0g",
            },
          ],
        },
      ],
    },

    // =========================
    // 06 - Backend و APIs للمطورين
    // =========================
    {
      id: 6,
      title: "Backend و APIs للمطورين",
      description:
        "فهم كيفية التعامل مع الـ APIs والـ Backend من جانب تطبيق الهاتف.",
      icon: Server,
      topics: [
        {
          name: "REST APIs",
          slug: "rest-apis",
          resources: [
            {
              title: "RESTful API Design",
              type: "article",
              url: "https://restfulapi.net/",
            },
            {
              title: "شرح REST API",
              type: "video",
              url: "https://youtu.be/fUU4nKQK2AE",
            },
          ],
        },
        {
          name: "المصادقة والـ JWT",
          slug: "authentication-jwt",
          resources: [
            {
              title: "JWT.io Documentation",
              type: "documentation",
              url: "https://jwt.io/introduction",
            },
            {
              title: "شرح JWT و Token Based Auth",
              type: "video",
              url: "https://youtu.be/SnoAwLP1XkA",
            },
          ],
        },
        {
          name: "HTTP Methods",
          slug: "http-methods",
          resources: [
            {
              title: "MDN - HTTP Methods",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods",
            },
            {
              title: "شرح GET, POST, PUT, DELETE",
              type: "video",
              url: "https://youtu.be/iYM2zFP3Zn0",
            },
          ],
        },
        {
          name: "HTTP Status Codes",
          slug: "http-status-codes",
          resources: [
            {
              title: "MDN - HTTP Status Codes",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
            },
            {
              title: "شرح HTTP Status Codes",
              type: "video",
              url: "https://youtu.be/OfsJSNSKlVo",
            },
          ],
        },
        {
          name: "رفع الملفات File Uploads",
          slug: "file-uploads",
          resources: [
            {
              title: "Multipart Form Data",
              type: "article",
              url: "https://www.w3schools.com/html/html_forms.asp",
            },
            {
              title: "شرح رفع الملفات",
              type: "video",
              url: "https://youtu.be/XaJqwHKjqLs",
            },
          ],
        },
        {
          name: "WebSockets",
          slug: "websockets",
          resources: [
            {
              title: "MDN - WebSocket",
              type: "documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",
            },
            {
              title: "شرح WebSockets والـ Real-time",
              type: "video",
              url: "https://youtu.be/1BfCnjr_Vjg",
            },
          ],
        },
        {
          name: "معالجة الأخطاء",
          slug: "error-handling-api",
          resources: [
            {
              title: "API Error Handling",
              type: "article",
              url: "https://www.rfc-editor.org/rfc/rfc7807",
            },
            {
              title: "أفضل ممارسات معالجة الأخطاء",
              type: "video",
              url: "https://youtu.be/8wxYC8KO_WE",
            },
          ],
        },
        {
          name: "أمان الـ API",
          slug: "api-security",
          resources: [
            {
              title: "API Security Best Practices",
              type: "article",
              url: "https://cheatsheetseries.owasp.org/cheatsheets/REST_API_Security_Cheat_Sheet.html",
            },
            {
              title: "حماية الـ APIs",
              type: "video",
              url: "https://youtu.be/XN1-cYrPpMc",
            },
          ],
        },
      ],
    },

    // =========================
    // 07 - قواعد البيانات والتخزين المحلي
    // =========================
    {
      id: 7,
      title: "قواعد البيانات والتخزين المحلي",
      description:
        "تعلم كيفية تخزين البيانات محليا وفي السحابة بطريقة فعالة وآمنة.",
      icon: Database,
      topics: [
        {
          name: "SQLite",
          slug: "sqlite",
          resources: [
            {
              title: "SQLite Official",
              type: "documentation",
              url: "https://www.sqlite.org/index.html",
            },
            {
              title: "شرح SQLite والـ Queries",
              type: "video",
              url: "https://youtu.be/zJS-aTfBUMs",
            },
          ],
        },
        {
          name: "Local Storage",
          slug: "local-storage",
          resources: [
            {
              title: "Shared Preferences (Android)",
              type: "documentation",
              url: "https://developer.android.com/training/data-storage/shared-preferences",
            },
            {
              title: "الحفظ المحلي في التطبيقات",
              type: "video",
              url: "https://youtu.be/HlE8YG4qPnA",
            },
          ],
        },
        {
          name: "التخزين الآمن",
          slug: "secure-storage",
          resources: [
            {
              title: "Android - Data Security",
              type: "documentation",
              url: "https://developer.android.com/privacy/data",
            },
            {
              title: "حماية البيانات المحفوظة",
              type: "video",
              url: "https://youtu.be/YpvqLJJcHm0",
            },
          ],
        },
        {
          name: "Offline-First Concepts",
          slug: "offline-first",
          resources: [
            {
              title: "Offline First",
              type: "article",
              url: "https://offlinefirst.org/",
            },
            {
              title: "بناء تطبيقات تعمل بدون إنترنت",
              type: "video",
              url: "https://youtu.be/qrZ_YP_mlEI",
            },
          ],
        },
        {
          name: "Firebase Realtime Database",
          slug: "firebase-realtime",
          resources: [
            {
              title: "Firebase Realtime Database",
              type: "documentation",
              url: "https://firebase.google.com/docs/database",
            },
            {
              title: "شرح Firebase Realtime Database",
              type: "video",
              url: "https://youtu.be/lw8wpNKfqrE",
            },
          ],
        },
        {
          name: "Firebase Firestore",
          slug: "firebase-firestore",
          resources: [
            {
              title: "Cloud Firestore",
              type: "documentation",
              url: "https://firebase.google.com/docs/firestore",
            },
            {
              title: "شرح Firestore",
              type: "video",
              url: "https://youtu.be/4d-gIPGzmZ4",
            },
          ],
        },
        {
          name: "PostgreSQL Basics",
          slug: "postgresql-basics",
          resources: [
            {
              title: "PostgreSQL Documentation",
              type: "documentation",
              url: "https://www.postgresql.org/docs/",
            },
            {
              title: "مقدمة عن PostgreSQL",
              type: "video",
              url: "https://youtu.be/qw--VYLvj8U",
            },
          ],
        },
        {
          name: "الـ ORM و Query Builders",
          slug: "orm-query-builders",
          resources: [
            {
              title: "Prisma Documentation",
              type: "documentation",
              url: "https://www.prisma.io/docs/",
            },
            {
              title: "شرح Prisma و ORM",
              type: "video",
              url: "https://youtu.be/TzO9Mgtesmc",
            },
          ],
        },
      ],
    },

    // =========================
    // 08 - Design Patterns و Architecture
    // =========================
    {
      id: 8,
      title: "Design Patterns و Mobile Architecture",
      description: "تعلم أفضل الممارسات المعمارية لبناء تطبيقات قابلة للصيانة.",
      icon: Layers,
      topics: [
        {
          name: "Material Design",
          slug: "material-design",
          resources: [
            {
              title: "Material Design Guidelines",
              type: "documentation",
              url: "https://material.io/design",
            },
            {
              title: "شرح Material Design",
              type: "video",
              url: "https://youtu.be/KlGm2Tlo7V0",
            },
          ],
        },
        {
          name: "iOS Human Interface Guidelines",
          slug: "ios-hig",
          resources: [
            {
              title: "iOS Human Interface Guidelines",
              type: "documentation",
              url: "https://developer.apple.com/design/human-interface-guidelines/ios",
            },
            {
              title: "شرح HIG و iOS Design",
              type: "video",
              url: "https://youtu.be/Ev6FvmYLXFw",
            },
          ],
        },
        {
          name: "الواجهات المستجيبة Responsive",
          slug: "responsive-layouts",
          resources: [
            {
              title: "Responsive Mobile Design",
              type: "article",
              url: "https://www.interaction-design.org/literature/article/responsive-design-a-breakthrough-in-web-design-that-came-at-the-right-time",
            },
            {
              title: "بناء واجهات مستجيبة",
              type: "video",
              url: "https://youtu.be/srvUrASNj0s",
            },
          ],
        },
        {
          name: "Accessibility",
          slug: "accessibility",
          resources: [
            {
              title: "iOS Accessibility",
              type: "documentation",
              url: "https://developer.apple.com/accessibility/",
            },
            {
              title: "جعل التطبيقات سهلة الاستخدام",
              type: "video",
              url: "https://youtu.be/0KaCHVUDiKI",
            },
          ],
        },
        {
          name: "Dark Mode",
          slug: "dark-mode",
          resources: [
            {
              title: "Implementing Dark Mode",
              type: "article",
              url: "https://developer.apple.com/design/human-interface-guidelines/dark-mode",
            },
            {
              title: "شرح Dark Mode في التطبيقات",
              type: "video",
              url: "https://youtu.be/vkFgYXHaDH0",
            },
          ],
        },
        {
          name: "Loading و Empty States",
          slug: "loading-empty-states",
          resources: [
            {
              title: "UI Patterns: Loading States",
              type: "article",
              url: "https://www.nngroup.com/articles/progress-indicators/",
            },
            {
              title: "شرح Loading و Empty States",
              type: "video",
              url: "https://youtu.be/qWMQxvRN1Fk",
            },
          ],
        },
        {
          name: "Error States",
          slug: "error-states",
          resources: [
            {
              title: "Error Messages UI",
              type: "article",
              url: "https://www.nngroup.com/articles/error-message-guidelines-mobile-absursum/",
            },
            {
              title: "معالجة أخطاء الواجهة",
              type: "video",
              url: "https://youtu.be/X3EjDDVNz4c",
            },
          ],
        },
        {
          name: "Mobile Navigation Patterns",
          slug: "navigation-patterns",
          resources: [
            {
              title: "Mobile Navigation Patterns",
              type: "article",
              url: "https://www.nngroup.com/articles/mobile-navigation-patterns/",
            },
            {
              title: "شرح أنماط التنقل",
              type: "video",
              url: "https://youtu.be/8yL_YLq-VBY",
            },
          ],
        },
        {
          name: "Clean Architecture",
          slug: "clean-architecture",
          resources: [
            {
              title: "Clean Architecture",
              type: "course",
              url: "https://www.udemy.com/course/clean-architecture-tdd/",
            },
            {
              title: "شرح Clean Architecture",
              type: "video",
              url: "https://youtu.be/C7LRVeC3ej4",
            },
          ],
        },
        {
          name: "MVVM و MVC Patterns",
          slug: "mvvm-mvc",
          resources: [
            {
              title: "MVVM Architecture",
              type: "article",
              url: "https://www.geeksforgeeks.org/mvvm-architecture-in-android/",
            },
            {
              title: "شرح MVVM و MVC",
              type: "video",
              url: "https://youtu.be/qzwLRGOdPuE",
            },
          ],
        },
      ],
    },

    // =========================
    // 09 - الاختبار والـ Debugging
    // =========================
    {
      id: 9,
      title: "الاختبار والـ Debugging",
      description: "تعلم كيفية اختبار وتصحيح التطبيقات بشكل احترافي.",
      icon: TestTube,
      topics: [
        {
          name: "Unit Testing",
          slug: "unit-testing",
          resources: [
            {
              title: "Effective Dart - Testing",
              type: "documentation",
              url: "https://dart.dev/guides/testing",
            },
            {
              title: "شرح Unit Testing",
              type: "video",
              url: "https://youtu.be/FPRlJQJoE3U",
            },
          ],
        },
        {
          name: "Widget Testing",
          slug: "widget-testing",
          resources: [
            {
              title: "Introduction to Widget Testing",
              type: "documentation",
              url: "https://flutter.dev/docs/testing/overview#unit-tests",
            },
            {
              title: "شرح Widget Testing في Flutter",
              type: "video",
              url: "https://youtu.be/R1DqIz2GPAE",
            },
          ],
        },
        {
          name: "Integration Testing",
          slug: "integration-testing",
          resources: [
            {
              title: "Integration Testing",
              type: "documentation",
              url: "https://flutter.dev/docs/testing/integration-tests",
            },
            {
              title: "شرح Integration Testing",
              type: "video",
              url: "https://youtu.be/XctAp08FO7E",
            },
          ],
        },
        {
          name: "Debugging",
          slug: "debugging",
          resources: [
            {
              title: "Debugging Tools",
              type: "documentation",
              url: "https://flutter.dev/docs/testing/debugging",
            },
            {
              title: "أدوات الـ Debugging",
              type: "video",
              url: "https://youtu.be/F85Dy1IgWOM",
            },
          ],
        },
        {
          name: "Crash Reporting",
          slug: "crash-reporting",
          resources: [
            {
              title: "Firebase Crashlytics",
              type: "documentation",
              url: "https://firebase.google.com/docs/crashlytics",
            },
            {
              title: "شرح Crashlytics",
              type: "video",
              url: "https://youtu.be/k_mdq-gh-10",
            },
          ],
        },
        {
          name: "Performance Monitoring",
          slug: "performance-monitoring",
          resources: [
            {
              title: "Firebase Performance Monitoring",
              type: "documentation",
              url: "https://firebase.google.com/docs/perf-mod",
            },
            {
              title: "مراقبة أداء التطبيق",
              type: "video",
              url: "https://youtu.be/_Jf97ckVvbw",
            },
          ],
        },
      ],
    },

    // =========================
    // 10 - النشر والـ Deployment
    // =========================
    {
      id: 10,
      title: "النشر والـ Deployment",
      description: "تعلم كيفية نشر تطبيقك على Google Play و App Store.",
      icon: Rocket,
      topics: [
        {
          name: "Android APK",
          slug: "android-apk",
          resources: [
            {
              title: "Build and release an Android app",
              type: "documentation",
              url: "https://flutter.dev/docs/deployment/android-release",
            },
            {
              title: "شرح بناء APK",
              type: "video",
              url: "https://youtu.be/xcKEHZZAjDc",
            },
          ],
        },
        {
          name: "Android App Bundle",
          slug: "android-app-bundle",
          resources: [
            {
              title: "App Bundle Format",
              type: "documentation",
              url: "https://developer.android.com/guide/app-bundle",
            },
            {
              title: "شرح App Bundle",
              type: "video",
              url: "https://youtu.be/Qk78r2PD6g0",
            },
          ],
        },
        {
          name: "Google Play Console",
          slug: "google-play-console",
          resources: [
            {
              title: "Google Play Console Help",
              type: "documentation",
              url: "https://support.google.com/googleplay/android-developer/",
            },
            {
              title: "شرح Google Play Console",
              type: "video",
              url: "https://youtu.be/JwfH9EhVLJo",
            },
          ],
        },
        {
          name: "iOS App Store",
          slug: "ios-app-store",
          resources: [
            {
              title: "Build and release an iOS app",
              type: "documentation",
              url: "https://flutter.dev/docs/deployment/ios-release",
            },
            {
              title: "شرح نشر التطبيق على App Store",
              type: "video",
              url: "https://youtu.be/H1XyICFiLyc",
            },
          ],
        },
        {
          name: "App Signing",
          slug: "app-signing",
          resources: [
            {
              title: "Android App Signing",
              type: "documentation",
              url: "https://developer.android.com/studio/publish/app-signing",
            },
            {
              title: "شرح توقيع التطبيق",
              type: "video",
              url: "https://youtu.be/hJtxQxT-PeE",
            },
          ],
        },
        {
          name: "متغيرات البيئة Environment Variables",
          slug: "environment-variables",
          resources: [
            {
              title: "Managing Environment Variables",
              type: "article",
              url: "https://12factor.net/config",
            },
            {
              title: "شرح متغيرات البيئة",
              type: "video",
              url: "https://youtu.be/rNrPCNVK6-A",
            },
          ],
        },
        {
          name: "Production Builds",
          slug: "production-builds",
          resources: [
            {
              title: "Building for Production",
              type: "documentation",
              url: "https://flutter.dev/docs/deployment/obfuscate",
            },
            {
              title: "إعدادات الإنتاج",
              type: "video",
              url: "https://youtu.be/RJZiUL4-qwA",
            },
          ],
        },
        {
          name: "Versioning",
          slug: "versioning",
          resources: [
            {
              title: "Semantic Versioning",
              type: "documentation",
              url: "https://semver.org/",
            },
            {
              title: "شرح Versioning",
              type: "video",
              url: "https://youtu.be/kXQiKzSGi14",
            },
          ],
        },
        {
          name: "CI/CD Basics",
          slug: "cicd-basics",
          resources: [
            {
              title: "GitHub Actions",
              type: "documentation",
              url: "https://github.com/features/actions",
            },
            {
              title: "شرح CI/CD و GitHub Actions",
              type: "video",
              url: "https://youtu.be/oCvlMPdUiNQ",
            },
          ],
        },
      ],
    },

    // =========================
    // 11 - تطوير متقدم
    // =========================
    {
      id: 11,
      title: "تطوير متقدم",
      description: "مفاهيم متقدمة لبناء تطبيقات احترافية وقابلة للتوسع.",
      icon: Zap,
      topics: [
        {
          name: "Architecture Patterns",
          slug: "architecture-patterns",
          resources: [
            {
              title: "Software Architecture Patterns",
              type: "course",
              url: "https://www.udemy.com/course/software-architecture-design-patterns/",
            },
            {
              title: "شرح Patterns المعمارية",
              type: "video",
              url: "https://youtu.be/qCjgaB-zw7o",
            },
          ],
        },
        {
          name: "Dependency Injection",
          slug: "dependency-injection",
          resources: [
            {
              title: "Dependency Injection",
              type: "article",
              url: "https://www.geeksforgeeks.org/dependency-injection/",
            },
            {
              title: "شرح Dependency Injection",
              type: "video",
              url: "https://youtu.be/QhXYyVxnbW8",
            },
          ],
        },
        {
          name: "Offline Synchronization",
          slug: "offline-sync",
          resources: [
            {
              title: "Offline Sync Strategies",
              type: "article",
              url: "https://www.pubnub.com/blog/offline-mobile-sync/",
            },
            {
              title: "مزامنة البيانات عند العودة للإنترنت",
              type: "video",
              url: "https://youtu.be/gHCDZA2gN3U",
            },
          ],
        },
        {
          name: "Deep Linking",
          slug: "deep-linking",
          resources: [
            {
              title: "Deep Linking in Flutter",
              type: "documentation",
              url: "https://flutter.dev/docs/development/ui/navigation/deep-linking",
            },
            {
              title: "شرح Deep Linking",
              type: "video",
              url: "https://youtu.be/FQbXlmPzJWA",
            },
          ],
        },
        {
          name: "Background Tasks",
          slug: "background-tasks",
          resources: [
            {
              title: "Background work",
              type: "documentation",
              url: "https://flutter.dev/docs/development/packages-and-plugins/background-processes",
            },
            {
              title: "تنفيذ مهام في الخلفية",
              type: "video",
              url: "https://youtu.be/4-O-3Lj_c3Q",
            },
          ],
        },
        {
          name: "App Security",
          slug: "app-security",
          resources: [
            {
              title: "Android Security & Privacy",
              type: "documentation",
              url: "https://developer.android.com/security",
            },
            {
              title: "حماية التطبيقات",
              type: "video",
              url: "https://youtu.be/d4EVEqbM0lE",
            },
          ],
        },
        {
          name: "Analytics",
          slug: "analytics",
          resources: [
            {
              title: "Firebase Analytics",
              type: "documentation",
              url: "https://firebase.google.com/docs/analytics",
            },
            {
              title: "شرح Firebase Analytics",
              type: "video",
              url: "https://youtu.be/dflmEEYgLb8",
            },
          ],
        },
        {
          name: "Scalable Project Structure",
          slug: "project-structure",
          resources: [
            {
              title: "Project Structure Best Practices",
              type: "article",
              url: "https://www.freecodecamp.org/news/how-to-structure-a-react-app/",
            },
            {
              title: "تنظيم المشروع",
              type: "video",
              url: "https://youtu.be/3WCGw3kKxro",
            },
          ],
        },
      ],
    },

    // =========================
    // 12 - المشاريع العملية
    // =========================
    {
      id: 12,
      title: "المشاريع العملية",
      description:
        "مشاريع تطبيقية متعددة المستويات لتطبيق كل ما تعلمته بشكل عملي.",
      icon: Box,
      topics: [
        {
          name: "Todo App",
          slug: "todo-app-project",
          resources: [
            {
              title: "Flutter Todo App Tutorial",
              type: "video",
              url: "https://youtu.be/r6eCuDexwe4",
            },
            {
              title: "React Native Todo App",
              type: "course",
              url: "https://www.udemy.com/course/the-complete-react-native-and-redux-course/",
            },
          ],
        },
        {
          name: "Notes App",
          slug: "notes-app-project",
          resources: [
            {
              title: "Flutter Notes App",
              type: "video",
              url: "https://youtu.be/E-YcQrJ1E8Y",
            },
            {
              title: "شرح Notes App مع Firebase",
              type: "video",
              url: "https://youtu.be/fis26HvvDII",
            },
          ],
        },
        {
          name: "Weather App",
          slug: "weather-app-project",
          resources: [
            {
              title: "Flutter Weather App",
              type: "video",
              url: "https://youtu.be/3S5cpBET0Es",
            },
            {
              title: "React Native Weather App",
              type: "video",
              url: "https://youtu.be/88N-OvKGYME",
            },
          ],
        },
        {
          name: "News App",
          slug: "news-app-project",
          resources: [
            {
              title: "Flutter News App Tutorial",
              type: "video",
              url: "https://youtu.be/rWnvJm9sFAQ",
            },
            {
              title: "React Native News App",
              type: "video",
              url: "https://youtu.be/FeqVmHYrO-c",
            },
          ],
        },
        {
          name: "Movie App",
          slug: "movie-app-project",
          resources: [
            {
              title: "Flutter Movie App",
              type: "video",
              url: "https://youtu.be/6oF1xkHd4KE",
            },
            {
              title: "React Native Movie App",
              type: "video",
              url: "https://youtu.be/nKrLG2SmG_w",
            },
          ],
        },
        {
          name: "E-commerce App",
          slug: "ecommerce-app-project",
          resources: [
            {
              title: "Flutter E-commerce App",
              type: "course",
              url: "https://www.udemy.com/course/flutter-ecommerce/",
            },
            {
              title: "React Native E-commerce",
              type: "course",
              url: "https://www.udemy.com/course/react-native-complete-project/",
            },
          ],
        },
        {
          name: "Chat App",
          slug: "chat-app-project",
          resources: [
            {
              title: "Flutter Chat App",
              type: "course",
              url: "https://www.udemy.com/course/flutter-firebase-chat/",
            },
            {
              title: "React Native Chat App",
              type: "video",
              url: "https://youtu.be/nkH5BpYZ7Cw",
            },
          ],
        },
        {
          name: "Expense Tracker",
          slug: "expense-tracker-project",
          resources: [
            {
              title: "Flutter Expense Tracker",
              type: "video",
              url: "https://youtu.be/NeW6gYFSP_I",
            },
            {
              title: "React Native Expense App",
              type: "video",
              url: "https://youtu.be/x3Xl1B-R63w",
            },
          ],
        },
        {
          name: "Food Delivery App",
          slug: "food-delivery-project",
          resources: [
            {
              title: "Flutter Food Delivery App",
              type: "course",
              url: "https://www.udemy.com/course/flutter-food-delivery/",
            },
            {
              title: "React Native Food App",
              type: "course",
              url: "https://www.udemy.com/course/react-native-food-delivery/",
            },
          ],
        },
        {
          name: "Social Media App",
          slug: "social-media-project",
          resources: [
            {
              title: "Flutter Social Media App",
              type: "course",
              url: "https://www.udemy.com/course/flutter-firebase-social-network/",
            },
            {
              title: "React Native Social App",
              type: "course",
              url: "https://www.udemy.com/course/react-native-social-network/",
            },
          ],
        },
        {
          name: "Full-Stack Mobile App",
          slug: "fullstack-mobile-project",
          resources: [
            {
              title: "Complete Mobile Development Course",
              type: "course",
              url: "https://www.udemy.com/course/complete-flutter-development-course/",
            },
            {
              title: "Full-Stack React Native",
              type: "course",
              url: "https://www.udemy.com/course/fullstack-react-native-typescript/",
            },
          ],
        },
      ],
    },

    // =========================
    // 13 - الموارد الإضافية
    // =========================
    {
      id: 13,
      title: "الموارد الإضافية والمجتمع",
      description: "موارد إضافية والتواصل مع مجتمع المطورين.",
      icon: Settings,
      topics: [
        {
          name: "القنوات والمدونات",
          slug: "channels-blogs",
          resources: [
            {
              title: "Flutter YouTube Channel",
              type: "video",
              url: "https://www.youtube.com/@flutterdev",
            },
            {
              title: "React Native YouTube",
              type: "video",
              url: "https://www.youtube.com/@ReactNative",
            },
            {
              title: "Medium - Flutter Articles",
              type: "article",
              url: "https://medium.com/flutter",
            },
          ],
        },
        {
          name: "المجتمعات والفورمات",
          slug: "communities-forums",
          resources: [
            {
              title: "Stack Overflow",
              type: "article",
              url: "https://stackoverflow.com/questions/tagged/flutter",
            },
            {
              title: "Reddit - r/Flutter",
              type: "article",
              url: "https://reddit.com/r/FlutterDev",
            },
            {
              title: "Flutter Community",
              type: "article",
              url: "https://flutter.dev/community",
            },
          ],
        },
        {
          name: "الكتب والمراجع",
          slug: "books-references",
          resources: [
            {
              title: "Flutter in Action",
              type: "article",
              url: "https://www.manning.com/books/flutter-in-action",
            },
            {
              title: "Learning React Native",
              type: "article",
              url: "https://www.oreilly.com/library/view/learning-react-native/9781491989135/",
            },
          ],
        },
        {
          name: "أدوات مفيدة",
          slug: "useful-tools",
          resources: [
            {
              title: "Android Studio",
              type: "documentation",
              url: "https://developer.android.com/studio",
            },
            {
              title: "Xcode",
              type: "documentation",
              url: "https://developer.apple.com/xcode/",
            },
            {
              title: "VS Code",
              type: "documentation",
              url: "https://code.visualstudio.com/",
            },
          ],
        },
      ],
    },
  ],
};

export const mobileProjects = [
  {
    id: 1,
    title: "Todo App - Flutter",
    url: "https://github.com/topic/flutter-todo-app",
    stack: ["Flutter", "Dart", "SQLite"],
  },
  {
    id: 2,
    title: "Weather App - React Native",
    url: "https://github.com/topic/react-native-weather-app",
    stack: ["React Native", "TypeScript", "OpenWeather API"],
  },
  {
    id: 3,
    title: "Notes App - Flutter",
    url: "https://github.com/topic/flutter-notes-app",
    stack: ["Flutter", "Firebase", "Hive"],
  },
  {
    id: 4,
    title: "E-commerce App - React Native",
    url: "https://github.com/topic/react-native-ecommerce",
    stack: ["React Native", "Redux", "Firebase"],
  },
  {
    id: 5,
    title: "Chat App - Flutter",
    url: "https://github.com/topic/flutter-chat-app",
    stack: ["Flutter", "Firebase", "Cloud Messaging"],
  },
  {
    id: 6,
    title: "News App - React Native",
    url: "https://github.com/topic/react-native-news-app",
    stack: ["React Native", "News API", "AsyncStorage"],
  },
];
