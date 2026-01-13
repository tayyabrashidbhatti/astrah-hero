'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function FooterCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0B0F17] py-24 px-8 lg:px-16">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-white lg:text-[36px]">
            {t('footercta.headline')}
          </h2>

          <p className="text-lg leading-relaxed text-[#D2D6DE] max-w-2xl mx-auto">
            {t('footercta.p1')}
          </p>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 20px rgba(0, 229, 255, 0.4), 0 0 40px rgba(0, 229, 255, 0.2)'
            }}
            whileTap={{ scale: 0.98 }}
            className="rounded-[8px] bg-[#00E5FF] px-8 py-4 text-base font-semibold text-[#0B0F17] transition-all hover:shadow-[0_0_10px_rgba(0,229,255,0.3)] mt-6"
          >
            {t('nav.cta')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
