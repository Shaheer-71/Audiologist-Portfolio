import { createContext, useContext } from 'react'
import { personal, skills, experience, projects } from './data/portfolio'

/* ────────────────────────────────────────────────────────────────
   UI strings (interface chrome).
──────────────────────────────────────────────────────────────────── */
const UI = {
  'nav.about': 'About', 'nav.projects': 'Services', 'nav.experience': 'Experience',
  'nav.contact': 'Contact', 'nav.hire': 'Book Appointment',

  'hero.available': 'Accepting new patients',
  'hero.hello': 'Hello', 'hero.im': "I'm", 'hero.name': personal.name.split(' ')[0],
  'hero.titleL1': 'Doctor of', 'hero.titleL2': 'Audiology',
  'hero.intro': 'I help patients of all ages hear, connect, and live better — from newborn hearing screenings to advanced hearing aid fittings.',
  'hero.bottomWork': 'View Services', 'hero.bottomTouch': 'Get in Touch',

  'about.eyebrow': 'Get to know me', 'about.titleA': 'About', 'about.titleB': 'Me',
  'about.languages': 'English — Fluent',

  'projects.eyebrow': 'How I Can Help', 'projects.titleA': 'Featured', 'projects.titleB': 'Services',
  'projects.subtitle': 'Personalized hearing and balance care for patients of every age.',
  'projects.filter.all': 'All', 'projects.filter.adult': 'Adult Care', 'projects.filter.pediatric': 'Pediatric Care',
  'projects.viewDetails': 'view details', 'projects.underConstruction': 'Details coming soon',
  'projects.keyHighlights': 'Key Highlights', 'projects.techStack': 'Tools & Methods',
  'Live Site': 'Live Site',

  'exp.eyebrow': 'Career Path', 'exp.titleA': 'Work', 'exp.titleB': 'Experience',

  'contact.eyebrow': "Let's Connect", 'contact.titleA': 'Get In', 'contact.titleB': 'Touch',
  'contact.subtitle': "Have a question about your hearing, or want to book a visit? I'd love to hear from you.",
  'contact.info': 'Contact Information', 'contact.findOnline': 'Find Me Online',
  'contact.label.email': 'Email', 'contact.label.phone': 'Phone', 'contact.label.location': 'Location',
  'contact.tab.message': 'Send Message', 'contact.tab.schedule': 'Book Appointment',
  'form.name': 'Your Name', 'form.email': 'Your Email', 'form.message': 'Your message…',
  'form.send': 'Send Message', 'form.sending': 'Sending…',
  'form.successTitle': 'Message Sent!', 'form.successBody': "I'll get back to you within 24 hours.",
  'form.sendAnother': 'Send another',
  'footer.by': 'Designed & Built by',
}

const LISTS = {
  'about.soft': ['Patient Care', 'Communication', 'Empathy', 'Collaboration', 'Attention to Detail', 'Continuing Education'],
}

/* ── context ────────────────────────────────────────────────────── */
const I18nContext = createContext(null)

export function LanguageProvider({ children }) {
  const value = {
    lang: 'en',
    dir: 'ltr',
    t: (key) => UI[key] ?? key,
    tl: (key) => LISTS[key] ?? [],
    personal,
    skills,
    experience,
    projects,
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
