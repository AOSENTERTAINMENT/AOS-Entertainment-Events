# AOS Entertainment Website

Production website for AOS Entertainment, a Cork DJ service focused on weddings, corporate events, and parties.

Built with Next.js App Router, TypeScript, and Tailwind CSS. Includes SEO metadata, sitemap/robots generation, and a server-side contact form endpoint using SMTP.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Nodemailer (contact form email delivery)
- Zod (contact form validation)

## Local Development

Prerequisites:
- Node.js 20+
- npm 10+

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

The contact form API route (`app/api/contact/route.ts`) requires SMTP configuration.

Required:
- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_USER`
- `EMAIL_PASS`

Optional:
- `EMAIL_FROM` (defaults to `EMAIL_USER`)
- `EMAIL_FROM_NAME` (defaults to `AOS Entertainment Contact`)
- `NEXT_PUBLIC_APP_URL` (recommended in production for canonical URLs and origin checks)

Example:

```env
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=mailer@example.com
EMAIL_PASS=your-password
EMAIL_FROM=hello@aosentertainment.ie
EMAIL_FROM_NAME=AOS Entertainment
NEXT_PUBLIC_APP_URL=https://aosentertainment.ie
```

## Scripts

- `npm run dev` - start local dev server (port 3000)
- `npm run build` - clean build artifacts and create production build
- `npm run build:fast` - build without pre-clean
- `npm run start` - run production server after build
- `npm run lint` - run ESLint checks

## Production Checklist

1. Set all required environment variables in your hosting platform.
2. Run quality checks locally:
   - `npm run lint`
   - `npm run build`
3. Verify contact form submissions are received at the configured inbox.
4. Confirm domain and HTTPS are configured.
5. Re-submit `https://aosentertainment.ie/sitemap.xml` in Google Search Console after launch updates.
