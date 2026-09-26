import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowUpRight, Target, Workflow, TrendingUp, Award } from 'lucide-react';

const LeadershipFocusModal = ({ item, onClose }) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header */}
            <div className="relative border-b border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-7 sm:px-8">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="pr-12">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    {item.icon && <item.icon size={22} />}
                  </div>

                  <span className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
                    {item.number}
                  </span>
                </div>

                <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {item.title}
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400 sm:text-base">
                  {item.shortDescription}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
              <div className="grid gap-5 lg:grid-cols-2">
                {/* What I Do */}
                <DetailCard
                  icon={Target}
                  title="What I Do"
                  content={item.whatIDo}
                />

                {/* How I Do It */}
                <DetailCard
                  icon={Workflow}
                  title="How I Do It"
                  content={item.howIDoIt}
                />

                {/* Impact */}
                <DetailCard
                  icon={TrendingUp}
                  title="What Impact It Brings"
                  content={item.impact}
                  className="lg:col-span-2"
                />

                {/* Achievements */}
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:col-span-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                      <Award size={20} />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-white">
                        Selected Achievements
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Selected examples of leadership impact
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {item.achievements?.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="group flex gap-3 rounded-xl border border-white/5 bg-slate-900/60 p-4"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.18 + index * 0.04 }}
                      >
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                          <ArrowUpRight size={13} />
                        </div>

                        <p className="text-sm leading-6 text-slate-300">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DetailCard = ({ icon: Icon, title, content, className = '' }) => {
  return (
    <motion.div
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
          <Icon size={20} />
        </div>

        <h3 className="text-base font-semibold text-white">
          {title}
        </h3>
      </div>

      <p className="text-sm leading-7 text-slate-300">
        {content}
      </p>
    </motion.div>
  );
};

export default LeadershipFocusModal;