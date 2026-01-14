import Link from 'next/link'
import Button from '@/components/Button'

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

            {/* Right Visual - Anime Character Popping Out */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-6 lg:pl-10 xl:pl-12 2xl:pl-16 w-full flex-shrink-0 flex items-center justify-center relative animate-fade-in-up animation-delay-300">
              <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                {/* Multiple Glowing Aura Layers for Depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 rounded-full blur-3xl opacity-60 animate-pulse -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-primary/30 to-secondary/30 rounded-full blur-2xl opacity-50 animate-pulse animation-delay-1000 -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-xl opacity-40 -z-10"></div>
                
                {/* Anime Character SVG with 3D Pop-out Effect */}
                <div className="relative z-10 transform animate-pop-out" style={{ transformStyle: 'preserve-3d' }}>
                  <svg 
                    viewBox="0 0 400 500" 
                    className="w-full h-auto relative"
                    style={{ 
                      filter: 'drop-shadow(0 30px 60px rgba(116, 117, 235, 0.6)) drop-shadow(0 15px 40px rgba(71, 238, 239, 0.5))',
                    }}
                  >
                    <defs>
                      <linearGradient id="charGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#7475EB" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#47EEEF" stopOpacity="0.9" />
                      </linearGradient>
                      <radialGradient id="hairGradient" cx="50%" cy="50%">
                        <stop offset="0%" stopColor="#2C1810" />
                        <stop offset="100%" stopColor="#1a0f09" />
                      </radialGradient>
                    </defs>
                    
                    {/* Energy Aura around character - Behind */}
                    <circle cx="200" cy="300" r="160" fill="none" stroke="url(#charGradient)" strokeWidth="2" opacity="0.2" className="animate-pulse animation-delay-1000" />
                    <circle cx="200" cy="300" r="140" fill="none" stroke="url(#charGradient)" strokeWidth="2" opacity="0.3" className="animate-pulse" />
                    
                    {/* Hair - Anime Style */}
                    <g className="animate-float animation-delay-300">
                      <path d="M 200 70 Q 140 50 100 100 Q 80 140 90 170 Q 95 200 110 230 Q 125 250 145 270 L 145 200 Q 135 175 142 145 Q 148 120 162 108 L 200 70 Z" fill="url(#hairGradient)" />
                      <path d="M 200 70 Q 260 50 300 100 Q 320 140 310 170 Q 305 200 290 230 Q 275 250 255 270 L 255 200 Q 265 175 258 145 Q 252 120 238 108 Z" fill="url(#hairGradient)" />
                      {/* Hair highlight */}
                      <path d="M 200 70 Q 180 85 160 120 Q 150 150 155 180" stroke="#4a3428" strokeWidth="1" fill="none" opacity="0.5" />
                    </g>
                    
                    {/* Head */}
                    <ellipse cx="200" cy="180" rx="75" ry="85" fill="#FFDBAC" />
                    
                    {/* Left Eye - Large Anime Style */}
                    <g>
                      <ellipse cx="175" cy="170" rx="14" ry="20" fill="#FFFFFF" />
                      <ellipse cx="175" cy="176" rx="10" ry="12" fill="#2C1810" />
                      <circle cx="177" cy="173" r="4" fill="#FFFFFF" />
                      <ellipse cx="172" cy="168" rx="5" ry="8" fill="#FFFFFF" opacity="0.9" />
                    </g>
                    
                    {/* Right Eye */}
                    <g>
                      <ellipse cx="225" cy="170" rx="14" ry="20" fill="#FFFFFF" />
                      <ellipse cx="225" cy="176" rx="10" ry="12" fill="#2C1810" />
                      <circle cx="227" cy="173" r="4" fill="#FFFFFF" />
                      <ellipse cx="222" cy="168" rx="5" ry="8" fill="#FFFFFF" opacity="0.9" />
                    </g>
                    
                    {/* Blush - Kawaii Style */}
                    <ellipse cx="155" cy="200" rx="12" ry="10" fill="#FFB6C1" opacity="0.5" />
                    <ellipse cx="245" cy="200" rx="12" ry="10" fill="#FFB6C1" opacity="0.5" />
                    
                    {/* Mouth - Happy Expression */}
                    <path d="M 188 210 Q 200 220 212 210" stroke="#2C1810" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    
                    {/* Neck */}
                    <rect x="185" y="240" width="30" height="18" rx="4" fill="#FFDBAC" />
                    
                    {/* Upper Body - Anime Style Outfit */}
                    <path d="M 150 258 Q 145 300 150 340 Q 155 370 170 390 Q 185 405 200 410 Q 215 405 230 390 Q 245 370 250 340 Q 255 300 250 258 Z" fill="url(#charGradient)" />
                    
                    {/* Left Arm - Raised High */}
                    <ellipse cx="130" cy="275" rx="22" ry="32" fill="#FFDBAC" transform="rotate(-25 130 275)" />
                    <ellipse cx="105" cy="310" rx="18" ry="28" fill="#FFDBAC" transform="rotate(-30 105 310)" />
                    {/* Hand */}
                    <circle cx="95" cy="335" r="12" fill="#FFDBAC" />
                    
                    {/* Right Arm - Raised High */}
                    <ellipse cx="270" cy="275" rx="22" ry="32" fill="#FFDBAC" transform="rotate(25 270 275)" />
                    <ellipse cx="295" cy="310" rx="18" ry="28" fill="#FFDBAC" transform="rotate(30 295 310)" />
                    {/* Hand */}
                    <circle cx="305" cy="335" r="12" fill="#FFDBAC" />
                    
                    {/* Sparkle Effects - Magical */}
                    <g className="animate-ping">
                      <circle cx="140" cy="130" r="4" fill="#47EEEF" opacity="0.9" />
                      <path d="M 140 130 L 140 125 M 140 130 L 140 135 M 140 130 L 135 130 M 140 130 L 145 130" stroke="#47EEEF" strokeWidth="1.5" opacity="0.7" />
                    </g>
                    <g className="animate-ping animation-delay-500">
                      <circle cx="260" cy="130" r="3.5" fill="#7475EB" opacity="0.9" />
                      <path d="M 260 130 L 260 126 M 260 130 L 260 134 M 260 130 L 256 130 M 260 130 L 264 130" stroke="#7475EB" strokeWidth="1.5" opacity="0.7" />
                    </g>
                    <g className="animate-ping animation-delay-1000">
                      <circle cx="175" cy="110" r="3" fill="#47EEEF" opacity="0.7" />
                      <path d="M 175 110 L 175 107 M 175 110 L 175 113 M 175 110 L 172 110 M 175 110 L 178 110" stroke="#47EEEF" strokeWidth="1" opacity="0.6" />
                    </g>
                  </svg>
                  
                  {/* Multiple shadow layers for pop-out effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 rounded-full blur-3xl -z-20 opacity-60" style={{ transform: 'translateY(50px) scale(1.3)' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-primary/30 to-secondary/30 rounded-full blur-2xl -z-20 opacity-50" style={{ transform: 'translateY(45px) scale(1.25)' }}></div>
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