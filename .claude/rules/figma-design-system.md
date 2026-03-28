# IPS Portal — Figma Design System Rules

## Project Overview

IPS Strategic Capstone Portal — a Next.js 16 web application presenting MBA capstone strategic analysis deliverables for Integrated Protection Services. Features slide-based presentations, markdown deliverables, and interactive D3/Recharts data visualizations.

---

## Token Definitions

### Colors (defined in `tailwind.config.ts` and `lib/constants.ts`)

```typescript
// Tailwind theme extensions — tailwind.config.ts
accent: { DEFAULT: '#4950bc', light: '#e8e9f7', dark: '#3a4099' }
ips: { dark: '#1a1a1f', gray: '#80848f', light: '#f5f5f8' }

// Additional tokens — lib/constants.ts
GREEN = '#217a42'    GREEN_LIGHT = '#e6f5ec'
RED = '#cc1f1f'      RED_LIGHT = '#fde8e8'
ORANGE = '#d96619'   ORANGE_LIGHT = '#fef0e6'
TEAL = '#0d8090'     TEAL_LIGHT = '#dff3f5'
```

- IMPORTANT: Never hardcode hex colors in components. Use Tailwind classes (`bg-accent`, `text-ips-dark`, `bg-ips-light`) or import from `lib/constants.ts`.
- Slides use direct hex in some places for precise control — acceptable only inside `components/slides/slides/Slide*.tsx` files.
- Act-specific colors are defined in `lib/slides-data.ts` as `ACT_COLORS` (Tailwind classes) and `ACT_NAMES`.

### Typography

- Font: Inter (loaded via `next/font/google` in `app/layout.tsx`, variable `--font-inter`)
- IMPORTANT: All text uses `font-sans` (resolves to Inter via Tailwind config)
- Slide text uses viewport-relative units: `text-[2vw]`, `text-[1.2vw]`, `text-[0.75vw]`
- Deliverable content uses fixed sizes via `MarkdownRenderer.tsx` custom components

### Spacing

- Slides use percentage-based spacing: `px-[4%]`, `py-[2.5%]`, `gap-[1.5%]`
- Pages use Tailwind defaults: `px-8`, `py-10`, `gap-6`, etc.
- IMPORTANT: Slides must use percentage/viewport units for responsive scaling within the presentation viewer

---

## Component Library

### Location Structure

```
components/
├── charts/              # D3 and Recharts interactive visualizations
│   ├── ConvergenceSqueeze.tsx
│   ├── StrategicGroupMap.tsx
│   └── PEAcquisitionTable.tsx
├── deliverables/        # Markdown rendering and print
│   ├── MarkdownRenderer.tsx
│   └── PrintButton.tsx
├── layout/              # App shell components
│   └── SiteNav.tsx
└── slides/              # Presentation system
    ├── SlideViewer.tsx   # Main wrapper with navigation/animation
    ├── SlideRenderer.tsx # Dynamic import registry
    ├── SlideOverview.tsx # Grid modal for slide overview
    └── slides/           # Individual slide components
        ├── Slide01.tsx
        └── ... through Slide50.tsx
```

### Component Patterns

- Slides: Named exports (`export function Slide25() {}`) — no default exports
- Charts: Named exports (`export function StrategicGroupMap() {}`)
- Pages: Default exports (`export default function Page() {}`)
- Client components: Mark with `'use client'` at top — required for D3, Framer Motion, interactivity
- Server components: Default for pages and layouts (no directive needed)

### Slide Component Pattern

```tsx
// components/slides/slides/SlideXX.tsx
export function SlideXX() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden flex flex-col">
      {/* Header bar — act-colored background */}
      <div className="bg-[#4950bc] px-[4%] py-[2.5%] flex items-center justify-between flex-shrink-0">
        <div>
          <p className="text-white/60 text-[0.75vw] font-semibold uppercase tracking-widest">
            ACT X: TITLE
          </p>
          <h2 className="text-white font-bold text-[2vw] leading-tight">Slide Title</h2>
        </div>
        <div className="text-right">
          <p className="text-white/50 text-[0.75vw]">Speaker: Name</p>
        </div>
      </div>
      {/* Content area — flex-1 to fill remaining space */}
      <div className="flex-1 p-[3%] min-h-0">
        {/* Slide content */}
      </div>
    </div>
  )
}
```

