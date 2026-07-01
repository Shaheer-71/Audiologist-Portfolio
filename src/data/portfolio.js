export const personal = {
  name: 'Dr. Jane Doe',
  title: 'Doctor of Audiology · Hearing & Balance Care',
  email: 'hello@example.com',
  phone: '+1 (555) 010-0100',
  location: 'Your City, Country',
  instagram: 'https://instagram.com/yourhandle',
  linkedin: 'https://linkedin.com/in/yourname',
  summary: `Doctor of Audiology with 8+ years helping patients of all ages hear and communicate with confidence. From newborn hearing screenings to advanced hearing aid fittings and tinnitus management, I focus on personalized, evidence-based care — because every patient's hearing journey is different. Today I run a private practice welcoming new patients, with a special interest in pediatric audiology and auditory rehabilitation.`,
  stats: [
    { label: 'Years Experience', value: '8+' },
    { label: 'Patients Cared For', value: '2,000+' },
    { label: 'Hearing Aids Fitted', value: '1,500+' },
    { label: 'Happy Families', value: '500+' },
  ],
}

export const skills = [
  {
    category: 'Diagnostic Testing',
    icon: '🩺',
    color: 'pink',
    items: [
      { name: 'Pure-Tone Audiometry', level: 'Advanced' },
      { name: 'Tympanometry', level: 'Advanced' },
      { name: 'Otoacoustic Emissions (OAE)', level: 'Advanced' },
      { name: 'Auditory Brainstem Response (ABR)', level: 'Intermediate' },
      { name: 'Vestibular / Balance Testing', level: 'Intermediate' },
    ],
  },
  {
    category: 'Hearing Aid Care',
    icon: '👂',
    color: 'cyan',
    items: [
      { name: 'Hearing Aid Fitting', level: 'Advanced' },
      { name: 'Real-Ear Measurement', level: 'Advanced' },
      { name: 'Cochlear Implant Mapping', level: 'Intermediate' },
      { name: 'Assistive Listening Devices', level: 'Advanced' },
      { name: 'Device Troubleshooting', level: 'Advanced' },
    ],
  },
  {
    category: 'Pediatric Care',
    icon: '🧒',
    color: 'purple',
    items: [
      { name: 'Newborn Hearing Screening', level: 'Advanced' },
      { name: 'Pediatric Audiometry', level: 'Advanced' },
      { name: 'Auditory Processing Evaluation', level: 'Intermediate' },
      { name: 'Early Intervention Planning', level: 'Advanced' },
    ],
  },
  {
    category: 'Patient Care',
    icon: '💬',
    color: 'green',
    items: [
      { name: 'Tinnitus Management', level: 'Advanced' },
      { name: 'Aural Rehabilitation', level: 'Advanced' },
      { name: 'Counseling & Education', level: 'Advanced' },
      { name: 'Care Coordination', level: 'Intermediate' },
    ],
  },
]

export const experience = [
  {
    role: 'Doctor of Audiology',
    company: 'Private Practice (Self-Employed)',
    location: 'Your City, Country',
    period: '2022 – Present',
    type: 'Full-time',
    color: 'pink',
    highlights: [
      'Opened an independent practice offering diagnostic testing, hearing aid fitting, and tinnitus care',
      'Built a patient-centered intake and follow-up process that improved appointment adherence',
      'Partnered with local pediatricians and ENTs for early referral pathways',
      'Manage all aspects of patient care from evaluation through long-term device support',
    ],
  },
  {
    role: 'Clinical Audiologist',
    company: 'City Hearing & Balance Center',
    location: 'Your City, Country',
    period: '2019 – 2022',
    type: 'Full-time',
    color: 'purple',
    highlights: [
      'Conducted 1,000+ diagnostic hearing evaluations across pediatric and adult patients',
      "Led the clinic's newborn hearing screening program",
      'Fitted and programmed hearing aids across major manufacturers',
      'Mentored incoming Au.D. externship students',
    ],
  },
  {
    role: 'Audiology Extern',
    company: 'University Speech & Hearing Clinic',
    location: 'Your City, Country',
    period: '2017 – 2019',
    type: 'Clinical Rotation',
    color: 'cyan',
    highlights: [
      'Completed clinical rotations in diagnostics, amplification, and vestibular assessment',
      'Assisted with tinnitus and auditory processing evaluations',
      'Presented a case study on pediatric auditory rehabilitation',
    ],
  },
]

