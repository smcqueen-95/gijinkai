import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'primary' | 'pattern';
  centered?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  background = 'white',
  centered = false
}) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    primary: 'gradient-primary text-white',
    pattern: 'japanese-pattern'
  };
  
  return (
    <section className={`py-16 ${bgClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className={`${centered ? 'text-center' : ''} mb-12`}>
            {title && <h2 className={`text-3xl font-bold ${background === 'primary' ? 'text-white' : 'text-dark'}`}>{title}</h2>}
            {subtitle && (
              <p className={`mt-4 text-lg ${background === 'primary' ? 'text-white/90' : 'text-gray-600'} ${centered ? 'max-w-3xl mx-auto' : ''}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
