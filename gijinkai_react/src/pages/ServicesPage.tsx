import React from 'react';
import Layout from '../layouts/MainLayout';
import Button from '../components/Button';

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark">Our Services</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions with Japanese-inspired design excellence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-2 gradient-primary"></div>
              <div className="p-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-display font-bold text-primary">ゲ</span>
                </div>
                <h3 className="text-xl font-bold text-dark">Game Development</h3>
                <p className="mt-4 text-gray-600">
                  From concept to launch, we create engaging games for multiple platforms with Japanese-inspired aesthetics.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Mobile Game Development
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    PC Game Development
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Game Design & Art
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Game Testing & QA
                  </li>
                </ul>
                <div className="mt-6">
                  <Button>Learn More</Button>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-2 gradient-primary"></div>
              <div className="p-6">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-display font-bold text-secondary">ウ</span>
                </div>
                <h3 className="text-xl font-bold text-dark">Web & App Development</h3>
                <p className="mt-4 text-gray-600">
                  Custom web applications and mobile apps with clean, modern interfaces and powerful functionality.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Responsive Web Design
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Mobile App Development
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    E-commerce Solutions
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    UI/UX Design
                  </li>
                </ul>
                <div className="mt-6">
                  <Button>Learn More</Button>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-2 gradient-primary"></div>
              <div className="p-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-display font-bold text-primary">漫</span>
                </div>
                <h3 className="text-xl font-bold text-dark">Manga & Anime Creation</h3>
                <p className="mt-4 text-gray-600">
                  Digital art, manga, and anime-style content creation for entertainment and marketing.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Digital Manga Creation
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Character Design
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Animation Production
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Storyboarding
                  </li>
                </ul>
                <div className="mt-6">
                  <Button>Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Our Process</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure quality and satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold text-dark text-center">Discovery</h3>
              <p className="mt-2 text-gray-600 text-center">
                We learn about your goals, requirements, and vision for the project.
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold text-dark text-center">Planning</h3>
              <p className="mt-2 text-gray-600 text-center">
                We create a detailed roadmap and strategy for your project.
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold text-dark text-center">Development</h3>
              <p className="mt-2 text-gray-600 text-center">
                We bring your project to life with our technical expertise.
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
            </div>
            
            {/* Step 4 */}
            <div>
              <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">4</div>
              <h3 className="text-xl font-bold text-dark text-center">Delivery</h3>
              <p className="mt-2 text-gray-600 text-center">
                We launch your project and provide ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Technologies We Use</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {/* Tech 1 */}
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-primary font-bold">React</span>
              </div>
              <span className="text-gray-600">React</span>
            </div>
            
            {/* Tech 2 */}
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-primary font-bold">TS</span>
              </div>
              <span className="text-gray-600">TypeScript</span>
            </div>
            
            {/* Tech 3 */}
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-primary font-bold">Unity</span>
              </div>
              <span className="text-gray-600">Unity</span>
            </div>
            
            {/* Tech 4 */}
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-primary font-bold">UE</span>
              </div>
              <span className="text-gray-600">Unreal Engine</span>
            </div>
            
            {/* Tech 5 */}
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-primary font-bold">Node</span>
              </div>
              <span className="text-gray-600">Node.js</span>
            </div>
            
            {/* Tech 6 */}
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-primary font-bold">PS</span>
              </div>
              <span className="text-gray-600">Photoshop</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to start your project?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Contact us today to discuss how we can help bring your vision to life.
          </p>
          <div className="mt-8">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
