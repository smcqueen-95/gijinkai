import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
      <Link href="#" className="flex items-center space-x-2" prefetch={false}>
        <span className="text-lg font-bold text-[var(--gijinkai-purple)]">
          技尽界
        </span>
        <span className="text-lg font-bold">Gijinkai Studio</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
        <Link
          href="/"
          className="hover:text-[var(--gijinkai-purple)] transition-colors"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="hover:text-[var(--gijinkai-purple)] transition-colors"
          prefetch={false}
        >
          Projects
        </Link>
        <Link
          href="/services"
          className="text-[var(--gijinkai-purple)] underline"
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="/products"
          className="hover:text-[var(--gijinkai-purple)] transition-colors"
          prefetch={false}
        >
          Products
        </Link>
        <Link
          href="/about"
          className="hover:text-[var(--gijinkai-purple)] transition-colors"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/pricing"
          className="hover:text-[var(--gijinkai-purple)] transition-colors"
          prefetch={false}
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="hover:text-[var(--gijinkai-purple)] transition-colors"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <Button className="hidden md:inline-flex bg-gradient-gijinkai-2 text-white px-6 py-2 rounded-full shadow-lg hover:opacity-90 transition-opacity">
        Get Started
      </Button>
      <Button variant="ghost" size="icon" className="md:hidden">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
