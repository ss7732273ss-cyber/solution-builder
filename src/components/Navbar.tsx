import React, { useState } from 'react';
import { LogoGraphic } from './LogoGraphic';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollToSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur-md border-b border-slate-200/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Title */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => handleNavClick('hero')}
        >
          <div className="p-1 rounded-xl bg-violet-50/80 group-hover:scale-105 transition-transform">
            <LogoGraphic size="md" />
          </div>
          <span className="font-extrabold text-base sm:text-lg tracking-tight uppercase text-slate-900 group-hover:text-violet-600 transition-colors">
            Конструктор решений
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-semibold tracking-wide text-slate-600">
          <button
            onClick={() => handleNavClick('problems')}
            className="hover:text-violet-600 transition-colors py-1 cursor-pointer"
          >
            В чём проблема
          </button>
          <button
            onClick={() => handleNavClick('audience')}
            className="hover:text-violet-600 transition-colors py-1 cursor-pointer"
          >
            Для кого
          </button>
          <button
            onClick={() => handleNavClick('tasks')}
            className="hover:text-violet-600 transition-colors py-1 cursor-pointer"
          >
            Витрина задач
          </button>
          <button
            onClick={() => handleNavClick('solutions')}
            className="hover:text-violet-600 transition-colors py-1 cursor-pointer"
          >
            Масштаб решений
          </button>
          <button
            onClick={() => handleNavClick('constructor')}
            className="text-slate-900 font-bold hover:text-violet-600 transition-colors py-1 flex items-center gap-1.5 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
            Конструктор
          </button>
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('constructor')}
            className="px-4 py-2 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 hover:from-violet-500 hover:to-sky-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-xs hover:shadow-md hover:shadow-indigo-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>Найти решение</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-2 pb-4 space-y-1.5">
          <button
            onClick={() => handleNavClick('problems')}
            className="block w-full text-left py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            В чём проблема
          </button>
          <button
            onClick={() => handleNavClick('audience')}
            className="block w-full text-left py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            Для кого
          </button>
          <button
            onClick={() => handleNavClick('tasks')}
            className="block w-full text-left py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            Витрина задач
          </button>
          <button
            onClick={() => handleNavClick('solutions')}
            className="block w-full text-left py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            Масштаб решений
          </button>
          <button
            onClick={() => handleNavClick('constructor')}
            className="block w-full text-left py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-sm cursor-pointer"
          >
            Конструктор (Разбор задачи)
          </button>
        </div>
      )}
    </header>
  );
};

