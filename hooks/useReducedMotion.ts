import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';

/**
 * Hook to check if user prefers reduced motion
 * Wraps Framer Motion's useReducedMotion for consistency
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}
