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
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.6, 0.4],
                  x: [0, 2, -2, 0],
                  y: [0, -2, 2, 0],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Main orb container */}
        <div className="relative h-full w-full">
          {/* Base orb image layer - primary with routing animation */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.02, 1],
                    opacity: [0.98, 1, 0.98],
                    rotate: [0, 1, -1, 0],
                  }
            }
            transition={{
              duration: 12,
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
                        'brightness(1.12) contrast(1.06) saturate(1.15)',
                        'brightness(1) contrast(1) saturate(1)',
                      ],
                      x: [0, 1, -1, 0],
                      y: [0, -1, 1, 0],
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
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

          {/* Animated image layer 2 - luminosity enhancement with routing */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden mix-blend-screen opacity-30"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.25, 0.45, 0.25],
                    scale: [1.01, 1.03, 1.01],
                    rotate: [0, -0.5, 0.5, 0],
                    x: [0, -1, 1, 0],
                    y: [0, 1, -1, 0],
                  }
            }
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      filter: [
                        'brightness(1.2) contrast(1.1)',
                        'brightness(1.5) contrast(1.25)',
                        'brightness(1.2) contrast(1.1)',
                      ],
                      scale: [1, 1.01, 1],
                    }
              }
              transition={{
                duration: 6,
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

          {/* Animated image layer 3 - color shift with routing path */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden mix-blend-color-dodge opacity-20"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.15, 0.35, 0.15],
                    rotate: [0, 1, -1, 0],
                    x: [0, 1.5, -1.5, 0],
                    y: [0, -1.5, 1.5, 0],
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
                        'hue-rotate(15deg) brightness(1.3)',
                        'hue-rotate(0deg) brightness(1.1)',
                      ],
                      scale: [1, 1.02, 1],
                    }
              }
              transition={{
                duration: 9,
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

          {/* Additional routing layer - subtle circular motion */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden opacity-15"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    rotate: [0, 360],
                    scale: [1, 1.01, 1],
                  }
            }
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              },
              scale: {
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      filter: [
                        'brightness(1.05)',
                        'brightness(1.15)',
                        'brightness(1.05)',
                      ],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
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
          
          {/* Inner aqua glow overlay - primary luminosity layer with routing */}
          <motion.div
            className="absolute inset-0 rounded-full mix-blend-screen pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0, 229, 255, 0.25) 0%, rgba(106, 124, 255, 0.15) 40%, transparent 70%)',
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1],
                    x: [0, 1, -1, 0],
                    y: [0, -1, 1, 0],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
          
          {/* Secondary glow layer for depth with routing */}
          <motion.div
            className="absolute inset-0 rounded-full mix-blend-soft-light pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(188, 123, 255, 0.2) 0%, rgba(0, 229, 255, 0.1) 50%, transparent 80%)',
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, -2, 2, 0],
                    scale: [1, 1.01, 1],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
          
          {/* Subtle core pulse with routing motion */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 50%)',
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.1, 0.3, 0.1],
                    scale: [0.95, 1.08, 0.95],
                    x: [0, 0.5, -0.5, 0],
                    y: [0, -0.5, 0.5, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Orbital routing path - subtle circular motion */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(0, 229, 255, 0.1), transparent)',
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    rotate: [0, 360],
                  }
            }
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}