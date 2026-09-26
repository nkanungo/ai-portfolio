import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Layers,
  Code,
  Database,
  Cloud,
  FileText,
  Radio,
  Crown,
  Compass,
  Wrench,
  ChevronDown
} from 'lucide-react';

import { techStack, techCategories } from '../data/techstack';
import SectionHeading from './SectionHeading';

const iconMap = {
  brain: Brain,
  layers: Layers,
  code: Code,
  database: Database,
  cloud: Cloud,
  fileText: FileText,
  radio: Radio
};

const levelConfig = {
  'Strategic Leadership': {
    icon: Crown,
    label: 'Strategic Leadership',
    badgeClass:
      'text-purple-700 dark:text-purple-300 bg-purple-500/10 border-purple-500/30',
    dotClass: 'bg-purple-500'
  },

  'Architecture & Design': {
    icon: Compass,
    label: 'Architecture & Design',
    badgeClass:
      'text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border-cyan-500/30',
    dotClass: 'bg-cyan-500'
  },

  'Hands-on Expertise': {
    icon: Wrench,
    label: 'Hands-on Expertise',
    badgeClass:
      'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
    dotClass: 'bg-emerald-500'
  }
};

const CapabilityBadge = ({ level }) => {
  const config = levelConfig[level];

  if (!config) return null;

  const LevelIcon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[10px] font-semibold ${config.badgeClass}`}
    >
      <LevelIcon className="w-3 h-3" />
      {config.label}
    </span>
  );
};

const TechStack = () => {
  // First section is expanded by default.
  const [expandedCategories, setExpandedCategories] = useState(
    techCategories.length > 0 ? [techCategories[0]] : []
  );

  const toggleCategory = (category) => {
    setExpandedCategories((current) => {
      if (current.includes(category)) {
        return current.filter((item) => item !== category);
      }

      return [...current, category];
    });
  };

  return (
    <section
      id="technology"
      className="section-padding bg-white dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">

        <SectionHeading
          title="Technical Skills"
          subtitle="Strategic technology leadership, architecture depth and hands-on expertise across AI, data, cloud and enterprise platforms."
        />

        {/* Capability legend */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {Object.entries(levelConfig).map(([level, config]) => {
            const LevelIcon = config.icon;

            return (
              <div
                key={level}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${config.badgeClass}`}
              >
                <LevelIcon className="w-3.5 h-3.5" />

                <span className="text-xs font-semibold">
                  {config.label}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Technology categories */}
        <div className="space-y-5">

          {techCategories.map((category, categoryIndex) => {
            const categoryData = techStack[category];
            const Icon = iconMap[categoryData.icon];

            const isExpanded =
              expandedCategories.includes(category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.05
                }}
                className={`rounded-2xl bg-gray-50 dark:bg-dark-800 border p-5 md:p-6 transition-all duration-300 ${
                  isExpanded
                    ? 'border-accent-cyan/40'
                    : 'border-gray-200 dark:border-gray-700/50 hover:border-accent-cyan/40'
                }`}
              >

                {/* Category header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-3">

                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryData.color} flex items-center justify-center flex-shrink-0`}
                    >
                      {Icon && (
                        <Icon className="w-5 h-5 text-white" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                        {category}
                      </h3>

                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {categoryData.technologies.length} capabilities
                      </p>
                    </div>

                  </div>

                  {/* Expand / Collapse control */}
                  <div className="flex items-center gap-2 flex-shrink-0">

                    <span className="hidden sm:block text-xs font-medium text-gray-500 dark:text-gray-400">
                      {isExpanded ? 'Collapse' : 'Expand'}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                        isExpanded
                          ? 'border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan'
                          : 'border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                  </div>

                </button>

                {/* Technologies */}
                {isExpanded && (
                  <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">

                    {categoryData.technologies.map((tech, techIndex) => {
                      const level = levelConfig[tech.level];

                      return (
                        <motion.div
                          key={tech.name}
                          initial={{
                            opacity: 0,
                            scale: 0.96
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1
                          }}
                          transition={{
                            duration: 0.25,
                            delay: techIndex * 0.015
                          }}
                          className="group"
                        >
                          <div className="h-full px-3 py-3 rounded-xl bg-white dark:bg-dark-900 border border-gray-200 dark:border-gray-700 hover:border-accent-cyan/50 transition-all duration-200">

                            <div className="flex items-start gap-2.5 mb-2">

                              {level && (
                                <span
                                  className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 ${level.dotClass}`}
                                />
                              )}

                              <span className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">
                                {tech.name}
                              </span>

                            </div>

                            <CapabilityBadge level={tech.level} />

                          </div>
                        </motion.div>
                      );
                    })}

                  </div>
                )}

              </motion.div>
            );
          })}

        </div>

        {/* Architecture positioning */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2
          }}
          className="mt-7 max-w-4xl mx-auto text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Technology is applied through an architecture-first approach —
            connecting{' '}
            <span className="font-medium text-gray-800 dark:text-gray-200">
              strategy, platforms, engineering and innovation
            </span>{' '}
            to create scalable, secure and measurable enterprise outcomes.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;