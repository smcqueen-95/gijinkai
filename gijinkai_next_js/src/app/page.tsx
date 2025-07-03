import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Project 1",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
    imageUrl: "https://placehold.co/400",
    href: "/",
  },
];

export default function Home() {
  return (
    <main>
      <div className="relative isolate overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-primary sm:text-7xl">
              Gijinkai Studio
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <Button asChild variant={"branded"}>
                <Link href={"#"}>Our Projects</Link>
              </Button>
              <Button asChild variant={"outline"}>
                <Link href={"#"}>Contact</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gradient-to-l from-indigo-600 via-blue-500 to-cyan-400 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                <div className="bg-white rounded-lg ">
                  <div className="text-muted cursor-default w-304 font-bold text-7xl md:text-9xl text-center [writing-mode:vertical-lr] [text-orientation:upright] h-96 md:h-[64vh] lg:h-164 ">
                    技尽界スタジオ技尽界スタジオ技尽界スタジオ技尽界スタジオ技尽界スタジオ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div>
          <TypographyH1>Featured Projects</TypographyH1>
          <p className="text-center max-w-sm mx-auto mt-4">
            Explore our latest work across web development, game development and
            manga
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
          {/* <Card>
            <CardHeader>
              <CardTitle>Project 1</CardTitle>
              <CardDescription>
                <TypographyP>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat.
                </TypographyP>
              </CardDescription>
            </CardHeader>
          </Card> */}
          {featuredProjects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <TypographyP>{project.description}</TypographyP>
                </CardDescription>
              </CardHeader>
              {/* <img
                src={project.imageUrl}
                alt={project.title}
                height={400}
                width={400}
                className="h-full w-full object-cover"
              /> */}
            </Card>
          ))}
        </div>
      </Container>
    </main>
  );
}
