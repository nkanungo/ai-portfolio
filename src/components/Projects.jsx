import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ArrowUpRight
} from 'lucide-react';

import { projects, projectCategories } from '../data/projects';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-dark-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">

        <SectionHeading
          title="Selected Projects"
          subtitle="Architecture-led initiatives spanning AI, intelligent platforms, enterprise transformation and digital innovation."
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white shadow-md'
                  : 'bg-white dark:bg-dark-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-accent-cyan/50 hover:text-accent-cyan'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04
                }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-xl bg-white dark:bg-dark-900 border border-gray-200 dark:border-gray-700/50 hover:border-accent-cyan/40 transition-all duration-300"
              >
                <div className="p-5">

                  {/* Top row */}
                  <div className="flex items-start justify-between gap-3 mb-3">

                    <div className="flex-1">

                      {project.featured && (
                        <span className="inline-block mb-2 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                          Featured
                        </span>
                      )}

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-accent-cyan transition-colors">
                        {project.title}
                      </h3>

                    </div>

                    <ArrowUpRight
                      className="w-4 h-4 text-gray-400 group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1"
                    />

                  </div>

                  {/* Customer */}
                  {project.customer && (
                    <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-2">
                      {project.customer}
                    </p>
                  )}

                  {/* Short description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Compact tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">

                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md text-[10px] bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}

                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-[10px] text-gray-400">
                        +{project.tags.length - 3}
                      </span>
                    )}

                  </div>

                  {/* Bottom action */}
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700/50 flex items-center justify-between">

                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="text-xs font-semibold text-accent-cyan hover:text-white transition-colors"
                    >
                      View project details →
                    </button>

                    {/* External links */}
                    {(project.github || project.demo) && (
                      <div className="flex items-center gap-1">

                        {project.github && (
                          <button
                            onClick={(event) => {
                              event.stopPropagation();
                              window.open(
                                project.github,
                                '_blank',
                                'noopener,noreferrer'
                              );
                            }}
                            className="p-1.5 rounded-md text-gray-400 hover:text-accent-cyan hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                            aria-label={`GitHub - ${project.title}`}
                          >
                            <Github className="w-4 h-4" />
                          </button>
                        )}

                        {project.demo && (
                          <button
                            onClick={(event) => {
                              event.stopPropagation();
                              window.open(
                                project.demo,
                                '_blank',
                                'noopener,noreferrer'
                              );
                            }}
                            className="p-1.5 rounded-md text-gray-400 hover:text-accent-cyan hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                            aria-label={`Live demo - ${project.title}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        )}

                      </div>
                    )}

                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* Footer note */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Click any project to explore the architecture, capabilities,
              technologies and business impact.
            </p>
          </motion.div>
        )}

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;