export const projects = [
  {
    name: 'Hearing Evaluations',
    subtitle: 'Comprehensive Diagnostic Testing',
    period: 'Ongoing',
    description:
      "A full hearing assessment shouldn't feel rushed or confusing. Every evaluation includes a clear walkthrough of results in plain language, plus a personalized care plan — not just a chart of numbers.",
    highlights: [
      'Pure-tone and speech audiometry for all ages',
      'Tympanometry and middle-ear testing',
      'Clear, jargon-free results consultation',
      'Personalized care plan and follow-up schedule',
    ],
    tech: ['Pure-Tone Audiometry', 'Tympanometry', 'OAE Testing', 'Speech-in-Noise Testing'],
    stats: { patients: '2,000+', ages: 'All Ages' },
    category: ['adult', 'pediatric'],
    links: [],
    color: 'pink',
    icon: '🩺',
  },
  {
    name: 'Hearing Aid Fitting',
    subtitle: 'Amplification & Device Support',
    period: 'Ongoing',
    description:
      "Getting a hearing aid is the start of the journey, not the end. I fit, fine-tune, and follow up over weeks — not minutes — so the device actually fits into a patient's real life.",
    highlights: [
      'Real-ear measurement for verified fit',
      'Trial periods before final purchase',
      'Ongoing adjustments and troubleshooting',
      'Support across major hearing aid brands',
    ],
    tech: ['Real-Ear Measurement', 'REM Verification', 'Manufacturer Fitting Software'],
    stats: { devices: '1,500+ Fitted', support: 'Lifetime Support' },
    category: ['adult'],
    links: [],
    color: 'cyan',
    icon: '🦻',
  },
  {
    name: 'Pediatric Hearing Program',
    subtitle: 'Newborn Screening & Early Intervention',
    period: 'Ongoing',
    description:
      "The first months matter most for language development. This program catches hearing loss early and connects families with the right support before it affects a child's speech and learning.",
    highlights: [
      'Newborn and infant hearing screening',
      'Behavioral testing for toddlers and children',
      'Coordination with pediatricians and speech therapists',
      'Family education and early intervention planning',
    ],
    tech: ['OAE Screening', 'Pediatric Audiometry', 'Play Audiometry'],
    stats: { children: '500+ Screened', ages: '0–12 yrs' },
    category: ['pediatric'],
    links: [],
    color: 'purple',
    icon: '🧸',
  },
  {
    name: 'Tinnitus & Balance Care',
    subtitle: 'Tinnitus Management & Vestibular Testing',
    period: 'Ongoing',
    description:
      'Ringing in the ears or dizziness can quietly take over daily life. This program combines testing with practical, evidence-based management so patients feel in control again.',
    highlights: [
      'Tinnitus evaluation and sound therapy options',
      'Vestibular and balance function testing',
      'Coping strategies and counseling',
      'Referral coordination with ENT specialists',
    ],
    tech: ['Vestibular Testing', 'Tinnitus Retraining', 'Sound Therapy'],
    stats: { patients: '300+ Managed', focus: 'Adult Care' },
    category: ['adult'],
    links: [],
    color: 'green',
    icon: '⚖️',
  },
]

export const certifications = [
  {
    name: 'Doctor of Audiology (Au.D.)',
    issuer: 'University Name',
    date: '2019',
    icon: '🎓',
    color: 'purple',
  },
  {
    name: 'Certificate of Clinical Competence in Audiology (CCC-A)',
    issuer: 'ASHA',
    date: '2019',
    icon: '🏆',
    color: 'cyan',
  },
  {
    name: 'Licensed Audiologist',
    issuer: 'State Board of Examiners',
    date: '2019',
    icon: '✅',
    color: 'green',
  },
]

export const education = [
  {
    degree: 'Doctor of Audiology (Au.D.)',
    institution: 'University Name',
    location: 'City, Country',
    majors: 'Clinical Audiology, Vestibular Science',
  },
  {
    degree: 'Bachelor of Science, Communication Sciences & Disorders',
    institution: 'University Name',
    location: 'City, Country',
    majors: 'Speech-Language-Hearing Sciences',
  },
]
