# Audiologist Portfolio

A personal portfolio site for an audiologist, forked from Muhammad Shaheer Gul's
own developer portfolio (`../Portfolio`) and adapted for a healthcare/private-practice
audience. Same React + Vite + Express stack, different content and theme.

## What's different from the original developer portfolio

- **No chatbot.** The AI chat widget, `api/chat.js`, and `dev-server.js` were removed entirely.
- **No Arabic/i18n.** `src/i18n.jsx` was simplified to English-only — no language toggle,
  no RTL layout, no Arabic translations. It still exposes the same `useI18n()` API
  (`t`, `tl`, `personal`, `skills`, `experience`, `projects`) so components didn't need rewrites.
- **Color theme:** "Blush & Lavender" — soft blush pink + lavender accents (feminine,
  professional, not neon/cartoonish). Defined as CSS variables in `src/index.css`
  (`:root` = light theme, `[data-theme="dark"]` = dark theme).
- **New sections wired in:** `Skills` and `Certifications` components existed in the
  original repo but were never rendered in `App.jsx`. They're now included, since
  specialties/certifications/education are highly relevant for a healthcare portfolio.
- **No portrait photo.** The original photo files (`image*.png`) belonged to Shaheer
  and were deleted. `Hero.jsx` now always renders an initials avatar circle — swap in
  a real photo later by re-adding an `<img>` there.

## Content status: all placeholder / dummy data

Everything in `src/data/portfolio.js` is **dummy content** meant to be replaced:
- `personal` — name "Dr. Jane Doe", placeholder email/phone/location/socials
- `skills` — plausible audiology specialty categories (Diagnostic Testing, Hearing Aid
  Care, Pediatric Care, Patient Care)
- `experience` — invented career history
- `projects` — reused as "Services" (Hearing Evaluations, Hearing Aid Fitting,
  Pediatric Hearing Program, Tinnitus & Balance Care) — the key is still `projects`
  because `Projects.jsx`/`i18n.jsx` reference that name, but the UI labels it "Services"
- `certifications` / `education` — generic Au.D./ASHA CCC-A placeholders

When the real person's details are provided, update `src/data/portfolio.js` directly —
nearly every component pulls from there via `useI18n()` or a direct import, so that's
the single source of truth. UI copy (nav labels, button text, section headings) lives
in `src/i18n.jsx`.

## Backend / integrations

`api/contact.js` and `api/schedule.js` (+ `services/email.js`, `services/calendar.js`,
`services/telegram.js`, `services/whatsapp.js`) power the contact form and the
"Book Appointment" scheduler. They're genuinely useful for a clinician (not a "bot")
and were kept, just de-Shaheer'd:
- Email "from" name / owner fallback now reads from `personal` in `data/portfolio.js`
  instead of being hardcoded.
- Removed the hardcoded `+03:00` (Asia/Riyadh) timezone offset — appointments now
  parse in local/server time. If the real practice has a fixed timezone, you may want
  to reintroduce an explicit offset.
- Appointment duration is 30 minutes (was 60 for a dev "interview" flow).
- Needs env vars to actually send email/Telegram/create calendar events — see `.env.example`.

## Running it

```bash
npm install
npm run dev     # runs vite (5173) + express api (3001) together
npm run build
```

## Known follow-ups (not yet done)

- Replace all dummy content in `src/data/portfolio.js`.
- Add a real portrait photo in `Hero.jsx` (currently initials-only).
- Update `.env` with real email/calendar/telegram credentials if the contact form
  and appointment booking should actually deliver notifications.
- No git repo has been initialized yet in this folder (kept separate from `../Portfolio`'s
  git history on purpose — init one whenever you're ready).
- `favicon` is still the default Vite icon (`public/vite.svg`).
