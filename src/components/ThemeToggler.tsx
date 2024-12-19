"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setIsMounted] = useState(false);
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
    setIsMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      className={cn(
        "dark:text-foreground",
        scrolled ? "text-muted" : "text-foreground"
      )}
      variant={"ghost"}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon width="20px" height="20px" />
      ) : (
        <MoonIcon width="20px" height="20px" />
      )}
    </Button>
  );
}
