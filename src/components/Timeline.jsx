import React, { useState } from "react";
import {
  Plus,
  Minus,
  Flag,
  ChevronRight,
} from "lucide-react";

const career = [
  {
    year: "2001",
    company: "Freelance",
    duration: "1.5 years",
    role: "Freelance Software Developer",
    period: "October 2001 – March 2003",
    position: "above",
    description:
      "Early software engineering experience building applications and developing a strong foundation in software development.",
    highlights: [
      "Software development",
      "Application engineering",
      "Technical problem solving",
    ],
  },

  {
    year: "2003",
    company: "NESCO",
    duration: "1.5 years",
    role: "Assistant Engineer (Trainee)",
    period: "March 2003 – October 2004",
    position: "below",
    description:
      "Engineering foundation combining technical problem solving with practical project experience.",
    highlights: [
      "Engineering fundamentals",
      "Technical problem solving",
      "Project experience",
    ],
  },

  {
    year: "2004",
    company: "Wipro",
    duration: "8 months",
    role: "Project Engineer | BFSI Domain",
    period: "October 2004 – June 2005",
    position: "above",
    description:
      "Enterprise technology delivery within the Banking, Financial Services and Insurance domain.",
    highlights: [
      "BFSI technology",
      "Enterprise application delivery",
      "Client-focused technology solutions",
    ],
  },

  {
    year: "2005",
    company: "IBM",
    duration: "3 years",
    role: "Advisory Systems Analyst | Financial Services Sector",
    period: "June 2005 – May 2008",
    position: "below",
    description:
      "Technology consulting and systems analysis across financial services engagements.",
    highlights: [
      "Financial services technology",
      "Systems analysis",
      "Technology advisory",
    ],
  },

  {
    year: "2008",
    company: "Dell Perot",
    duration: "5 months",
    role: "Application Lead | Finance Domain",
    period: "June 2008 – November 2008",
    position: "above",
    description:
      "Application leadership within finance-focused technology delivery.",
    highlights: [
      "Application leadership",
      "Finance technology",
      "Enterprise delivery",
    ],
  },

  {
    year: "2008",
    company: "TCS",
    duration: "11 years",
    role: "Technology Leader | Analytics & Insights",
    period: "November 2008 – November 2019",
    position: "below",
    description:
      "Long-term technology leadership across analytics, data and AI engagements, including strategic client delivery and capability development.",
    highlights: [
      "Data & AI leadership",
      "Analytics & Insights",
      "Strategic client engagements",
      "Technology delivery leadership",
      "Mentoring and capability development",
    ],
  },

  {
    year: "2019",
    company: "Accenture",
    duration: "1.7 years",
    role: "Technology Architect Delivery Manager | Data & AI Practice",
    period: "November 2019 – July 2021",
    position: "above",
    description:
      "Led Data & AI practice teams and AI transformation initiatives involving machine learning, NLP and deep learning.",
    highlights: [
      "Data & AI practice leadership",
      "Machine Learning",
      "NLP",
      "Deep Learning",
      "AI showcases and prototypes",
    ],
  },

  {
    year: "2021",
    company: "LTI",
    duration: "3 months",
    role: "Associate Principal | Data Engineering Practice",
    period: "July 2021 – September 2021",
    position: "below",
    description:
      "Associate Principal role focused on data engineering practice leadership and enterprise technology capabilities.",
    highlights: [
      "Data engineering",
      "Practice leadership",
      "Enterprise technology",
    ],
  },

  {
    year: "2021",
    company: "Ernst & Young (EY)",
    shortCompany: "EY",
    duration: "Present",
    role: "Lead AI Portfolio Architect | Technology Strategy & Architecture",
    period: "September 2021 – Present",
    position: "above",
    current: true,
    description:
      "Leading enterprise AI, GenAI and Agentic AI transformation across global portfolios, combining AI architecture, technology strategy, platform architecture and AI CoE leadership.",
    highlights: [
      "30+ AI products architected",
      "Enterprise Agentic AI platforms",
      "AI Centre of Excellence",
      "AI & technology strategy",
      "Product & platform architecture",
      "AI-assisted Software Factory",
      "Global AI transformation",
    ],
  },
];

