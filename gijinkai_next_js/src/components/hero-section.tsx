import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-20 z-0" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="text-[var(--gijinkai-purple)]">技尽界</span>{" "}
                Gijinkai Studio
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Creating innovative digital experiences with Japanese-inspired
                design excellence.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-gradient-gijinkai-1 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                Our Projects
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 rounded-lg border-[var(--gijinkai-purple)] text-[var(--gijinkai-purple)] hover:bg-[var(--gijinkai-purple)] hover:text-white transition-colors bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Large frosted glass element with "技尽界" */}
            <div className="absolute w-[400px] h-[30vh] bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow-xl border border-white/30">
              <span className="text-5xl font-bold text-[var(--gijinkai-purple)]/70">
                技尽界
              </span>
            </div>
            {/* Decorative line from screenshot */}
          </div>
        </div>
      </div>
    </section>
  );
}
