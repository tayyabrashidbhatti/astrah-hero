'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function WhySystemsFail() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#111620] py-24 px-8 lg:px-16">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-white lg:text-[36px]">
            {t('systems.headline')}
          </h2>

          <p className="text-lg leading-relaxed text-[#D2D6DE]">
            {t('systems.p1')}
          </p>

          <div className="space-y-4 pt-4">
            <p className="text-base text-[#D2D6DE]">{t('systems.p2')}</p>
            <p className="text-base text-[#D2D6DE]">{t('systems.p3')}</p>
          </div>

          <p className="text-base leading-relaxed text-[#D2D6DE] pt-4">
            {t('systems.p4')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
