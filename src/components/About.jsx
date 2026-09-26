import { motion } from 'framer-motion';
import {
  Layers,
  Zap,
  Network,
  Rocket,
  Users,
  Settings,
  Brain,
  Target,
  Lightbulb
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const About = () => {
  const leadershipThemes = [
    {
      icon: Brain,
      title: 'AI Architecture & Transformation',
      description:
        'Enterprise AI, GenAI and Agentic AI architecture, reference architectures, multi-agent systems, knowledge platforms, AI governance and transformation strategy.',
      border: 'border-accent-cyan/20',
      iconBg: 'from-accent-cyan to-accent-blue'
    },
    {
      icon: Target,
      title: 'Platform, Product & Business Impact',
      description:
        'Reusable AI and technology platforms, product architecture, enterprise modernization and transformation capabilities that accelerate delivery and create measurable business value.',
      border: 'border-accent-purple/20',
      iconBg: 'from-accent-purple to-accent-pink'
    },
    {
      icon: Lightbulb,
      title: 'AI Research, Innovation & CoE',
      description:
        'Leading AI innovation and research, developing reusable assets and products, enabling knowledge sharing, and accelerating enterprise AI adoption and value realization.',
      border: 'border-accent-cyan/20',
      iconBg: 'from-accent-cyan to-accent-purple'
    }
  ];

  const services = [
    {
      icon: Layers,
      title: 'Enterprise AI Architecture',
      description:
        'Defining enterprise AI reference architectures spanning LLMs, RAG, vector databases, knowledge graphs, AgentOps, and Responsible AI.'
    },
    {
      icon: Network,
      title: 'AI Transformation Strategy',
      description:
        'Shaping enterprise AI, GenAI, and Agentic AI strategies that turn emerging technology into scalable business capabilities.'
    },
    {
      icon: Zap,
      title: 'GenAI & Agentic AI',
      description:
        'Architecting multi-agent platforms, autonomous workflows, enterprise knowledge systems, and retrieval-augmented AI solutions.'
    },
    {
      icon: Rocket,
      title: 'Product & Platform Architecture',
      description:
        'Building reusable enterprise platforms and product architecture capabilities that accelerate delivery and reduce technology duplication.'
    },
    {
      icon: Users,
      title: 'AI Center of Excellence Leadership',
      description:
        'Leading AI innovation, research, product and asset development, knowledge and context sharing, while accelerating AI adoption and value realization.'
    },
    {
      icon: Settings,
      title: 'AI-Assisted Engineering',
      description:
        'Driving AI-assisted software factories, platform engineering, observability, and SRE capabilities to improve engineering velocity and quality.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

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
          title="About Me"
          subtitle="Architecting enterprise AI. Building intelligent platforms. Transforming businesses."
        />

        {/* Executive Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="glass-effect p-8 md:p-10 rounded-2xl border border-accent-cyan/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Executive Profile
              </h3>
            </div>

            <div className="space-y-5">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                I am an{' '}
                <strong className="text-accent-cyan">
                  AI Transformation Leader
                </strong>{' '}
                and{' '}
                <strong className="text-accent-purple">
                  Principal Platform & Product Architect
                </strong>{' '}
                with 22+ years of experience turning emerging technologies into
                scalable enterprise capabilities and measurable business
                outcomes.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                My journey spans{' '}
                <strong>
                  Financial Services, Banking, Insurance, Supply Chain, and
                  Enterprise Technology
                </strong>
                , where I have shaped AI, Data, Cloud, Product, and Platform
                strategies and partnered with senior technology and business
                leaders to drive large-scale transformation initiatives.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                From architecting{' '}
                <strong>
                  enterprise Agentic AI platforms and multi-agent systems
                </strong>{' '}
                to establishing reusable AI capabilities, AI-assisted software
                factories, and enterprise reference architectures, I focus on
                translating innovation into{' '}
                <strong className="text-accent-cyan">
                  secure, governed, production-scale business impact
                </strong>
                .
              </p>
            </div>
          </div>
        </motion.div>

        {/* Leadership Themes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {leadershipThemes.map((theme, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`glass-effect p-6 rounded-2xl border ${theme.border} transition-all duration-300`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${theme.iconBg} flex items-center justify-center mb-5`}
              >
                <theme.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {theme.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {theme.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {/* Core Expertise */}
          <div className="glass-effect p-7 rounded-2xl border border-accent-cyan/20">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
              Core Expertise
            </h3>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-accent-cyan mr-3 mt-1">•</span>
                <span>
                  Enterprise AI, GenAI & Agentic AI Architecture
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-accent-cyan mr-3 mt-1">•</span>
                <span>
                  LLMs, RAG, Vector Databases & Knowledge Graphs
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-accent-cyan mr-3 mt-1">•</span>
                <span>
                  Multi-Agent Systems, Autonomous Workflows & AgentOps
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-accent-cyan mr-3 mt-1">•</span>
                <span>
                  Product, Platform & Enterprise Architecture
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-accent-cyan mr-3 mt-1">•</span>
                <span>
                  AI-Assisted Software Factory & Platform Engineering
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-accent-cyan mr-3 mt-1">•</span>
                <span>
                  Responsible AI, AI Governance & Model Risk
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-accent-cyan mr-3 mt-1">•</span>
                <span>
                  Azure, AWS & Enterprise Cloud Architecture
                </span>
              </li>
            </ul>
          </div>

          {/* Leadership Impact */}
          <div className="glass-effect p-7 rounded-2xl border border-accent-purple/20">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
              Leadership Impact
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              Led global teams of{' '}
              <strong className="text-accent-purple">
                100+ architects, engineers, AI leads, and data scientists
              </strong>
              , enabled{' '}
              <strong className="text-gray-900 dark:text-white">
                30+ AI products
              </strong>
              , and influenced{' '}
              <strong className="text-gray-900 dark:text-white">
                $100M+ transformation and modernization investments
              </strong>{' '}
              across enterprise technology portfolios.
            </p>

            <div className="pt-5 border-t border-gray-200/20 dark:border-gray-700/30">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                AI Center of Excellence
              </h4>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Leading AI innovation and research, development of innovative
                products and reusable assets, knowledge and context sharing,
                and strategic initiatives focused on accelerating AI adoption
                and value realization.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Leadership & Architecture Focus */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Leadership & Architecture Focus
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-effect p-6 rounded-xl border border-gray-200/20 dark:border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {service.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;