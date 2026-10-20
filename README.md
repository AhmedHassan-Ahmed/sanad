# SANAD Core Experience

Premium SANAD wearable-product website built with Next.js, React, TypeScript, Tailwind CSS, GSAP, and Three.js.

## Included updates

- Persistent light/dark theme toggle in the navigation.
- Three.js decorative 3D wireframe and particle background with pointer-responsive movement and reduced-motion support.
- Larger, horizontal team profile cards using the existing team portraits and names.
- Simplified product inquiry form focused on purchasing and product details.
- Removed application type and team-role fields.
- Optional message field. If left empty, WhatsApp opens with a default request for product details, pricing, availability, package contents, and ordering information.
- Current SANAD pricing and product imagery retained.

## Run locally

Use Node.js 20.9+ and install dependencies with your package manager:

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm start
```

The project adds `three` and `@types/three` for the decorative background. The Three.js background is ambient visual design, not a 3D model of the SANAD hardware. A genuine rotatable device model requires the latest product's `.glb` or `.gltf` asset.

## WhatsApp

The inquiry form uses the existing configured SANAD WhatsApp destination in `app/page.tsx`. Visitors review the prefilled message and press Send in WhatsApp themselves.
# school-management
