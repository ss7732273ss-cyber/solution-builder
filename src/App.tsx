import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { AudienceSection } from './components/AudienceSection';
import { TaskShowcase } from './components/TaskShowcase';
import { SolutionTypesShowcase } from './components/SolutionTypesShowcase';
import { ConstructorQuiz } from './components/ConstructorQuiz';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  // Selected task name from task showcase
  const [preselectedTaskName, setPreselectedTaskName] = useState<string>('');

  // Consultation modal
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState<boolean>(false);
  const [consultationText, setConsultationText] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTaskFromShowcase = (taskTitle: string) => {
    setPreselectedTaskName(taskTitle);
    scrollToSection('constructor');
  };

  const handleSelectProblem = (problemTitle: string) => {
    scrollToSection('constructor');
  };

  const handleDiscussWithExpert = (resultText: string) => {
    setConsultationText(resultText);
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-violet-500 selection:text-white">
      
      {/* Header */}
      <Navbar
        onScrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <main>
        {/* Screen 1: Hero */}
        <Hero
          onStartQuiz={() => scrollToSection('constructor')}
          onExploreTasks={() => scrollToSection('tasks')}
        />

        {/* Screen 2: В чём проблема */}
        <ProblemSection onSelectProblem={handleSelectProblem} />

        {/* Screen 3: Для кого */}
        <AudienceSection />

        {/* Screen 4: Витрина задач */}
        <TaskShowcase onSelectTask={handleSelectTaskFromShowcase} />

        {/* Screen 5: Витрина способов решений */}
        <SolutionTypesShowcase onStartQuiz={() => scrollToSection('constructor')} />

        {/* Screen 6 & 7: Interactive Constructor & Results */}
        <ConstructorQuiz
          preselectedTaskName={preselectedTaskName}
          onClearPreselectedTask={() => setPreselectedTaskName('')}
          onDiscussWithExpert={handleDiscussWithExpert}
        />

        {/* Screen 8: Следующий шаг & Direct Contacts */}
        <ContactSection
          initialSummaryText={consultationText}
          isConsultationModalOpen={isConsultationModalOpen}
          onCloseConsultationModal={() => setIsConsultationModalOpen(false)}
        />
      </main>

      {/* Footer */}
      <Footer
        onScrollToSection={scrollToSection}
      />

    </div>
  );
}
