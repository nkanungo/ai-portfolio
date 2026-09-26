import React, { useState } from "react";
import {
  Building2,
  Brain,
  Network,
  Lightbulb,
  ShieldCheck,
  RefreshCw,
  Handshake,
  GraduationCap,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

import { leadershipFocus } from "../data/leadershipFocus";
import LeadershipFocusModal from "./LeadershipFocusModal";

export default function About() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-[#080d1c] py-20 text-white sm:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/[0.06] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Leadership & Transformation
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Leadership &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Transformation Mandate
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            How I lead AI, technology and enterprise transformation across
            strategy, architecture, platforms, people, governance and
            innovation.
          </p>

        </div>

        {/* =====================================================
            LEADERSHIP GRID
        ====================================================== */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {leadershipFocus.map((item, index) => {

            const icons = [
              Building2,
              Brain,
              Network,
              Lightbulb,
              ShieldCheck,
              RefreshCw,
              Handshake,
              GraduationCap,
              HeartHandshake,
              Lightbulb,
            ];

            const Icon = icons[index] || Lightbulb;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                  item.flagship
                    ? "border-cyan-400/40 bg-cyan-400/[0.045] shadow-[0_0_35px_rgba(34,211,238,0.08)]"
                    : "border-white/10 bg-white/[0.025] hover:border-cyan-400/25 hover:bg-white/[0.045]"
                }`}
              >

                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

                <div className="relative">

                  {/* Number */}
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.18em] text-slate-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {item.flagship && (
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-300">
                        Flagship
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-300">
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold leading-snug text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-400 transition-all duration-300 group-hover:gap-3 group-hover:text-cyan-300">
                    Explore Mandate
                    <ChevronRight className="h-4 w-4" />
                  </div>

                </div>
              </button>
            );
          })}

        </div>

      </div>

      {/* =====================================================
          DETAIL MODAL
      ====================================================== */}
      {selectedItem && (
        <LeadershipFocusModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}

    </section>
  );
}