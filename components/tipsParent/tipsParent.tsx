"use client";

import { Lightbulb } from "lucide-react";
import { useRouter } from "next/navigation";



const tips = [
  "Adjust the difficulty by hiding planets in easier or trickier spots based on your child's age.",
  "Use rich language (orbit, galaxy, mission) to build vocabulary while you play.",
  "If you have multiple children, let them take turns being the explorer and the mission commander.",
  "End the activity with a calm moment — lying on the floor and imagining the stars together.",
];

export default function TipsParent() {
  const router = useRouter();
  const handleOkay = () => {
    router.push("/home/activity");
  };

  return (
    <div className="flex w-full justify-center px-4 py-2">
      <div className="w-full max-w-2xl rounded-2xl from-slate-50 from-[0%] via-slate-50 via-[80%] to-[#00000014] to-[80%] bg-gradient-to-b  p-6 shadow-md md:p-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
            Tips for Parents
          </h2>

          <ul className="flex flex-col gap-3">
            {tips.map((tip, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-xl px-4 py-3"
                style={{ backgroundColor: "#F3E9FB" }}
              >
                <Lightbulb
                  size={20}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#7c3aed" }}
                />
                <span className="text-xs font-medium leading-relaxed text-slate-800 md:text-sm">
                  {tip}
                </span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={handleOkay}
            className="flex h-[48px] w-full items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            style={{ backgroundColor: "#00897B" }}
          >
            <span>Okay, Got it</span>
            <span className="text-base">&rsaquo;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
