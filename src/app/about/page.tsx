import Link from 'next/link'
import Button from '@/components/Button'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark">About Gijinkai Studio</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Where technology meets Japanese-inspired design excellence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
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
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-dark">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
                Founded in 2020, Gijinkai Studio was born from a passion for blending cutting-edge technology with the elegance and precision of Japanese design principles. Our name, 技尽界 (Gijinkai), represents our commitment to pushing the boundaries of technical expertise (&quot;技&quot;) to its fullest potential (&quot;尽&quot;) in the digital realm (&quot;界&quot;).
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We are a team of designers, developers, and digital artists who share a vision of creating digital experiences that are not only functional but also aesthetically inspiring and culturally rich.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Our Approach</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We combine Japanese design principles with modern technology to create unique digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Approach 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                <span className="text-white font-bold">和</span>
              </div>
              <h3 className="text-xl font-bold text-dark">Harmony (Wa)</h3>
              <p className="mt-2 text-gray-600">
                We create balanced, harmonious designs that integrate all elements into a cohesive whole, ensuring both beauty and functionality.
              </p>
            </div>
            
            {/* Approach 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                <span className="text-white font-bold">簡</span>
              </div>
              <h3 className="text-xl font-bold text-dark">Simplicity (Kan)</h3>
              <p className="mt-2 text-gray-600">
                We embrace minimalism and clarity, removing unnecessary elements to focus on what truly matters in each project.
              </p>
            </div>
            
            {/* Approach 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                <span className="text-white font-bold">革</span>
              </div>
              <h3 className="text-xl font-bold text-dark">Innovation (Kaku)</h3>
              <p className="mt-2 text-gray-600">
                We constantly push boundaries, combining traditional principles with cutting-edge technology to create forward-thinking solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the creative minds behind Gijinkai Studio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-display font-medium text-primary">CEO</span>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-dark">Akira Tanaka</h3>
                <p className="text-gray-600">Founder & Creative Director</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <span className="text-xl font-display font-medium text-secondary">CTO</span>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-dark">Mei Yamamoto</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-display font-medium text-primary">CDO</span>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-dark">Kenji Sato</h3>
                <p className="text-gray-600">Design Director</p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <span className="text-xl font-display font-medium text-secondary">CPO</span>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-dark">Hana Nakamura</h3>
                <p className="text-gray-600">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Careers Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Careers</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Join our team and help us create amazing digital experiences.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-dark">Open Positions</h3>
              <div className="mt-4 space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <h4 className="font-bold text-dark">Senior Frontend Developer</h4>
                  <p className="text-gray-600 mt-1">Tokyo, Japan (Remote Available)</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <h4 className="font-bold text-dark">UI/UX Designer</h4>
                  <p className="text-gray-600 mt-1">Tokyo, Japan (Remote Available)</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <h4 className="font-bold text-dark">Game Developer (Unity)</h4>
                  <p className="text-gray-600 mt-1">Osaka, Japan (Hybrid)</p>
                </div>
              </div>
              <div className="mt-6">
                <Button>View All Positions</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Want to work with us?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Let&apos;s create something amazing together.
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
