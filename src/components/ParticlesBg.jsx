// A quiet nod to a clinical instrument: a heartbeat/pulse trace,
// instead of a generic grid. Each row is generated (not a repeating
// tile) so the whole thing never looks like a stamped pattern.

const VIEW_W = 2400
const VIEW_H = 900
const ROW_GAP = 70

function mulberry32(seed) {
  return function () {
    seed |= 0
    seed = (seed + 0x6D2B79F5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function generateRow(seed, width, baseline) {
  const rand = mulberry32(seed)
  const points = [`0,${baseline}`]
  let x = 0
  while (x < width) {
    if (rand() < 0.32) {
      // heartbeat-style spike: lead-in, sharp up, sharp down, settle
      x += 24 + rand() * 46
      points.push(`${x},${baseline}`)
      const upX = x + 5 + rand() * 6
      points.push(`${upX},${(baseline - (12 + rand() * 26)).toFixed(1)}`)
      const downX = upX + 6 + rand() * 7
      points.push(`${downX},${(baseline + (9 + rand() * 22)).toFixed(1)}`)
      x = downX + 5 + rand() * 6
      points.push(`${x},${baseline}`)
    } else {
      // small irregular jitter
      x += 26 + rand() * 44
      points.push(`${x},${(baseline + (rand() * 18 - 9)).toFixed(1)}`)
      x += 7 + rand() * 5
      points.push(`${x},${baseline}`)
    }
  }
  points.push(`${width},${baseline}`)
  return points.join(' ')
}

const rows = Array.from({ length: Math.ceil(VIEW_H / ROW_GAP) + 1 }, (_, i) =>
  generateRow(1000 + i * 97, VIEW_W, i * ROW_GAP)
)

export default function GridBg() {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
      maskImage: 'radial-gradient(ellipse 80% 55% at 50% 0%, black 35%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(ellipse 80% 55% at 50% 0%, black 35%, transparent 100%)',
    }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} preserveAspectRatio="none">
        {rows.map((d, i) => (
          <polyline
            key={i}
            points={d}
            fill="none" stroke="var(--grid-line)" strokeWidth="1.5"
            strokeLinejoin="round" strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  )
}
