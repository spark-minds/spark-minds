import Activity from "@/components/activity/activity";

export default function ActivityPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen w-full flex-col">
         <section className="flex flex-col gap-3 justify-center items-center px-4 py-8">
            <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Space Explorer: DIY Rocket
            </h1>
            <p className="text-sm text-slate-500 md:text-base">
              A fun science craft for ages 6–8 to learn about propulsion.
            </p>
          </section>
        <main className="flex flex-1 justify-center px-4">
          <Activity />
        </main>
      </div>
    </div>
  );
}

