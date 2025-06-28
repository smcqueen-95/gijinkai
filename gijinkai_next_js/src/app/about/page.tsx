import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* About Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                About{" "}
                <span className="text-[var(--gijinkai-purple)]">
                  Gijinkai Studio
                </span>
              </h1>
              <p className="max-w-[800px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Creating innovative digital experiences with Japanese-inspired
                design excellence. We are passionate about bringing unique
                visions to life.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[var(--gijinkai-purple)]">
                Our Mission
              </h2>
              <p className="text-gray-700 md:text-lg">
                At Gijinkai Studio, our mission is to blend traditional Japanese
                aesthetics with cutting-edge digital innovation. We strive to
                create immersive and meaningful experiences that resonate deeply
                with users, pushing the boundaries of design and technology. We
                believe in meticulous craftsmanship, attention to detail, and a
                collaborative approach to every project.
              </p>
              <p className="text-gray-700 md:text-lg">
                From intricate game worlds to intuitive web applications and
                captivating digital art, our work is a testament to our
                dedication to excellence and our unique cultural inspiration.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Our Mission"
                className="rounded-lg object-cover shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-center">
          <div className="container px-4 md:px-6 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              Whether you have a clear vision or just an idea, we're here to
              help you bring it to life. Contact us today to discuss your next
              digital masterpiece.
            </p>
            <Link href="#" prefetch={false}>
              <Button className="bg-gradient-gijinkai-1 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:opacity-90 transition-opacity">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
