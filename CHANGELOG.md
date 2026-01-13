# Changelog

## [2.0.0] - 2026-01-13

### 🎨 Major UI/UX Redesign - Courtesy of Sonnet 4.5

Used Cursor agents to interact with Claude Sonnet 4.5 model to refresh UI/UX of this old project. 

#### Design System
- **Glassmorphism Design**: Complete visual overhaul with modern frosted glass aesthetic
- **Extended Tailwind Configuration**: Added custom colors, gradients, shadows, and animations
  - Glass colors with transparency and blur effects
  - Primary gradient (blue → purple)
  - Secondary gradient (teal → blue)  
  - Accent gradient (orange → pink)
- **Rich Color Palette**: Moved beyond single blue theme to multi-color gradient system
- **Hybrid CSS Approach**: Tailwind utilities for components + minimal custom CSS for complex animations

#### Component Improvements

**Navigation Bar**
- Glassmorphic navbar with backdrop blur and semi-transparent background
- Gradient logo badge with shadow
- Enhanced hover effects with smooth transitions
- Improved responsive layout

**Weather Cards**
- Complete redesign with frosted glass effect and gradient borders
- Enhanced flip card animation with smoother transitions
- Front side: Large gradient temperature display, location header, condition text
- Back side: Grid layout with individual glass containers for metrics (Feels Like, Wind, Humidity, UV)
- Hover effects with lift animation and glow
- "Tap for details" hints on both sides

**Loading States**
- Professional skeleton loaders with shimmer animation
- Match actual card dimensions for better UX
- Glassmorphic loading cards replace plain text
- Improved error states with icons and friendly messages

**Search Page**
- Modern glassmorphic search input with focus glow
- Gradient button with hover animations
- Enhanced result cards with detailed weather metrics
- "Add to Favorites" button with success notifications
- Loading skeletons for search results
- Better form handling and validation

**Favorites Page**
- Beautiful empty state with call-to-action
- Hover-reveal remove buttons on cards
- Improved layout with better spacing
- Empty state directs users to search page

**Page Layouts**
- Dynamic gradient backgrounds (dark slate → purple → dark slate)
- Hero sections with gradient text headings
- Consistent max-widths and spacing
- Better typography hierarchy
- Improved responsive design

### 🔧 Technical Improvements

#### Next.js 15 Compatibility
- **Fixed API Route Params**: Updated `/api/[location]/route.js` to properly await `params` before accessing properties
  - Changed from `params.location` to `const resolvedParams = await params; resolvedParams.location`
  - Resolves Next.js 15 async params requirement
  - Eliminates "params should be awaited" error

---

## [1.0.0] - Initial Release

### Features
- Weather data display for multiple cities
- Search functionality for any location worldwide
- Favorites system with localStorage persistence
- Flip card animation for weather details
- Integration with WeatherAPI via RapidAPI
- Basic responsive layout
