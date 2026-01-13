'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function RealityCheck() {
  const { t } = useLanguage();

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
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-white lg:text-[36px]">
            {t('reality.headline')}
          </h2>

          <div className="space-y-4">
            <p className="text-lg text-[#D2D6DE]">{t('reality.signal1')}</p>
            <p className="text-lg text-[#D2D6DE]">{t('reality.signal2')}</p>
            <p className="text-lg text-[#D2D6DE]">{t('reality.signal3')}</p>
          </div>

          <div className="space-y-6 pt-8">
            <p className="text-base leading-relaxed text-[#D2D6DE]">
              {t('reality.context')}
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-white">{t('reality.gap.title')}</h3>
              <p className="text-base text-[#D2D6DE]">{t('reality.gap.1')}</p>
              <p className="text-base text-[#D2D6DE]">{t('reality.gap.2')}</p>
              <p className="text-base text-[#D2D6DE]">{t('reality.gap.3')}</p>
              <p className="text-base text-[#D2D6DE]">{t('reality.gap.4')}</p>
            </div>

            <p className="text-xl font-semibold text-[#00E5FF] pt-6">{t('reality.statement')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
