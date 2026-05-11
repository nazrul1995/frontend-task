'use client';

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      {/* Main Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 transparent">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
          Rise at Seven<span className="text-[10px] align-top">®</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/20 transition-colors">
                  Services +
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-[500px] gap-6 p-6 bg-white rounded-3xl shadow-2xl">
                    <div className="flex flex-col gap-4 flex-1">
                      {["US Digital PR", "Spain Digital PR", "Germany Digital PR", "Netherlands Digital PR"].map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="text-2xl font-bold text-black hover:text-emerald-500 transition-colors tracking-tight"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                    <div className="relative h-44 w-52 overflow-hidden rounded-2xl shadow-inner">
                      <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                        alt="Team"
                        className="object-cover w-full h-full"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/20 transition-colors">
                  Industries +
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-[500px] gap-6 p-6 bg-white rounded-3xl shadow-2xl">
                    <div className="flex flex-col gap-4 flex-1">
                      {["US Digital PR", "Spain Digital PR", "Germany Digital PR", "Netherlands Digital PR"].map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="text-2xl font-bold text-black hover:text-emerald-500 transition-colors tracking-tight"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                    <div className="relative h-44 w-52 overflow-hidden rounded-2xl shadow-inner">
                      <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                        alt="Team"
                        className="object-cover w-full h-full"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/20 transition-colors">
                  Industries +
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-[500px] gap-6 p-6 bg-white rounded-3xl shadow-2xl">
                    <div className="flex flex-col gap-4 flex-1">
                      {["US Digital PR", "Spain Digital PR", "Germany Digital PR", "Netherlands Digital PR"].map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="text-2xl font-bold text-black hover:text-emerald-500 transition-colors tracking-tight"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                    <div className="relative h-44 w-52 overflow-hidden rounded-2xl shadow-inner">
                      <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                        alt="Team"
                        className="object-cover w-full h-full"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/20 transition-colors">
                  Industries +
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-[500px] gap-6 p-6 bg-white rounded-3xl shadow-2xl">
                    <div className="flex flex-col gap-4 flex-1">
                      {["US Digital PR", "Spain Digital PR", "Germany Digital PR", "Netherlands Digital PR"].map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="text-2xl font-bold text-black hover:text-emerald-500 transition-colors tracking-tight"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                    <div className="relative h-44 w-52 overflow-hidden rounded-2xl shadow-inner">
                      <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                        alt="Team"
                        className="object-cover w-full h-full"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {["Work", "Careers", "Blog"].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-white hover:bg-white/10 hover:text-white transition-colors"
                      )}
                    >
                      {item}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="rounded-full bg-white px-5 py-2 text-xs md:text-sm font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          Get In Touch ↗
        </Link>
      </nav>
    </>

  );
};

export default Navbar;