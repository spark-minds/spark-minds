"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, TrendingUp, Heart } from "lucide-react";

export default function ActivityCompleted() {
  const feedbackItems = [
    {
      icon: CheckCircle,
      text: "Every small activity builds big skills.",
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600",
    },
    {
      icon: TrendingUp,
      text: "Consistency creates progress.",
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600",
    },
    {
      icon: Heart,
      text: "You're doing an amazing job supporting your child.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="flex w-full justify-center px-4 py-6">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-md md:p-10">
        {/* Decorative stars */}
        <span className="absolute left-4 top-4 text-slate-300">✦</span>
        <span className="absolute right-4 top-4 text-slate-300">✦</span>

        <div className="flex flex-col items-center gap-6">
          {/* Illustration */}
          <div className="relative h-[200px] w-full max-w-sm">
            <Image
              src="/Parent_and_child_celebrating.svg"
              alt="Parent and child celebrating"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Activity Complete! 🎉
            </h1>
            <p className="text-sm text-slate-600 md:text-base">
              You showed up today, and that matters more than perfection.
            </p>
          </div>

          {/* Feedback points */}
          <ul className="flex w-full flex-col gap-3">
            {feedbackItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3"
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="text-sm text-slate-700 md:text-base">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Progress / milestone block */}
          <div
            className="w-full rounded-xl px-4 py-4"
            style={{ backgroundColor: "#F8FAFC" }}
          >
            <div className="flex items-center justify-between">
              <span
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#8E44AD" }}
              >
                <span>🎀</span>
                Day 5 of 30 completed
              </span>
              <span className="text-sm text-slate-500">16%</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full"
                style={{
                  width: "16%",
                  background: "linear-gradient(90deg, #3498DB 0%, #8E44AD 100%)",
                }}
              />
            </div>
            <p className="mt-2 text-sm text-slate-600">
              You&apos;ve finished 5 activities so far! Keep up the wonderful
              momentum.
            </p>
          </div>

          {/* Generate Next Activity button */}
          <button
            type="button"
            className="flex h-[52px] w-full items-center justify-center gap-2 rounded-xl px-6 text-base font-semibold text-white shadow-md transition hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #3498DB 0%, #8E44AD 100%)",
            }}
          >
            Generate Next Activity
          </button>

          <Link
            href="/home"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:underline"
          >
            Go To Dashboard
          </Link>

          <p
            className="text-center text-sm font-medium italic"
            style={{ color: "#00897B" }}
          >
            Little moments today become big milestones tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
}
