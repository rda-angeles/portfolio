import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "500", "200"],
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
    title: 'RDA | Portfolio',
    description: "A very informative website about me!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex flex-col min-h-screen antialiased",
          raleway.className
        )}
      >
        <ThemeProvider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
