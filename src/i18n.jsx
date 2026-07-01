import { createContext, useContext } from 'react'
import { personal, skills, experience, projects } from './data/portfolio'

/* ────────────────────────────────────────────────────────────────
   UI strings (interface chrome).
──────────────────────────────────────────────────────────────────── */
const UI = {
  'nav.about': 'About', 'nav.projects': 'Highlights', 'nav.experience': 'Experience',
  'nav.contact': 'Contact', 'nav.hire': 'Contact Me',

  'hero.available': 'Open to new opportunities',
  'hero.hello': 'Hello', 'hero.im': "I'm", 'hero.name': personal.name.split(' ')[0],
  'hero.titleL1': 'Clinical', 'hero.titleL2': 'Audiologist',
  'hero.intro': "I support pediatric and adult patients through accurate diagnostic testing, hearing aid programming, and compassionate care — and I'm looking to bring that experience to a hospital or clinical team.",
  'hero.bottomWork': 'View Experience', 'hero.bottomTouch': 'Get in Touch',

  'about.eyebrow': 'Get to know me', 'about.titleA': 'About', 'about.titleB': 'Me',
  'about.languages': 'English, Urdu',

  'projects.eyebrow': 'Beyond the Clinic', 'projects.titleA': 'Academic &', 'projects.titleB': 'Outreach',
  'projects.subtitle': 'Academic work and community outreach alongside my clinical training.',

  'exp.eyebrow': 'Career Path', 'exp.titleA': 'Work', 'exp.titleB': 'Experience',

  'contact.eyebrow': "Let's Connect", 'contact.titleA': 'Get In', 'contact.titleB': 'Touch',
  'contact.subtitle': "Have an opportunity in mind? I'd love to hear from you.",
  'contact.info': 'Contact Information', 'contact.findOnline': 'Find Me Online',
  'contact.label.email': 'Email', 'contact.label.phone': 'Phone', 'contact.label.location': 'Location',
  'form.name': 'Your Name', 'form.email': 'Your Email', 'form.message': 'Your message…',
  'form.send': 'Send Message', 'form.sending': 'Sending…',
  'form.successTitle': 'Message Sent!', 'form.successBody': "I'll get back to you within 24 hours.",
  'form.sendAnother': 'Send another',
  'footer.by': 'Designed & Built for',
}

const LISTS = {
  'about.soft': ['Patient Care', 'Communication', 'Patient Counseling', 'Collaboration', 'Attention to Detail'],
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
