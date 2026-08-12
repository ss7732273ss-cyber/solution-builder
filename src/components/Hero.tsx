import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
  onExploreTasks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz, onExploreTasks }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F8FAFC] py-10 lg:py-16 border-b border-slate-200/60">
      
      {/* Background Soft Glow Spots */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-violet-200/40 via-purple-100/25 to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-violet-200/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Product Category Tag - Sleek Violet Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-50 via-purple-50 to-sky-50 border border-violet-200/80 text-violet-700 text-xs sm:text-sm font-semibold tracking-wide shadow-xs mb-4"
          >
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span>Сервис первичной оценки рабочих задач</span>
          </motion.div>

          {/* Main Title - Slightly decreased */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] uppercase"
          >
            Конструктор решений
          </motion.h1>

          {/* Slogan - Slightly decreased */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-violet-900 to-indigo-900 max-w-3xl mx-auto leading-snug"
          >
            Здесь про простые задачи и про сложные. Без магии — только решения, которые работают.
          </motion.div>

          {/* Subtitle - Slightly increased */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-3.5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Если у вас есть повторяющаяся рабочая проблема, ручной процесс, неясная точка роста или задача, которую никак не получается нормально решить — здесь можно быстро понять, <strong className="text-slate-900 font-semibold">какой тип решения ей подходит</strong>.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              onClick={onStartQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 hover:from-violet-500 hover:to-sky-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-2xl shadow-md hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all group cursor-pointer"
            >
              <span>Найти решение</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreTasks}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-200/90 bg-white hover:bg-violet-50/50 text-slate-800 hover:text-violet-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-2xl transition-all shadow-xs hover:border-violet-300 cursor-pointer"
            >
              <span>Смотреть витрину задач</span>
            </button>
          </motion.div>

          {/* Additional notes - Increased text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-slate-500"
          >
            <span className="flex items-center gap-1.5 px-3.5 py-1 bg-white/90 rounded-full border border-slate-200/70 shadow-2xs">
              <Clock className="w-4 h-4 text-violet-600" /> 5 минут на разбор
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5 px-3.5 py-1 bg-white/90 rounded-full border border-slate-200/70 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-violet-600" /> Без регистрации
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5 px-3.5 py-1 bg-white/90 rounded-full border border-slate-200/70 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-violet-600" /> Предварительный результат
            </span>
          </motion.div>

          {/* Flow Steps Grid - Tighter padding & increased card text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-3.5 text-left"
          >
            <div className="p-4 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-md hover:border-violet-300/80 transition-all group">
              <div className="w-7 h-7 rounded-xl bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center mb-2 font-extrabold text-xs group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                Ситуация
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-snug">
                Фиксируем рутину, время и участников
              </p>
            </div>

            <div className="p-4 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-md hover:border-violet-300/80 transition-all group">
              <div className="w-7 h-7 rounded-xl bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center mb-2 font-extrabold text-xs group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                Масштаб
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-snug">
                Определяем реальный уровень задачи
              </p>
            </div>

            <div className="p-4 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-md hover:border-violet-300/80 transition-all group">
              <div className="w-7 h-7 rounded-xl bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center mb-2 font-extrabold text-xs group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                Тип решения
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-snug">
                Подбираем точный инструмент без магии
              </p>
            </div>

            <div className="p-4 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-md hover:border-violet-300/80 transition-all group">
              <div className="w-7 h-7 rounded-xl bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center mb-2 font-extrabold text-xs group-hover:scale-110 transition-transform">
                04
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                План шагов
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-snug">
                Готовый список того, что проверить дальше
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

