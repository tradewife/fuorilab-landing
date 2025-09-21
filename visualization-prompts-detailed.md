# Visualization Prompts – Detailed Implementation Guide

This document supplies end-to-end briefs for the first four elite-tier visualizations proposed for the FUORI landing page.  
Audience: senior front-end engineers, data-vis specialists, and product designers.

---

## 1. Dynamic Misalignment Heatmap

### 1. Technical Specifications
- Framework : React 18 + TypeScript
- Chart lib : D3.js (v7) wrapped in a custom hook, OR Apache ECharts (v5) if team prefers.
- Canvas : SVG for < 500 points; auto-switch to `<canvas>` rendering beyond that threshold.
- Data fetch : `/api/metrics/category-frequency?interval=daily`
- Update cadence : Server-sent events (SSE) every 30 s.
- Bundle guard : ≤ 75 KB gzip.

### 2. Design Requirements
- 12×N grid (rows = incident categories, columns = time buckets).
- Colour scale : FUORI Purple (`#5B36FF`) ➜ FUORI Amber (`#FFC726`) on a perceptually uniform scale.
- Rounded 4 px cell radius; 2 px gutter.
- Header row pinned with subtle shadow.

### 3. User Interaction Patterns
- Hover : Tooltip with category, date, absolute count, % vs. baseline.
- Click : Locks tooltip + opens side drawer with anonymised exemplar (VL ≥ 2).
- Legend toggle : Linear v. Log scale switch.

### 4. Data Structure
```json
{
  "generatedAt": "2025-09-21T16:00:00Z",
  "interval": "1d",
  "categories": [
    { "id": "policy_deviation", "label": "Policy Deviation" },
    ...
  ],
  "buckets": [
    { "start": "2025-09-14", "values": { "policy_deviation": 4, "data_leakage": 1, ... } }
  ]
}
```

### 5. Implementation Considerations
- Memoise colour scale with `useMemo`.
- Virtualise long time-series via horizontal scroll (`react-use-gesture`).
- Provide fallback SSR static PNG for bots.

### 6. Accessibility
- WCAG 2.2 AA.
- ARIA role = `img` with `aria-label` summary.
- Keyboard focus ring on cells; `Enter` replicates click.

### 7. Performance
- Debounce hover events 16 ms.
- Use `requestIdleCallback` to pre-compute max min for colour domain.

### 8. Brand Integration
- Title: "Where deviations cluster".
- Subtitle uses brand mono-spaced font.
- Cells pulse once on initial load (600 ms) using FUORI gradient.

### 9. Code Snippet
```tsx
const HeatCell: React.FC<CellProps> = ({x, y, r, value}) => (
  <rect
    x={x} y={y} width={r} height={r} rx="4"
    fill={colorScale(value)}
    tabIndex={0}
    onKeyDown={e=> e.key==='Enter' && onCellClick()}
    onClick={onCellClick}
  />
);
```

### 10. Responsive
- ≥ 1280 px : full grid.
- 768-1279 px : horizontal swipe enabled, legend collapses.
- ≤ 767 px : show 7-day window with mini-map navigator.

---

## 2. Verification Ladder Dial

### 1. Technical Specifications
- SVG radial chart built with React + D3 arc generator.
- Size : 320 × 320 px (`clamp(260px, 40vw, 320px)`).
- Five slices (VL-0 … VL-4) with dynamic highlighting.

### 2. Design Requirements
- FUORI graphite background circle.
- Inner ring displays short label; outer ring shows long description on hover.
- Colours:  
  VL-0 grey `#A5A5A5` ➜ VL-4 emerald `#00C07B`.

### 3. Interaction Patterns
- Dial rotates to selected level (`framer-motion` spring).
- Click slice → modal sheet enumerating data-quality requirements & economic stake.
- Keyboard left/right arrow rotates selection.

### 4. Data Structure
```json
[
  { "level": 0, "title": "Anecdote", "desc": "Unverified claim" },
  ...
]
```

