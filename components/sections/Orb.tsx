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
        {/* Outer glow with subtle breathing - Aqua glow token */}
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
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.55, 0.4],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main orb container */}
        <div className="relative h-full w-full">
          {/* Base orb image layer - primary with luminosity animation */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.015, 1],
                    opacity: [0.98, 1, 0.98],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      filter: [
                        'brightness(1) contrast(1) saturate(1)',
                        'brightness(1.08) contrast(1.04) saturate(1.1)',
                        'brightness(1) contrast(1) saturate(1)',
                      ],
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="h-full w-full"
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
          </motion.div>

          {/* Animated image layer 2 - luminosity enhancement */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden mix-blend-screen opacity-30"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.25, 0.4, 0.25],
                    scale: [1, 1.02, 1],
                  }
            }
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      filter: [
                        'brightness(1.2) contrast(1.1)',
                        'brightness(1.4) contrast(1.2)',
                        'brightness(1.2) contrast(1.1)',
                      ],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
              className="h-full w-full"
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

          {/* Animated image layer 3 - subtle color/brightness shift */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden mix-blend-color-dodge opacity-20"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.15, 0.3, 0.15],
                  }
            }
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      filter: [
                        'hue-rotate(0deg) brightness(1.1)',
                        'hue-rotate(10deg) brightness(1.25)',
                        'hue-rotate(0deg) brightness(1.1)',
                      ],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2.5,
              }}
              className="h-full w-full"
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

          {/* Inner aqua glow overlay - primary luminosity layer */}
          <motion.div
            className="absolute inset-0 rounded-full mix-blend-screen pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, rgba(106, 124, 255, 0.1) 40%, transparent 70%)',
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.02, 1],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />

          {/* Secondary glow layer for depth */}
          <motion.div
            className="absolute inset-0 rounded-full mix-blend-soft-light pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(188, 123, 255, 0.15) 0%, rgba(0, 229, 255, 0.08) 50%, transparent 80%)',
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.2, 0.35, 0.2],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />

          {/* Subtle core pulse */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, transparent 50%)',
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.1, 0.25, 0.1],
                    scale: [0.98, 1.04, 0.98],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}