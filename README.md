# 🌟 Vedic Astro AI - Comprehensive Project Documentation

> **Unlock the Wisdom of the Stars** with AI-powered Vedic astrology readings and personalized cosmic insights.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.0-764ABC?logo=redux)](https://redux-toolkit.js.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-7.4-119FFF?logo=capacitor)](https://capacitorjs.com/)

## 📖 Table of Contents

- [✨ Project Overview](#-project-overview)
- [🚀 Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [📱 Tech Stack](#-tech-stack)
- [🔧 Quick Start](#-quick-start)
- [📂 Project Structure](#-project-structure)
- [🔌 API Documentation](#-api-documentation)
- [🎨 UI Components](#-ui-components)
- [📱 PWA Features](#-pwa-features)
- [📱 Mobile Development](#-mobile-development)
- [🌐 Deployment](#-deployment)
- [🧪 Testing](#-testing)
- [🤝 Contributing](#-contributing)
- [🆘 Troubleshooting](#-troubleshooting)
- [📄 License](#-license)

## ✨ Project Overview

**Vedic Astro AI** is a modern, full-stack astrology application that combines ancient Vedic wisdom with cutting-edge artificial intelligence. Built with Next.js 14 and featuring a sophisticated dark theme UI, this application provides users with personalized astrological insights, birth chart analysis, planetary predictions, and AI-powered consultations.

### 🎯 Core Mission
Transform traditional Vedic astrology into an accessible, intelligent, and visually stunning digital experience that helps users understand their cosmic journey and make informed life decisions.

## 🚀 Features

### 🌟 Astrological Features
- **📊 Birth Chart Analysis**: Comprehensive birth chart calculations with planetary positions
- **🏠 House System**: Detailed analysis of all 12 astrological houses
- **⭐ Planetary Positions**: Real-time planetary tracking using NASA JPL Horizons API
- **🌙 Nakshatra Analysis**: Complete 27 Nakshatra system integration
- **🔄 Dasha Calculations**: Vimshottari and other Dasha systems
- **🧘 Yoga Detection**: Identification of Raja, Dhana, and other significant yogas
- **⚠️ Dosha Analysis**: Manglik, Kal Sarpa, and Pitru Dosha detection
- **💎 Gemstone Recommendations**: Personalized remedial gemstone suggestions

### 🤖 AI-Powered Features
- **💬 AI Chat Consultation**: Interactive AI assistant for astrological queries
- **📈 Predictive Analytics**: AI-enhanced daily, weekly, and monthly predictions
- **🎯 Personalized Insights**: Machine learning-based personalized recommendations
- **📚 Educational Content**: AI-curated learning materials about Vedic astrology

### 🎨 User Experience Features
- **🌙 Dark Theme**: Beautiful, mystical dark theme with cosmic aesthetics
- **📱 Progressive Web App**: Installable PWA with offline capabilities
- **📲 Cross-Platform**: Native mobile apps via Capacitor for iOS and Android
- **⚡ Real-Time Updates**: Live planetary position updates
- **🎭 Interactive Charts**: Dynamic, interactive birth chart visualizations
- **🔍 Advanced Search**: Smart search for planetary combinations and yogas

### 🔧 Technical Features
- **🏃‍♂️ Server-Side Rendering**: Next.js 14 with App Router for optimal performance
- **📦 State Management**: Redux Toolkit for complex state management
- **🎨 Component Library**: shadcn/ui with Radix UI primitives
- **📊 Data Visualization**: Recharts for interactive charts and graphs
- **🔒 Type Safety**: Full TypeScript implementation
- **📱 Responsive Design**: Mobile-first responsive design approach

## 🏗️ Architecture

### Frontend Architecture
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   React 18      │    │   Next.js 14     │    │  TypeScript 5   │
│   Components    │ ── │   App Router     │ ── │   Type Safety   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Redux Toolkit │    │   API Routes     │    │  Tailwind CSS   │
│   State Mgmt    │    │   Backend Logic  │    │   Styling       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### State Management Architecture
```typescript
// Redux Store Structure
interface RootState {
  user: UserState              // Authentication & profile
  birthChart: BirthChartState  // Chart data & calculations
  planetary: PlanetaryState    // Real-time planetary positions
  dasha: DashaState           // Dasha periods & predictions
  prediction: PredictionState  // AI predictions & insights
  chat: ChatState             // AI chat functionality
  settings: SettingsState     // App configuration
}
```

### Mobile Architecture (Capacitor)
```
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│   Web Assets     │    │   Capacitor      │    │  Native Shell    │
│   (Next.js)      │ ─► │   Bridge         │ ─► │   iOS/Android    │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

## 📱 Tech Stack

### Core Technologies
| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | Next.js | 14.2.16 | React framework with SSR/SSG |
| **Language** | TypeScript | 5.x | Type-safe JavaScript |
| **UI Library** | React | 18.x | Component-based UI |
| **Styling** | Tailwind CSS | 4.1.9 | Utility-first CSS framework |
| **State Management** | Redux Toolkit | Latest | Predictable state container |
| **Mobile** | Capacitor | 7.4.3 | Native mobile app wrapper |

### UI & Styling
| Technology | Purpose |
|------------|---------|
| **Radix UI** | Accessible component primitives |
| **shadcn/ui** | Beautiful, customizable components |
| **Lucide React** | Modern icon library |
| **Tailwind Animate** | CSS animations |
| **Geist Font** | Modern typography |

### Data & APIs
| Technology | Purpose |
|------------|---------|
| **NASA JPL Horizons** | Real astronomical data |
| **Fetch API** | HTTP client for API calls |
| **JSON Schema** | Data validation |

### Development Tools
| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting |
| **Prettier** | Code formatting |
| **PostCSS** | CSS processing |
| **Vercel Analytics** | Performance monitoring |

## 🔧 Quick Start

### Prerequisites
- **Node.js** 18+ (LTS recommended)
- **npm** or **pnpm** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vedic-astro-ai.git
   cd vedic-astro-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local`:
   ```env
   # Optional: Custom API base URL
   NEXT_PUBLIC_API_URL=

   # Optional: Analytics tracking
   NEXT_PUBLIC_VERCEL_ANALYTICS_ID=
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Mobile Development
npm run build:mobile # Build for mobile
npm run android      # Open Android Studio
npm run ios          # Open Xcode (macOS only)

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 📂 Project Structure

```
vedic-astro-ai/
├── 📱 app/                     # Next.js App Router
│   ├── 🏠 (pages)/
│   │   ├── page.tsx           # Landing page
│   │   ├── dashboard/         # Main dashboard
│   │   ├── chat/              # AI chat interface
│   │   ├── forecast/          # Predictions
│   │   ├── planets/           # Planetary positions
│   │   ├── houses/            # House analysis
│   │   └── insights/          # AI insights
│   ├── 🔌 api/               # API routes
│   │   ├── health/           # Health check endpoint
│   │   └── planets/          # Planetary data API
│   ├── 🎨 globals.css        # Global styles
│   └── 📄 layout.tsx         # Root layout
├── 🧩 components/            # React components
│   ├── 🎯 ui/               # Reusable UI components
│   ├── app-layout.tsx       # Main app layout
│   ├── main-nav.tsx         # Navigation component
│   ├── login-form.tsx       # Authentication forms
│   └── pwa-install.tsx      # PWA install prompt
├── 🪝 hooks/                # Custom React hooks
│   ├── use-mobile.ts        # Mobile detection
│   └── use-toast.ts         # Toast notifications
├── 📚 lib/                  # Utility libraries
│   ├── 🌐 api/              # API client utilities
│   ├── 📦 store/            # Redux store configuration
│   │   ├── slices/          # Redux slices
│   │   │   ├── userSlice.ts
│   │   │   ├── birthChartSlice.ts
│   │   │   ├── planetarySlice.ts
│   │   │   ├── dashaSlice.ts
│   │   │   ├── predictionSlice.ts
│   │   │   ├── chatSlice.ts
│   │   │   └── settingsSlice.ts
│   │   ├── index.ts         # Store configuration
│   │   ├── provider.tsx     # Redux provider
│   │   └── types.ts         # Astrological type definitions
│   └── 🛠️ utils.ts          # Utility functions
├── 📱 android/              # Capacitor Android project
├── 🌐 public/               # Static assets
│   ├── 📄 manifest.json     # PWA manifest
│   ├── 🔧 sw.js            # Service worker
│   └── 🖼️ icons/            # App icons
├── 📋 docs/                 # Documentation
├── ⚙️ next.config.mjs       # Next.js configuration
├── 📱 capacitor.config.json # Capacitor configuration
├── 🎨 tailwind.config.js    # Tailwind CSS config
├── 📝 tsconfig.json         # TypeScript config
└── 📦 package.json          # Dependencies
```

## 🔌 API Documentation

### Health Check Endpoints

#### GET /api/health
Basic health check for monitoring application status.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "version": "1.0.0",
  "environment": "production",
  "services": {
    "database": "not_connected",
    "redis": "not_connected", 
    "astrology_api": "ready"
  }
}
```

#### POST /api/health
Extended health check with feature status.

**Request:**
```json
{
  "request_id": "health-check-123"
}
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "version": "1.0.0",
  "request_id": "health-check-123",
  "features": {
    "birth_chart_calculation": true,
    "planetary_positions": true,
    "dasha_calculations": true,
    "predictions": true,
    "chat_ai": true
  }
}
```

### Planetary Data Endpoints

#### GET /api/planets
Fetches current planetary positions using real-time astronomical data.

**Features:**
- 🌍 Real-time data from NASA JPL Horizons API
- 🔄 Automatic fallback to enhanced simulation
- 📊 Vedic astrological calculations
- ⏰ Intelligent caching (1 hour for real data, 5 min for simulated)

**Response:**
```json
{
  "planets": [
    {
      "id": "sun",
      "name": "Sun",
      "sign": "Capricorn",
      "degree": "25.3",
      "isRetrograde": false,
      "house": 10,
      "aspectingPlanets": ["Jupiter", "Saturn"]
    }
  ],
  "timestamp": "2024-01-15T10:30:00.000Z",
  "calculationMethod": "real-time"
}
```

### API Client Usage

```typescript
import { apiClient } from '@/lib/api/client'

// Fetch planetary positions
const planets = await apiClient.get<PlanetsResponse>('/planets')

// Health check
const health = await apiClient.post<HealthResponse>('/health', {
  request_id: 'custom-id'
})
```

## 🎨 UI Components

### Component Architecture
Built on **shadcn/ui** with **Radix UI** primitives for maximum accessibility and customization.

### Core UI Components

#### Form Components
- **Button**: Multiple variants (default, destructive, outline, secondary, ghost, link)
- **Input**: Text inputs with validation states
- **Select**: Dropdown selections with search
- **Checkbox**: Accessible checkboxes
- **RadioGroup**: Radio button groups
- **Switch**: Toggle switches

#### Layout Components
- **Card**: Content containers with header, content, footer
- **Sheet**: Slide-out panels
- **Dialog**: Modal dialogs
- **Drawer**: Mobile-friendly drawers
- **Tabs**: Tabbed interfaces
- **Accordion**: Collapsible content sections

#### Navigation Components
- **Breadcrumb**: Navigation breadcrumbs
- **Menubar**: Horizontal menu bars
- **NavigationMenu**: Complex navigation menus
- **Pagination**: Data pagination controls

#### Data Display Components
- **Badge**: Status badges and tags
- **Avatar**: User profile images
- **Progress**: Progress indicators
- **Chart**: Data visualization components
- **Calendar**: Date selection calendars

#### Feedback Components
- **Alert**: Notification alerts
- **Toast**: Temporary notifications
- **Skeleton**: Loading skeletons
- **Spinner**: Loading indicators

### Custom Astrological Components

#### Specialized Components
- **BirthChart**: Interactive birth chart visualization
- **PlanetaryWheel**: Rotating planetary position display
- **HouseGrid**: 12-house grid layout
- **AspectGrid**: Planetary aspect visualization
- **DashaTimeline**: Dasha period timeline
- **YogaCard**: Yoga analysis cards

### Theming & Customization

#### CSS Variables
```css
:root {
  --background: 0 0% 0%;           /* Pure black */
  --foreground: 0 0% 98%;          /* Near white */
  --primary: 262 83% 58%;          /* Purple primary */
  --primary-foreground: 0 0% 98%;
  --secondary: 0 0% 9%;            /* Dark gray */
  --accent: 43 74% 66%;            /* Golden accent */
  --destructive: 0 84% 60%;        /* Red for errors */
  --border: 0 0% 15%;              /* Border color */
  --ring: 262 83% 58%;             /* Focus rings */
}
```

#### Component Variants
```typescript
// Button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)
```

## 📱 PWA Features

### Progressive Web App Capabilities
- **📱 Install Prompt**: Smart install banner with user engagement tracking
- **⚡ Service Worker**: Advanced caching and offline functionality
- **🔄 Background Sync**: Sync data when connection restored
- **📬 Push Notifications**: Astrological alerts and reminders
- **🎨 App Manifest**: Rich app metadata and icon configuration

### PWA Configuration

#### Manifest (`public/manifest.json`)
```json
{
  "name": "Vedic Astro AI",
  "short_name": "Vedic Astro AI",
  "description": "AI-powered Vedic astrology readings",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#8b5cf6",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icon-192.jpg",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "categories": ["lifestyle", "entertainment", "utilities"]
}
```

#### Service Worker Features
- **Cache Management**: Intelligent caching of static assets
- **Offline Fallbacks**: Graceful offline experience
- **Background Fetch**: Download large data in background
- **Update Management**: Automatic updates with user notification

### PWA Install Component
```tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstall, setShowInstall] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstall(true)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null)
      setShowInstall(false)
    }
  }

  if (!showInstall) return null

  return (
    <Button onClick={handleInstall} className="fixed bottom-4 right-4 z-50">
      📱 Install App
    </Button>
  )
}
```

## 📱 Mobile Development

### Capacitor Integration
The app uses **Capacitor 7.4.3** to create native iOS and Android applications with full access to device APIs.

### Capacitor Configuration (`capacitor.config.json`)
```json
{
  "appId": "com.vedicastroai.app",
  "appName": "Vedic Astro AI",
  "webDir": "public",
  "bundledWebRuntime": false,
  "server": {
    "androidScheme": "https"
  },
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 2000,
      "backgroundColor": "#000000",
      "showSpinner": false
    },
    "StatusBar": {
      "style": "DARK",
      "backgroundColor": "#000000"
    },
    "Keyboard": {
      "resize": "body",
      "style": "DARK"
    }
  }
}
```

### Build Process

#### Android Build
1. **Prerequisites**
   - Android Studio Arctic Fox or newer
   - Android SDK 31+
   - Java 17 (JDK)
   - Gradle 7.4+

2. **Build Commands**
   ```bash
   # Build web assets
   npm run build
   
   # Sync to mobile
   npx cap sync android
   
   # Open Android Studio
   npx cap open android
   
   # Or build directly
   cd android && ./gradlew assembleDebug
   ```

#### iOS Build (macOS only)
1. **Prerequisites**
   - Xcode 14+
   - iOS 15+ deployment target
   - Apple Developer Account (for distribution)

2. **Build Commands**
   ```bash
   # Build web assets
   npm run build
   
   # Sync to mobile
   npx cap sync ios
   
   # Open Xcode
   npx cap open ios
   ```

### Native Features Integration

#### Device APIs Available
- **📱 Device Information**: Hardware specs, OS version
- **📍 Geolocation**: Location-based birth charts
- **📷 Camera**: Profile pictures, document scanning
- **📁 File System**: Local data storage
- **🔔 Push Notifications**: Astrological alerts
- **📱 Haptics**: Tactile feedback
- **🔐 Biometric Authentication**: Secure login
- **🌐 Network**: Connection status monitoring

#### Example Native Integration
```typescript
import { Geolocation } from '@capacitor/geolocation'
import { Camera } from '@capacitor/camera'

// Get current position for birth chart
const getCurrentPosition = async () => {
  const coordinates = await Geolocation.getCurrentPosition()
  return {
    latitude: coordinates.coords.latitude,
    longitude: coordinates.coords.longitude
  }
}

// Take profile picture
const takePhoto = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  })
  return image.webPath
}
```

### Performance Optimization

#### Mobile-Specific Optimizations
- **🔄 Lazy Loading**: Route-based code splitting
- **🗜️ Image Optimization**: WebP format with fallbacks
- **📦 Bundle Size**: Tree shaking and module federation
- **⚡ Virtual Scrolling**: Large list performance
- **🎯 Touch Optimization**: Touch target sizing
- **🔋 Battery Efficiency**: Background task management

## 🌐 Deployment

### Vercel Deployment (Recommended)

#### Automatic Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

#### Environment Variables
Configure in Vercel dashboard or via CLI:
```bash
vercel env add NEXT_PUBLIC_API_URL
vercel env add NEXT_PUBLIC_VERCEL_ANALYTICS_ID
```

#### Vercel Configuration (`vercel.json`)
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "functions": {
    "app/api/**/*.ts": {
      "runtime": "nodejs18.x",
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "s-maxage=60, stale-while-revalidate" }
      ]
    }
  ]
}
```

### Alternative Deployment Options

#### Docker Deployment
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

#### Static Export
```bash
# For static hosting (GitHub Pages, Netlify)
npm run build
npm run export
```

### Performance Monitoring

#### Vercel Analytics
Built-in analytics for performance monitoring:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

#### Core Web Vitals
Monitor and optimize:
- **LCP** (Largest Contentful Paint) < 2.5s
- **FID** (First Input Delay) < 100ms
- **CLS** (Cumulative Layout Shift) < 0.1

## 🧪 Testing

### Testing Strategy

#### Unit Testing
```bash
# Run unit tests
npm run test

# Run with coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

#### Component Testing
```typescript
import { render, screen } from '@testing-library/react'
import { BirthChart } from '@/components/birth-chart'

describe('BirthChart Component', () => {
  it('renders chart with planetary positions', () => {
    const mockData = {
      planets: [
        { name: 'Sun', sign: 'Aries', degree: 15.5 }
      ]
    }
    
    render(<BirthChart data={mockData} />)
    expect(screen.getByText('Sun')).toBeInTheDocument()
    expect(screen.getByText('Aries')).toBeInTheDocument()
  })
})
```

#### API Testing
```typescript
import { GET } from '@/app/api/planets/route'

describe('/api/planets', () => {
  it('returns planetary positions', async () => {
    const request = new Request('http://localhost:3000/api/planets')
    const response = await GET(request)
    const data = await response.json()
    
    expect(response.status).toBe(200)
    expect(data.planets).toBeDefined()
    expect(Array.isArray(data.planets)).toBe(true)
  })
})
```

#### E2E Testing
```typescript
import { test, expect } from '@playwright/test'

test('user can generate birth chart', async ({ page }) => {
  await page.goto('/')
  await page.click('[data-testid="get-started"]')
  
  // Fill birth details
  await page.fill('[name="birthDate"]', '1990-01-01')
  await page.fill('[name="birthTime"]', '12:00')
  await page.fill('[name="birthPlace"]', 'New York')
  
  await page.click('[type="submit"]')
  
  // Verify chart is generated
  await expect(page.locator('[data-testid="birth-chart"]')).toBeVisible()
})
```

### Continuous Integration

#### GitHub Actions
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run test:coverage
      - run: npm run build
```

## 🤝 Contributing

### Development Workflow

1. **Fork & Clone**
   ```bash
   git clone https://github.com/yourusername/vedic-astro-ai.git
   cd vedic-astro-ai
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Development Setup**
   ```bash
   npm install
   npm run dev
   ```

4. **Make Changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

5. **Commit Changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

6. **Push & Pull Request**
   ```bash
   git push origin feature/amazing-feature
   ```

### Code Standards

#### TypeScript Guidelines
- Use strict TypeScript configuration
- Define interfaces for all data structures
- Avoid `any` types when possible
- Use meaningful variable and function names

#### React Guidelines
- Use functional components with hooks
- Implement proper error boundaries
- Follow the component composition pattern
- Use TypeScript for prop types

#### CSS Guidelines
- Use Tailwind CSS utilities
- Create custom components for complex styling
- Follow mobile-first responsive design
- Maintain consistent spacing and typography

### Astrological Data Standards

#### Planet Data Format
```typescript
interface PlanetData {
  id: string                    // Lowercase planet name
  name: string                  // Display name
  sign: ZodiacSignName         // Current zodiac sign
  degree: string               // Position in sign (0-30)
  isRetrograde: boolean        // Retrograde status
  house: number                // House position (1-12)
  aspectingPlanets: string[]   // Planets forming aspects
}
```

#### House System
- Primary: Equal House System
- Secondary: Placidus (for advanced users)
- Houses numbered 1-12 starting from Ascendant

#### Calculation Standards
- Use sidereal zodiac (Lahiri Ayanamsa)
- Tropical zodiac available as option
- True lunar nodes (not mean)
- Geocentric planetary positions

## 🆘 Troubleshooting

### Common Issues & Solutions

#### Development Issues

**Issue: `npm install` fails**
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Issue: TypeScript errors**
```bash
# Check TypeScript version
npm list typescript

# Restart TypeScript server in IDE
# VS Code: Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"
```

**Issue: Tailwind styles not loading**
```bash
# Ensure PostCSS config is correct
# Check if @tailwindcss/postcss is installed
npm install @tailwindcss/postcss --save-dev
```

#### Build Issues

**Issue: Next.js build fails**
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Check for TypeScript errors
npm run type-check
```

**Issue: API routes not working**
```bash
# Verify API route structure
# Check if files are named route.ts/js
# Ensure proper export (GET, POST, etc.)
```

#### Mobile Build Issues

**Issue: Android build fails**
```bash
# Check Java version (should be 17)
java -version

# Check Android SDK path
echo $ANDROID_HOME

# Clean and rebuild
cd android
./gradlew clean
./gradlew assembleDebug
```

**Issue: iOS build fails**
```bash
# Check Xcode version (14+)
xcode-select --version

# Clean Xcode cache
rm -rf ~/Library/Developer/Xcode/DerivedData

# Reset iOS simulator
xcrun simctl erase all
```

#### PWA Issues

**Issue: Service worker not updating**
```javascript
// Force service worker update
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => {
      registration.update()
    })
  })
}
```

**Issue: App not installable**
```bash
# Check manifest.json validity
# Verify HTTPS (required for PWA)
# Check service worker registration
# Use Chrome DevTools Application tab
```

### Performance Issues

#### Slow Loading
1. Check bundle size: `npm run analyze`
2. Optimize images: Use Next.js Image component
3. Enable compression: Configure gzip/brotli
4. Use CDN: Configure asset delivery

#### Memory Leaks
1. Check for unsubscribed event listeners
2. Clear intervals/timeouts in useEffect cleanup
3. Avoid storing large objects in state
4. Use React DevTools Profiler

### API Issues

#### Planetary Data Not Loading
1. Check NASA JPL Horizons API status
2. Verify CORS configuration
3. Check rate limiting
4. Fall back to simulated data

#### Health Check Failing
1. Verify API route structure
2. Check server logs
3. Validate request/response format
4. Test with curl/Postman

### Getting Help

#### Community Resources
- **GitHub Issues**: Report bugs and feature requests
- **Discord Community**: Real-time chat support
- **Stack Overflow**: Technical questions
- **Documentation**: Comprehensive guides

#### Support Channels
- **Email**: support@vedicastroai.com
- **GitHub**: [Issues](https://github.com/yourusername/vedic-astro-ai/issues)
- **Discord**: [Community Server](https://discord.gg/vedicastroai)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

---

## 🙏 Acknowledgments

### Special Thanks
- **Ancient Vedic Sages** for the timeless wisdom of Jyotish
- **NASA JPL** for providing accurate planetary ephemeris data
- **Next.js Team** for the incredible React framework
- **Vercel** for seamless deployment and analytics
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for utility-first styling
- **Open Source Community** for the amazing ecosystem

### Astrological Consultants
- Traditional Vedic astrology experts
- Modern research astrologers
- AI/ML specialists in astrological applications

### Technical Contributors
- Frontend developers
- Mobile app specialists
- UI/UX designers
- DevOps engineers

---

<div align="center">

### 🌟 Star this repository if it helps you on your cosmic journey!

**Made with ❤️ and ✨ cosmic energy**

[⬆️ Back to Top](#-vedic-astro-ai---comprehensive-project-documentation)

</div>