import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../data/mockData';
import { QuizAnswers, AssessmentResult } from '../types';
import { calculateAssessment } from '../utils/calculator';
import {
  ArrowLeft,
  ArrowRight,
  Copy,
  RotateCcw,
  MessageSquare,
  Sparkles,
  Info,
  Check,
  Clock,
  Layers,
  FileCheck,
  AlertCircle
} from 'lucide-react';

interface ConstructorQuizProps {
  preselectedTaskName?: string;
  onClearPreselectedTask?: () => void;
  onDiscussWithExpert: (resultText: string) => void;
}

export const ConstructorQuiz: React.FC<ConstructorQuizProps> = ({
  preselectedTaskName,
  onClearPreselectedTask,
  onDiscussWithExpert
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    preselectedTask: preselectedTaskName || '',
    q1_situation: [],
    q2_frequency: '',
    q3_people: '',
    q4_time: '',
    q5_sources: [],
    q6_output: ''
  });

  const [assessment, setAssessment] = useState<AssessmentResult | null>(null);
  const [copiedText, setCopiedText] = useState(false);

  // Sync preselectedTask if changed externally
  useEffect(() => {
    if (preselectedTaskName) {
      setAnswers((prev) => ({ ...prev, preselectedTask: preselectedTaskName }));
    }
  }, [preselectedTaskName]);

  const currentQuestion = QUIZ_QUESTIONS.find((q) => q.id === currentStep);
  const totalSteps = QUIZ_QUESTIONS.length;

  const handleOptionToggle = (optionId: string) => {
    if (!currentQuestion) return;

    if (currentQuestion.id === 1) {
      const current = answers.q1_situation;
      const updated = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];
      setAnswers({ ...answers, q1_situation: updated });
    } else if (currentQuestion.id === 2) {
      setAnswers({ ...answers, q2_frequency: optionId });
    } else if (currentQuestion.id === 3) {
      setAnswers({ ...answers, q3_people: optionId });
    } else if (currentQuestion.id === 4) {
      setAnswers({ ...answers, q4_time: optionId });
    } else if (currentQuestion.id === 5) {
      const current = answers.q5_sources;
      const updated = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];
      setAnswers({ ...answers, q5_sources: updated });
    } else if (currentQuestion.id === 6) {
      setAnswers({ ...answers, q6_output: optionId });
    }
  };

  const isStepValid = () => {
    if (currentStep === 1) return answers.q1_situation.length > 0;
    if (currentStep === 2) return Boolean(answers.q2_frequency);
    if (currentStep === 3) return Boolean(answers.q3_people);
    if (currentStep === 4) return Boolean(answers.q4_time);
    if (currentStep === 5) return answers.q5_sources.length > 0;
    if (currentStep === 6) return Boolean(answers.q6_output);
    return false;
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Calculate assessment
      const res = calculateAssessment(answers);
      setAssessment(res);
      // Trigger celebration
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore if fails
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setAnswers({
      preselectedTask: '',
      q1_situation: [],
      q2_frequency: '',
      q3_people: '',
      q4_time: '',
      q5_sources: [],
      q6_output: ''
    });
    setAssessment(null);
    if (onClearPreselectedTask) onClearPreselectedTask();
  };

  const getFormattedSummaryText = (res: AssessmentResult) => {
    return `[Экспертный разбор задачи — Конструктор решений]
Ваша ситуация: ${res.situationSummary}
Класс решения: ${res.solutionClass.title} (${res.solutionClass.code})
Масштаб задачи: ${res.taskScale}
Рекомендуемый способ: ${res.solutionWay}
Ориентировочный срок: ${res.solutionClass.typicalTimeframe}`;
  };

  const handleCopySummary = () => {
    if (!assessment) return;
    const text = getFormattedSummaryText(assessment);
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <section id="constructor" className="py-10 lg:py-14 bg-white border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-7">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-violet-600 block mb-1.5">
            Интерактивный блок
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            Разберите свою задачу
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-slate-600">
            6 быстрых вопросов без регистрации для подбора подходящего формата и уровня решения
          </p>
        </div>

        {/* Preselected task notification badge */}
        {answers.preselectedTask && (
          <div className="mb-4 p-3.5 bg-violet-50/80 border border-violet-200/80 rounded-2xl flex items-center justify-between gap-3 text-xs sm:text-sm text-slate-900 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-violet-600 shrink-0" />
              <span>
                Выбрана задача из витрины: <strong className="font-bold text-violet-900">{answers.preselectedTask}</strong>
              </span>
            </div>
            <button
              onClick={() => {
                setAnswers((prev) => ({ ...prev, preselectedTask: '' }));
                if (onClearPreselectedTask) onClearPreselectedTask();
              }}
              className="text-slate-700 hover:text-violet-600 font-bold text-xs sm:text-sm uppercase tracking-wider underline transition-colors cursor-pointer"
            >
              Сбросить
            </button>
          </div>
        )}

        {!assessment ? (
          /* QUIZ QUESTION CARD */
          <div className="p-4 sm:p-6 bg-[#F8FAFC] border border-slate-200/80 rounded-3xl shadow-2xs relative">
            
            {/* Progress Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/70">
              <div className="flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Вопрос {currentStep} из {totalSteps}
                </span>
                {currentQuestion?.isMultiSelect && (
                  <span className="px-2.5 py-0.5 text-xs font-bold text-violet-700 bg-violet-50 uppercase tracking-wider rounded-full border border-violet-200/60">
                    Множественный выбор
                  </span>
                )}
              </div>

              {/* Progress Bar */}
              <div className="w-32 sm:w-36 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-sky-600 transition-all duration-300 rounded-full"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Title */}
            {currentQuestion && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 uppercase tracking-tight">
                    {currentQuestion.title}
                  </h3>
                  {currentQuestion.subtitle && (
                    <p className="text-sm sm:text-base text-slate-600 mt-1 mb-4 font-normal">
                      {currentQuestion.subtitle}
                    </p>
                  )}

                  {/* Options List */}
                  <div className="grid grid-cols-1 gap-2.5 my-4">
                    {currentQuestion.options.map((option) => {
                      let isSelected = false;
                      if (currentStep === 1) isSelected = answers.q1_situation.includes(option.id);
                      else if (currentStep === 2) isSelected = answers.q2_frequency === option.id;
                      else if (currentStep === 3) isSelected = answers.q3_people === option.id;
                      else if (currentStep === 4) isSelected = answers.q4_time === option.id;
                      else if (currentStep === 5) isSelected = answers.q5_sources.includes(option.id);
                      else if (currentStep === 6) isSelected = answers.q6_output === option.id;

                      return (
                        <div
                          key={option.id}
                          onClick={() => handleOptionToggle(option.id)}
                          className={`p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'border-2 border-violet-600 bg-violet-50/60 text-slate-900 shadow-2xs font-bold'
                              : 'border-slate-200 bg-white hover:border-violet-300 font-medium text-slate-800 hover:shadow-2xs'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-${currentQuestion.isMultiSelect ? 'md' : 'full'} border flex items-center justify-center shrink-0 transition-colors ${
                                isSelected
                                  ? 'bg-violet-600 border-violet-600 text-white'
                                  : 'border-slate-300 bg-transparent'
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span className="text-sm sm:text-base">
                              {option.label}
                            </span>
                          </div>

                          {option.tag && (
                            <span className="px-2.5 py-0.5 text-xs font-semibold text-slate-500 bg-slate-100 rounded-full uppercase tracking-wider">
                              {option.tag}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200/70">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl border transition-all cursor-pointer ${
                  currentStep === 1
                    ? 'opacity-30 cursor-not-allowed border-slate-200 text-slate-400'
                    : 'text-slate-700 bg-white hover:bg-slate-50 border-slate-200 shadow-2xs'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Назад</span>
              </button>

              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer ${
                  isStepValid()
                    ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 hover:from-violet-500 hover:to-sky-500 text-white shadow-md hover:shadow-indigo-500/20 active:scale-95'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span>{currentStep === totalSteps ? 'Получить заключение' : 'Далее'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ) : (
          /* SCREEN 7: RESULT CARD */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden p-5 sm:p-7"
          >
            {/* Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider bg-violet-50 text-violet-700 border border-violet-200/80 rounded-full">
                  {assessment.solutionClass.badge}
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-wider text-slate-400 uppercase">
                  {assessment.solutionClass.code}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider text-slate-600">
                <Clock className="w-4 h-4 text-violet-600" />
                <span>Срок: <strong className="text-slate-900 font-bold">{assessment.solutionClass.typicalTimeframe}</strong></span>
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="mt-4 mb-5">
              <span className="text-xs sm:text-sm font-semibold text-violet-600 uppercase tracking-widest block">
                Предварительное экспертное заключение
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 uppercase tracking-tight mt-1">
                {assessment.solutionClass.title}
              </h3>
              <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {assessment.solutionClass.tagline}
              </p>
            </div>

            {/* 4 Semantic Result Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-5">
              
              {/* Block 1: Ваша ситуация */}
              <div className="p-3.5 sm:p-4 bg-[#F8FAFC] rounded-2xl border-l-4 border-l-violet-600 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  <Info className="w-4 h-4 text-violet-600" />
                  <span>1. Ваша ситуация</span>
                </div>
                <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                  {assessment.situationSummary}
                </p>
              </div>

              {/* Block 2: Масштаб задачи */}
              <div className="p-3.5 sm:p-4 bg-[#F8FAFC] rounded-2xl border-l-4 border-l-violet-600 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  <Layers className="w-4 h-4 text-violet-600" />
                  <span>2. Масштаб задачи</span>
                </div>
                <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                  {assessment.taskScale}
                </p>
              </div>

              {/* Block 3: Возможный способ решения */}
              <div className="p-3.5 sm:p-4 bg-violet-50/60 rounded-2xl border-l-4 border-l-violet-600 border border-violet-100">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  <Sparkles className="w-4 h-4 text-violet-600" />
                  <span>3. Способ решения</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-violet-950 leading-relaxed">
                  {assessment.solutionWay}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
                  {assessment.solutionClass.description}
                </p>
              </div>

              {/* Block 4: Что проверить дальше */}
              <div className="p-3.5 sm:p-4 bg-[#F8FAFC] rounded-2xl border-l-4 border-l-violet-600 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  <FileCheck className="w-4 h-4 text-violet-600" />
                  <span>4. Что проверить дальше</span>
                </div>
                <ul className="space-y-1.5">
                  {assessment.checkList.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-normal">
                      <span className="text-violet-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Disclaimer */}
            <div className="p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-2xl flex items-start gap-3 my-4">
              <AlertCircle className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                <strong className="font-semibold text-slate-900 uppercase tracking-wider">Примечание:</strong> Это предварительная оценка. Для выбора конкретного инструмента нужно проверить исходные данные и интеграции.
              </p>
            </div>

            {/* Action Bar */}
            <div className="mt-5 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 transition-colors cursor-pointer"
                >
                  {copiedText ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                  <span>{copiedText ? 'Скопировано!' : 'Скопировать резюме'}</span>
                </button>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Пройти заново</span>
                </button>
              </div>

              <button
                onClick={() => onDiscussWithExpert(getFormattedSummaryText(assessment))}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 hover:from-violet-500 hover:to-sky-500 rounded-xl shadow-md hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Обсудить задачу с экспертом</span>
              </button>
            </div>

          </motion.div>
        )}

      </div>
    </section>
  );
};

