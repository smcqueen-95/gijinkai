# Gijinkai Studio

A modern Next.js PWA (Progressive Web App) website for Gijinkai Studio, featuring Japanese-inspired design excellence with full responsive support.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - UI library
- **PWA** - Progressive Web App support with offline capabilities

## Features

- ✨ **Progressive Web App** - Installable, offline-capable
- 📱 **Fully Responsive** - Works on all screen sizes
- 🎨 **Japanese-Inspired Design** - Beautiful UI with Tailwind CSS
- ⚡ **Fast Performance** - Optimized with Next.js
- 🔍 **SEO-Friendly** - Proper metadata and structure
- 🎯 **Type-Safe** - Full TypeScript support
- 📲 **Touch-Optimized** - Mobile-first design

## Project Structure

```
gijinkai/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout with PWA config
│   │   ├── page.tsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   ├── about/        # About page
│   │   ├── projects/     # Projects page
│   │   ├── services/     # Services page
│   │   ├── products/     # Products page
│   │   ├── pricing/      # Pricing page
│   │   └── contact/      # Contact page
│   └── components/       # Shared React components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Button.tsx
├── public/
│   ├── manifest.json     # PWA manifest
│   └── icons/            # PWA icons (generate these)
├── next.config.js        # Next.js & PWA configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## PWA Setup

Your app is configured as a PWA! See [PWA_SETUP.md](./PWA_SETUP.md) for:
- Icon generation instructions
- Testing PWA features
- Deployment guidelines
- Troubleshooting

**Important:** Generate and add PWA icons to `public/` directory:
- `icon-192x192.png`
- `icon-256x256.png`
- `icon-384x384.png`
- `icon-512x512.png`

## Responsive Breakpoints

- **xs**: 475px+ (custom)
- **sm**: 640px+
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+
- **2xl**: 1536px+
- **3xl**: 1920px+ (custom)

## Pages

- **Home** (`/`) - Landing page with featured projects and services
- **About** (`/about`) - Company overview and team
- **Projects** (`/projects`) - Portfolio showcase
- **Services** (`/services`) - Service offerings and process
- **Products** (`/products`) - Digital products catalog
- **Pricing** (`/pricing`) - Pricing plans and comparison
- **Contact** (`/contact`) - Contact form and information

## Development

The project uses Next.js App Router with TypeScript. All pages are in `src/app/` and components are in `src/components/`.

Components can be imported using the `@/` alias:
```typescript
import Button from '@/components/Button'
```

## Mobile Optimizations

- Touch-friendly buttons (min 44x44px)
- Responsive navigation with mobile menu
- Optimized typography for small screens
- Horizontal scroll prevention
- Font smoothing for better readability

## Browser Support

- ✅ Chrome/Edge (Android & Desktop)
- ✅ Safari (iOS 11.3+)
- ✅ Firefox
- ✅ Samsung Internet

## License

All rights reserved © Gijinkai Studio
