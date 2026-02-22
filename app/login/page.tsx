import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
    return(
        <div className="flex min-h-screen items-center justify-center bg-home-gradient px-4">
      <div className="flex h-[383px] w-full max-w-[420px] flex-col items-center gap-8 rounded-[12px] bg-white/90 p-10 shadow-xl backdrop-blur">
        <div className="flex flex-col items-center gap-1 text-center">
          <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 text-lg font-semibold text-white shadow-md">
            <Image src="/whiteIcon.svg" alt="logo" width={30} height={30} />
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

        <div className="flex w-full flex-col items-center gap-8">
          <Link
            href="/home"
            className="flex h-12 w-full items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
          >
            <span className="flex h-10 w-10 items-center justify-center">
              <Image src="/google.svg" alt="google" width={20} height={20} />
            </span>
            <span className="text-medium font-bold">Continue with Google</span>
          </Link>

          <div className="flex items-center gap-8 text-medium text-slate-400">
            <button className="underline-offset-4 hover:underline">
              Terms
            </button>
            
            <button className="underline-offset-4 hover:underline">
              Privacy
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}