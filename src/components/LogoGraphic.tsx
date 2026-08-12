import React from 'react';

interface LogoGraphicProps {
  conceptId?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LogoGraphic: React.FC<LogoGraphicProps> = ({
  conceptId = 'steps',
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const dim = sizeClasses[size];

  switch (conceptId) {
    case 'steps':
      // Staircase / steps geometry inside black container
      return (
        <div className={`bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-600 flex items-end gap-[2px] p-1.5 rounded-xl ${dim} ${className}`}>
          <div className="w-full h-[35%] bg-white/90 rounded-xs"></div>
          <div className="w-full h-[65%] bg-white/90 rounded-xs"></div>
          <div className="w-full h-[100%] bg-white rounded-xs"></div>
        </div>
      );

    case 'levels':
      // Modular assembly blocks in 2x2 grid
      return (
        <div className={`bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-600 grid grid-cols-2 gap-[2px] p-1.5 rounded-xl ${dim} ${className}`}>
          <div className="bg-white rounded-xs"></div>
          <div className="bg-white/40 rounded-xs"></div>
          <div className="bg-white/40 rounded-xs"></div>
          <div className="bg-violet-200 rounded-xs"></div>
        </div>
      );

    case 'route':
      // Route nodes
      return (
        <div className={`bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-600 flex flex-col justify-between p-1.5 rounded-xl ${dim} ${className}`}>
          <div className="flex justify-end"><div className="w-2 h-2 rounded-full bg-violet-200"></div></div>
          <div className="flex justify-center"><div className="w-1.5 h-1.5 rounded-full bg-white"></div></div>
          <div className="flex justify-start"><div className="w-1 h-1 rounded-full bg-white/60"></div></div>
        </div>
      );

    case 'layers':
      // Layered stack
      return (
        <div className={`bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-600 flex flex-col justify-between p-1.5 rounded-xl ${dim} ${className}`}>
          <div className="w-full h-[3px] bg-white rounded-xs"></div>
          <div className="w-full h-[3px] bg-white/60 rounded-xs"></div>
          <div className="w-full h-[3px] bg-violet-200 rounded-xs"></div>
        </div>
      );

    default:
      return (
        <div className={`bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-600 flex items-end gap-[2px] p-1.5 rounded-xl ${dim} ${className}`}>
          <div className="w-full h-[35%] bg-white/90 rounded-xs"></div>
          <div className="w-full h-[65%] bg-white/90 rounded-xs"></div>
          <div className="w-full h-[100%] bg-white rounded-xs"></div>
        </div>
      );
  }
};

