/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const steps = ["Activity Overview", "Materials Needed", "Step-by-Step Activity"] as const;

type Step = (typeof steps)[number];

const stepIndexMap: Record<Step, number> = {
  "Activity Overview": 0,
  "Materials Needed": 1,
  "Step-by-Step Activity": 2,
};

export default function Activity() {
  const [activeStep, setActiveStep] = useState<Step>("Activity Overview");

  const currentIndex = stepIndexMap[activeStep];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === steps.length - 1;

  const handlePrevious = () => {
    if (!isFirst) {
      setActiveStep(steps[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setActiveStep(steps[currentIndex + 1]);
    }
  };

  const nextLabel =
    activeStep === "Activity Overview"
      ? "Next: Materials"
      : activeStep === "Materials Needed"
      ? "Next: Step-by-Step Activity"
      : "Next";

  const renderContent = () => {
    if (activeStep === "Activity Overview") {
      return (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
              Activity Overview
            </h2>
            <div className="flex flex-wrap gap-3 text-xs font-medium">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                30 Mins
              </span>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-600">
                Science
              </span>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
            In this activity, your child will construct a simple rocket using household
            materials. This hands-on project introduces basic concepts of aerodynamics and
            propulsion. By using a balloon as the engine, they will see Newton&apos;s Third
            Law of Motion in action—for every action, there is an equal and opposite
            reaction.
          </p>
        </>
      );
    }

    if (activeStep === "Materials Needed") {
      return (
        <>
          <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
            Materials Needed
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
            Gather these simple items from around your home to set up the rocket activity:
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600 md:text-base">
            <li>Cardboard tube or lightweight cardboard for the rocket body</li>
            <li>Balloon (the &quot;engine&quot;)</li>
            <li>String and tape</li>
            <li>Scissors and crayons/markers for decoration</li>
          </ul>
        </>
      );
    }

    return (
      <>
      <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
              Step-by-Step Activity
            </h2>
            <Link href="/home/activity/parent_tips" className="text-sm font-medium text-sky-500 underline hover:text-sky-700">Tips For Parents</Link>
        </div>
        {/* <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
          Step-by-Step Activity
        </h2>*/}
        <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
          Walk your child through each step, pausing to ask questions and let them predict
          what will happen.
        </p> 
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600 md:text-base">
          <li>Decorate the cardboard tube to look like a rocket.</li>
          <li>Thread the string through the tube and stretch it tightly across the room.</li>
          <li>Blow up the balloon without tying it, then tape it to the rocket.</li>
          <li>
            Let go of the balloon and watch the rocket travel as the air rushes out—talk
            about action and reaction.
          </li>
        </ol>
      </>
    );
  };

  return (
    <div className="flex w-full justify-center px-4 py-2">
      <div className="w-full max-w-4xl rounded-3xl bg-white p-6 shadow-md md:p-10">
        <div className="flex flex-col gap-8">
          {/* Hero image */}
          <section className="overflow-hidden rounded-2xl border border-slate-100">
            <Image
              src="https://media.istockphoto.com/id/516814892/photo/little-curly-girl-blowing-dandelion.jpg?s=612x612&w=0&k=20&c=j0J_rX47k95W1ageIZo2z1udQ-ybT23v5MdEVojgn6I="
              alt="Kids building a cardboard rocket in a classroom"
              width={960}
              height={480}
              className="h-[380px] w-full object-cover"
              priority
            />
          </section>

          {/* Progress */}
          <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between ">
            <div className="flex w-full flex-col gap-2">
              <div className="flex w-full gap-2 ">
                {steps.map((step, index) => {
                  const isActiveOrComplete = index <= currentIndex;
                  const isFirstSegment = index === 0;
                  const isLastSegment = index === steps.length - 1;

                  return (
                    <div
                      key={step}
                      className={`h-1 flex-1 ${
                        isActiveOrComplete ? "bg-[#3498DB]" : "bg-slate-200"
                      } ${isFirstSegment ? "rounded-l-full" : ""} ${
                        isLastSegment ? "rounded-r-full" : ""
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </section>

          {/* Step content */}
          <section className="mt-2 border-t border-slate-100 pt-6">{renderContent()}</section>

          {/* Navigation buttons */}
          <section className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={isFirst}
              className={`flex h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-medium shadow-xs transition ${
                isFirst
                  ? "cursor-not-allowed bg-slate-50 text-slate-300"
                  : "bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span className="text-lg">&lsaquo;</span>
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className={`flex h-[48px] items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-white shadow-md transition bg-[#3498DB] hover:bg-[#2d86c3]`}
            >
              <span>{nextLabel}</span>
              <span className="text-base">&rsaquo;</span>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

