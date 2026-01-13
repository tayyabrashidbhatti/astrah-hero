'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function WhyAstrah() {
  const { t } = useLanguage();

  const legacyItems = [
    'whystrah.legacy.1',
    'whystrah.legacy.2',
    'whystrah.legacy.3',
    'whystrah.legacy.4',
  ];

  const astrahItems = [
    'whystrah.astrah.1',
    'whystrah.astrah.2',
    'whystrah.astrah.3',
    'whystrah.astrah.4',
  ];

  return (
    <section className="relative bg-[#0B0F17] py-24 px-8 lg:px-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-white lg:text-[36px]">
            {t('whystrah.headline')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#D2D6DE] mb-6">{t('whystrah.legacy')}</h3>
              <ul className="space-y-3">
                {legacyItems.map((itemKey, index) => (
                  <motion.li
                    key={itemKey}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-base text-[#D2D6DE] flex items-start"
                  >
                    <span className="text-[#00E5FF] mr-2">–</span>
                    {t(itemKey)}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#00E5FF] mb-6">{t('whystrah.astrah')}</h3>
              <ul className="space-y-3">
                {astrahItems.map((itemKey, index) => (
                  <motion.li
                    key={itemKey}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-base text-white flex items-start"
                  >
                    <span className="text-[#00E5FF] mr-2">–</span>
                    {t(itemKey)}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1E242D]">
            <p className="text-lg font-medium text-white">
              {t('whystrah.insight')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
