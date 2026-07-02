# Mrig Naini Mudgal — Premium AI Engineer Portfolio

A premium, award-winning developer portfolio designed with Japanese minimalism and modern frontend aesthetics (inspired by Apple HID, Linear, Raycast, and Vercel). Built from scratch using **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## Key Features

- **Aesthetic Excellence**: Peaceful luxury palette featuring warm ivory, soft sage, muted gold, and rich charcoal tones.
- **Volumetric Ambient Lighting**: drifting mesh gradients powered by GPU-optimized CSS transforms combined with a canvas particle layer to simulate organic moving light.
- **Glassmorphism Design**: Subtle card styling, premium border transitions, and smooth elevated hover lifts.
- **Uncropped Media Presentation**: Images are formatted inside elegant frames, preserving their aspect ratios on all screen widths.
- **High Typography Contrast**: Upgraded readable sizes with Google Font integrations (`Inter`, `Playfair Display`, `Cormorant Garamond`).
- **Fully Responsive & Accessible**: WCAG-compliant color contrasts, keyboard focus outline support, semantic HTML5, and ARIA descriptors.

---

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19 & TypeScript 5
- **Styling**: Tailwind CSS v4 & PostCSS
- **Animations**: Framer Motion & CSS Compositor keyframes
- **Icons**: Lucide React & Custom SVG brand components

---

## Project Structure

```text
├── app/
│   ├── favicon.ico
│   ├── globals.css      # Custom Tailwind theme overrides & keyframes
│   ├── layout.tsx       # Root Layout with Font Optimization
│   └── page.tsx         # Assembled Home Page
├── components/
│   ├── icons.tsx        # Custom SVG brand icon components
│   ├── Navbar.tsx       # Sticky glassmorphic navigator & dark mode toggle
│   ├── PremiumBackground.tsx  # Volumetric drift & canvas particles
│   ├── Hero.tsx         # Page landing intro & actions
│   ├── About.tsx        # Profile overview & education spec cards
│   ├── Experience.tsx   # Elegant timeline & skill highlights
│   ├── Skills.tsx       # Capability cards with border lift micro-interactions
│   ├── Projects.tsx     # Alternating project cases (un-cropped images)
│   ├── Contact.tsx      # Contact detail list & form handling
│   └── Footer.tsx       # Signature footer
├── public/
│   └── assets/          # Profile photo & project screenshots
├── package.json
└── tsconfig.json
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
```

---

## Deployment

Deploy this project on Vercel with zero configurations:
1. Initialize git: `git init`
2. Add files: `git add .`
3. Commit: `git commit -m "feat: initial commit"`
4. Deploy by importing the repository directly in the [Vercel Dashboard](https://vercel.com/new).
