/**
 * Animation constants for consistent motion across the application
 */

export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 0.8,
  VERY_SLOW: 1.0,
} as const;

export const ANIMATION_DELAY = {
  SHORT: 0.1,
  MEDIUM: 0.2,
  LONG: 0.3,
  VERY_LONG: 0.5,
} as const;

export const ANIMATION_EASING = {
  EASE_OUT: 'easeOut',
  EASE_IN: 'easeIn',
  EASE_IN_OUT: 'easeInOut',
} as const;

export const SCROLL_ANIMATION = {
  VIEWPORT: {
    once: true,
    margin: '-100px',
  },
  TRANSITION: {
    duration: 0.8,
  },
} as const;

export const ORB_ANIMATION = {
  BREATHING: {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut',
  },
  LUMINOSITY: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
    delay: 1,
  },
  COLOR_SHIFT: {
    duration: 9,
    repeat: Infinity,
    ease: 'easeInOut',
    delay: 2,
  },
} as const;
