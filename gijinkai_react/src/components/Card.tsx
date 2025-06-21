import React from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  pattern?: 'dots' | 'waves' | 'circles' | 'none';
  accentColor?: 'primary' | 'secondary' | 'none';
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  className = '',
  pattern = 'none',
  accentColor = 'primary'
}) => {
  const patternClasses = {
    dots: 'dot-pattern',
    waves: 'wave-pattern',
    circles: 'circle-pattern',
    none: ''
  };
  
  const accentClasses = {
    primary: 'border-t-4 border-primary',
    secondary: 'border-t-4 border-secondary',
    none: ''
  };
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden card-hover ${patternClasses[pattern]} ${accentClasses[accentColor]} ${className}`}>
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
