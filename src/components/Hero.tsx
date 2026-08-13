import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
  onExploreTasks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz, onExploreTasks }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F8FAFC] py-8 sm:py-10 lg:py-12 border-b border-slate-200/60">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-gradient-to-b from-violet-100/50 via-purple-50/30 to-transparent pointer-events-none blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase"
        >
          Конструктор решений
        </motion.h1>

        {/* Lead sentence */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-3.5 text-base sm:text-lg lg:text-xl text-slate-800 leading-relaxed font-normal max-w-3xl mx-auto"
        >
          Здесь можно быстро разобрать рабочую или бизнес-задачу и понять, <strong className="text-slate-900 font-bold">какое решение ей действительно нужно</strong>.
        </motion.p>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto"
        >
          От простой настройки, автоматизации одной операции или перестройки процесса — до аналитического инструмента, AI-решения или полноценной системы.
        </motion.p>

        {/* Tagline highlight */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-3 text-sm sm:text-base font-bold text-violet-900 max-w-2xl mx-auto leading-normal"
        >
          Здесь про простые задачи и про сложные. Без магии — только решения, которые работают.
        </motion.p>

        {/* Buttons Group */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={onStartQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 hover:from-violet-500 hover:to-sky-500 rounded-xl shadow-md hover:shadow-indigo-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
          >
            <span>Найти решение</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onExploreTasks}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-2xs hover:border-violet-300 transition-all cursor-pointer"
          >
            <span>Смотреть витрину задач</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};


