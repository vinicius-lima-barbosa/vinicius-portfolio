import { useTranslation } from 'react-i18next';

const SKILLS = [
  {
    id: 'frontend',
    technologies: ['React', 'Next.js', 'Angular', 'TypeScript']
  },
  {
    id: 'backend',
    technologies: ['Node.js', 'Nest.js', 'PostgreSQL', 'MongoDB']
  },
  { id: 'delivery', technologies: ['Docker', 'n8n', 'z-api', 'Evolution API'] }
];

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="pb-16 md:pb-24">
      <div className="page-shell">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-xl font-semibold">{t('skills.title')}</h2>
          <p className="text-sm text-muted">{t('skills.description')}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SKILLS.map((skill) => (
            <div key={skill.id} className="panel p-6">
              <h3 className="mb-4 text-base font-semibold">
                {t(`skills.categories.${skill.id}`)}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skill.technologies.map((technology) => (
                  <li key={technology} className="tag">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
