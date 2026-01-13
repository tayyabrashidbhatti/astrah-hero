'use client';

import { motion } from 'framer-motion';
import Orb from './Orb';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function Hero() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-screen bg-[#0B0F17]">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="hero-container flex min-h-[calc(100vh-120px)] items-center gap-6">
          {/* Text Content - 60% width on LTR, 40% on RTL */}
          <div className="hero-text w-full lg:w-[60%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-6"
            >
              {/* Eyebrow / Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xs font-medium uppercase tracking-[0.15em] text-[#D2D6DE]"
              >
                {t('hero.eyebrow')}
              </motion.div>

              {/* Main Headline - H1: 32-36px / 700 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-white lg:text-[36px]"
                style={{ opacity: 0.9 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-block"
                >
                  {t('hero.headline1')}
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="inline-block"
                >
                  {t('hero.headline2')}
                </motion.span>
              </motion.h1>

              {/* Subline - Body L: 16px / 400 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-[600px] text-base leading-[1.4] text-[#D2D6DE] lg:text-lg"
              >
                {t('hero.subline1')}
                <br />
                {t('hero.subline2')}
              </motion.p>

              {/* Supporting Line - Body M: 14px / 400 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-[600px] text-sm leading-[1.4] text-[#D2D6DE]"
              >
                {t('hero.supporting')}
              </motion.p>

              {/* Primary CTA - Button: 8px radius, Aqua Neon, glow on hover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-4"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(0, 229, 255, 0.4), 0 0 40px rgba(0, 229, 255, 0.2)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(0, 229, 255, 0.2)',
                      '0 0 20px rgba(0, 229, 255, 0.3)',
                      '0 0 10px rgba(0, 229, 255, 0.2)',
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  className="rounded-[8px] bg-[#00E5FF] px-8 py-4 text-base font-semibold text-[#0B0F17] transition-all"
                >
                  {t('nav.cta')}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Orb - 40% width on LTR, 60% on RTL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="hero-orb hidden w-[40%] lg:block"
          >
            <Orb />
          </motion.div>
        </div>
      </div>
    </section>
  );
}