import Link from "next/link";
import { ArrowLeft, Home, Map } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="mx-auto w-full max-w-2xl text-center">
        <div className="mb-6 text-8xl font-black tracking-tighter">404</div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          الصفحة غير موجودة
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-gray-500">
          عذرًا، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها إلى مكان آخر
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            <Home size={18} />
            الصفحة الرئيسية
          </Link>

          <Link
            href="/roadmaps"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium transition hover:bg-gray-50"
          >
            <Map size={18} />
            استكشف المسارات
          </Link>
        </div>
      </div>
    </main>
  );
}
