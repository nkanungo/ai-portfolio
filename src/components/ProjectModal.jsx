import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [showFullStory, setShowFullStory] = useState(false);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        className="glass-effect max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-700/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 glass-effect border-b border-gray-700/30 p-6 flex items-start justify-between">
          <div className="pr-4">
            <h2 className="text-3xl font-bold gradient-text mb-2">
              {project.title}
            </h2>

            {project.customer && (
              <div className="mb-3">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Customer:{' '}
                </span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {project.customer}
                </span>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors flex-shrink-0"
            aria-label="Close project details"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">

          {!showFullStory ? (
            /* =========================================================
               PROJECT OVERVIEW
               ========================================================= */
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Overview */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Overview
                  </h3>

                  <span className="text-xs uppercase tracking-wider text-accent-cyan font-semibold">
                    Project Overview
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Business Challenge */}
              <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-900/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Business Challenge
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-900/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-500" />
                  Solution
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Technology Used - KEPT ON MAIN PAGE */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Technology Used
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 rounded-lg bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 text-accent-cyan border border-accent-cyan/30 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Key Outcomes
                </h3>

                <div className="space-y-2">
                  {project.outcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />

                      <span className="text-gray-600 dark:text-gray-400">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Full Story */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700/50">
                <button
                  onClick={() => setShowFullStory(true)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  View Full Story
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              {(project.github || project.demo) && (
                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ) : (
            /* =========================================================
               FULL PROJECT STORY
               ========================================================= */
            <motion.div
              key="full-story"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Back to Overview */}
              <button
                onClick={() => setShowFullStory(false)}
                className="flex items-center gap-2 text-sm font-semibold text-accent-cyan hover:text-accent-purple transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Project Overview
              </button>

              {/* Full Story Heading */}
              <div className="pb-2">
                <span className="text-xs uppercase tracking-wider text-accent-cyan font-semibold">
                  Full Project Story
                </span>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {project.title}
                </h3>
              </div>

              {/* Detailed Overview */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Project Context & Architecture
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Business Challenge */}
              <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-900/30">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Business Challenge
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Detailed Solution */}
              <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-900/30">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-500" />
                  Detailed Solution
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Technology Architecture */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Technology & Architecture
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 text-accent-cyan border border-accent-cyan/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Outcomes & Business Impact
                </h3>

                <div className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />

                      <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.github || project.demo) && (
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              )}

              {/* Back Button */}
              <div className="pt-2">
                <button
                  onClick={() => setShowFullStory(false)}
                  className="flex items-center gap-2 text-sm font-semibold text-accent-cyan hover:text-accent-purple transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Project Overview
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;