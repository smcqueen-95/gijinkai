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
import { CheckIcon } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Pricing Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Flexible{" "}
                <span className="text-[var(--gijinkai-purple)]">Pricing</span>
              </h1>
              <p className="max-w-[800px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Choose the plan that best fits your project needs. We offer
                transparent pricing with no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
              {/* Basic Plan */}
              <Card className="flex flex-col justify-between p-6 bg-white shadow-lg rounded-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-[var(--gijinkai-purple)]">
                    Basic
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Ideal for small projects and startups.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="text-4xl font-bold">
                    $999
                    <span className="text-lg font-normal text-gray-500">
                      /project
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      Custom Design (1 revision)
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      Basic Development
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      Standard Support
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      Up to 3 pages/features
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Link href="/contact" className="w-full" prefetch={false}>
                    <Button className="w-full bg-gradient-gijinkai-1 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                      Choose Basic
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="flex flex-col justify-between p-6 bg-white shadow-lg rounded-lg border-2 border-[var(--gijinkai-purple)]">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-[var(--gijinkai-purple)]">
                    Pro
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Perfect for growing businesses and complex projects.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="text-4xl font-bold">
                    $2999
                    <span className="text-lg font-normal text-gray-500">
                      /project
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      Advanced Custom Design (3 revisions)
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      Full-stack Development
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      Priority Support
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      Up to 10 pages/features
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      Dedicated Project Manager
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Link href="/contact" className="w-full" prefetch={false}>
                    <Button className="w-full bg-gradient-gijinkai-1 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                      Choose Pro
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="flex flex-col justify-between p-6 bg-white shadow-lg rounded-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-[var(--gijinkai-purple)]">
                    Enterprise
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    For large-scale and custom solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="text-4xl font-bold">
                    Custom
                    <span className="text-lg font-normal text-gray-500">
                      /quote
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      Tailored Design & Development
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      Dedicated Team
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      24/7 Premium Support
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      Unlimited pages/features
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[var(--gijinkai-blue)]" />
                      SLA & On-site Consulting
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Link href="/contact" className="w-full" prefetch={false}>
                    <Button className="w-full bg-gradient-gijinkai-1 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                      Contact for Quote
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
              Not sure which plan is right for you?
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              Our team is ready to help you find the perfect solution for your
              unique requirements.
            </p>
            <Link href="/contact" prefetch={false}>
              <Button className="bg-gradient-gijinkai-1 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:opacity-90 transition-opacity">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
