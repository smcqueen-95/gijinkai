import React from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  year?: string;
  tags?: string[];
  imageComponent?: React.ReactNode;
  className?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  year,
  tags = [],
  imageComponent,
  className = '',
  buttonText = 'View Project',
  onButtonClick
}) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${className}`}>
      <div className="h-64 bg-primary/10 flex items-center justify-center">
        {imageComponent ? (
          imageComponent
        ) : (
          <span className="text-3xl font-display font-medium text-primary">{title}</span>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-dark">{title}</h3>
            <p className="text-sm text-gray-500">{category}</p>
          </div>
          {year && (
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{year}</span>
          )}
        </div>
        <p className="mt-4 text-gray-600">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
        {buttonText && (
          <div className="mt-6">
            <button 
              onClick={onButtonClick}
              className="gradient-button px-4 py-2 rounded-md text-white text-sm font-medium"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
