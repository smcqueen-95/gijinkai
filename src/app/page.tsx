import Link from 'next/link'
import Button from '@/components/Button'
import CyberpunkCharacter from '@/components/CyberpunkCharacter'

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full Viewport Height */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden min-h-[calc(100dvh-4rem)] flex items-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradientOverlay" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7475EB" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#47EEEF" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#7475EB" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#gradientOverlay)" />
          </svg>
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-start gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
            {/* Left Content */}
            <div className="md:w-1/2 md:pl-8 lg:pl-12 xl:pl-16 2xl:pl-20 md:pr-6 lg:pr-10 xl:pr-12 2xl:pr-16 text-left w-full animate-fade-in-up">
              {/* <div className="inline-block mb-4 md:mb-6 lg:mb-8 xl:mb-10 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary font-display">技術の限界を超える</span>
              </div> */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight tracking-tight text-left">
                <span className="font-display block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  技尽界
                </span>
                <span className="block mt-3 md:mt-4 lg:mt-5 xl:mt-6 text-gray-900 whitespace-nowrap">
                  Gijinkai Studio
                </span>
              </h1>
              <p className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 2xl:mt-20 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 max-w-2xl lg:max-w-3xl xl:max-w-4xl leading-relaxed">
                Creating innovative digital experiences with <span className="font-semibold text-primary">Japanese-inspired</span> design excellence.
              </p>
              <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 flex flex-col sm:flex-row gap-4 md:gap-6 justify-start">
                <Link href="/projects" className="inline-block">
                  <Button size="lg" className="text-base sm:text-lg md:text-xl px-8 py-4 md:px-10 md:py-5 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Our Projects
                  </Button>
                </Link>
                <Link href="/contact" className="inline-block">
                  <Button variant="outline" size="lg" className="text-base sm:text-lg md:text-xl px-8 py-4 md:px-10 md:py-5 border-2 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual - Cyberpunk Character Popping Out */}
            {/* <CyberpunkCharacter /> */}
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
                  <Link href="/projects" className="text-primary hover:text-primary/80 font-medium">
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
                  <Link href="/projects" className="text-primary hover:text-primary/80 font-medium">
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
                  <Link href="/projects" className="text-primary hover:text-primary/80 font-medium">
                    View details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/projects"><Button>View All Projects</Button></Link>
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
            <Link href="/services"><Button>Explore Services</Button></Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to start your project?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Let&apos;s collaborate to create something amazing together.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}