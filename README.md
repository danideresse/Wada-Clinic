# Wada Clinic – Modern Healthcare & Family Medicine Website

A fast, accessible, trustworthy, and visually polished medical clinic website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **React Hook Form + Zod**.

Designed with a calm, reassuring aesthetic suited for a premium medical practice.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v22.17.0)
- **npm** v9+

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the clinic website.

### 4. Build for Production
```bash
npm run build
npm run start
```

### 5. Run Lint Check
```bash
npm run lint
```

---

## 📁 Project Architecture

```
C:\Users\Dani\Wada Clinic/
├── src/
│   ├── app/
│   │   ├── about/page.tsx             # Clinic story, values, facilities
│   │   ├── book/                      # Appointment request page (with searchParams support)
│   │   ├── contact/page.tsx           # Contact details, interactive map, contact form
│   │   ├── doctors/page.tsx           # Physician & specialist team directory
│   │   ├── services/                  # Services listing page
│   │   │   └── [slug]/page.tsx        # Dynamic specialty detail pages
│   │   ├── actions.ts                 # Next.js Server Actions with Zod validation
│   │   ├── globals.css                # Medical design tokens, utilities & animations
│   │   ├── layout.tsx                 # Root layout with fonts, JSON-LD Schema & nav/footer
│   │   ├── not-found.tsx              # Custom accessible 404 page
│   │   ├── page.tsx                   # Main Home page with full section suite
│   │   ├── robots.ts                  # Search engine robots.txt generator
│   │   └── sitemap.ts                 # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── common/
│   │   │   └── icon-renderer.tsx      # Safe Lucide icon mapper for data files
│   │   ├── forms/
│   │   │   ├── appointment-form.tsx   # React Hook Form + Zod appointment booking
│   │   │   └── contact-form.tsx       # Validated contact form
│   │   ├── layout/
│   │   │   ├── navbar.tsx             # Sticky navbar with mobile menu & active state
│   │   │   ├── footer.tsx             # Footer with hours, disclaimer, map links
│   │   │   └── floating-cta.tsx       # Sticky floating mobile bar (Call / WhatsApp / Book)
│   │   ├── sections/
│   │   │   ├── hero.tsx               # Hero with stats, trust badges, CTAs
│   │   │   ├── services-overview.tsx  # Specialty preview cards
│   │   │   ├── why-us.tsx             # 4 patient-first value propositions
│   │   │   ├── doctors-preview.tsx    # Featured physician cards
│   │   │   ├── how-it-works.tsx       # 3-step booking walkthrough
│   │   │   ├── testimonials.tsx       # Verified patient reviews
│   │   │   ├── faq-section.tsx        # Accessible interactive accordion
│   │   │   └── cta-banner.tsx         # Full-width action banner
│   │   └── ui/
│   │       ├── accordion.tsx          # Accessible ARIA accordion component
│   │       ├── badge.tsx              # Pill/badge tags
│   │       ├── button.tsx             # Multi-variant button with asChild & loading state
│   │       └── card.tsx               # Card primitives
│   ├── data/
│   │   ├── site-config.ts             # Central clinic name, phone, address, hours, stats
│   │   ├── services.ts                # Medical services, features, treatments, duration
│   │   ├── doctors.ts                 # Doctors profiles, credentials, schedules, photos
│   │   ├── testimonials.ts            # Patient reviews and ratings
│   │   └── faqs.ts                    # Frequently asked questions & answers
│   └── lib/
│       ├── utils.ts                   # Tailwind class merge helper (cn)
│       └── validations.ts             # Zod validation schemas & honeypot spam protection
├── next.config.mjs                    # Next.js config with Unsplash domain configuration
├── tailwind.config.ts                 # Tailwind theme configuration
├── tsconfig.json                      # Strict TypeScript compiler options
└── package.json                       # Scripts and project dependencies
```

---

## ✏️ How to Edit Content & Replace Placeholders

All website content is centralized in typed data files under `src/data/`. You do not need to hunt through JSX components to update information.

