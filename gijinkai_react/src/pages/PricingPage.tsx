import React, { useState } from 'react';
import Layout from '../layouts/MainLayout';
import Button from '../components/Button';

const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark">Pricing Plans</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing options for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Toggle */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative bg-gray-100 p-1 rounded-full flex">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === 'monthly' 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === 'yearly' 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Yearly <span className="text-xs text-green-500 font-bold">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark">Basic</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-primary">
                    {billingPeriod === 'monthly' ? '$1,499' : '$14,390'}
                  </span>
                  <span className="ml-1 text-gray-500">
                    {billingPeriod === 'monthly' ? '/project' : '/year'}
                  </span>
                </div>
                <p className="mt-4 text-gray-600">
                  Perfect for small businesses and startups.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Basic website or application
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Up to 5 pages or screens
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Responsive design
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Custom animations
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Advanced features
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="w-full">Get Started</Button>
                </div>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-primary relative transform md:scale-105 z-10">
              <div className="absolute top-0 inset-x-0 h-1 gradient-primary"></div>
              <div className="absolute top-0 inset-x-0 flex justify-center">
                <span className="px-4 py-1 bg-primary text-white text-sm rounded-b-lg font-medium">Most Popular</span>
              </div>
              <div className="p-6 pt-10">
                <h3 className="text-xl font-bold text-dark">Professional</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-primary">
                    {billingPeriod === 'monthly' ? '$3,999' : '$38,390'}
                  </span>
                  <span className="ml-1 text-gray-500">
                    {billingPeriod === 'monthly' ? '/project' : '/year'}
                  </span>
                </div>
                <p className="mt-4 text-gray-600">
                  Ideal for growing businesses and complex projects.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Advanced website or application
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Up to 15 pages or screens
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Responsive design
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Custom animations
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Advanced features
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="w-full">Get Started</Button>
                </div>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark">Enterprise</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-primary">Custom</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Tailored solutions for large organizations.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Custom enterprise solution
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Unlimited pages or screens
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Responsive design
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Custom animations
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Advanced features
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="w-full">Contact Us</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Feature Comparison</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Compare our plans to find the right fit for your needs.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Basic</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-primary uppercase tracking-wider">Professional</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pages/Screens</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Up to 5</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center font-medium">Up to 15</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Responsive Design</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    <svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Custom Animations</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    <svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CMS Integration</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Basic</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center font-medium">Advanced</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Custom</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Support</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Email</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center font-medium">Email & Phone</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Dedicated Manager</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our pricing and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-dark">How long does a typical project take?</h3>
              <p className="mt-2 text-gray-600">
                Project timelines vary based on complexity. Basic projects typically take 4-6 weeks, while more complex projects can take 8-12 weeks or more.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-dark">Do you offer maintenance plans?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we offer ongoing maintenance and support plans for all our projects. These can be customized based on your specific needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-dark">Can I upgrade my plan later?</h3>
              <p className="mt-2 text-gray-600">
                Absolutely! You can upgrade your plan at any time as your business grows and your needs evolve.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-dark">What payment methods do you accept?</h3>
              <p className="mt-2 text-gray-600">
                We accept all major credit cards, bank transfers, and PayPal. For enterprise clients, we can also arrange custom payment terms.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Contact us today to discuss your project and find the right plan for your needs.
          </p>
          <div className="mt-8">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
