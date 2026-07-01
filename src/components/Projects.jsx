import { motion } from 'framer-motion'
import { Brain, Tent, FolderGit2 } from 'lucide-react'
import { useI18n } from '../i18n'

const projectIcons = {
  'Anatomical Model of the Inner Ear': Brain,
  '[Camp Name Placeholder]':           Tent,
}
const ProjIcon = ({ name, size, color }) => {
  const Icon = projectIcons[name] || FolderGit2
  return <Icon size={size} strokeWidth={1.75} style={{ color }} />
}

const colorMap = {
  cyan:   { accent: 'var(--cm-cyan-accent)',   bg: 'var(--cm-cyan-bg)',   border: 'var(--cm-cyan-border)'   },
  purple: { accent: 'var(--cm-purple-accent)', bg: 'var(--cm-purple-bg)', border: 'var(--cm-purple-border)' },
  green:  { accent: 'var(--cm-green-accent)',  bg: 'var(--cm-green-bg)',  border: 'var(--cm-green-border)'  },
  pink:   { accent: 'var(--cm-pink-accent)',   bg: 'var(--cm-pink-bg)',   border: 'var(--cm-pink-border)'   },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.08 } }),
}

export default function Projects() {
  const { t, projects } = useI18n()

  return (
    <section id="projects" style={{ padding: '108px 0', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>

        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
          style={{ marginBottom: 56, textAlign: 'center' }}>
          <span style={{ fontSize: 11.5, color: 'var(--accent)', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}>
            {t('projects.eyebrow')}
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.1, marginTop: 8 }}>
            {t('projects.titleA')} <span className="text-gradient-warm">{t('projects.titleB')}</span>
          </h2>
          <p style={{ marginTop: 8, color: 'var(--text-dim)', fontSize: 14 }}>
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Simple stacked list — no carousel, no filters, no modal */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {projects.map((proj, i) => {
            const c = colorMap[proj.color]
            return (
              <motion.div
                key={proj.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                style={{
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  borderRadius: 14, padding: 28,
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 46, height: 46, borderRadius: 11, flexShrink: 0, background: c.bg, border: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ProjIcon name={proj.name} size={22} color={c.accent} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em', marginBottom: 3 }}>{proj.name}</h3>
                      <span style={{ fontSize: 12.5, color: c.accent, fontWeight: 600 }}>{proj.subtitle}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: 11, color: 'var(--text-faint)', flexShrink: 0 }}>{proj.period}</span>
                </div>

                {/* Description */}
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 16 }}>{proj.description}</p>

                {/* Highlights */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 0, marginBottom: 16 }}>
                  {proj.highlights.map((h, hi) => (
                    <li key={hi} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      <span style={{ color: c.accent, flexShrink: 0, fontSize: 12, marginTop: 2 }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {proj.tech.map(tag => (
                    <span key={tag} style={{ padding: '4px 10px', borderRadius: 6, fontSize: 11, background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text-dim)' }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
