import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Code, Palette, Gamepad, Globe } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Services Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Our{" "}
                <span className="text-[var(--gijinkai-purple)]">Services</span>
              </h1>
              <p className="max-w-[800px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                We offer a comprehensive suite of digital services to bring your
                vision to life, from concept to launch.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
              {/* Service Card: Web Development */}
              <Card className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
                <CardHeader className="pb-4">
                  <Globe className="h-12 w-12 text-[var(--gijinkai-blue)] mb-4" />
                  <CardTitle className="text-xl font-bold text-[var(--gijinkai-purple)]">
                    Web Development
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Building responsive and high-performance web applications.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 text-gray-700 text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Custom Web Applications</li>
                    <li>E-commerce Solutions</li>
                    <li>CMS Integration</li>
                    <li>API Development</li>
                  </ul>
                </CardContent>
                <Button
                  variant="outline"
                  className="mt-4 px-6 py-2 rounded-lg border-[var(--gijinkai-purple)] text-[var(--gijinkai-purple)] hover:bg-[var(--gijinkai-purple)] hover:text-white transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </Card>

              {/* Service Card: UI/UX Design */}
              <Card className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
                <CardHeader className="pb-4">
                  <Palette className="h-12 w-12 text-[var(--gijinkai-blue)] mb-4" />
                  <CardTitle className="text-xl font-bold text-[var(--gijinkai-purple)]">
                    UI/UX Design
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Crafting intuitive and visually stunning user experiences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 text-gray-700 text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    <li>User Research & Analysis</li>
                    <li>Wireframing & Prototyping</li>
                    <li>Visual Design & Branding</li>
                    <li>Usability Testing</li>
                  </ul>
                </CardContent>
                <Button
                  variant="outline"
                  className="mt-4 px-6 py-2 rounded-lg border-[var(--gijinkai-purple)] text-[var(--gijinkai-purple)] hover:bg-[var(--gijinkai-purple)] hover:text-white transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </Card>

              {/* Service Card: Game Development */}
              <Card className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
                <CardHeader className="pb-4">
                  <Gamepad className="h-12 w-12 text-[var(--gijinkai-blue)] mb-4" />
                  <CardTitle className="text-xl font-bold text-[var(--gijinkai-purple)]">
                    Game Development
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Bringing immersive and engaging game worlds to life.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 text-gray-700 text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Concept & Storyboarding</li>
                    <li>2D/3D Art & Animation</li>
                    <li>Engine Development (Unity/Unreal)</li>
                    <li>Gameplay Programming</li>
                  </ul>
                </CardContent>
                <Button
                  variant="outline"
                  className="mt-4 px-6 py-2 rounded-lg border-[var(--gijinkai-purple)] text-[var(--gijinkai-purple)] hover:bg-[var(--gijinkai-purple)] hover:text-white transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </Card>

              {/* Service Card: Digital Art & Illustration */}
              <Card className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
                <CardHeader className="pb-4">
                  <Code className="h-12 w-12 text-[var(--gijinkai-blue)] mb-4" />
                  <CardTitle className="text-xl font-bold text-[var(--gijinkai-purple)]">
                    Digital Art & Illustration
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Creating stunning visuals for various media.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 text-gray-700 text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Character Design</li>
                    <li>Environment Art</li>
                    <li>Manga & Comic Art</li>
                    <li>Promotional Graphics</li>
                  </ul>
                </CardContent>
                <Button
                  variant="outline"
                  className="mt-4 px-6 py-2 rounded-lg border-[var(--gijinkai-purple)] text-[var(--gijinkai-purple)] hover:bg-[var(--gijinkai-purple)] hover:text-white transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-center">
          <div className="container px-4 md:px-6 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to start your project with us?
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              We're excited to collaborate and bring your digital ideas to life.
            </p>
            <Link href="/contact" prefetch={false}>
              <Button className="bg-gradient-gijinkai-1 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:opacity-90 transition-opacity">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
