'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { NAV_ITEMS } from '@/lib/constants/routes';

export default function Navbar() {
  const { t, language, setLanguage, isRTL } = useLanguage();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center justify-between px-8 py-6 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl font-semibold tracking-tight text-white"
      >
        Astrah
      </motion.div>
      
      <div className="hidden items-center gap-8 md:flex">
        {NAV_ITEMS.map((item, index) => (
          <motion.a
            key={item.key}
            href={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="text-sm text-[#D2D6DE] transition-colors hover:text-white relative group"
          >
            {t(item.key)}
            <motion.span
              className={`absolute bottom-0 ${isRTL ? 'right' : 'left'}-0 w-0 h-[1px] bg-[#00E5FF] group-hover:w-full transition-all duration-300`}
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
            />
          </motion.a>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage('en')}
            className={`text-xs px-2 py-1 rounded transition-colors ${
              language === 'en'
                ? 'text-[#00E5FF] font-semibold'
                : 'text-[#D2D6DE] hover:text-white'
            }`}
          >
            EN
          </button>
          <span className="text-[#D2D6DE]">/</span>
          <button
            onClick={() => setLanguage('ar')}
            className={`text-xs px-2 py-1 rounded transition-colors ${
              language === 'ar'
                ? 'text-[#00E5FF] font-semibold'
                : 'text-[#D2D6DE] hover:text-white'
            }`}
          >
            العربية
          </button>
        </div>

        <motion.button
          initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-[8px] border border-[#1E242D] bg-[#111620] px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-[#00E5FF]/30 hover:shadow-[0_0_10px_rgba(0,229,255,0.3)]"
        >
          {t('nav.cta')}
        </motion.button>
      </div>
    </motion.nav>
  );
}