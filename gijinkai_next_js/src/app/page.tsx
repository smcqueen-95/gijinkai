import Container from "@/components/container";
import GlassmorphismOrb from "@/components/glassmorphism-orb";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Container className="min-h-[70vh] items-center grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="text-6xl font-bold leading-tight">
            {/* 技尽界スタジオ <br /> */}
            Gijinkai Studio
          </div>
          <div className="text-muted-foreground text-lg max-w-lg">
            Creating innovative digital experiences with Japanese-inspired
            design excellence.
          </div>
          <div className="gap-2 flex">
            <Button variant={"branded"}>Our Projects</Button>
            <Button variant={"outline"}>Contact Us</Button>
          </div>
        </div>

        <div className="relative h-full w-full py-12">
          <GlassmorphismOrb />

          <div className="font-bold absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-7xl lg:text-6xl whitespace-nowrap bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            技尽界スタジオ
          </div>
        </div>
      </Container>
    </main>
  );
}
