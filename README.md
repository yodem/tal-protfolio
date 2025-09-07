<<<<<<< HEAD
# Tal Shimoni - Music Producer Portfolio

A modern, responsive portfolio website built with Next.js 15, featuring full internationalization (Hebrew/English) and dark/light themes.

## 🎵 Features

### Core Functionality
- **Bilingual Support**: Full Hebrew and English translations with RTL/LTR layout switching
- **Dark/Light Themes**: Complete theming system with smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Modern Animations**: Framer Motion animations throughout the site

### Sections
1. **Navigation**: Fixed navbar with smooth scrolling, theme toggle, and language switcher
2. **Hero Section**: Full-width hero with call-to-action and animated elements
3. **About Section**: Personal description with rotating profile image animation
4. **Work Section**: Genre showcase with alternating layouts and progress bars
5. **Best Tracks**: Responsive grid of track cards with YouTube integration
6. **Services**: Service cards with gradient icons and hover effects
7. **Contact/Collaborate**: Contact form with Zod validation and animated submissions
8. **Footer**: Social media links and site information

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with CSS custom properties
- **Components**: shadcn/ui component library
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Internationalization**: next-intl
- **Theming**: next-themes
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── layout.tsx      # Locale-specific layout
│   │   └── page.tsx        # Main portfolio page
│   ├── globals.css         # Global styles and theme variables
│   └── layout.tsx          # Root layout
├── components/
│   ├── globals/            # App-wide components
│   │   ├── theme-provider.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── language-toggle.tsx
│   ├── sections/           # Page sections
│   │   ├── navigation.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── work.tsx
│   │   ├── best-tracks.tsx
│   │   ├── services.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── label.tsx
├── lib/
│   ├── i18n/               # Internationalization
│   │   ├── config.ts
│   │   └── request.ts
│   └── utils.ts            # Utility functions
├── messages/               # Translation files
│   ├── en.json             # English translations
│   └── he.json             # Hebrew translations
└── middleware.ts           # Next.js middleware for i18n
```

## 🌍 Internationalization

The portfolio supports Hebrew and English with:
- Complete translation coverage for all text content
- RTL layout support for Hebrew
- Locale-aware routing (`/en`, `/he`)
- Language toggle in navigation
- Direction-aware component layouts

### Adding Translations
1. Add new keys to `messages/en.json` and `messages/he.json`
2. Use `useTranslations()` hook in components:
```tsx
const t = useTranslations("sectionName");
// Usage: {t("keyName")}
```

## 🎨 Theming

Built with comprehensive dark/light theme support:
- CSS custom properties for all colors
- Semantic color tokens (primary, secondary, accent, etc.)
- Theme-aware components
- Smooth theme transitions
- System theme detection

### Theme Variables
All themes use semantic color tokens defined in `globals.css`:
- `--background`, `--foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--card`, `--card-foreground`
- `--border`, `--input`, `--ring`

## 📱 Responsive Design

Mobile-first approach with breakpoints:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Layout Patterns
- Grid layouts that adapt to screen size
- Flexible spacing and typography scaling
- Touch-friendly navigation on mobile
- Optimized image loading with Next.js Image

## ✨ Animations

Framer Motion animations include:
- Page load animations with staggered reveals
- Hover effects on interactive elements
- Scroll-triggered animations
- Rotating image borders and floating elements
- Form submission states
- Smooth page transitions

## 📋 Contact Form

The contact form features:
- Zod schema validation
- Real-time error display
- Loading states during submission
- Success/error feedback
- Accessible form controls

### Form Validation Rules
- **Name**: Minimum 2 characters
- **Email**: Valid email format
- **Message**: Minimum 10 characters

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run development server**:
   ```bash
   pnpm dev
   ```

3. **Build for production**:
   ```bash
   pnpm build
   ```

4. **Start production server**:
   ```bash
   pnpm start
   ```

## 🔧 Configuration

### Environment Variables
Add to `.env.local`:
```env
# Add any API keys or configuration here
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key
```

### Customization
- **Colors**: Modify theme variables in `globals.css`
- **Translations**: Update `messages/en.json` and `messages/he.json`
- **Content**: Edit section components in `src/components/sections/`
- **Styling**: Adjust Tailwind classes or add custom CSS

## 📦 Dependencies

### Core
- next: ^15.5.2
- react: ^19.1.0
- typescript: ^5

### UI & Styling
- tailwindcss: ^4
- @radix-ui/react-*: Various UI primitives
- lucide-react: ^0.542.0
- class-variance-authority: ^0.7.1
- clsx: ^2.1.1
- tailwind-merge: ^3.3.1

### Features
- next-intl: ^4.3.6
- next-themes: ^0.4.6
- framer-motion: ^12.23.12
- react-hook-form: ^7.62.0
- @hookform/resolvers: ^5.2.1
- zod: ^4.1.5

## 🎯 Performance

- Static generation for optimal loading
- Image optimization with Next.js Image
- Code splitting by route
- Efficient animation loading
- Minimal bundle size

## 📄 License

© 2024 Tal Shimoni. All rights reserved.

---

*Portfolio built with love for music and technology* 🎵
=======
# tal-protfolio
>>>>>>> origin/main
