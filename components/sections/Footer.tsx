'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function Footer() {
  const { t, language, setLanguage } = useLanguage();
  const productLinks = ['nav.product', 'nav.pricing', 'nav.migration'];
  const legalLinks = ['Privacy', 'Terms', 'Acceptable Use', 'Refunds'];

  return (
    <footer className="relative bg-[#111620] border-t border-[#1E242D] py-12 px-8 lg:px-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2">
              {productLinks.map((linkKey) => (
                <li key={linkKey}>
                  <a
                    href={`#${linkKey.split('.')[1]}`}
                    className="text-sm text-[#D2D6DE] hover:text-white transition-colors"
                  >
                    {t(linkKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-[#D2D6DE] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t('footer.language')}</h3>
            <div className="flex gap-4">
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm transition-colors ${
                  language === 'en'
                    ? 'text-[#00E5FF] font-semibold'
                    : 'text-[#D2D6DE] hover:text-white'
                }`}
              >
                English
              </button>
              <span className="text-sm text-[#D2D6DE]">/</span>
              <button
                onClick={() => setLanguage('ar')}
                className={`text-sm transition-colors ${
                  language === 'ar'
                    ? 'text-[#00E5FF] font-semibold'
                    : 'text-[#D2D6DE] hover:text-white'
                }`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E242D] pt-8">
          <p className="text-sm text-[#D2D6DE] text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
