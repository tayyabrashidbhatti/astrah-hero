'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Orb() {
  const shouldReduceMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Orb sits directly on #0B0F17 background - no container, no frame, no enclosing shape */}
      <motion.div
        className="relative h-[360px] w-[360px] lg:h-[450px] lg:w-[450px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        {/* Main orb image - static base, no rounded corners, no frame */}
        <div className="relative h-full w-full">
          <Image
            src="/orb.png"
            alt="Astrah OS Intelligence Orb"
            width={1024}
            height={1024}
            className={`h-full w-full object-contain transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            priority
            unoptimized
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
          
          {/* Loading placeholder - matches orb background color */}
          {!imageLoaded && (
            <div 
              className="absolute inset-0 bg-[#0F141A]"
              aria-hidden="true"
            />
          )}
          
          {/* Internal luminosity shifts only - subtle, slow, along filament lines */}
          {/* Neural activity at rest - not motion graphics */}
          <motion.div
            className="absolute inset-0 mix-blend-screen pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, rgba(0, 229, 255, 0.06) 30%, transparent 60%)',
              maskImage: 'radial-gradient(circle, black 0%, black 60%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle, black 0%, black 60%, transparent 80%)',
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.1, 0.18, 0.1],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Secondary internal luminosity layer - even more subtle, neural-like */}
          <motion.div
            className="absolute inset-0 mix-blend-soft-light pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 50%)',
              maskImage: 'radial-gradient(circle, black 0%, black 50%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle, black 0%, black 50%, transparent 70%)',
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.06, 0.12, 0.06],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}