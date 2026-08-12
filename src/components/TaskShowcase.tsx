import React from 'react';
import { motion } from 'motion/react';
import { TASK_SHOWCASE } from '../data/mockData';
import {
  TrendingUp,
  Table,
  Database,
  FileText,
  Package,
  Truck,
  Users,
  FolderGit2,
  BarChart3,
  Workflow,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface TaskShowcaseProps {
  onSelectTask: (taskTitle: string) => void;
}

export const TaskShowcase: React.FC<TaskShowcaseProps> = ({ onSelectTask }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-violet-600" />;
      case 'Table': return <Table className="w-4 h-4 text-violet-600" />;
      case 'Database': return <Database className="w-4 h-4 text-violet-600" />;
      case 'FileText': return <FileText className="w-4 h-4 text-violet-600" />;
      case 'Package': return <Package className="w-4 h-4 text-violet-600" />;
      case 'Truck': return <Truck className="w-4 h-4 text-violet-600" />;
      case 'Users': return <Users className="w-4 h-4 text-violet-600" />;
      case 'FolderGit2': return <FolderGit2 className="w-4 h-4 text-violet-600" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-violet-600" />;
      case 'Workflow': return <Workflow className="w-4 h-4 text-violet-600" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-500" />;
      default: return <Workflow className="w-4 h-4 text-violet-600" />;
    }
  };

  return (
    <section id="tasks" className="py-10 lg:py-14 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-violet-600 block mb-1.5">
            Витрина задач
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            Что из этого происходит у вас?
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-slate-600">
            Выберите вашу ключевую рабочую область, чтобы сразу разобрать её в Конструкторе
          </p>
        </div>

        {/* 11 Cards Grid - Product Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {TASK_SHOWCASE.map((task, idx) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              onClick={() => onSelectTask(task.title)}
              className="group p-3.5 sm:p-4 bg-[#F8FAFC]/80 hover:bg-white border border-slate-200/70 hover:border-violet-300 rounded-2xl transition-all duration-200 shadow-xs hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 bg-violet-50 rounded-xl border border-violet-100 group-hover:scale-105 transition-transform">
                    {getIcon(task.iconName)}
                  </div>
                  <span className="text-xs font-semibold tracking-wide text-violet-700 bg-violet-50/80 border border-violet-100/80 px-2.5 py-0.5 rounded-full">
                    {task.category}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                  {task.title}
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {task.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-violet-600 transition-colors">
                <span>Разобрать в Конструкторе</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

