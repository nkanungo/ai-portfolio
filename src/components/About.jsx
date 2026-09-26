import { motion } from 'framer-motion';
import {
  Brain,
  Layers,
  Network,
  Users,
  ArrowUpRight
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const About = () => {
  const focusAreas = [
    {
      icon: Brain,
      title: 'AI Transformation',
      description:
        'Shaping enterprise AI, GenAI and Agentic AI strategies that move from experimentation to governed, production-scale business value.',
      capabilities: [
        'AI & GenAI Strategy',
        'Agentic AI',
        'AI Reference Architecture',
        'Responsible AI'
      ]
    },
    {
      icon: Layers,
      title: 'Platform & Product Architecture',
      description:
        'Designing reusable platforms, product architectures and enterprise capabilities that accelerate delivery and reduce technology duplication.',
      capabilities: [
        'Platform Architecture',
        'Product Architecture',
        'Cloud & Data Architecture',
        'Enterprise Architecture'
      ]
    },
    {
      icon: Network,
      title: 'AI Research & Innovation',
      description:
        'Exploring emerging AI technologies, developing domain-specific solutions and translating research into practical enterprise capabilities.',
      capabilities: [
        'AI Research & Exploration',
        'LLMs & SLMs',
        'Multi-Agent Systems',
        'AI Prototyping & Experimentation'
      ]
    },
    {
      icon: Users,
      title: 'Technology Leadership & AI CoE',
      description:
        'Building AI Centre of Excellence capabilities, leading architects and engineering teams, and scaling reusable assets, knowledge and adoption across the enterprise.',
      capabilities: [
        'AI CoE Leadership',
        'Architecture Governance',
        'Reusable AI Assets',
        'Talent & Capability Building'
      ]
    }
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gray-50 dark:bg-dark-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">

        <SectionHeading
          title="Leadership & Architecture"
          subtitle="Where AI strategy, enterprise architecture, innovation and technology leadership come together."
        />

        {/* Executive positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I operate at the intersection of{' '}
            <strong className="text-gray-900 dark:text-white">
              business strategy, AI innovation and enterprise technology
              architecture
            </strong>
            , helping organizations translate emerging technologies into
            scalable platforms, products and transformation capabilities.
          </p>
        </motion.div>

        {/* Leadership focus */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08
                }}
                className="group glass-effect rounded-2xl p-6 border border-gray-200 dark:border-gray-700/50 hover:border-accent-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-cyan/10">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1">

                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {area.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {area.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {area.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="px-2.5 py-1 rounded-full bg-accent-cyan/5 dark:bg-accent-cyan/10 border border-accent-cyan/15 text-xs text-gray-600 dark:text-gray-300"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Architecture philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10"
        >
          <div className="rounded-2xl bg-gradient-to-r from-accent-cyan/10 via-accent-purple/10 to-accent-cyan/5 border border-accent-cyan/15 p-6 md:p-7">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-accent-cyan mb-2">
                  Architecture Philosophy
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  From Innovation to Enterprise Scale
                </h3>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
                  Connect research, architecture, engineering and business
                  outcomes through reusable platforms, strong governance,
                  measurable value and continuous innovation.
                </p>
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                onClick={() => {
                  const element = document.getElementById('stories');

                  if (element) {
                    const offset = 80;
                    const elementPosition =
                      element.getBoundingClientRect().top;

                    window.scrollTo({
                      top:
                        elementPosition +
                        window.pageYOffset -
                        offset,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="flex items-center gap-2 text-sm font-medium text-accent-cyan hover:text-white transition-colors whitespace-nowrap"
              >
                See transformation stories
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;