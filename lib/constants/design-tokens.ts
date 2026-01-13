/**
 * Astrah OS Design System Tokens
 * Centralized design constants following the visual design system v1.1
 */

export const COLORS = {
  // Brand Accents
  PRIMARY: '#00E5FF', // Aqua Neon
  GRADIENT_START: '#6A7CFF', // Blue
  GRADIENT_END: '#BC7BFF', // Violet

  // Dark Theme
  DARK_BG: '#0B0F17',
  DARK_CARD: '#111620',
  DARK_BORDER: '#1E242D',
  DARK_TEXT_PRIMARY: '#FFFFFF',
  DARK_TEXT_SECONDARY: '#D2D6DE',

  // Light Theme
  LIGHT_BG: '#F8FBFD',
  LIGHT_CARD: '#FFFFFF',
  LIGHT_BORDER: '#E5E8EC',
  LIGHT_TEXT_PRIMARY: '#0A0F16',
  LIGHT_TEXT_SECONDARY: '#556074',

  // Status Colors
  SUCCESS: '#00C78A',
  WARNING: '#FFB84D',
  ERROR: '#FF5263',
} as const;

export const GRADIENTS = {
  ACCENT: 'linear-gradient(90deg, #6A7CFF, #BC7BFF)',
  AQUA: 'linear-gradient(90deg, #00E5FF, #0099CC)',
} as const;

export const SHADOWS = {
  CARD_DARK: '0px 4px 18px rgba(0, 0, 0, 0.45)',
  CARD_LIGHT: '0px 4px 22px rgba(0, 0, 0, 0.08)',
  GLOW_AQUA: '0 0 60px #00E5FF, 0 0 120px rgba(0, 229, 255, 0.4)',
  GLOW_SOFT: '0 0 10px rgba(0, 229, 255, 0.3)',
} as const;

export const BORDER_RADIUS = {
  CARD: '14px',
  BUTTON: '8px',
  INPUT: '10px',
  ORB: '100%',
} as const;

export const SPACING = {
  GAP: '24px',
  SIDEBAR_WIDTH: '240px',
  TOPBAR_HEIGHT: '64px',
  CARD_PADDING: '20px',
} as const;

export const TYPOGRAPHY = {
  H1: {
    SIZE: { MOBILE: '32px', DESKTOP: '36px' },
    WEIGHT: 700,
    LINE_HEIGHT: 1.2,
    LETTER_SPACING: '-0.02em',
  },
  H2: {
    SIZE: { MOBILE: '26px', DESKTOP: '30px' },
    WEIGHT: 600,
  },
  H3: {
    SIZE: { MOBILE: '22px', DESKTOP: '24px' },
    WEIGHT: 600,
  },
  BODY_L: {
    SIZE: '16px',
    WEIGHT: 400,
    LINE_HEIGHT: 1.4,
  },
  BODY_M: {
    SIZE: '14px',
    WEIGHT: 400,
    LINE_HEIGHT: 1.4,
  },
  CAPTION: {
    SIZE: '12px',
    WEIGHT: 400,
  },
} as const;
