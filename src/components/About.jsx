import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Brain,
  Layers3,
  ShieldCheck,
  Repeat2,
} from 'lucide-react';

import { leadershipFocus } from '../data/leadershipFocus';
import LeadershipFocusModal from './LeadershipFocusModal';

const About = () => {
  const [selectedFocus, setSelectedFocus] = useState(null);
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const amount = direction === 'left' ? -420 : 420;

    sliderRef.current.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden bg-slate-950 py-20 sm:py-24"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="absolute right-[-10%] top-[45%] h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Leadership & Transformation
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Leadership &amp; Transformation Mandate
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              What I lead across enterprise architecture, AI transformation,
              innovation, people, business and technology.
            </p>
          </motion.div>

          {/* Slider Controls */}
          <div className="mt-12 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-400">
                Areas of Leadership
              </p>

              <p className="mt-1 text-xs text-slate-600">
                Select an area to explore the details
              </p>
            </div>

            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollSlider('left')}
                aria-label="Previous leadership areas"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <ChevronLeft size={19} />
              </button>

              <button
                type="button"
                onClick={() => scrollSlider('right')}
                aria-label="Next leadership areas"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>

          {/* Leadership Slider */}
          <div
            ref={sliderRef}
            className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {leadershipFocus.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedFocus(item)}
                  className="group relative w-[290px] shrink-0 snap-start text-left sm:w-[330px]"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.04, 0.25),
                  }}
                >
                  <div
                    className={`relative h-full min-h-[235px] overflow-hidden rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
                      item.id === 'ai-coe'
                        ? 'border-cyan-400/30 bg-gradient-to-br from-cyan-400/[0.10] via-white/[0.04] to-white/[0.02] shadow-lg shadow-cyan-500/5'
                        : 'border-white/10 bg-white/[0.03] hover:border-cyan-400/25 hover:bg-white/[0.05]'
                    }`}
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                          item.id === 'ai-coe'
                            ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300'
                            : 'border-white/10 bg-white/[0.04] text-slate-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300'
                        }`}
                      >
                        <Icon size={21} />
                      </div>

                      <span className="text-xs font-semibold tracking-[0.18em] text-slate-600">
                        {item.number || String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-lg font-semibold leading-7 text-white">
                      {item.title}
                    </h3>

                    {/* Main-page one-line description */}
                    {item.description && (
                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                    )}

                    {/* CTA */}
                    <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-semibold text-cyan-300 opacity-80 transition group-hover:opacity-100 sm:bottom-6 sm:left-6">
                      Explore
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>

                    {/* CoE marker */}
                    {item.id === 'ai-coe' && (
                      <div className="absolute right-5 top-[72px] rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                        Flagship
                      </div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Scroll hint */}
          <div className="mt-1 flex items-center justify-center gap-2 text-xs text-slate-600 sm:hidden">
            <ChevronLeft size={14} />
            <span>Swipe to explore</span>
            <ChevronRight size={14} />
          </div>

          {/* Architecture Philosophy */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-7 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Architecture Philosophy
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Principles Behind My Architecture Decisions
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                Designing technology that is scalable, adaptable, responsible
                and aligned to measurable business outcomes.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <PhilosophyCard
                icon={Layers3}
                title="Scalable by Design"
                description="Architect for growth, reuse and evolving enterprise needs rather than isolated solutions."
              />

              <PhilosophyCard
                icon={Repeat2}
                title="Reuse Before Reinvent"
                description="Create platforms, patterns and capabilities that can be reused across products and teams."
              />

              <PhilosophyCard
                icon={ShieldCheck}
                title="Responsible & Governed"
                description="Balance innovation with security, governance, resilience, responsible AI and appropriate controls."
              />

              <PhilosophyCard
                icon={Brain}
                title="Business-Aligned Technology"
                description="Connect architecture and technology choices to business value, adoption, efficiency and transformation."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Detail Modal */}
      <LeadershipFocusModal
        item={selectedFocus}
        onClose={() => setSelectedFocus(null)}
      />
    </>
  );
};

const PhilosophyCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/15 hover:bg-white/[0.05]"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
        <Icon size={19} />
      </div>

      <h4 className="mt-4 text-base font-semibold text-white">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
};

export default About;