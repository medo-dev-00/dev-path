import { whyLearnItems } from "@/data/why-learn";

export default function WhyLearn() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-[#f5f5f5] px-6 py-12 md:px-12">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          لماذا تتعلم معنا؟
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {whyLearnItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#0057d9] text-white shadow-sm">
                  <Icon size={30} strokeWidth={2} />
                </div>

                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>

                <p className="mx-auto max-w-[250px] text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
