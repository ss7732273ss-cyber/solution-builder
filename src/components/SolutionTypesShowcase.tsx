import React from 'react';
import { motion } from 'motion/react';
import { SOLUTION_TYPES } from '../data/mockData';
import {
  Zap,
  Sliders,
  LayoutDashboard,
  Bot,
  Link2,
  Server,
  Compass,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface SolutionTypesShowcaseProps {
  onStartQuiz: () => void;
}

export const SolutionTypesShowcase: React.FC<SolutionTypesShowcaseProps> = ({ onStartQuiz }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-4 h-4 text-violet-600" />;
      case 'Sliders': return <Sliders className="w-4 h-4 text-violet-600" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-4 h-4 text-violet-600" />;
      case 'Bot': return <Bot className="w-4 h-4 text-violet-600" />;
      case 'Link2': return <Link2 className="w-4 h-4 text-violet-600" />;
      case 'Server': return <Server className="w-4 h-4 text-violet-600" />;
      case 'Compass': return <Compass className="w-4 h-4 text-violet-600" />;
      default: return <Zap className="w-4 h-4 text-violet-600" />;
    }
  };

  return (
    <section id="solutions" className="py-10 lg:py-14 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-violet-600 block mb-1.5">
            Витрина способов решений
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            Решение не обязательно должно быть большим
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-slate-600">
            У разных задач — разный масштаб решения. Иногда достаточно одной настройки или скрипта. Иногда нужен инструмент, процесс или проект.
          </p>
        </div>

        {/* 7 Solution Type Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {SOLUTION_TYPES.map((type, idx) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="p-4 sm:p-5 bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-violet-500/5 hover:border-violet-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-xs font-bold text-violet-700 bg-violet-50 border border-violet-100 rounded-lg">
                      Уровень {type.level}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-full bg-violet-50 text-violet-700 border border-violet-200/80">
                    {type.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {type.title}
                </h3>

                <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                  {type.subtitle}
                </p>

                <div className="mt-3 p-3 bg-[#F8FAFC] rounded-xl border border-slate-100">
                  <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-0.5">
                    Примеры:
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {type.examples}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100">
                <p className="text-xs sm:text-sm text-slate-600">
                  <strong className="font-semibold text-slate-900 uppercase tracking-wider">Подходит для:</strong> {type.suitableFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Violet/Sky Glass Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 max-w-4xl mx-auto p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-violet-50/90 via-purple-50/90 to-sky-50/90 border border-violet-200/90 text-slate-900 shadow-xs relative overflow-hidden"
        >
          {/* Accent glow in banner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-5 relative z-10">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 bg-white/90 backdrop-blur-md rounded-2xl border border-violet-100 text-violet-600 shrink-0 shadow-2xs">
                <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-violet-700 bg-white/80 px-2.5 py-0.5 rounded-full border border-violet-200/80">
                  Принцип работы
                </span>
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 uppercase tracking-tight mt-1.5">
                  Не предлагаем ИИ ради ИИ.
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed font-normal">
                  Сначала ищем самое простое и надёжное решение, которое действительно подходит вашей задаче.
                </p>
              </div>
            </div>

            <button
              onClick={onStartQuiz}
              className="shrink-0 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 hover:from-violet-500 hover:to-sky-500 active:scale-95 transition-all rounded-xl shadow-md hover:shadow-indigo-500/20 flex items-center gap-2 group cursor-pointer"
            >
              <span>Подобрать масштаб</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

