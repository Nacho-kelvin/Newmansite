# Newman Electrical — Next.js rewrite

This branch contains a scaffold for a modern Next.js + TypeScript + Tailwind site for Newman Electrical Services.

Quick start (local)

1. npm install
2. npm run dev

What I implemented in this initial scaffold
- Next.js + TypeScript app structure
- Tailwind CSS with basic theme values
- Header, Hero, Footer components
- Contact API route placeholder (/api/contact)
- Responsive SVG placeholders for hero images in /public/images
- Performance-minded markup: Image priority for hero and critical CSS inlined in index

What I will do next in subsequent commits
- Replace SVG placeholders with optimized WebP/JPG assets (360/640/1024)
- Add project pages, blog, services pages and CMS/migration for content
- Implement real contact email sending (SMTP/SendGrid) and add instructions for env vars in Vercel
- Add sitemap.xml, robots.txt, and analytics integration

Deploy / Preview on Vercel
- Connect this repository to Vercel and enable preview deployments for branches.
- Add required environment variables in Vercel dashboard when ready (SMTP, GA, MAPS keys).

If you want me to continue, I will now implement the remaining pages, optimize images, and open a PR with small commits for review.
