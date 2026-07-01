import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Globe } from 'lucide-react'
import { useI18n } from '../i18n'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
}

// Phrases to emphasize in the bio
const HIGHLIGHTS = ['Doctor of Audiology', '8+ years', 'personalized, evidence-based care', 'private practice']
function highlight(text) {
  const escaped = HIGHLIGHTS.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g')
  return text.split(pattern).map((part, i) =>
    HIGHLIGHTS.includes(part)
      ? <span key={i} style={{ color: 'var(--accent)', fontWeight: 600 }}>{part}</span>
      : part
  )
}

const codeLines = [
  { key: 'name',           value: '"Dr. Jane Doe"',                        color: 'var(--text)' },
  { key: 'role',           value: '"Doctor of Audiology"',                 color: 'var(--text)' },
  { key: 'experience',     value: '"8+ years"',                            color: 'var(--text)' },
  { key: 'specialties',    value: '["Pediatric Audiology", "Hearing Aid',  color: 'var(--text)', multi: true },
  { key: null,             value: ' Fitting", "Tinnitus Management",',     color: 'var(--text)', multi: true },
  { key: null,             value: ' "Vestibular Testing"]',                color: 'var(--text)' },
  { key: 'location',       value: '"Your City, Country"',                  color: 'var(--text)' },
  { key: 'education',      value: '"Au.D. — Doctor of Audiology"',         color: 'var(--text)' },
  { key: 'certifications', value: '["ASHA CCC-A",',                        color: 'var(--text)', multi: true },
  { key: null,             value: ' "Licensed Audiologist"]',              color: 'var(--text)' },
]

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
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
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
              ].map(({ icon: Icon, label, href }) => (
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

          {/* Right: Code card */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={2}
          >
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 14, overflow: 'hidden',
            }}>
              {/* Window bar */}
              <div style={{
                padding: '12px 18px', borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: 7, background: 'var(--surface2)',
              }}>
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--text-dim)', marginLeft: 10 }}>profile.json</span>
              </div>

              {/* Code content */}
              <div style={{ padding: '22px 24px', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, lineHeight: 2, whiteSpace: 'pre-wrap' }}>
                <div style={{ color: 'var(--text-faint)' }}>{'{'}</div>
                {codeLines.map((line, i) => (
                  <div key={i} style={{ paddingInlineStart: 20, paddingInlineEnd: 0 }}>
                    {line.key && (
                      <span style={{ color: 'var(--text-dim)' }}>
                        "{line.key}"<span style={{ color: 'var(--text-faint)' }}>: </span>
                      </span>
                    )}
                    {!line.key && <span style={{ display: 'inline-block', width: 'calc(6ch + 4px)' }} />}
                    <span style={{ color: line.color }}>{line.value}</span>
                    {i < codeLines.length - 1 && !line.multi && <span style={{ color: 'var(--text-faint)' }}>,</span>}
                  </div>
                ))}
                <div style={{ color: 'var(--text-faint)' }}>{'}'}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
