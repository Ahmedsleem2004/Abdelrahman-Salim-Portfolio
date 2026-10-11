# EL DAGAL Portfolio

A bilingual (English/Arabic) React + Vite portfolio with GSAP ScrollTrigger animations, replay-on-scroll reveals, responsive layout, and placeholders for the owner's portrait and contact details.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Add the real portrait, email, and phone

Edit `src/data/profile.js`:

- `photo`: put a portrait in `public/` and set e.g. `photo: '/portrait.jpg'`.
- `email`: replace `YOUR_EMAIL@example.com`.
- `phone`: replace `YOUR_PHONE_NUMBER` with the full international number using digits only (country code included, no `+`, spaces, or dashes). This powers `tel:` and WhatsApp links.
- `name`, `role`, and `location` can also be edited there.

The experience and portfolio descriptions are starter copy and should be verified/edited by the portfolio owner before publishing.
