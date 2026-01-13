'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function AILeadGenerator() {
  const { t } = useLanguage();

  const capabilities = [
    'lead.cap.1',
    'lead.cap.2',
    'lead.cap.3',
    'lead.cap.4',
  ];

  return (
    <section id="product" className="relative bg-[#111620] py-24 px-8 lg:px-16">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-white lg:text-[36px]">
              {t('lead.headline')}
            </h2>
            <p className="text-xl text-[#D2D6DE] mt-4">{t('lead.subtitle')}</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-[#D2D6DE]">
              {t('lead.p1')}
              <br />
              {t('lead.p2')}
            </p>

            <p className="text-base text-[#D2D6DE]">
              {t('lead.p3')}
              <br />
              {t('lead.p4')}
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-semibold text-white mb-4">{t('lead.capabilities')}</h3>
            <ul className="space-y-3">
              {capabilities.map((capKey, index) => (
                <motion.li
                  key={capKey}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-base text-[#D2D6DE]"
                >
                  {t(capKey)}
                </motion.li>
              ))}
            </ul>
          </div>

          <p className="text-lg font-medium text-white pt-8">
            {t('lead.closing')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
