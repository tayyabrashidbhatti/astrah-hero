'use client';

import { motion, MotionProps } from 'framer-motion';
import { ButtonProps } from '@/types';
import { BORDER_RADIUS } from '@/lib/constants/design-tokens';
import { cn } from '@/lib/utils/cn';

interface ButtonMotionProps extends MotionProps {
  children: React.ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  className,
  type = 'button',
  disabled = false,
  ...props
}: ButtonProps & ButtonMotionProps) {
  const baseClasses = 'px-8 py-4 text-base font-semibold transition-all';
  
  const variantClasses = {
    primary: 'bg-[#00E5FF] text-[#0B0F17] hover:shadow-[0_0_10px_rgba(0,229,255,0.3)]',
    secondary: 'border border-[#1E242D] bg-[#111620] text-white backdrop-blur-sm hover:border-[#00E5FF]/30 hover:shadow-[0_0_10px_rgba(0,229,255,0.3)]',
  };

  const MotionButton = motion.button;

  return (
    <MotionButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={cn(baseClasses, variantClasses[variant], className)}
      style={{
        borderRadius: BORDER_RADIUS.BUTTON,
      }}
      {...props}
    >
      {children}
    </MotionButton>
  );
}
