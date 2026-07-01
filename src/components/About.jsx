import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Globe, Stethoscope, GraduationCap, ListChecks } from 'lucide-react'
import { useI18n } from '../i18n'
import { skills } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
}

// Phrases to emphasize in the bio
const HIGHLIGHTS = ['Clinical Audiologist', '3+ years', 'pediatric and adult', 'hospital or clinical audiology role']
function highlight(text) {
  const escaped = HIGHLIGHTS.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g')
  return text.split(pattern).map((part, i) =>
    HIGHLIGHTS.includes(part)
      ? <span key={i} style={{ color: 'var(--accent)', fontWeight: 600 }}>{part}</span>
      : part
  )
}

export default function About() {
  const { t, tl, personal } = useI18n()
  return (
    <section id="about" style={{ padding: '108px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Section header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0}
          style={{ marginBottom: 72, textAlign: 'center' }}
        >
          <span style={{ fontSize: 12, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
            {t('about.eyebrow')}
          </span>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 800, marginTop: 10, color: 'var(--text)', letterSpacing: '-0.02em' }}>
            {t('about.titleA')} <span className="text-gradient">{t('about.titleB')}</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: 48, alignItems: 'start' }}>

          {/* Left: Bio */}
          <div>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={1}
              style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: 36 }}
            >
              {highlight(personal.summary)}
            </motion.p>

            {/* Contact rows */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={2}
              style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}
            >
              {[
                { icon: Mail,   label: personal.email,                      href: `mailto:${personal.email}` },
                { icon: Phone,  label: personal.phone,                      href: `tel:${personal.phone}` },
                { icon: MapPin, label: personal.location },
                { icon: Globe,  label: t('about.languages') },
              ].filter(({ label }) => Boolean(label)).map(({ icon: Icon, label, href }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                    background: 'var(--accent-bg)', border: '1px solid var(--accent-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={15} color="var(--accent)" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                    >{label}</a>
                  ) : (
                    <span style={{ color: 'var(--text-muted)', fontSize: 14 }}>{label}</span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Soft skill tags */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={3}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}
            >
              {tl('about.soft').map(s => (
                <span
                  key={s}
                  style={{
                    padding: '5px 13px', borderRadius: 100, fontSize: 12, fontWeight: 500,
                    background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', color: 'var(--accent)',
                  }}
                >{s}</span>
              ))}
            </motion.div>
          </div>

          {/* Right: Quick facts */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={2}
          >
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 14, padding: 8,
            }}>
              {/* Role */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '18px 18px', borderBottom: '1px solid var(--border)' }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                  background: 'var(--accent-bg)', border: '1px solid var(--accent-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Stethoscope size={17} strokeWidth={1.75} color="var(--accent)" />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                    Role
                  </div>
                  <div style={{ fontSize: 14.5, color: 'var(--text)', fontWeight: 600, lineHeight: 1.5 }}>
                    Clinical Audiologist, 3+ years of experience
                  </div>
                </div>
              </div>

              {/* Education */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '18px 18px', borderBottom: '1px solid var(--border)' }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                  background: 'var(--accent-bg)', border: '1px solid var(--accent-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <GraduationCap size={17} strokeWidth={1.75} color="var(--accent)" />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                    Education
                  </div>
                  <div style={{ fontSize: 14.5, color: 'var(--text)', fontWeight: 600, lineHeight: 1.5 }}>
                    BS Audiology — Shifa University
                  </div>
                </div>
              </div>

              {/* Skills — grouped by category, each a label-above-value pair like the rows above */}
              <div style={{ padding: '18px 18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                    background: 'var(--accent-bg)', border: '1px solid var(--accent-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <ListChecks size={17} strokeWidth={1.75} color="var(--accent)" />
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Skills
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {skills.map(cat => (
                    <div key={cat.category}>
                      <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--accent)', marginBottom: 5 }}>
                        {cat.category}
                      </div>
                      <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.65 }}>
                        {cat.items.map(s => s.name).join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
