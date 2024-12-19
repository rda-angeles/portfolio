"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant={"ghost"}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
