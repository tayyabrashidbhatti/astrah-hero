'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="relative bg-[#111620] py-24 px-8 lg:px-16">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center"
        >
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-white lg:text-[36px]">
            {t('pricing.headline')}
          </h2>

          <div className="space-y-4">
            <p className="text-lg text-[#D2D6DE]">{t('pricing.p1')}</p>
            <p className="text-base text-[#D2D6DE]">{t('pricing.p2')}</p>
            <p className="text-base text-[#D2D6DE]">{t('pricing.p3')}</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-[8px] border border-[#1E242D] bg-[#111620] px-8 py-4 text-base font-semibold text-white transition-all hover:border-[#00E5FF]/30 hover:shadow-[0_0_10px_rgba(0,229,255,0.3)] mt-6"
          >
            {t('pricing.cta')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
