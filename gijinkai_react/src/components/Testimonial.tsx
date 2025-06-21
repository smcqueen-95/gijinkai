import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatarUrl?: string;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  avatarUrl,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 text-primary mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>
      <p className="text-gray-600 italic mb-4">{quote}</p>
      <div className="flex items-center">
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt={author} 
            className="h-10 w-10 rounded-full mr-3"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
            <span className="text-primary font-bold">{author.charAt(0)}</span>
          </div>
        )}
        <div>
          <h4 className="font-bold text-dark">{author}</h4>
          {(role || company) && (
            <p className="text-sm text-gray-500">
              {role}{role && company && ', '}{company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
