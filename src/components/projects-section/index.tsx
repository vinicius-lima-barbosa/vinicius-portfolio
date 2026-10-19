import { useTranslation } from 'react-i18next';

const PROJECTS = [
  {
    id: 'support',
    company: 'Nordsol',
    stack: ['Next.js', 'Nest.js', 'n8n', 'Docker']
  },
  {
    id: 'referrals',
    company: 'Nordsol',
    stack: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'legal',
    company: 'Sun4',
    stack: ['React', 'Next.js', 'TypeScript', 'Zustand', 'CI/CD']
  }
];

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section-space border-t border-line">
      <div className="page-shell">
        <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow mb-4">01 / {t('projects.label')}</p>
            <h2 className="section-title">{t('projects.title')}</h2>
          </div>
          <p className="max-w-lg text-base text-muted">
            {t('projects.description')}
          </p>
        </div>
        <div className="space-y-6">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className="panel grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12"
            >
              <div>
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <span className="text-sm text-sith-red">0{index + 1}</span>
                  <span className="eyebrow">{project.company}</span>
                  <span className="tag">
                    {t(`projects.${project.id}.type`)}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {t(`projects.${project.id}.title`)}
                </h3>
                <p className="mt-4 text-base text-muted">
                  {t(`projects.${project.id}.context`)}
                </p>
                <ul
                  className="mt-6 flex flex-wrap gap-2"
                  aria-label={t('projects.stack')}
                >
                  {project.stack.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-6">
                <div>
                  <p className="eyebrow mb-3">{t('projects.contribution')}</p>
                  <p className="text-base text-muted">
                    {t(`projects.${project.id}.contribution`)}
                  </p>
                </div>
                <div className="rounded-lg bg-background p-6">
                  <p className="eyebrow mb-3">{t('projects.result')}</p>
                  <p className="text-base font-medium">
                    {t(`projects.${project.id}.result`)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
