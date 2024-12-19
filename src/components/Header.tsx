"use client";

import ThemeToggler from "./ThemeToggler";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
    }

    return;
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 py-6 backdrop-opacity-10 transition duration-300 ease-out",
        scrolled ? "bg-muted-foreground/80 dark:bg-muted/70" : "bg-transparent"
      )}
    >
      <nav className="container max-w-3xl flex items-center justify-between">
        <div>
          <Link
            href="/"
            className={cn(
              "text-2xl font-bold dark:text-foreground",
              scrolled ? "text-muted" : "text-foreground"
            )}
          >
            R.D.A
          </Link>
        </div>

        <ul className="hidden flex items-center gap-6 text-sm md:flex">
          <li
            className={cn(
              "dark:text-foreground/80",
              scrolled ? "text-muted" : "text-foreground"
            )}
          >
            <Link href="#techStacks">Technology Stacks</Link>
          </li>
          <li
            className={cn(
              "dark:text-foreground/80",
              scrolled ? "text-muted" : "text-foreground"
            )}
          >
            <Link href="#projects">Projects</Link>
          </li>
          <li
            className={cn(
              "dark:text-foreground/80",
              scrolled ? "text-muted" : "text-foreground"
            )}
          >
            <Link href="#life">Life</Link>
          </li>
        </ul>

        <div className="flex items-center gap-x-3">
          <div className=" lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <HamburgerMenuIcon width="25px" height="25px" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 mr-20">
                <Link href="#techStacks">
                  <DropdownMenuItem>Technology Stacks</DropdownMenuItem>
                </Link>
                <Link href="#projects">
                  <DropdownMenuItem>Projects</DropdownMenuItem>
                </Link>
                <Link href="#life">
                  <DropdownMenuItem>Life</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <ThemeToggler />
        </div>
      </nav>
    </header>
  );
};

export default Header;
