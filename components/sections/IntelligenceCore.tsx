'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function IntelligenceCore() {
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
            {t('core.headline')}
          </h2>

          <p className="text-lg leading-relaxed text-[#D2D6DE]">
            {t('core.p1')}
          </p>

          <p className="text-base leading-relaxed text-[#D2D6DE]">
            {t('core.p2')}
          </p>

          <div className="pt-6 space-y-4">
            <p className="text-lg font-medium text-white">
              {t('core.p3')}
            </p>
            <p className="text-base text-[#D2D6DE]">{t('core.p4')}</p>
            <p className="text-base text-[#D2D6DE]">{t('core.p5')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
