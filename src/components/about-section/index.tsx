import ProfileImage from '../../assets/my-image.jpeg';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-starwars text-3xl md:text-5xl font-bold text-sith-red mb-6">
            {t('about.title')}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from -transparent via-[#dc143c] to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Div para o lado esquerdo */}
          <div className="space-y-6">
            {/* Div para o texto de about */}
            <div className="imperial-border rounded-lg p-8 text-justify">
              <h3 className="text-2xl font-bold text-empire-silver mb-4">
                {t('about.subtitle')}
              </h3>
              <p className="text-empire-silver/80 leading-relaxed mb-4">
                {t('about.description1')}
              </p>
              <p className="text-empire-silver/80 leading-relaxed mb-4">
                {t('about.description2')}
              </p>
              <p className="text-empire-silver/80 leading-relaxed mb-4">
                {t('about.description3')}
              </p>
            </div>

            {/* Div para mais detalhes */}
            <div className="grid grid-cols-2 gap-4">
              {/* Div para anos de experiência */}
              <div className="imperial-only-border rounded-lg p-4 text-center imperial-border">
                <p className="text-3xl font-starwars text-sith-red mb-2">2+</p>
                <p>{t('about.yearsExperience')}</p>
              </div>

              {/* Div para quantidade de projetos */}
              <div className="imperial-only-border rounded-lg p-4 text-center imperial-border">
                <p className="text-3xl font-starwars text-sith-red mb-2">8+</p>
                <p>{t('about.projectsConquered')}</p>
              </div>
            </div>
          </div>

          {/* Div para o lado direito */}
          <div className="relative">
            <div className="imperial-border rounded-lg p-8 text-center grid justify-center">
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
                {t('about.quote')}
              </h4>
              <p className="text-empire-silver/80 italic">
                {t('about.masterDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
