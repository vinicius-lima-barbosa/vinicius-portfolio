import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const CONTACTS = [
  {
    id: 'email',
    label: 'viniciusbarbosa0202@gmail.com',
    href: 'mailto:viniciusbarbosa0202@gmail.com',
    external: false
  },
  {
    id: 'linkedin',
    label: 'Vinícius Barbosa',
    href: 'https://www.linkedin.com/in/vinicius-lima-barbosa',
    external: true
  },
  {
    id: 'github',
    label: '@vinicius-lima-barbosa',
    href: 'https://github.com/vinicius-lima-barbosa',
    external: true
  },
  {
    id: 'whatsapp',
    label: '+55 (83) 99964-0036',
    href: 'https://wa.me/5583999640036',
    external: true
  }
];

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const { t } = useTranslation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current || status === 'sending') return;
    setStatus('sending');

    try {
      const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!service || !template || !publicKey)
        throw new Error('Email service unavailable');
      await emailjs.sendForm(service, template, formRef.current, { publicKey });
      formRef.current?.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-space border-t border-line">
      <div className="page-shell grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow mb-4">04 / {t('contact.label')}</p>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="mt-6 max-w-lg text-base text-muted">
            {t('contact.description')}
          </p>
          <div className="mt-8 space-y-4">
            {CONTACTS.map((contact) => (
              <a
                key={contact.id}
                href={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
                className="group flex min-w-0 items-center justify-between gap-4 rounded-lg border border-line p-4 transition-[background-color,border-color] duration-700 ease-fluid hover:border-sith-red/40 hover:bg-surface active:bg-surface-raised"
              >
                <span className="min-w-0">
                  <span className="mb-1 block text-xs text-muted">
                    {t(`contact.channels.${contact.id}`)}
                  </span>
                  <span className="block break-all text-sm font-medium">
                    {contact.label}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-muted transition-colors duration-700 ease-fluid group-hover:text-sith-red"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="panel p-6 md:p-8"
        >
          <h3 className="mb-8 text-xl font-semibold">
            {t('contact.form.title')}
          </h3>
          <fieldset disabled={status === 'sending'} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                {t('contact.form.name')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={120}
                className="form-field"
                placeholder={t('contact.form.namePlaceholder')}
              />
            </div>
            <div>
              <label
                htmlFor="reply_to"
                className="mb-2 block text-sm font-medium"
              >
                {t('contact.form.email')}
              </label>
              <input
                id="reply_to"
                name="reply_to"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                className="form-field"
                placeholder={t('contact.form.emailPlaceholder')}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={5000}
                className="form-field resize-y"
                placeholder={t('contact.form.messagePlaceholder')}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="button-primary w-full"
            >
              {t(
                status === 'sending'
                  ? 'contact.form.sending'
                  : 'contact.form.button'
              )}
              <span aria-hidden="true">↗</span>
            </button>
          </fieldset>
          <div aria-live="polite" aria-atomic="true" className="mt-4 text-sm">
            {status === 'sending' && (
              <span className="text-muted">{t('contact.sending')}</span>
            )}
            {status === 'success' && <span>{t('contact.success')}</span>}
            {status === 'error' && (
              <p className="text-muted">
                {t('contact.error')}{' '}
                <a
                  href="mailto:viniciusbarbosa0202@gmail.com"
                  className="underline underline-offset-4"
                >
                  {t('contact.fallback')}
                </a>
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
