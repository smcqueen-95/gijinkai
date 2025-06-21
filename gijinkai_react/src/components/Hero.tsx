import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  pattern?: 'dots' | 'waves' | 'circles' | 'none';
  imageComponent?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  children,
  className = '',
  pattern = 'none',
  imageComponent
}) => {
  const patternClasses = {
    dots: 'dot-pattern',
    waves: 'wave-pattern',
    circles: 'circle-pattern',
    none: ''
  };
  
  return (
    <section className={`relative bg-white overflow-hidden ${patternClasses[pattern]} ${className}`}>
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#7475EB" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-xl text-dark">
                {subtitle}
              </p>
            )}
            {children && (
              <div className="mt-8">
                {children}
              </div>
            )}
          </div>
          {imageComponent && (
            <div className="md:w-1/2 mt-12 md:mt-0">
              {imageComponent}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
