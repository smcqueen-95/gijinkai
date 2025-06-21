import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: {
    included: string[];
    excluded: string[];
  };
  isPopular?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  buttonText = 'Get Started',
  onButtonClick,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${isPopular ? 'border-2 border-primary relative transform md:scale-105 z-10' : ''} ${className}`}>
      {isPopular && (
        <>
          <div className="absolute top-0 inset-x-0 h-1 gradient-primary"></div>
          <div className="absolute top-0 inset-x-0 flex justify-center">
            <span className="px-4 py-1 bg-primary text-white text-sm rounded-b-lg font-medium">Popular</span>
          </div>
        </>
      )}
      <div className={`p-6 ${isPopular ? 'pt-10' : ''}`}>
        <h3 className="text-xl font-bold text-dark">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold text-primary">{price}</span>
          {period && <span className="ml-1 text-gray-500">{period}</span>}
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
        <ul className="mt-6 space-y-4">
          {features.included.map((feature, index) => (
            <li key={`included-${index}`} className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
          {features.excluded.map((feature, index) => (
            <li key={`excluded-${index}`} className="flex items-center text-gray-400">
              <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <button 
            onClick={onButtonClick}
            className="gradient-button w-full px-4 py-2 rounded-md text-white text-base font-medium"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
