import React, { useState } from "react";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  ChevronRight,
  X,
} from "lucide-react";

import { customerStories } from "../data/stories";

export default function CustomerStories() {
  const [selectedStory, setSelectedStory] = useState(null);

  /* =========================================================
     FULL STORY VIEW
  ========================================================== */
  if (selectedStory) {
    return (
      <section
        id="transformation"
        className="relative min-h-screen overflow-hidden bg-[#080d1c] py-20 text-white sm:py-24"
      >
        {/* Background */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

          {/* Back */}
          <button
            onClick={() => setSelectedStory(null)}
            className="mb-10 flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Transformation Stories
          </button>

          {/* =====================================================
              STORY HEADER
          ====================================================== */}
          <div className="max-w-4xl">

            <div className="mb-5 flex flex-wrap items-center gap-3">

              <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300">
                Transformation Story
              </span>

              {selectedStory.customer && (
                <span className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <Building2 className="h-4 w-4" />
                  {selectedStory.customer}
                </span>
              )}

              {selectedStory.year && (
                <span className="text-xs font-medium text-slate-500">
                  {selectedStory.year}
                </span>
              )}

            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {selectedStory.title}
            </h2>

            {selectedStory.industry && (
              <p className="mt-4 text-sm font-medium text-cyan-400">
                {selectedStory.industry}
              </p>
            )}

            {/* Description / context */}
            {selectedStory.companySize && (
              <p className="mt-3 text-sm text-slate-500">
                {selectedStory.companySize}
              </p>
            )}

          </div>

          {/* =====================================================
              STORY CONTENT
          ====================================================== */}
          <div className="mt-14 space-y-8">

            {/* Business Challenge */}
            {selectedStory.challenge && (
              <StoryDetailBlock
                title="Business Challenge"
                content={selectedStory.challenge}
              />
            )}

            {/* Solution */}
            {selectedStory.solution && (
              <StoryDetailBlock
                title="Solution"
                content={selectedStory.solution}
              />
            )}

            {/* Key Capabilities */}
            {selectedStory.capabilities?.length > 0 && (
              <StoryListBlock
                title="Key Capabilities"
                items={selectedStory.capabilities}
              />
            )}

            {/* Technologies */}
            {selectedStory.technologies?.length > 0 && (
              <StoryListBlock
                title="Technologies Used"
                items={selectedStory.technologies}
              />
            )}

            {/* Business Impact */}
            {selectedStory.impact && (
              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.025] p-7">

                <h3 className="text-lg font-bold text-white">
                  Business Impact
                </h3>

                {/* Impact metrics */}
                {selectedStory.impact.metrics?.length > 0 && (
                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

                    {selectedStory.impact.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

                        <span className="text-sm leading-relaxed text-slate-300">
                          {metric}
                        </span>
                      </div>
                    ))}

                  </div>
                )}

                {/* Business value */}
                {selectedStory.impact.businessValue && (
                  <div className="mt-6">

                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
                      Business Value
                    </div>

                    <p className="text-sm leading-7 text-slate-400">
                      {selectedStory.impact.businessValue}
                    </p>

                  </div>
                )}

              </div>
            )}

            {/* Outcomes */}
            {selectedStory.outcomes && (
              <StoryDetailBlock
                title="Outcomes"
                content={selectedStory.outcomes}
              />
            )}

          </div>

          {/* Close */}
          <button
            onClick={() => setSelectedStory(null)}
            className="mt-12 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            <X className="h-4 w-4" />
            Close Story
          </button>

        </div>
      </section>
    );
  }

  /* ===========================================================
     STORY LANDING VIEW
  ============================================================ */

  return (
    <section
      id="transformation"
      className="relative overflow-hidden bg-[#080d1c] py-20 text-white sm:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/[0.055] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[500px] rounded-full bg-cyan-500/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Transformation in Practice
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            AI & Technology{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Selected examples of how I translate business strategy,
            architecture and emerging technology into enterprise outcomes.
          </p>

        </div>

        {/* =====================================================
            STORY GRID
        ====================================================== */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {customerStories.map((story, index) => (
            <button
              key={story.id || index}
              onClick={() => setSelectedStory(story)}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.045]"
            >

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

              <div className="relative flex h-full flex-col">

                {/* Number + icon */}
                <div className="mb-6 flex items-center justify-between">

                  <span className="text-xs font-bold tracking-[0.18em] text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Building2 className="h-5 w-5 text-slate-600 transition-colors group-hover:text-cyan-400" />

                </div>

                {/* Customer */}
                {story.customer && (
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-400">
                    {story.customer}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold leading-snug text-white">
                  {story.title}
                </h3>

                {/* Industry */}
                {story.industry && (
                  <div className="mt-3 text-xs font-medium text-slate-500">
                    {story.industry}
                  </div>
                )}

                {/* Description */}
                {story.challenge && (
                  <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-slate-400">
                    {story.challenge}
                  </p>
                )}

                {/* Technologies */}
                {story.technologies?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">

                    {story.technologies.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-slate-500"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>
                )}

                {/* CTA */}
                <div className="mt-auto pt-7">

                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-400 transition-all duration-300 group-hover:gap-3 group-hover:text-cyan-300">
                    View Full Story
                    <ChevronRight className="h-4 w-4" />
                  </div>

                </div>

              </div>

            </button>
          ))}

        </div>

      </div>
    </section>
  );
}

/* =============================================================
   DETAIL BLOCK
============================================================= */

function StoryDetailBlock({ title, content }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">

      <h3 className="text-lg font-bold text-white">
        {title}
      </h3>

      <div className="mt-4 text-sm leading-7 text-slate-400">

        {Array.isArray(content) ? (
          content.map((item, index) => (
            <p
              key={index}
              className="mb-3 last:mb-0"
            >
              {item}
            </p>
          ))
        ) : (
          <p>{content}</p>
        )}

      </div>

    </div>
  );
}

/* =============================================================
   LIST BLOCK
============================================================= */

function StoryListBlock({ title, items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">

      <h3 className="text-lg font-bold text-white">
        {title}
      </h3>

      <div className="mt-5 space-y-3">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 text-sm leading-relaxed text-slate-400"
          >

            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

            <span>{item}</span>

          </div>
        ))}

      </div>

    </div>
  );
}