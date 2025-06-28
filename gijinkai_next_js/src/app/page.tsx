import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProjects } from "@/components/featured-projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection />
        <FeaturedProjects />
      </main>
    </div>
  );
}
