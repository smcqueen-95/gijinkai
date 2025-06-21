import React from 'react';

interface FeatureProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`${className}`}>
      {icon && (
        <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center text-white mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-dark">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default Feature;
