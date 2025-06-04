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

        <div>
          {/* Div para o lado esquerdo */}
          <div>
            {/* Div para o texto de about */}
            <div>
              <h3>A jornada para o lado negro</h3>
              <p>
                Assim como Anakin Skywalker se tornou Darth Vader, minha jornada
                no desenvolvimento começou com curiosidade e evoluiu para uma
                paixão obsessiva pela perfeição do código.
              </p>
              <p>
                Domino as artes sombrias do JavaScript, React, e TypeScript.
                Minha sede de conhecimento é insaciável, e minha dedicação aos
                projetos é absoluta.
              </p>
              <p>
                "O medo leva à raiva, a raiva ao ódio leva e o ódio leva ao
                código perfeito."
              </p>
            </div>

            {/* Div para mais detalhes */}
            <div>
              {/* Div para anos de experiência */}
              <div>
                <p>3</p>
                <p>Anos de Experiência</p>
              </div>

              {/* Div para quantidade de projetos */}
              <div>
                <p>10+</p>
                <p>Projetos Concluídos</p>
              </div>
            </div>
          </div>

          {/* Div para o lado direito */}
          <div>
            <div>
              {/* Div para Imagem */}
              <div>
                <img src={ProfileImage} alt="Progile Image" />
              </div>
              <h4>Juntos podemos dominar a galáxia do desenvolvimento web!</h4>
              <p>
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
