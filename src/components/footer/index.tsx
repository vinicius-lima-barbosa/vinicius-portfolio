import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-line py-8">
      <div className="page-shell flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Vinícius Barbosa
          <span className="text-sith-red">.</span>
        </p>
        <p>{t('footer.signature')}</p>
        <a href="#home" className="text-link">
          {t('footer.top')} <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
