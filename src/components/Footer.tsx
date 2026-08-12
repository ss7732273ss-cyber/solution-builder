import React from 'react';
import { LogoGraphic } from './LogoGraphic';
import { CONTACT_INFO } from '../data/mockData';

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToSection
}) => {
  return (
    <footer className="bg-[#F8FAFC] text-slate-600 py-8 lg:py-10 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-7 border-b border-slate-200/80">
          
          {/* Brand info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-1 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <LogoGraphic size="md" />
              </div>
              <span className="text-base font-extrabold text-slate-900 uppercase tracking-wider">
                Конструктор решений
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed font-normal">
              Здесь про простые задачи и про сложные. Без магии — только решения, которые работают. Первичный сервис оценки масштаба и подбора формата автоматизации.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-900 mb-3">
              Разделы
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <button onClick={() => onScrollToSection('problems')} className="hover:text-violet-600 transition-colors cursor-pointer">
                  В чём проблема
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('audience')} className="hover:text-violet-600 transition-colors cursor-pointer">
                  Для кого
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('tasks')} className="hover:text-violet-600 transition-colors cursor-pointer">
                  Витрина задач
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('solutions')} className="hover:text-violet-600 transition-colors cursor-pointer">
                  Витрина способов решений
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('constructor')} className="hover:text-violet-600 transition-colors cursor-pointer">
                  Интерактивный Конструктор
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-900 mb-3">
              Контакты
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <a href={CONTACT_INFO.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">
                  Telegram: {CONTACT_INFO.telegramHandle}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phoneClean}`} className="hover:text-violet-600 transition-colors">
                  Тел: {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-violet-600 transition-colors">
                  Email: {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-500 font-normal">
          <p>© {new Date().getFullYear()} Конструктор решений. Все права защищены. v1.1</p>
          <p className="flex items-center gap-1">
            <span>Продукт подбора практических решений без лишней сложности</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

