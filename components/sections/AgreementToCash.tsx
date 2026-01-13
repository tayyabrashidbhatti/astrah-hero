'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function AgreementToCash() {
  const { t } = useLanguage();
  return (
    <section className="relative bg-[#111620] py-24 px-8 lg:px-16">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-white lg:text-[36px]">
            {t('cash.headline')}
          </h2>

          <p className="text-lg leading-relaxed text-[#D2D6DE]">
            {t('cash.p1')}
            <br />
            {t('cash.p2')}
          </p>

          <div className="space-y-6 pt-6">
            <h3 className="text-xl font-semibold text-white">{t('cash.concept')}</h3>
            <p className="text-lg text-[#D2D6DE]">{t('cash.concept.1')}</p>
            <p className="text-base text-[#D2D6DE]">
              {t('cash.concept.2')}
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <div>
              <p className="text-base text-[#D2D6DE] mb-2">{t('cash.old')}</p>
              <p className="text-lg text-white">{t('cash.old.way')}</p>
            </div>
            <div>
              <p className="text-base text-[#D2D6DE] mb-2">{t('cash.astrah')}</p>
              <p className="text-lg text-[#00E5FF]">{t('cash.astrah.way')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
