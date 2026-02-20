"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmitFeedback = () => {
    // Handle feedback submission
    console.log("Feedback submitted:", feedback);
    setFeedback("");
  };

  const handleRegenerate = () => {
    // Handle activity regeneration
    console.log("Regenerate requested:", suggestion);
    setSuggestion("");
  };

  return (
    <div className="flex w-full justify-center px-4 py-2">
      <div className="w-full max-w-4xl rounded-3xl bg-white p-6 shadow-md md:p-10">
        <div className="flex flex-col gap-8">
          {/* Section 1: General Feedback */}
          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Feedback
              </h2>
              <p className="text-sm text-slate-600 md:text-base">
                Help us improve your future activities.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">
                How did this activity work for you?
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your experience..."
                rows={6}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 shadow-xs focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmitFeedback}
              disabled={!feedback.trim()}
              className={`flex h-[48px] w-full items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-white shadow-md transition ${
                feedback.trim()
                  ? "bg-[#3498DB] hover:bg-[#2d86c3]"
                  : "cursor-not-allowed bg-slate-300"
              }`}
            >
              <span>Submit Feedback</span>
              <span className="text-base">&rsaquo;</span>
            </button>
          </section>

          {/* Section 2: Suggest Improvements */}
          <section className="flex flex-col gap-4 border-t border-slate-100 pt-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-[#EF9D40] md:text-2xl">
                Need Something Different?
              </h3>
              <p className="text-sm text-slate-600 md:text-base">
                Tell us what you&apos;d like to improve or change
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder="e.g., Make it shorter, use outdoor items..."
                className="h-[44px] w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-xs placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <button
              type="button"
              onClick={handleRegenerate}
              disabled={!suggestion.trim()}
              className={`flex h-[48px] w-full items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-white shadow-md transition ${
                suggestion.trim()
                  ? "bg-[#EF9D40] hover:bg-[#D4883D]"
                  : "cursor-not-allowed bg-slate-300"
              }`}
            >
              <RefreshCw size={18} />
              <span>Regenerate Activity</span>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
