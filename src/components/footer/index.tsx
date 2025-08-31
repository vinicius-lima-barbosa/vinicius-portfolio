import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-sith-black border-t border-sith-red py-8 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="font-starwars text-2xl font-bold text-sith-red text-glow mb-2">
            IMPÉRIO.GALÁTICO.DEV
          </h3>
          <p className="text-empire-silver">"{t('footer.quote1')}"</p>
        </div>

        <div className="border-t border-sith-red pt-6">
          <p className="text-empire-silver mt-2">
            © 2025 Vinícius Barbosa - {t('footer.rights')}
          </p>
          <p className="text-empire-silver mt-2">"{t('footer.quote2')}"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
