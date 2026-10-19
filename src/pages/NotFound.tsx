import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main className="page-shell flex min-h-screen flex-col items-start justify-center py-24">
      <p className="eyebrow mb-6">404 / {t('notFound.label')}</p>
      <h1 className="hero-title max-w-2xl text-4xl font-semibold md:text-6xl">
        {t('notFound.title')}
      </h1>
      <p className="mt-6 max-w-lg text-lg text-muted">
        {t('notFound.description')}
      </p>
      <Link to="/" className="button-primary mt-8">
        {t('notFound.button')} <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
};

export default NotFound;
