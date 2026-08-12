import React from 'react';
import { motion } from 'motion/react';
import { AUDIENCE_CARDS } from '../data/mockData';
import { Building2, UserCheck, Check } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-5 h-5 text-violet-600" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-violet-600" />;
      default: return <Building2 className="w-5 h-5 text-violet-600" />;
    }
  };

  return (
    <section id="audience" className="py-10 lg:py-14 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-violet-600 block mb-1.5">
            Для кого этот сервис
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            Понятные ответы для двух типов ролей
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-slate-600">
            Разговор без раздутого IT-пафоса — на понятном языке бизнеса и практики.
          </p>
        </div>

        {/* 2 Audience Cards - Rounded 3XL Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {AUDIENCE_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="p-5 sm:p-6 bg-white border border-slate-200/80 rounded-3xl shadow-xs hover:shadow-xl hover:shadow-violet-500/5 hover:border-violet-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="p-2.5 bg-violet-50 rounded-2xl border border-violet-100 shrink-0">
                    {getIcon(card.iconName)}
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-violet-600 block">
                      {card.role}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                      {card.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 font-normal">
                  {card.subtitle}
                </p>

                <ul className="space-y-2.5 border-t border-slate-100 pt-4">
                  {card.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <div className="p-1 bg-violet-50 text-violet-600 border border-violet-100 rounded-lg shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-800 font-medium leading-snug">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