function CareerDetail({ item }) {
  return (
    <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-6 shadow-xl sm:p-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Career Milestone
          </div>

          <h3 className="text-2xl font-bold text-white">
            {item.company}
          </h3>

          <p className="mt-2 text-base font-medium text-cyan-300">
            {item.role}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {item.period}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 px-5 py-4 lg:min-w-[180px]">
          <div className="text-xs uppercase tracking-widest text-slate-500">
            Duration
          </div>

          <div className="mt-1 text-lg font-semibold text-white">
            {item.duration}
          </div>
        </div>

      </div>

      <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-400">
        {item.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
          >
            {highlight}
          </span>
        ))}
      </div>

    </div>
  );
}

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  function toggleItem(index) {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  }

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >

      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <div className="mx-auto mb-14 max-w-4xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            Career Journey
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Career Experience
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
            22+ years of progression across software engineering, technology
            leadership, data &amp; AI, enterprise architecture and AI
            transformation.
          </p>

        </div>

        {/* =========================================================
            DESKTOP TIMELINE
           ========================================================= */}

        <div className="hidden lg:block">

          {/* Start / Present */}

          <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-500">

            <span>2001</span>

            <span className="flex items-center gap-2 text-slate-300">
              Present
              <Flag className="h-4 w-4 text-cyan-400" />
            </span>

          </div>

          <div className="relative h-[520px]">

            {/* MAIN LINE */}

            <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

            {/* MILESTONES */}

            <div className="absolute inset-0 grid grid-cols-9">

              {career.map((item, index) => {

                const isSelected = selectedIndex === index;
                const isAbove = item.position === "above";

                return (
                  <div
                    key={item.company + "-" + item.year}
                    className="relative min-w-0"
                  >

                    {/* =================================================
                        ABOVE
                       ================================================= */}

                    {isAbove && (
                      <div className="absolute bottom-1/2 left-1/2 w-[120px] -translate-x-1/2 pb-8 text-center">

                        <div
                          className={
                            "mx-auto mb-1 truncate text-sm font-semibold " +
                            (
                              item.current
                                ? "text-cyan-300"
                                : "text-white"
                            )
                          }
                          title={item.company}
                        >
                          {item.shortCompany || item.company}
                        </div>

                        <div className="text-xs text-slate-500">
                          {item.duration}
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleItem(index)}
                          className={
                            "mx-auto mt-3 flex h-9 w-9 items-center justify-center rounded-full border transition-all " +
                            (
                              item.current
                                ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20"
                                : isSelected
                                ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                                : "border-slate-700 bg-slate-950 text-cyan-400 hover:border-cyan-400/50"
                            )
                          }
                          aria-label={
                            isSelected
                              ? "Hide career details"
                              : "Show career details"
                          }
                        >
                          {isSelected ? (
                            <Minus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </button>

                      </div>
                    )}

                    {/* NODE */}

                    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

                      <div
                        className={
                          "rounded-full border-2 border-slate-950 transition-all " +
                          (
                            item.current
                              ? "h-5 w-5 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                              : isSelected
                              ? "h-5 w-5 bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.6)]"
                              : "h-4 w-4 bg-purple-500"
                          )
                        }
                      />

                    </div>

                    {/* YEAR */}

                    <div
                      className={
                        "absolute left-1/2 -translate-x-1/2 text-xs font-semibold text-cyan-400 " +
                        (
                          isAbove
                            ? "top-[calc(50%+25px)]"
                            : "bottom-[calc(50%+25px)]"
                        )
                      }
                    >
                      {item.year}
                    </div>

                    {/* =================================================
                        BELOW
                       ================================================= */}

                    {!isAbove && (
                      <div className="absolute left-1/2 top-1/2 w-[120px] -translate-x-1/2 pt-8 text-center">

                        <div
                          className="mx-auto mb-1 truncate text-sm font-semibold text-white"
                          title={item.company}
                        >
                          {item.shortCompany || item.company}
                        </div>

                        <div className="text-xs text-slate-500">
                          {item.duration}
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleItem(index)}
                          className={
                            "mx-auto mt-3 flex h-9 w-9 items-center justify-center rounded-full border transition-all " +
                            (
                              isSelected
                                ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                                : "border-slate-700 bg-slate-950 text-cyan-400 hover:border-cyan-400/50"
                            )
                          }
                          aria-label={
                            isSelected
                              ? "Hide career details"
                              : "Show career details"
                          }
                        >
                          {isSelected ? (
                            <Minus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </button>

                      </div>
                    )}

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* =========================================================
            MOBILE / TABLET TIMELINE
           ========================================================= */}

        <div className="lg:hidden">

          <div className="mb-6 flex items-center justify-between text-sm font-semibold text-slate-500">
            <span>2001</span>

            <span className="flex items-center gap-2 text-slate-300">
              Present
              <Flag className="h-4 w-4 text-cyan-400" />
            </span>
          </div>

          <div className="overflow-x-auto pb-6">

            <div className="min-w-[1050px]">

              <div className="relative h-[500px]">

                <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

                <div className="absolute inset-0 grid grid-cols-9">

                  {career.map((item, index) => {

                    const isSelected = selectedIndex === index;
                    const isAbove = item.position === "above";

                    return (
                      <div
                        key={item.company + "-mobile-" + item.year}
                        className="relative"
                      >

                        {isAbove && (
                          <div className="absolute bottom-1/2 left-1/2 w-[115px] -translate-x-1/2 pb-7 text-center">

                            <div className="truncate text-sm font-semibold text-white">
                              {item.shortCompany || item.company}
                            </div>

                            <div className="text-xs text-slate-500">
                              {item.duration}
                            </div>

                            <button
                              type="button"
                              onClick={() => toggleItem(index)}
                              className="mx-auto mt-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-cyan-400"
                            >
                              {isSelected ? (
                                <Minus className="h-4 w-4" />
                              ) : (
                                <Plus className="h-4 w-4" />
                              )}
                            </button>

                          </div>
                        )}

                        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">

                          <div
                            className={
                              "rounded-full border-2 border-slate-950 " +
                              (
                                item.current
                                  ? "h-5 w-5 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.7)]"
                                  : "h-4 w-4 bg-purple-500"
                              )
                            }
                          />

                        </div>

                        <div
                          className={
                            "absolute left-1/2 -translate-x-1/2 text-xs font-semibold text-cyan-400 " +
                            (
                              isAbove
                                ? "top-[calc(50%+24px)]"
                                : "bottom-[calc(50%+24px)]"
                            )
                          }
                        >
                          {item.year}
                        </div>

                        {!isAbove && (
                          <div className="absolute left-1/2 top-1/2 w-[115px] -translate-x-1/2 pt-7 text-center">

                            <div className="truncate text-sm font-semibold text-white">
                              {item.shortCompany || item.company}
                            </div>

                            <div className="text-xs text-slate-500">
                              {item.duration}
                            </div>

                            <button
                              type="button"
                              onClick={() => toggleItem(index)}
                              className="mx-auto mt-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-cyan-400"
                            >
                              {isSelected ? (
                                <Minus className="h-4 w-4" />
                              ) : (
                                <Plus className="h-4 w-4" />
                              )}
                            </button>

                          </div>
                        )}

                      </div>
                    );
                  })}

                </div>

              </div>

            </div>

          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
            <ChevronRight className="h-4 w-4" />
            Swipe horizontally to explore the career journey
          </div>

        </div>

        {/* DETAIL PANEL */}

        {selectedIndex !== null && (
          <CareerDetail item={career[selectedIndex]} />
        )}

        {/* SUMMARY */}

        <div className="mx-auto mt-12 max-w-4xl border-t border-slate-800 pt-8 text-center">

          <p className="text-sm leading-7 text-slate-500">
            A career spanning software engineering, enterprise technology,
            data &amp; AI, architecture, platform transformation and
            enterprise AI leadership.
          </p>

        </div>

      </div>
    </section>
  );
}