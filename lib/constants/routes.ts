/**
 * Application routes and navigation constants
 */

export const ROUTES = {
  HOME: '/',
  PRODUCT: '#product',
  PRICING: '#pricing',
  MIGRATION: '#migration',
} as const;

export const NAV_ITEMS = [
  { key: 'nav.product', href: ROUTES.PRODUCT },
  { key: 'nav.pricing', href: ROUTES.PRICING },
  { key: 'nav.migration', href: ROUTES.MIGRATION },
] as const;
