import ProfileImage from '../../assets/my-image.jpeg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-starwars text-3xl md:text-5xl font-bold text-sith-red mb-6">
            SOBRE O LORD SITH
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from -transparent via-[#dc143c] to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Div para o lado esquerdo */}
          <div className="space-y-6">
            {/* Div para o texto de about */}
            <div className="imperial-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-empire-silver mb-4">
                A jornada para o lado negro
              </h3>
              <p className="text-empire-silver/80 leading-relaxed mb-4">
                Assim como Anakin Skywalker se tornou Darth Vader, minha jornada
                no desenvolvimento começou com curiosidade e evoluiu para uma
                paixão obsessiva pela perfeição do código.
              </p>
              <p className="text-empire-silver/80 leading-relaxed mb-4">
                Domino as artes sombrias do JavaScript, React, e TypeScript.
                Minha sede de conhecimento é insaciável, e minha dedicação aos
                projetos é absoluta.
              </p>
              <p className="text-empire-silver/80 leading-relaxed mb-4">
                "O medo leva à raiva, a raiva ao ódio leva e o ódio leva ao
                código perfeito."
              </p>
            </div>

            {/* Div para mais detalhes */}
            <div className="grid grid-cols-2 gap-4">
              {/* Div para anos de experiência */}
              <div className="imperial-only-border rounded-lg p-4 text-center imperial-border">
                <p className="text-3xl font-starwars text-sith-red mb-2">2+</p>
                <p>Anos de Experiência</p>
              </div>

              {/* Div para quantidade de projetos */}
              <div className="imperial-only-border rounded-lg p-4 text-center imperial-border">
                <p className="text-3xl font-starwars text-sith-red mb-2">8+</p>
                <p>Projetos Conquistados</p>
              </div>
            </div>
          </div>

          {/* Div para o lado direito */}
          <div className="relative">
            <div className="imperial-border rounded-lg p-8 text-center">
              {/* Div para a imagem de perfil e citação */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-sith-gray to-sith-black rounded-full flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-4 border-2 imperial-border rounded-full animate-spin opacity-30" />
                <img
                  src={ProfileImage}
                  alt="Profile Image"
                  className="w-60 h-60 rounded-full object-cover z-10"
                />
              </div>
              <h4 className="font-imperial text-xl font-bold text-empire-silver mb-4">
                "Você não conhece o poder do lado negro..."
              </h4>
              <p className="text-empire-silver/80 italic">
                Mestre em transformar ideias em realidade digital, usando o
                poder do lado negro da programação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
