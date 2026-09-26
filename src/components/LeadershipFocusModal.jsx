import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const LeadershipFocusModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/95 backdrop-blur px-5 py-4 md:px-7">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                {item.icon && (
                  <div className="hidden sm:flex w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 items-center justify-center">
                    <item.icon
                      size={20}
                      className="text-cyan-400"
                    />
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                      {item.title}
                    </h2>

                    {item.flagship && (
                      <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        Flagship
                      </span>
                    )}
                  </div>

                  {item.summary && (
                    <p className="mt-1.5 text-sm text-slate-400 max-w-3xl leading-relaxed">
                      {item.summary}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                className="flex-shrink-0 w-9 h-9 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-100px)] px-5 py-6 md:px-7 md:py-7">
            <div className="space-y-5">

              {/* What I Do */}
              {item.whatIDo && (
                <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Target
                      size={18}
                      className="text-cyan-400"
                    />
                    <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-cyan-400">
                      What I Do
                    </h3>
                  </div>

                  <p className="text-sm md:text-[15px] text-slate-300 leading-7">
                    {item.whatIDo}
                  </p>
                </section>
              )}

              {/* How I Do It */}
              {item.howIDoIt && (
                <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb
                      size={18}
                      className="text-purple-400"
                    />
                    <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-purple-400">
                      How I Do It
                    </h3>
                  </div>

                  <p className="text-sm md:text-[15px] text-slate-300 leading-7">
                    {item.howIDoIt}
                  </p>
                </section>
              )}

              {/* What Impact It Brings */}
              {item.impact && (
                <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp
                      size={18}
                      className="text-emerald-400"
                    />
                    <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-emerald-400">
                      What Impact It Brings
                    </h3>
                  </div>

                  <p className="text-sm md:text-[15px] text-slate-300 leading-7">
                    {item.impact}
                  </p>
                </section>
              )}

              {/* Selected Achievements */}
              {Array.isArray(item.achievements) &&
                item.achievements.length > 0 && (
                  <section className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2
                        size={18}
                        className="text-cyan-400"
                      />
                      <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-cyan-400">
                        Selected Achievements
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {item.achievements.map(
                        (achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />

                            <span className="text-sm md:text-[15px] text-slate-300 leading-6">
                              {achievement}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </section>
                )}

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LeadershipFocusModal;