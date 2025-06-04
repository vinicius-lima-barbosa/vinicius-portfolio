import { Code, Database, Globe, Server } from 'lucide-react';

const SKILLS_DATA = [
  {
    category: 'Frontend',
    icon: <Globe className="w-8 h-8" />,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS'
    ]
  },
  {
    category: 'Backend',
    icon: <Server className="w-8 h-8" />,
    technologies: [
      'Node.js',
      'Express',
      'Fastify',
      'Golang',
      'JavaScript',
      'TypeScript'
    ]
  },
  {
    category: 'Database',
    icon: <Database className="w-8 h-8" />,
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase']
  },
  {
    category: 'Tools',
    icon: <Code className="w-8 h-8" />,
    technologies: [
      'Git',
      'Docker',
      'Vscode',
      'AWS',
      'Vercel',
      'Figma',
      'Postman'
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Div para título */}
        <div className="text-center mb-14">
          <h2 className="font-starwars text-3xl md:text-5xl font-bold text-sith-red mb-6">
            PODERES DO LADO NEGRO
          </h2>
          <p className="text-xl text-empire-silver max-w-2xl mx-auto mb-4">
            "Seu destino está selado. Suas habilidades técnicas, agora
            completas."
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from -transparent via-[#dc143c] to-transparent mx-auto" />
        </div>

        {/* Div para habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((skill, index) => (
            <div
              key={skill.category}
              className="imperial-border rounded-lg p-6 hover:imperial-border-hover hover:cursor-default transition-all duration-600 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Div para Icons e Categorias */}
              <div className="flex items-center mb-4">
                <div className="text-sith-red group-hover:animate-pulse">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-empire-silver ml-3">
                  {skill.category}
                </h3>
              </div>

              {/* Div para Tecnologias */}
              <div className="grid grid-cols-3 text-center">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-sith-gray hover:bg-sith-red-hover text-empire-silver hover:text-sith-red-hover px-3 py-1 rounded-full mr-2 mb-2 text-sm font-medium transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Div para citação */}
        <div className="mt-16 text-center">
          <div className="imperial-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-starwars text-2xl text-sith-red mb-4">
              "O poder da Força é Ilimitado"
            </h3>
            <p className="text-empire-silver leading-relaxed">
              Sempre em busca de novos conhecimentos e tecnologias para
              fortalecer meu arsenal. A jornada para o lado negro nunca termina,
              e nem meu aprendizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
