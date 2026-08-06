# Newman Electrical — Next.js rewrite

This branch contains a scaffold for a modern Next.js + TypeScript + Tailwind site for Newman Electrical Services.

Preview & deploy on Vercel

1. Push the site-rewrite/nextjs branch (already pushed).
2. Connect the repository in Vercel and enable preview deployments.
3. Add the following environment variables in Vercel (Project > Settings > Environment Variables):
   - SENDGRID_API_KEY (optional) — if you want the contact form to send emails via SendGrid.
   - CONTACT_TO_EMAIL (optional) — email where contact messages are sent (defaults to nkavehere909@gmail.com).
   - GA_MEASUREMENT_ID (optional) — Google Analytics (GA4) measurement ID.
   - MAPS_API_KEY (optional) — Google Maps API key if you want interactive maps.

Local dev

npm install
npm run dev

What's next (planned commits / PR contents)
- Replace SVG placeholders with optimized WebP/JPG assets (360/640/1024) and update picture/srcset + preload.
- Add About, Services, Projects, Blog pages, and CMS/MDX for blog posts.
- Accessibility improvements, SEO metadata, and structured data (JSON-LD).
- Final performance audits (Lighthouse) and adjustments.

If you want me to proceed, I will commit the optimized images and open a PR with step-by-step commits for review.
