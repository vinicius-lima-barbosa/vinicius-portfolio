import NordsolLogo from '../../assets/NordsolLogo.png';
import Sun4Logo from '../../assets/Sun4Logo.png';
import { useTranslation } from 'react-i18next';

const EXPERIENCES_DATA = [
  {
    image: <img src={NordsolLogo} alt="Nordsol Logo" height={48} width={48} />,
    title: 'Nordsol Patos',
    role: 'experiences.nordsol.role',
    description: 'experiences.nordsol.description',
    date: 'experiences.nordsol.date',
    stack: ['React', 'Node.js', 'TypeScript']
  },
  {
    image: <img src={Sun4Logo} alt="Sun4 Logo" height={48} width={48} />,
    title: 'Sun4',
    role: 'experiences.sun4.role',
    description: 'experiences.sun4.description',
    date: 'experiences.sun4.date',
    stack: ['React', 'TypeScript', 'Material UI']
  }
];

const ExperienceSection = () => {
  const { t } = useTranslation();
  return (
    <section id="experiences" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Div para Titulo */}
        <div className="text-center mb-14">
          <h1 className="font-starwars text-3xl md:text-5xl font-bold text-sith-red mb-6">
            {t('experiences.title')}
          </h1>
          <p className="text-xl text-empire-silver max-w-2xl mx-auto mb-4">
            {t('experiences.subtitle')}
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from -transparent via-[#dc143c] to-transparent mx-auto" />
        </div>
        {/* Seção para Cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCES_DATA.map((experience) => (
            <div
              key={experience.title}
              className="imperial-border rounded-lg overflow-hidden hover:border-sith-red/60 transition-all duration-300 group"
            >
              <div className="h-32 bg-gradient-to-br from-sith-gray to-sith-black flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {experience.image}
              </div>

              <div className="flex flex-col items-cente p-6 gap-2">
                <h3 className="font-starwars text-xl font-bold text-empire-silver">
                  {experience.title} / {t(experience.role)}
                </h3>
                <p className="text-lg text-empire-silver mb-4">
                  {t(experience.description)}{' '}
                  <span className="font-bold">{t(experience.date)}</span>
                </p>

                <div className="grid grid-cols-3 text-center">
                  {experience.stack.map((stack) => (
                    <span
                      key={stack}
                      className="inline-block bg-sith-gray hover:bg-sith-red-hover text-empire-silver hover:text-sith-red-hover px-3 py-1 rounded-full mr-2 mb-2 text-sm font-medium transition-colors duration-300"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
