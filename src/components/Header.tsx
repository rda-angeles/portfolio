import React from "react";
import ThemeToggler from "./ThemeToggler";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 py-6 bg-transparent backdrop-opacity-10 bg-muted/70 ">
      <nav className="container max-w-3xl flex items-center justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold">
            R.D.A
          </Link>
        </div>

        <ul className="flex items-center gap-6 text-sm font-light">
          <li className="transition-colors">
            <Link href="#techStacks">Technology Stacks</Link>
          </li>
          <li className="transition-colors">
          <Link href="#projects">Projects</Link>
          </li>
          <li className="transition-colors">
          <Link href="#life">Life</Link>
          </li>
          <li className="transition-colors">
          <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <div>
          <ThemeToggler />
        </div>
      </nav>
    </header>
  );
};

export default Header;
