import React from "react";
import { motion } from "framer-motion";
import { Users, Rocket, Building2, Target } from "lucide-react";
import { metrics } from "../data/metrics";

const iconMap = {
  users: Users,
  rocket: Rocket,
  building: Building2,
  target: Target,
};

const Metrics = () => {
  return (
    <section
      id="metrics"
      className="relative py-14 md:py-16 bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-2">
            Impact & Leadership
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Leadership at Scale
          </h2>

          <p className="mt-2 max-w-3xl mx-auto text-sm text-slate-400">
            Measurable impact across AI transformation, enterprise architecture,
            product innovation, global delivery and technology leadership.
          </p>
        </motion.div>

        {/* Impact Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon] || Target;

            return (
              <motion.div
                key={`${metric.label}-${index}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.03, 0.25),
                }}
                className="group min-h-[145px] rounded-xl border border-slate-800 bg-slate-900/70 p-4 hover:border-cyan-500/30 hover:bg-slate-900 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-2xl md:text-3xl font-bold text-white leading-none">
                      {metric.value}
                    </div>

                    <h3 className="mt-2 text-xs md:text-sm font-semibold text-slate-200 leading-snug">
                      {metric.label}
                    </h3>
                  </div>

                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Icon
                      size={14}
                      className="text-cyan-400"
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                <p className="mt-2 text-[11px] md:text-xs leading-relaxed text-slate-500">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Leadership Themes */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-7 text-center"
        >
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <span className="text-slate-300">AI Transformation</span>
            <span>•</span>
            <span className="text-slate-300">
              Enterprise Architecture
            </span>
            <span>•</span>
            <span className="text-slate-300">AI Platforms</span>
            <span>•</span>
            <span className="text-slate-300">Product Strategy</span>
            <span>•</span>
            <span className="text-slate-300">
              Global Technology Leadership
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Metrics;