### 1. General Clinic Details (`src/data/site-config.ts`)
- **Clinic Name & Tagline**: Update `name`, `tagline`, and `description`.
- **Contact Numbers**: Update `phone`, `phoneDisplay`, and `emergencyPhone`.
- **Address & Coordinates**: Set `address.street`, `city`, `state`, `postalCode`, and `mapQueryUrl`.
- **Clinical Hours**: Adjust `openingHours` for weekdays, Saturdays, and triage coverage.
- **Stats**: Update the trust stats (years in service, patients treated, clinician count).
- **Medical Disclaimer**: Review and customize the footer legal/medical disclaimer.

### 2. Medical Specialties (`src/data/services.ts`)
Add or edit service items with:
- `slug`: URL identifier (e.g. `cardiology`)
- `title`: Display name (e.g. `Cardiology & Vascular Health`)
- `shortDescription` and `fullDescription`
- `iconName`: Name of Lucide icon (e.g. `Stethoscope`, `HeartPulse`, `Baby`, `Bone`)
- `image`: Unsplash or local image path
- `features`: Array of procedures/features
- `commonConditions`: List of conditions treated
- `consultationDuration`: e.g. `30 – 45 mins`
- `doctorInCharge`: Doctor leading the service

### 3. Physician & Specialist Profiles (`src/data/doctors.ts`)
Update doctor cards with real names, credentials, schedules, and photos:
- `name`: e.g. `Dr. [Name]` -> Real doctor name
- `role` & `department`
- `qualifications`: Board certifications and degrees
- `schedule`: Clinic consultation days and times
- `languages`: Languages spoken
- `image`: Physician headshot URL

### 4. Patient Reviews (`src/data/testimonials.ts`)
Update with actual consented patient reviews or feedback:
- `patientName`, `tag`, `quote`, `rating`, `date`

### 5. Frequently Asked Questions (`src/data/faqs.ts`)
Edit or add questions and answers regarding accepted insurances, appointment prep, parking, and prescriptions.

---

## 🎨 Changing Colors & Typography

### Colors
Colors are configured via CSS variables and Tailwind tokens:
- **Variables**: Located in `src/app/globals.css` under `:root`.
  - Primary color (deep medical teal): `--primary: 195 85% 26%`
  - Accent color (emerald/mint): `--accent: 160 84% 39%`
  - Background (calm off-white): `--background: 210 40% 98%`
  - Foreground (readable slate): `--foreground: 222 47% 11%`
- **Tailwind Palette**: Located in `tailwind.config.ts` under `theme.extend.colors`.

### Fonts
Configured in `src/app/layout.tsx` using `next/font/google`:
- **Headings**: `Plus_Jakarta_Sans` (`--font-heading`)
- **Body**: `Inter` (`--font-sans`)

---

## ✉️ Connecting Form Submissions (Email / Database)

Form submissions are handled by Next.js Server Actions in `src/app/actions.ts`:
- `submitAppointmentAction` (appointment booking requests)
- `submitContactAction` (general contact inquiries)

Both actions validate submissions using Zod schemas in `src/lib/validations.ts` and feature a honeypot field (`botWebsiteCheck`) to discard automated spam.

### To enable live email dispatch (e.g., with Resend):
1. Install Resend: `npm install resend`
2. Add your `RESEND_API_KEY` to `.env.local`
3. In `src/app/actions.ts`, uncomment the marked `// TODO` block to send confirmation emails to the patient and clinic reception desk.

---

## 🌐 Deployment to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework preset will automatically be detected as **Next.js**.
5. Click **"Deploy"**. The site will deploy as a fast, edge-optimized static and serverless application.

---

## 📋 Suggested Next Steps
- [ ] Replace placeholder doctor photos and names with verified clinic staff.
- [ ] Configure live email notifications via Resend or Nodemailer.
- [ ] Connect a PostgreSQL / Supabase database to store patient appointment requests.
- [ ] Add Google Analytics 4 / privacy-friendly Plausible analytics.
- [ ] If required by the clinic, add multi-language support (e.g. English / Japanese).
