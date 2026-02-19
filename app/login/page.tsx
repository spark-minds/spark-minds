import Link from "next/link";

export default function LoginPage() {
    return(
        <div className="flex min-h-screen items-center justify-center bg-home-gradient px-4">
      <div className="flex h-[383px] w-full max-w-[420px] flex-col items-center gap-8 rounded-[12px] bg-white/90 p-10 shadow-xl backdrop-blur">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 text-lg font-semibold text-white shadow-md">
            SM
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold text-slate-900">
              Welcome <span className="align-middle">👋</span>
            </h1>
            <p className="max-w-xs text-sm text-slate-500">
              Sign in to generate personalized activities for your child.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <Link
            href="/home"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow ring-1 ring-slate-200">
              <span className="text-[11px] font-semibold text-[#4285F4]">
                G
              </span>
            </span>
            <span>Continue with Google</span>
          </Link>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <button className="underline-offset-4 hover:underline">
              Terms
            </button>
            <span>•</span>
            <button className="underline-offset-4 hover:underline">
              Privacy
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}