import Image from "next/legacy/image";
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const technologies = [
  {
    name: "HTML",
    logo: FaHtml5,
  },
  {
    name: "CSS",
    logo: FaCss3Alt,
  },
  {
    name: "JavaScript",
    logo: FaJs,
  },
  {
    name: "TypeScript",
    logo: SiTypescript,
  },
  {
    name: "React",
    logo: FaReact,
  },
  {
    name: "Next.js",
    logo: SiNextdotjs,
  },
];
export default function Hero() {
  return (
    <section className="py-60 border-b">
      <div className="flex flex-wrap gap-8 max-w-400 mx-auto px-4">
        <div className="flex-2 basis-sm">
          <h1 className="text-[48px] font-bold leading-[57.6px]">
            تحول لمبرمج
            <span className="text-[#004AC6] block mb-2">خطوة بخطوة</span>
            <Image src="/SVG.svg" alt="Logo" width={250} height={40} />
          </h1>
          <p className="text-[18px] leading-[30.6px] text-[#434655]">
            مسارات تعليمية منظمة تساعدك على تعلم البرمجة من الصفر حتى الاحتراف.
            صممت لتوفير تجربة تعلم خالية من التشتت والتركيز على المهارات العملية
            المطلوبة في سوق العمل.
          </p>
          <div>
            <Link
              href={"/roadmaps"}
              className="block px-4 py-2 rounded-lg text-[#004AC6] w-fit mr-auto mt-4
              bg-[#F8F9FA] border-2 border-[#004AC6] text-[22px] font-medium"
            >
              استكشف المسارات
            </Link>
          </div>
        </div>
        <ul className="flex-1 basis-100 flex flex-col gap-4 border border-[#C3C6D7] rounded-2xl p-8">
          {technologies.map((tech) => (
            <li key={tech.name} className="flex gap-4 items-center text-left">
              <span
                className={`flex-1 border border-[#C3C6D7] p-3 rounded-lg ${
                  tech.name === "HTML" || tech.name === "CSS"
                    ? "bg-[#F3F4F5]"
                    : "bg-[#FFFFFF] opacity-70"
                }`}
              >
                {tech.name}
              </span>
              <span
                className={`p-2 text-[#434655] rounded-full
               ${
                 tech.name === "HTML" || tech.name === "CSS"
                   ? "bg-[#004AC6] text-white"
                   : "bg-[#F3F4F5] text-[#191C1D]"
               }`}
              >
                <tech.logo size={20} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
