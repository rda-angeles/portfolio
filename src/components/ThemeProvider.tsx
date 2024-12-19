"use client";
import { ReactNode } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemeProvider
      enableSystem
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
