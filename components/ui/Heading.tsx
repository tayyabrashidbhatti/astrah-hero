import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';
import { TYPOGRAPHY } from '@/lib/constants/design-tokens';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

const headingClasses = {
  1: 'text-[32px] font-bold leading-[1.2] tracking-[-0.02em] lg:text-[36px]',
  2: 'text-[26px] font-semibold lg:text-[30px]',
  3: 'text-[22px] font-semibold lg:text-[24px]',
};

export default function Heading({
  children,
  level = 2,
  className,
}: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3';
  
  return (
    <Tag className={cn('text-white', headingClasses[level], className)}>
      {children}
    </Tag>
  );
}
