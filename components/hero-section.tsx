import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#B8C6E5] pt-16">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-secondary sm:text-5xl">Hola, me llamo</h1>
            <h2 className="mt-2 text-3xl font-semibold text-secondary sm:text-4xl">Jhordin Alexander Ucan Can</h2>
            <p className="mt-2 text-xl text-secondary/80">Ing. en Software</p>
            <p className="mt-6 text-secondary/80">
            "Soy un desarrollador de software con un enfoque en la innovación y la evolución constante de la tecnología. 
            Me interesa tanto el desarrollo web como el diseño, combinando funcionalidad y estética para crear soluciones eficientes. 
            Tengo experiencia trabajando con tecnologías como Java, JavaScript, HTML, CSS, SQL y React, además de desarrollar 
            aplicaciones backend con Node.js y Express, priorizando escalabilidad y rendimiento."
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-64 w-64 overflow-hidden rounded-full md:h-96 md:w-96">
              <img
                src="/foto_portfolio.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
