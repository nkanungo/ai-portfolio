import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  Briefcase,
  ArrowUpRight
} from 'lucide-react';

import { timeline } from '../data/timeline';
import SectionHeading from './SectionHeading';

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="section-padding bg-gray-50 dark:bg-dark-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">

        <SectionHeading
          title="Technology Leadership Journey"
          subtitle="22+ years of progression across engineering, AI, enterprise architecture, platform transformation and technology leadership."
        />

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Timeline line */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-cyan md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-10">

            {timeline.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={experience.id}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05
                  }}
                  className="relative"
                >

                  {/* Timeline marker */}
                  <div className="absolute left-3 md:left-1/2 top-5 -translate-x-1/2 z-20">

                    <div
                      className={`w-4 h-4 rounded-full border-[3px] border-white dark:border-dark-800 shadow ${
                        experience.type === 'current'
                          ? 'bg-accent-cyan'
                          : 'bg-accent-purple'
                      }`}
                    />

                    {experience.type === 'current' && (
                      <motion.div
                        animate={{
                          scale: [1, 1.7, 1],
                          opacity: [0.6, 0, 0.6]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className="absolute inset-0 rounded-full bg-accent-cyan -z-10"
                      />
                    )}

                  </div>

                  {/* Experience card */}
                  <div
                    className={`ml-8 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isLeft
                        ? 'md:mr-auto'
                        : 'md:ml-auto'
                    }`}
                  >

                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-2xl bg-white dark:bg-dark-900 border border-gray-200 dark:border-gray-700/50 p-5 md:p-6 hover:border-accent-cyan/40 transition-all duration-300"
                    >

                      {/* Period + current */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">

                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-semibold text-accent-cyan">
                          <Calendar className="w-3.5 h-3.5" />
                          {experience.period}
                        </span>

                        {experience.type === 'current' && (
                          <span className="px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
                            Current
                          </span>
                        )}

                      </div>

                      {/* Role */}
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
                        {experience.role}
                      </h3>

                      {/* Organisation */}
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-4 h-4 text-accent-cyan flex-shrink-0" />

                        <span className="text-base font-semibold text-accent-cyan">
                          {experience.company}
                        </span>
                      </div>

                      {/* Location */}
                      {experience.location && (
                        <div className="flex items-center gap-1.5 mb-4 text-xs text-gray-500 dark:text-gray-400">
                          <MapPin className="w-3.5 h-3.5 text-accent-purple" />
                          {experience.location}
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {experience.description}
                      </p>

                      {/* Key contributions */}
                      {experience.highlights &&
                        experience.highlights.length > 0 && (
                          <div className="mb-4">

                            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                              Leadership & Contributions
                            </h4>

                            <ul className="space-y-1.5">
                              {experience.highlights.map(
                                (highlight, highlightIndex) => (
                                  <li
                                    key={highlightIndex}
                                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan mt-1 flex-shrink-0" />

                                    <span className="leading-relaxed">
                                      {highlight}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>

                          </div>
                        )}

                      {/* Achievements */}
                      {experience.achievements &&
                        experience.achievements.length > 0 && (
                          <div className="mb-4 p-3.5 rounded-xl bg-gradient-to-br from-accent-purple/5 to-accent-cyan/5 border border-accent-purple/15">

                            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                              <Trophy className="w-3.5 h-3.5 text-accent-purple" />
                              Key Impact & Achievements
                            </h4>

                            <ul className="space-y-1.5">
                              {experience.achievements.map(
                                (achievement, achievementIndex) => (
                                  <li
                                    key={achievementIndex}
                                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                                  >
                                    <span className="text-accent-purple mt-0.5">
                                      •
                                    </span>

                                    <span className="leading-relaxed">
                                      {achievement}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>

                          </div>
                        )}

                      {/* Technologies */}
                      {experience.technologies &&
                        experience.technologies.length > 0 && (
                          <div className="pt-3 border-t border-gray-200 dark:border-gray-700/50">

                            <div className="flex flex-wrap gap-1.5">
                              {experience.technologies.map(
                                (technology, technologyIndex) => (
                                  <span
                                    key={technologyIndex}
                                    className="px-2 py-1 rounded-md text-[10px] font-medium bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                                  >
                                    {technology}
                                  </span>
                                )
                              )}
                            </div>

                          </div>
                        )}

                    </motion.div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Journey summary */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="mt-10 max-w-4xl mx-auto text-center"
        >
          <div className="rounded-2xl border border-accent-cyan/15 bg-gradient-to-r from-accent-cyan/5 to-accent-purple/5 px-6 py-5">

            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              <span className="font-semibold gradient-text">
                Engineering → Analytics & AI → Enterprise Architecture →
                Product & Platform Transformation → Enterprise AI Leadership
              </span>
              {' '}— a technology leadership journey focused on turning
              emerging innovation into scalable enterprise capabilities and
              measurable business value.
            </p>

          </div>
        </motion.div>

        {/* Continue indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-center"
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');

              if (element) {
                const offset = 80;
                const position =
                  element.getBoundingClientRect().top +
                  window.pageYOffset -
                  offset;

                window.scrollTo({
                  top: position,
                  behavior: 'smooth'
                });
              }
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-cyan hover:text-white transition-colors"
          >
            Continue to connect
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Timeline;