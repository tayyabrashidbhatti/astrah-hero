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
              imageLoaded ? '' : 'opacity-0'
            } ${!shouldReduceMotion && imageLoaded ? 'orb-pulse' : imageLoaded ? 'opacity-100' : ''}`}
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
        </div>
      </motion.div>
    </div>
  );
}