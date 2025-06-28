import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Products Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Our{" "}
                <span className="text-[var(--gijinkai-purple)]">Products</span>
              </h1>
              <p className="max-w-[800px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Discover our range of innovative digital products designed to
                enhance your experience.
              </p>
            </div>
          </div>
        </section>

        {/* Product Grid Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
              {/* Product Card 1 */}
              <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Product 1"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[var(--gijinkai-purple)]">
                    Digital Canvas Pro
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Unleash your creativity with our advanced digital art
                    software.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-700 text-sm">
                    Features: Layer management, custom brushes, 4K export, cloud
                    sync.
                  </p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link href="#" className="w-full" prefetch={false}>
                    <Button className="w-full bg-gradient-gijinkai-1 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Product Card 2 */}
              <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Product 2"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[var(--gijinkai-blue)]">
                    Studio Workflow Hub
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Streamline your team's productivity with our integrated
                    project management tool.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-700 text-sm">
                    Features: Task tracking, collaborative boards, time logging,
                    analytics.
                  </p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link href="#" className="w-full" prefetch={false}>
                    <Button className="w-full bg-gradient-gijinkai-1 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Product Card 3 */}
              <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Product 3"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[var(--gijinkai-purple)]">
                    AI Creative Assistant
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Boost your creative process with AI-powered suggestions and
                    tools.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-700 text-sm">
                    Features: Idea generation, content optimization, style
                    transfer, smart editing.
                  </p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link href="#" className="w-full" prefetch={false}>
                    <Button className="w-full bg-gradient-gijinkai-1 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-center">
          <div className="container px-4 md:px-6 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Have a custom product idea?
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              We specialize in bringing unique digital product visions to life.
              Let's discuss your concept.
            </p>
            <Link href="/contact" prefetch={false}>
              <Button className="bg-gradient-gijinkai-1 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:opacity-90 transition-opacity">
                Request a Custom Product
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
