'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function AIDealIntelligence() {
  const { t } = useLanguage();

  const signals = [
    'deal.signal.1',
    'deal.signal.2',
    'deal.signal.3',
  ];

  const principles = [
    'deal.principle.1',
    'deal.principle.2',
    'deal.principle.3',
    'deal.principle.4',
  ];

  return (
    <section className="relative bg-[#0B0F17] py-24 px-8 lg:px-16">
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
              {t('deal.headline')}
            </h2>
            <p className="text-xl text-[#D2D6DE] mt-4">{t('deal.subtitle')}</p>
          </div>

          <p className="text-lg text-[#D2D6DE]">
            {t('deal.p1')}
          </p>

          <p className="text-base leading-relaxed text-[#D2D6DE]">
            {t('deal.p2')}
          </p>

          <div className="pt-6">
            <h3 className="text-lg font-semibold text-white mb-4">{t('deal.signals')}</h3>
            <ul className="space-y-3">
              {signals.map((signalKey, index) => (
                <motion.li
                  key={signalKey}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-base text-[#D2D6DE]"
                >
                  {t(signalKey)}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-semibold text-white mb-4">{t('deal.principle')}</h3>
            <div className="space-y-2">
              {principles.map((principleKey, index) => (
                <motion.p
                  key={principleKey}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-base text-[#D2D6DE]"
                >
                  {t(principleKey)}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
