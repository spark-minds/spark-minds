export default function DashboardHome() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen w-full flex-col">
        <main className="flex flex-1 justify-center px-4 py-8">
          <div className="flex w-full max-w-[800px] flex-col gap-8 rounded-2xl bg-white p-8 shadow-sm">
            {/* Progress summary */}
            <section className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50 p-6">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span className="font-medium text-slate-900">
                  Day 4 out of 30 completed
                </span>
                <span className="text-xs text-slate-500">
                  4 activities done • 23% of 30-day journey
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[23%] rounded-full bg-gradient-to-r from-violet-500 to-sky-500" />
              </div>
            </section>

            {/* Past activities */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-900">
                  Past Activities
                </h2>
                <button className="text-xs font-medium text-sky-600 hover:underline">
                  Show All Activities
                </button>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { title: "Listening Skills", subtitle: "Yesterday" },
                  { title: "Speech Practice", subtitle: "2 days ago" },
                  { title: "Vocabulary", subtitle: "4 days ago" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-1 rounded-xl border border-slate-100 bg-white p-4 text-sm shadow-xs"
                  >
                    <span className="font-medium text-slate-900">
                      {item.title}
                    </span>
                    <span className="text-xs text-slate-500">
                      {item.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Generate activity */}
            <section className="mt-2 flex w-full max-w-[684px] flex-col gap-4 rounded-xl border border-slate-100 bg-slate-50 p-6">
              <h2 className="text-sm font-semibold text-slate-900">
                Select Goal
              </h2>
              <div className="flex flex-col gap-4 text-sm text-slate-700">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-slate-600">
                    What skill should we focus on?
                  </label>
                  <select className="h-[44px] w-full rounded-lg border border-slate-200 bg-white px-3 text-sm shadow-xs focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100">
                    <option>Vocabulary Building</option>
                    <option>Listening Skills</option>
                    <option>Speech Practice</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-slate-600">
                    Any extra context? (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., likes dinosaurs, struggles with 'R' sound"
                    className="h-[44px] w-full rounded-lg border border-slate-200 bg-white px-3 text-sm shadow-xs placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  />
                </div>
              </div>
              <button
                className="mt-2 flex h-[51px] w-full items-center justify-center gap-2 rounded-[8px] bg-[#3498DB] text-sm font-semibold text-white shadow-md transition hover:bg-[#2d86c3]"
                type="button"
              >
                Generate Activity
              </button>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

