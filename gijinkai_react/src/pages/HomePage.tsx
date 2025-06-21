import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/MainLayout';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
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
                <span className="font-display">技尽界</span>
                <span className="block mt-2">Gijinkai Studio</span>
              </h1>
              <p className="mt-6 text-xl text-dark">
                Creating innovative digital experiences with Japanese-inspired design excellence.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg">Our Projects</Button>
                <Button variant="outline" size="lg">Contact Us</Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur-xl"></div>
                <div className="relative rounded-xl bg-white p-6 shadow-xl">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-6xl font-display font-bold gradient-text">技尽界</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-dark">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our latest work across game development, web applications, and digital art.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-display font-medium text-primary">Game Project</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark">Sakura Legends</h3>
                <p className="mt-2 text-gray-600">
                  An immersive RPG game with Japanese mythology themes and stunning visuals.
                </p>
                <div className="mt-4">
                  <Link to="/projects" className="text-primary hover:text-primary/80 font-medium">
                    View details →
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <span className="text-2xl font-display font-medium text-secondary">Web App</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark">Kaizen Dashboard</h3>
                <p className="mt-2 text-gray-600">
                  A productivity platform with continuous improvement principles at its core.
                </p>
                <div className="mt-4">
                  <Link to="/projects" className="text-primary hover:text-primary/80 font-medium">
                    View details →
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-display font-medium text-primary">Manga</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark">Cyber Ronin</h3>
                <p className="mt-2 text-gray-600">
                  A digital manga series blending traditional Japanese art with futuristic themes.
                </p>
                <div className="mt-4">
                  <Link to="/projects" className="text-primary hover:text-primary/80 font-medium">
                    View details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button>View All Projects</Button>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-dark">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a range of creative and technical services to bring your digital vision to life.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Service 1 */}
            <div className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary"></div>
              <h3 className="text-xl font-bold text-dark">Game Development</h3>
              <p className="mt-4 text-gray-600">
                From concept to launch, we create engaging games for multiple platforms with Japanese-inspired aesthetics.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary"></div>
              <h3 className="text-xl font-bold text-dark">Web & App Development</h3>
              <p className="mt-4 text-gray-600">
                Custom web applications and mobile apps with clean, modern interfaces and powerful functionality.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary"></div>
              <h3 className="text-xl font-bold text-dark">Manga & Anime Creation</h3>
              <p className="mt-4 text-gray-600">
                Digital art, manga, and anime-style content creation for entertainment and marketing.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button>Explore Services</Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to start your project?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Let's collaborate to create something amazing together.
          </p>
          <div className="mt-8">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
