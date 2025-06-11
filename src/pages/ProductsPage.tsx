import React from 'react';
import Layout from '../layouts/MainLayout';
import Button from '../components/Button';

const ProductsPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark">Our Products</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative digital products with Japanese-inspired design.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-8">Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="h-64 bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-display font-medium text-primary">Kintsugi UI</span>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  New
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-dark">Kintsugi UI</h3>
                    <p className="text-sm text-gray-500">UI Component Library</p>
                  </div>
                  <span className="text-xl font-bold text-primary">$199</span>
                </div>
                <p className="mt-4 text-gray-600">
                  A premium UI component library inspired by the Japanese art of Kintsugi, featuring elegant components with a unique aesthetic.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">TypeScript</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Tailwind</span>
                </div>
                <div className="mt-6">
                  <Button>View Details</Button>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-secondary/10 flex items-center justify-center">
                <span className="text-3xl font-display font-medium text-secondary">Zen Calendar</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-dark">Zen Calendar</h3>
                    <p className="text-sm text-gray-500">Productivity App</p>
                  </div>
                  <span className="text-xl font-bold text-primary">$49</span>
                </div>
                <p className="mt-4 text-gray-600">
                  A minimalist calendar and task management app designed to reduce stress and increase productivity with a zen-inspired interface.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">iOS</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Android</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Web</span>
                </div>
                <div className="mt-6">
                  <Button>View Details</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Software Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-8">Software Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-display font-medium text-primary">Kanji Scan</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-dark">Kanji Scan</h3>
                  <span className="text-lg font-bold text-primary">$29</span>
                </div>
                <p className="mt-2 text-gray-600">
                  An app that recognizes and translates Japanese characters from images.
                </p>
                <div className="mt-4">
                  <Button size="sm">View Details</Button>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <span className="text-2xl font-display font-medium text-secondary">Pixel Master</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-dark">Pixel Master</h3>
                  <span className="text-lg font-bold text-primary">$79</span>
                </div>
                <p className="mt-2 text-gray-600">
                  A pixel art creation tool with Japanese-inspired templates and brushes.
                </p>
                <div className="mt-4">
                  <Button size="sm">View Details</Button>
                </div>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-display font-medium text-primary">Code Haiku</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-dark">Code Haiku</h3>
                  <span className="text-lg font-bold text-primary">$149</span>
                </div>
                <p className="mt-2 text-gray-600">
                  A code editor with AI assistance focused on elegant, minimal code.
                </p>
                <div className="mt-4">
                  <Button size="sm">View Details</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Digital Assets */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-8">Digital Assets</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Asset 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-40 bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-display font-medium text-primary">Icon Pack</span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-bold text-dark">Japanese Icon Pack</h3>
                  <span className="text-base font-bold text-primary">$19</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  200+ Japanese-inspired icons for your projects.
                </p>
                <div className="mt-3">
                  <Button size="sm">View</Button>
                </div>
              </div>
            </div>
            
            {/* Asset 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-40 bg-secondary/10 flex items-center justify-center">
                <span className="text-xl font-display font-medium text-secondary">Textures</span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-bold text-dark">Washi Textures</h3>
                  <span className="text-base font-bold text-primary">$24</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  50 high-resolution Japanese paper textures.
                </p>
                <div className="mt-3">
                  <Button size="sm">View</Button>
                </div>
              </div>
            </div>
            
            {/* Asset 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-40 bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-display font-medium text-primary">Fonts</span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-bold text-dark">Nihon Font Family</h3>
                  <span className="text-base font-bold text-primary">$39</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  A modern font family with Japanese aesthetics.
                </p>
                <div className="mt-3">
                  <Button size="sm">View</Button>
                </div>
              </div>
            </div>
            
            {/* Asset 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-40 bg-secondary/10 flex items-center justify-center">
                <span className="text-xl font-display font-medium text-secondary">3D Models</span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-bold text-dark">Japanese Scene Kit</h3>
                  <span className="text-base font-bold text-primary">$59</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  3D models for creating Japanese-inspired scenes.
                </p>
                <div className="mt-3">
                  <Button size="sm">View</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscription Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Subscription Plans</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Get access to our entire product catalog with a subscription.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark">Basic</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-primary">$29</span>
                  <span className="ml-1 text-gray-500">/month</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Access to basic digital assets and software.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Icon packs and textures
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Basic software access
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Premium assets
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Priority support
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>
            
            {/* Plan 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-primary relative">
              <div className="absolute top-0 inset-x-0 h-1 gradient-primary"></div>
              <div className="absolute top-0 inset-x-0 flex justify-center">
                <span className="px-4 py-1 bg-primary text-white text-sm rounded-b-lg font-medium">Popular</span>
              </div>
              <div className="p-6 pt-10">
                <h3 className="text-xl font-bold text-dark">Pro</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-primary">$79</span>
                  <span className="ml-1 text-gray-500">/month</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Full access to all digital assets and software.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    All icon packs and textures
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Full software access
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Premium assets
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Priority support
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>
            
            {/* Plan 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark">Enterprise</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-primary">$199</span>
                  <span className="ml-1 text-gray-500">/month</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Everything plus custom solutions and support.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    All icon packs and textures
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Full software access
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Premium assets
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Priority support
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Need a custom solution?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Contact us to discuss custom product development for your specific needs.
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

export default ProductsPage;