### 5. Implementation Notes
- Declare arc paths once; animate via `transform: rotate()`.
- Persist last selection to `localStorage`.

### 6. Accessibility
- Role `tablist`; each slice a `tab`.
- High-contrast mode : outline ring.

### 7. Performance
- Static SVG < 4 KB.
- Use CSS `will-change: transform`.

### 8. Brand Messaging
- Centre caption: "Verification Level".
- Microcopy draws from FUORI copy deck.

### 9. Snippet
```tsx
const rotate = useSpring(selected * 72); // 5 slices
```

### 10. Responsive
- Shrinks to 220 px on mobile; legend moves below.

---

## 3. Evidence Pipeline Flow

### 1. Technical Specs
- Horizontal stepper SVG stitched into `intersection-observer` driven scroll animation.
- Steps: 7. Width fluid; each node 120 → 80 px mobile.

### 2. Design Aesthetics
- FUORI gradient line (`linear-gradient(90deg, #5B36FF 0%, #FFC726 100%)`).
- Nodes are hexagons (symbolising tamper-proof seals).

### 3. Interactions
- Scroll past trigger → progressive glow along path (`GSAP timeline`).
- Hover node → micro-copy tooltip, click → docs deep-link.

### 4. Data Structure
```json
[
  { "id": "capture", "label": "Capture", "link": "/docs/pipeline#capture" },
  ...
]
```

### 5. Implementation
- Pre-render static SVG for SEO, overlay animated mask client-side.
- Prefer CSS variables for colours to inherit dark/light mode.

### 6. Accessibility
- Provide fallback ordered list within `<noscript>`.
- ARIA label per node.

### 7. Performance
- Animation only fires once (`once:true` in observer).
- GPU-accelerated transforms only.

### 8. Brand Fit
- Copy echoes pipeline wording in site content.
- Sub-heading: "Tamper-evident by design".

### 9. Pseudocode
```js
observer.onEnter(id => gsap.to(`#${id}`, {strokeDashoffset:0, duration:0.6}));
```

### 10. Responsive
- On ≤ 640 px switch to vertical layout; path rotates 90°.

---

## 4. Persona Activation Explorer

### 1. Technical Specifications
- WebGL plot via `regl` or `deck.gl` for 60 fps.
- Data source : compressed array of activation magnitudes per token.
- Viewport : scroll-snap full-width panel.

### 2. Design & Aesthetics
- Line chart with dual series: **baseline** (grey dashed) vs. **suspect activation** (FUORI red `#FF3B30`).
- Shaded anomaly zones above z-score 2.5.

### 3. Interaction Patterns
- Hover token → floating modal shows original token (PII-scrubbed) + activation value.
- Toggle switch: "benign | misaligned" persona overlay.
- Brush-select region to export CSV.

### 4. Data Schema
```json
{
  "tokens": ["The", "system", ...],
  "baseline": [0.12, 0.08, ...],
  "suspect": [0.22, 0.07, ...],
  "zCutoff": 2.5
}
```

### 5. Implementation Considerations
- Use `TypedArray` for GPU buffer.
- Down-sample to 1 k points for mobile.

### 6. Accessibility
- High-contrast toggle.
- Screen-reader summary of max spike, mean shift.

### 7. Performance
- Lazy-load WebGL bundle (`dynamic import`) when panel enters viewport.
- Throttle hover to animation frame.

### 8. Brand and Messaging
- Header: "Inside the model".
- Small banner links to OpenAI emergent-misalignment paper.

### 9. Code Snippet
```ts
const positions = new Float32Array(tokens.length * 2);
suspect.forEach((v,i)=>{ positions[i*2]=i; positions[i*2+1]=v; });
regl.draw({attributes:{position:positions}, ...});
```

### 10. Responsive
- Desktop: full plot.
- ≤ 768 px: condense y-axis labels, enable pinch-zoom gesture.

---
