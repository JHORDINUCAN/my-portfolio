"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary-foreground p-2">
                  <div className="h-full w-full rounded-full bg-primary" />
                </div>
                <span className="text-lg font-semibold text-white">Jhordin Alexander Ucan Can</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Sobre Mí", "Habilidades", "Portafolio", "Contacto"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-primary hover:text-white"
                >
                  {item}
                </Link>
              ))}
              <a
                href="https://drive.google.com/file/d/195zqF77-e6No3WL-Ydgftebg5bUupkPC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-primary hover:text-white"
              >
                Curriculum
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-primary hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {["Sobre Mí", "Habilidades", "Portafolio", "Contacto"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-primary hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <a
                href="https://drive.google.com/file/d/195zqF77-e6No3WL-Ydgftebg5bUupkPC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-primary hover:text-white"
              >
                Curriculum
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
