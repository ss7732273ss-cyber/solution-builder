import React from 'react';
import { motion } from 'motion/react';
import { PROBLEM_CARDS } from '../data/mockData';
import { FileSpreadsheet, Unlink, HelpCircle, AlertTriangle, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onSelectProblem: (problemTitle: string) => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onSelectProblem }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-violet-600" />;
      case 'Unlink': return <Unlink className="w-5 h-5 text-violet-600" />;
      case 'HelpCircle': return <HelpCircle className="w-5 h-5 text-violet-600" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-violet-600" />;
      default: return <FileSpreadsheet className="w-5 h-5 text-violet-600" />;
    }
  };

  return (
    <section id="problems" className="py-10 lg:py-14 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-violet-600 mb-1.5 block">
            Узнайте свою ситуацию
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            В чём проблема?
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-slate-600">
            Узнаете ли вы происходящее в вашей компании или отделе?
          </p>
        </div>

        {/* 4 Cards Grid - Soft Ambient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {PROBLEM_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              onClick={() => onSelectProblem(card.title)}
              className="group p-4 sm:p-5 bg-[#F8FAFC]/80 hover:bg-white border border-slate-200/80 hover:border-violet-300 rounded-2xl transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-violet-500/5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-violet-50 rounded-xl border border-violet-100">
                    {getIcon(card.iconName)}
                  </div>
                  <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-violet-50 text-violet-700 border border-violet-200/80">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-violet-600 transition-colors">
                <span>Разобрать эту проблему</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

