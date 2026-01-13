'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export default function Orb() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        className="relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        {/* Outer glow - slow breathing */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.3) 0%, rgba(0, 229, 255, 0.1) 50%, transparent 100%)',
            boxShadow: '0 0 60px #00E5FF, 0 0 120px rgba(0, 229, 255, 0.4)',
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  opacity: [0.5, 0.8, 0.5],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main orb container */}
        <div className="relative h-full w-full">
          {/* Base orb image with direct luminosity animation */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <motion.div
              className="h-full w-full"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      filter: [
                        'brightness(1) saturate(1)',
                        'brightness(1.15) saturate(1.1)',
                        'brightness(1) saturate(1)',
                      ],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/Gemini_Generated_Image_i1fxksi1fxksi1fx.png"
                alt="Astrah OS Intelligence Orb"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
                priority
                unoptimized
              />
            </motion.div>
          </div>

          {/* Filament highlight layer - creates internal neural activity */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
            style={{ mixBlendMode: 'screen' }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0, 0.5, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="h-full w-full"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      filter: [
                        'brightness(1.5) contrast(1.2)',
                        'brightness(2) contrast(1.4)',
                        'brightness(1.5) contrast(1.2)',
                      ],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/Gemini_Generated_Image_i1fxksi1fxksi1fx.png"
                alt=""
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
                unoptimized
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>

          {/* Secondary filament pulse - offset timing */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
            style={{ mixBlendMode: 'lighten' }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0, 0.4, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          >
            <motion.div
              className="h-full w-full"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      filter: [
                        'brightness(1.3) saturate(1.3)',
                        'brightness(1.8) saturate(1.5)',
                        'brightness(1.3) saturate(1.3)',
                      ],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
            >
              <Image
                src="/Gemini_Generated_Image_i1fxksi1fxksi1fx.png"
                alt=""
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
                unoptimized
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>

          {/* Inner core glow pulse */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0, 229, 255, 0.25) 0%, rgba(106, 124, 255, 0.15) 30%, transparent 60%)',
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.3, 0.8, 0.3],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}