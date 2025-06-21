import React from 'react';
import Layout from '../layouts/MainLayout';
import Button from '../components/Button';

const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark">Our Projects</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of innovative digital experiences.
            </p>
          </div>
        </div>
      </section>
      
      {/* Project Categories */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 rounded-full bg-primary text-white">All Projects</button>
            <button className="px-6 py-2 rounded-full bg-white border border-gray-300 text-dark hover:border-primary hover:text-primary transition-colors">Game Development</button>
            <button className="px-6 py-2 rounded-full bg-white border border-gray-300 text-dark hover:border-primary hover:text-primary transition-colors">Web/App Development</button>
            <button className="px-6 py-2 rounded-full bg-white border border-gray-300 text-dark hover:border-primary hover:text-primary transition-colors">Manga & Anime</button>
          </div>
        </div>
      </section>
      
      {/* Game Development Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-8">Game Development Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-primary/10 flex items-center justify-center">
                <span className="text-3xl font-display font-medium text-primary">Sakura Legends</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-dark">Sakura Legends</h3>
                    <p className="text-sm text-gray-500">Mobile RPG Game</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">2025</span>
                </div>
                <p className="mt-4 text-gray-600">
                  An immersive RPG game with Japanese mythology themes and stunning visuals. Players embark on a journey through ancient Japan, encountering legendary creatures and historical figures.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Unity</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">C#</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Mobile</span>
                </div>
                <div className="mt-6">
                  <Button>View Project</Button>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-secondary/10 flex items-center justify-center">
                <span className="text-3xl font-display font-medium text-secondary">Neon Samurai</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-dark">Neon Samurai</h3>
                    <p className="text-sm text-gray-500">PC Action Game</p>
                  </div>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">2024</span>
                </div>
                <p className="mt-4 text-gray-600">
                  A cyberpunk action game set in futuristic Tokyo. Players take on the role of a modern samurai navigating a world of corporate intrigue and advanced technology.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Unreal Engine</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">C++</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">PC</span>
                </div>
                <div className="mt-6">
                  <Button>View Project</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Web/App Development Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-8">Web & App Development Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-primary/10 flex items-center justify-center">
                <span className="text-3xl font-display font-medium text-primary">Kaizen Dashboard</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-dark">Kaizen Dashboard</h3>
                    <p className="text-sm text-gray-500">Productivity Web App</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">2025</span>
                </div>
                <p className="mt-4 text-gray-600">
                  A productivity platform with continuous improvement principles at its core. Features task management, progress tracking, and data visualization.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">TypeScript</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Node.js</span>
                </div>
                <div className="mt-6">
                  <Button>View Project</Button>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-secondary/10 flex items-center justify-center">
                <span className="text-3xl font-display font-medium text-secondary">Shizen</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-dark">Shizen</h3>
                    <p className="text-sm text-gray-500">Meditation Mobile App</p>
                  </div>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">2024</span>
                </div>
                <p className="mt-4 text-gray-600">
                  A meditation and mindfulness app inspired by Japanese zen principles. Features guided meditations, nature sounds, and progress tracking.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">React Native</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Firebase</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">iOS/Android</span>
                </div>
                <div className="mt-6">
                  <Button>View Project</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Manga & Anime Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-8">Manga & Anime Creation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-primary/10 flex items-center justify-center">
                <span className="text-3xl font-display font-medium text-primary">Cyber Ronin</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-dark">Cyber Ronin</h3>
                    <p className="text-sm text-gray-500">Digital Manga Series</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">2025</span>
                </div>
                <p className="mt-4 text-gray-600">
                  A digital manga series blending traditional Japanese art with futuristic themes. Set in 2150, it follows a masterless samurai in a world dominated by AI.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Digital Art</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Storytelling</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Web Comic</span>
                </div>
                <div className="mt-6">
                  <Button>View Project</Button>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-secondary/10 flex items-center justify-center">
                <span className="text-3xl font-display font-medium text-secondary">Yume</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-dark">Yume</h3>
                    <p className="text-sm text-gray-500">Animated Short Film</p>
                  </div>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">2024</span>
                </div>
                <p className="mt-4 text-gray-600">
                  An animated short film exploring the boundary between dreams and reality. Features a unique blend of traditional and digital animation techniques.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Animation</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">After Effects</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Blender</span>
                </div>
                <div className="mt-6">
                  <Button>View Project</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Have a project in mind?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Let's bring your vision to life with our expertise.
          </p>
          <div className="mt-8">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
