export function SkillsSection() {
    const skills = [
      { name: "React", icon: "/React-icon.svg" },
      { name: "JavaScript", icon: "/js.svg" },
      { name: "node.js", icon: "/Node.svg" },
      { name: ".NET", icon: "/NET.svg" },
      { name: "SQL", icon: "/sql.svg" },
    ]
  
    return (
      <section id="habilidades" className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">TECNOLOGÍAS Y HERRAMIENTAS</h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center justify-center space-y-4">
                <div className="h-24 w-24 md:h-32 md:w-32">
                  <img
                    src={skill.icon || "/placeholder.svg"}
                    alt={`${skill.name} icon`}
                    className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  