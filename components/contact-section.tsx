"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-primary py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">CONTACTO</h2>
        <div className="flex justify-center gap-5"> 
          <a
            href="mailto:jhordinalexander2015@gmail.com?subject=Contacto desde tu portafolio&body=Hola, me gustaría ponerme en contacto contigo."
            className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-foreground/10 transition-colors hover:bg-secondary-foreground/20"
          >
            <Mail className="h-12 w-12 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/jhordin-alexander-ucan-can-084587290/"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-foreground/10 transition-colors hover:bg-secondary-foreground/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-12 w-12 text-white" />
          </a>
          <a
            href="https://github.com/JHORDINUCAN"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-foreground/10 transition-colors hover:bg-secondary-foreground/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-12 w-12 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