- IMPORTANT: Every slide must be `w-full h-full` with `overflow-hidden`
- IMPORTANT: Header uses act-specific background colors (purple=#4950bc for act 1-2, emerald for act 3, orange for act 4, etc.)
- IMPORTANT: Text sizes in slides use `vw` units, NOT Tailwind text-size classes
- IMPORTANT: Slides with charts use dynamic import with `{ ssr: false }`

### Chart Component Pattern

```tsx
// components/charts/ChartName.tsx
'use client'
import { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'

export function ChartName() {
  const svgRef = useRef<SVGSVGElement>(null)
  // D3 rendering in useEffect
  // Responsive sizing from container
  return <svg ref={svgRef} />
}
```

- D3 charts: Use `useRef` + `useEffect` pattern, responsive to container
- Recharts: Use `ResponsiveContainer` wrapper
- IMPORTANT: All chart components must be client components (`'use client'`)
- IMPORTANT: When embedding charts in slides, use dynamic import:
  ```tsx
  const Chart = dynamic(() => import('@/components/charts/ChartName').then(m => ({ default: m.ChartName })), { ssr: false })
  ```

---

## Frameworks & Libraries

| Library | Version | Usage |
|---------|---------|-------|
| Next.js | 16.2.1 | App router, server/client components |
| React | 19.2.4 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.4.19 | Utility-first styling |
| Framer Motion | 12.38.0 | Slide transitions, scroll animations |
| D3 | 7.9.0 | Interactive data visualizations |
| Recharts | 3.8.1 | Simple chart components |
| react-markdown | 10.1.0 | Deliverable content rendering |
| remark-gfm | 4.0.1 | GitHub Flavored Markdown tables |
| Lucide React | 1.7.0 | Icons |

---

## Asset Management

- Static assets: `public/` directory (ips-logo.png, ips-logo.svg, xavier-logo.jpg, xavier-logo.svg)
- IMPORTANT: If Figma MCP server returns a localhost source for an image or SVG, use that source directly
- IMPORTANT: DO NOT import new icon packages — use Lucide React or inline SVGs
- IMPORTANT: DO NOT create placeholder images — use actual assets or Figma-served assets

---

## Styling Approach

- **Primary:** Tailwind CSS utility classes
- **Global styles:** `app/globals.css` (minimal — mostly Tailwind directives)
- **Responsive:** Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`)
- **Slides:** Use percentage and `vw` units for presentation-specific responsive scaling
- **Animations:** Framer Motion for slide transitions and chart interactions
- **Custom animations:** Defined in `tailwind.config.ts` keyframes (fadeIn, slideUp, pulse-slow)
- IMPORTANT: No CSS modules, no styled-components, no inline `style` attributes except for D3-computed values

---

## Figma MCP Integration Rules

### Required Flow (do not skip)

1. Run `get_design_context` first to fetch the structured representation for the exact node(s)
2. If the response is too large or truncated, run `get_metadata` to get the high-level node map, then re-fetch only the required node(s) with `get_design_context`
3. Run `get_screenshot` for a visual reference of the node variant being implemented
4. Only after you have both `get_design_context` and `get_screenshot`, download any assets needed and start implementation
5. Translate the output (React + Tailwind) into this project's conventions
6. Validate against Figma for 1:1 look and behavior before marking complete

### Implementation Rules

- Translate Figma output to match IPS Portal patterns (slide structure, chart patterns, color tokens)
- IMPORTANT: Reuse existing components from `components/` instead of creating duplicates
- Use the project's color system from `tailwind.config.ts` and `lib/constants.ts`
- Respect Next.js App Router conventions (server vs client components)
- Strive for 1:1 visual parity with the Figma design
- Validate the final UI against the Figma screenshot

---

## Project-Specific Conventions

### Slide Registration

When creating new slides, THREE files must be updated:
1. Create: `components/slides/slides/SlideXX.tsx` — the component
2. Modify: `lib/slides-data.ts` — add SLIDES array entry with id, title, act, speaker, notes, source
3. Modify: `components/slides/SlideRenderer.tsx` — add dynamic import mapping

### Deliverable Registration

When creating new deliverables:
1. Create: `content/{slug}.md` — markdown content file
2. Modify: `lib/constants.ts` — add to DELIVERABLES or INTERNAL_DELIVERABLES array
3. Routes auto-generate via `generateStaticParams()` in `[slug]/page.tsx`

### Act Color Coding

| Act | Header BG | Theme |
|-----|-----------|-------|
| 1-2 | `#4950bc` (accent purple) | External environment |
| 3 | Emerald green | Moat & Gaps |
| 4 | Orange | Path Forward |
| 5 | Purple variant | Close |
| 6+ (internal) | TBD — use distinct colors for internal analysis acts |

### Data-Driven Content

- Chart data should be co-located with chart components or imported from `lib/` data files
- IMPORTANT: Never hardcode large datasets inline in slide components — extract to separate data objects
- Markdown content is in `content/` directory, loaded by `lib/deliverables.ts`

### Path Aliases

- `@/` maps to project root (configured in `tsconfig.json`)
- Use `@/components/`, `@/lib/`, `@/app/` for all imports
- IMPORTANT: No relative imports beyond parent directory (`../`)
