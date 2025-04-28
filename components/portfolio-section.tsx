import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Proyecteca",
    description: "Biblioteca digital para la Universidad Politécnica de Quintana Roo. Trabajo colaborativo para mis Estancias I.",
    technologies: ["React", "Next.js", "TailwindCSS"],
    image: "/proyecteca.jpg",
    link: "https://github.com/AlbertoCastre/Proyecteca",
  },
  {
    title: "PeerTutor",
    description: "Plataforma para agendar tutorías dentro de la UPQROO. Proyecto desarrollado con mi equipo de trabajo en Estancias II.",
    technologies: ["React", "Node.js", "Express", "SQL"],
    image: "/peertutor.jpg",
    link: "https://github.com/JHORDINUCAN/PeerTutorBack",
  },
  {
    title: "HolyTravel",
    description: "Proyecto escolar enfocado en UI/UX. Mockup de una página de viajes donde trabajé en el storytelling y los mockups de alta fidelidad.",
    technologies: ["Figma", "Canva"],
    image: "/HolyTravel.png",
    link: "https://www.figma.com/proto/Wr1BW1Sykn2rrW2YA0fnXj/Holy-Travel?node-id=864-4037&t=YqG3mw8P7nco31CS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=102%3A2",
  },
  {
    title: "Divine Design Print", 
    description: "Plataforma Ecommerce para la venta de productos de imprenta y diseño gráfico. Proyecto desarrollado con mi equipo de trabajo en D3P (Divine Design Print).",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    image: "/d3p.jpg",
    link: "https://d3p-divine-design-print.sweet-travelcancun.com/",
  },
];

export function PortfolioSection() {
  return (
    <section id="portafolio" className="bg-[#B8C6E5] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-secondary">PORTAFOLIO</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <CardHeader className="p-0">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="responsive"
                    width={500}
                    height={300}
                    objectFit="cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="mb-2 text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <p className="mt-2 text-sm font-semibold text-gray-700">
                  Tecnologías: <span className="text-gray-500">{project.technologies.join(", ")}</span>
                </p>
                <div className="flex justify-center mt-4">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-secondary text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-opacity-80">
                      Ver repositorio
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
