'use client';

import { motion } from 'framer-motion';
import { SectionProps } from '@/types';
import { SCROLL_ANIMATION } from '@/lib/constants/animations';
import { cn } from '@/lib/utils/cn';

export default function Section({
  className,
  id,
  children,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn('relative py-24 px-8 lg:px-16', className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={SCROLL_ANIMATION.VIEWPORT}
      transition={SCROLL_ANIMATION.TRANSITION}
    >
      {children}
    </motion.section>
  );
}
