import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data/mockData';
import {
  Send,
  Phone,
  Mail,
  Check,
  Copy,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ContactSectionProps {
  initialSummaryText?: string;
  isConsultationModalOpen?: boolean;
  onCloseConsultationModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialSummaryText = '',
  isConsultationModalOpen = false,
  onCloseConsultationModal
}) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSummaryText, setCopiedSummaryText] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyModalSummary = () => {
    if (!initialSummaryText) return;
    navigator.clipboard.writeText(initialSummaryText);
    setCopiedSummaryText(true);
    setTimeout(() => setCopiedSummaryText(false), 2000);
  };

  return (
    <section id="contact" className="py-10 lg:py-14 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-violet-600 block mb-1.5">
            Следующий шаг
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            Хотите разобрать задачу глубже?
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Разберём реальную ситуацию, посмотрим текущий процесс, данные и определим, <strong className="text-slate-900 font-semibold">какое решение имеет смысл делать и с чего начать</strong>.
          </p>
        </div>

        {/* Personal Expert Banner with Avatar */}
        <div className="max-w-5xl mx-auto mb-7 p-4 sm:p-6 bg-gradient-to-r from-violet-50/90 via-purple-50/90 to-sky-50/90 text-slate-900 rounded-3xl shadow-xs relative overflow-hidden border border-violet-200/90">
          <div className="absolute top-0 right-0 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10">
            {/* Avatar Photo Container */}
            <div className="relative shrink-0">
              <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-tr from-violet-500 to-sky-400 shadow-md">
                <img
                  src="./120826.jpg"
                  alt="Эксперт проекта Конструктор решений"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" title="Доступен для обсуждения" />
            </div>

            {/* Profile Info */}
            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-white/80 text-violet-700 rounded-full border border-violet-200/80 shadow-2xs">
                  Прямой контакт
                </span>
                <span className="text-xs sm:text-sm text-slate-600 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Без лишнего IT-пафоса
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl font-normal">
                Автоматизация процессов, ИИ-инструменты и системные решения для бизнеса. Лично проконсультирую и предложу оптимальный путь под ваши задачи.
              </p>
            </div>
          </div>
        </div>

        {/* Primary Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          
          {/* Telegram Card */}
          <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-slate-200/80 hover:border-violet-300 rounded-2xl transition-all duration-300 shadow-xs flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600">
                  <Send className="w-4 h-4" />
                </div>
                
                {/* QR Code for Telegram */}
                <a
                  href={CONTACT_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 p-1 bg-white border border-slate-200 rounded-xl hover:border-violet-400 transition-all group"
                  title="Открыть в Telegram"
                >
                  <img
                    src="/telegram-qr.svg"
                    alt="Telegram QR @prontoKSV"
                    className="w-9 h-9 object-contain"
                  />
                  <div className="text-left pr-1">
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 block">
                      QR-код
                    </span>
                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-tight">
                      Открыть
                    </span>
                  </div>
                </a>
              </div>

              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-violet-600 block mb-0.5">
                Быстрая связь
              </span>
              <a
                href={CONTACT_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                  Написать в Telegram
                </h3>
              </a>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal leading-relaxed">
                Самый удобный способ для отправки примеров файлов, скриншотов и быстрого обсуждения
              </p>
            </div>

            <a
              href={CONTACT_INFO.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 hover:from-violet-500 hover:to-sky-500 rounded-xl transition-all shadow-md hover:shadow-indigo-500/20 cursor-pointer"
            >
              <span>{CONTACT_INFO.telegramHandle}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Phone Card */}
          <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-slate-200/80 hover:border-violet-300 rounded-2xl transition-all duration-300 shadow-xs flex flex-col justify-between group">
            <div>
              <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 mb-3">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-violet-600 block mb-0.5">
                Звонок
              </span>
              <a href={`tel:${CONTACT_INFO.phoneClean}`} className="inline-block">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                  Позвонить
                </h3>
              </a>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal leading-relaxed">
                Прямой номер для оперативных звонков и вопросов
              </p>
            </div>

            <div className="mt-4 flex gap-2">
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="flex-1 inline-flex items-center justify-center px-3.5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 hover:from-violet-500 hover:to-sky-500 rounded-xl transition-all shadow-md hover:shadow-indigo-500/20"
              >
                {CONTACT_INFO.phone}
              </a>
              <button
                onClick={handleCopyPhone}
                className="p-2.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors shrink-0 cursor-pointer"
                title="Скопировать телефон"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Phone className="w-4 h-4 text-slate-600" />}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-slate-200/80 hover:border-violet-300 rounded-2xl transition-all duration-300 shadow-xs flex flex-col justify-between group">
            <div>
              <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 mb-3">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-violet-600 block mb-0.5">
                E-mail
              </span>
              <a href={`mailto:${CONTACT_INFO.email}`} className="inline-block">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                  Написать на почту
                </h3>
              </a>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal leading-relaxed">
                Для официальных запросов, подробных описаний задач и ТЗ
              </p>
            </div>

            <div className="mt-4 flex gap-2">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex-1 inline-flex items-center justify-center px-3.5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 hover:from-violet-500 hover:to-sky-500 rounded-xl transition-all shadow-md hover:shadow-indigo-500/20 truncate"
              >
                {CONTACT_INFO.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors shrink-0 cursor-pointer"
                title="Скопировать email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4 text-slate-600" />}
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Task Summary & Direct Telegram Dialog */}
      {isConsultationModalOpen && onCloseConsultationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-2xl"
          >
            <button
              onClick={onCloseConsultationModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-violet-600 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Готовое резюме задачи</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Обсуждение задачи с экспертом
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Скопируйте подготовленное экспертное заключение и отправьте его в Telegram для прямого обсуждения.
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl max-h-56 overflow-y-auto text-xs sm:text-sm text-slate-800 font-mono whitespace-pre-wrap leading-relaxed shadow-inner">
                {initialSummaryText || 'Резюме задачи сформировано.'}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleCopyModalSummary}
                  className="w-full sm:w-1/2 py-3 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copiedSummaryText ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                  <span>{copiedSummaryText ? 'Скопировано!' : 'Скопировать результат'}</span>
                </button>

                <a
                  href={CONTACT_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-3 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 hover:from-violet-500 hover:to-sky-500 rounded-xl shadow-md hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Написать в Telegram</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

