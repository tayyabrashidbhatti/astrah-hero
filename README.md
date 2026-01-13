# Astrah OS — Marketing Website

Premium AI Business Operating System marketing website for GCC & MENA markets.

## 🏗️ Architecture

### Project Structure

```
astrah-hero/
├── app/                    # Next.js App Router
│   ├── components/         # Legacy components (to be migrated)
│   ├── contexts/          # React contexts (Language)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Component library
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and constants
│   ├── constants/         # Design tokens, routes, animations
│   └── utils/             # Helper functions
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

### Key Features

- ✅ **Next.js 16** (App Router)
- ✅ **TypeScript** (Strict mode)
- ✅ **Tailwind CSS 4** (Design system tokens)
- ✅ **Framer Motion** (Animations)
- ✅ **Bilingual Support** (English/Arabic with RTL)
- ✅ **Design System** (Astrah OS v1.1 compliant)

## 🚀 Getting Started

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## 📁 Code Standards

### Component Organization

- **Sections**: Page-level components in `components/sections/`
- **UI Components**: Reusable components in `components/ui/`
- **Hooks**: Custom hooks in `hooks/`
- **Constants**: Design tokens and config in `lib/constants/`

### Import Paths

Use TypeScript path aliases:

```typescript
import { Button } from '@/components/ui';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { COLORS } from '@/lib/constants/design-tokens';
```

### TypeScript

- Strict mode enabled
- All components typed
- Interfaces in `types/`

### Styling

- Tailwind CSS with design tokens
- Design system colors from `lib/constants/design-tokens.ts`
- RTL support via logical CSS

## 🎨 Design System

Follows **Astrah OS Visual Design System v1.1**:

- Colors: Aqua Neon (#00E5FF), Blue-Violet gradient
- Typography: Inter (EN), Cairo (AR)
- Spacing: 24px gaps, consistent padding
- Animations: Subtle, respects `prefers-reduced-motion`

## 🌐 Internationalization

- English (LTR) and Arabic (RTL) support
- Language switcher in Navbar and Footer
- Automatic layout mirroring for RTL
- Translations in `app/contexts/LanguageContext.tsx`

## 📦 Dependencies

- Next.js 16.1.1
- React 19.2.3
- Framer Motion 12.26.1
- Tailwind CSS 4
- TypeScript 5

## 🔧 Development Tools

- ESLint (Next.js config)
- TypeScript (Strict mode)
- Prettier (Code formatting)

## 📝 License

© 2026 Astrah OS. All rights reserved.
