"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import Container from "./container";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <Container className="flex justify-between py-2 items-center bg-background/30 backdrop-blur-2xl sticky top-0 z-50 w-full">
      <div className="font-bold xl:text-xl">
        <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent mr-2">
          技尽界スタジオ
        </span>
        <span className="hidden sm:inline">Gijinkai Studio</span>
      </div>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:flex" viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/home">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/projects">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/services">Services</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/products">Products</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4 p-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      Components
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      Documentation
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      Blocks
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/pricing">Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem
            asChild
            className={buttonVariants({ variant: "branded" })}
          >
            <Link href={"/contact"}>Get In Touch</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden bg-transparent"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            {/* The brand title is now visible at the top of the sheet */}
            <SheetTitle className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent text-2xl">
              技尽界スタジオ
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-8 px-4">
            <Link
              href="/home"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/products"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <div className="space-y-2">
              <div className="text-lg font-medium">About</div>
              <div className="pl-4 space-y-2">
                <Link
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Components
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Documentation
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Blocks
                </Link>
              </div>
            </div>
            <Link
              href="/pricing"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
          <SheetFooter>
            <Button
              asChild
              className="mt-4"
              variant="branded"
              onClick={() => setOpen(false)}
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </Container>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
