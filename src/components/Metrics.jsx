import React from "react";
import {
  Building2,
  Users,
  Rocket,
  Target,
  Award,
  TrendingUp,
} from "lucide-react";

const metrics = [
  {
    value: "22+",
    label: "Years of Technology Leadership",
    description:
      "AI, cloud, enterprise architecture and digital transformation",
    icon: Building2,
  },
  {
    value: "100+",
    label: "Senior Professionals Led",
    description: "Global delivery teams across 6 countries",
    icon: Users,
  },
  {
    value: "30+",
    label: "AI Products Architected",
    description: "Across 11 global portfolios",
    icon: Rocket,
  },
  {
    value: "1M+",
    label: "Unique Users",
    description: "Across 30+ enterprise products",
    icon: Users,
  },
  {
    value: "42.9%",
    label: "Cost Efficiency Achieved",
    description: "Cost efficiency achieved last year",
    icon: Target,
  },
  {
    value: "40%",
    label: "Delivery Volume Increased",
    description:
      "Increase in delivery volume last year through AI adoption",
    icon: TrendingUp,
  },
  {
    value: "7",
    label: "Innovations Productized",
    description: "Across 6 business domains",
    icon: Rocket,
  },
  {
    value: "11",
    label: "Knowledge Offerings",
    description: "Distinct knowledge offerings for organizations",
    icon: Building2,
  },
  {
    value: "150+",
    label: "Releases Supported",
    description: "Enterprise releases supported last year",
    icon: Target,
  },
  {
    value: "EY GDS",
    label: "Impact Award Winner",
    description: "EY GDS Impact Award",
    icon: Award,
  },
  {
    value: "Top 10",
    label: "EY Distinguished Technologist",
    description:
      "Among the top 10 for the EY Distinguished Technologist Award",
    icon: Award,
  },
];

function MetricCard({ metric }) {
  const Icon = metric.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.045]">

      {/* Subtle hover glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

      <div className="relative">

        {/* Icon */}
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-slate-400 transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300">
          <Icon className="h-5 w-5" strokeWidth={1.7} />
        </div>

        {/* KPI Number */}
        <div className="text-3xl font-extrabold tracking-tight text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.18)] sm:text-4xl">
          {metric.value}
        </div>

        {/* Label */}
        <div className="mt-3 text-sm font-semibold leading-snug text-white">
          {metric.label}
        </div>

        {/* Description */}
        <div className="mt-2 text-sm leading-6 text-slate-400">
          {metric.description}
        </div>

      </div>
    </div>
  );
}

export default function Metrics() {
  return (
    <section
      id="metrics"
      className="relative overflow-hidden bg-[#070b18] py-20 sm:py-24"
    >

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Leadership Impact
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Leadership at{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Scale
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Enterprise-scale impact across AI, architecture, transformation
            and technology leadership.
          </p>

        </div>

        {/* METRICS GRID */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {metrics.map((metric) => (
            <MetricCard
              key={`${metric.value}-${metric.label}`}
              metric={metric}
            />
          ))}

        </div>

        {/* BOTTOM SIGNAL */}
        <div className="mt-10 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
          <span className="h-px w-10 bg-white/10" />

          <span>Enterprise AI • Architecture • Transformation</span>

          <span className="h-px w-10 bg-white/10" />
        </div>

      </div>
    </section>
  );
}