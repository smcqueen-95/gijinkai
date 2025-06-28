import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturedProjects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our latest work across game development, web applications,
              and digital art.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="flex flex-col items-center justify-center p-6 text-center bg-[var(--gijinkai-card-light-purple)] border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-[var(--gijinkai-purple)]">
                Game Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A captivating new game experience.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-center p-6 text-center bg-[var(--gijinkai-card-light-blue)] border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-[var(--gijinkai-blue)]">
                Web App
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Innovative web solutions for modern businesses.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-center p-6 text-center bg-[var(--gijinkai-card-light-green)] border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-[var(--gijinkai-purple)]">
                Manga
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Bringing stories to life through digital art.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
