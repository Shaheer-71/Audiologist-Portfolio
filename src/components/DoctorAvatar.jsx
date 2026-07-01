import { useEffect, useRef } from 'react'

// A flat-illustration "bitmoji-style" doctor bust whose eyes track the
// cursor anywhere on screen — a friendlier, more realistic stand-in
// than a native emoji glyph, until a real portrait is added.
export default function DoctorAvatar({ style }) {
  const wrapRef = useRef(null)
  const leftEyeRef = useRef(null)
  const rightEyeRef = useRef(null)

  useEffect(() => {
    const maxOffset = 3.25

    const handleMove = (e) => {
      const wrap = wrapRef.current
      const leftEye = leftEyeRef.current
      const rightEye = rightEyeRef.current
      if (!wrap || !leftEye || !rightEye) return

      const rect = wrap.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy) || 1
      const ox = (dx / dist) * maxOffset
      const oy = (dy / dist) * maxOffset
      const t = `translate(${ox.toFixed(2)}, ${oy.toFixed(2)})`

      leftEye.setAttribute('transform', t)
      rightEye.setAttribute('transform', t)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div ref={wrapRef} style={{ width: '100%', height: '100%', ...style }}>
      <svg viewBox="0 0 200 200" width="100%" height="100%" style={{ display: 'block' }}>
        <defs>
          <radialGradient id="da-skin" cx="45%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#FDE2C6" />
            <stop offset="100%" stopColor="#F2C79E" />
          </radialGradient>
          <linearGradient id="da-hair" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5C4433" />
            <stop offset="100%" stopColor="#3E2C22" />
          </linearGradient>
          <linearGradient id="da-coat" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F3F2" />
          </linearGradient>
        </defs>

        <g transform="translate(100,104) scale(0.8) translate(-100,-100)">
        {/* Coat / shoulders */}
        <path d="M25,200 L25,172 Q25,146 58,136 L142,136 Q175,146 175,172 L175,200 Z"
          fill="url(#da-coat)" stroke="var(--border)" strokeWidth="2" />
        {/* Lapels */}
        <path d="M100,150 L82,137 L89,170 Z" fill="#EDEFEE" stroke="var(--border)" strokeWidth="1" />
        <path d="M100,150 L118,137 L111,170 Z" fill="#EDEFEE" stroke="var(--border)" strokeWidth="1" />
        {/* Stethoscope */}
        <path d="M62,142 Q59,170 82,176 Q94,179 94,190"
          fill="none" stroke="#AAB6B3" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M138,142 Q141,166 121,172"
          fill="none" stroke="#AAB6B3" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="94" cy="193" r="7" fill="#AAB6B3" />
        <circle cx="94" cy="193" r="3.2" fill="#8A9895" />

        {/* Neck */}
        <rect x="86" y="120" width="28" height="24" fill="#EFC09A" />

        {/* Earrings */}
        <circle cx="55" cy="100" r="2" fill="#D8B24A" />
        <circle cx="145" cy="100" r="2" fill="#D8B24A" />

        {/* Face */}
        <path d="M100,34 C132,34 150,58 150,90 C150,122 129,144 100,144 C71,144 50,122 50,90 C50,58 68,34 100,34 Z"
          fill="url(#da-skin)" />

        {/* Blush */}
        <ellipse cx="68" cy="106" rx="8" ry="4.5" fill="#F2A0A0" opacity="0.3" />
        <ellipse cx="132" cy="106" rx="8" ry="4.5" fill="#F2A0A0" opacity="0.3" />

        {/* Hair */}
        <path d="M46,88 C41,38 70,26 100,26 C130,26 159,38 154,88 C149,66 128,52 100,54 C72,52 51,66 46,88 Z" fill="url(#da-hair)" />
        <path d="M46,86 C39,114 42,144 60,162 C67,153 62,132 57,112 C55,100 50,92 46,86 Z" fill="url(#da-hair)" />
        <path d="M154,86 C161,114 158,144 140,162 C133,153 138,132 143,112 C145,100 150,92 154,86 Z" fill="url(#da-hair)" />
        <path d="M68,48 C80,42 90,40 100,40" stroke="#7A5C46" strokeWidth="1.5" fill="none" opacity="0.55" strokeLinecap="round" />

        {/* Eyebrows */}
        <path d="M67,75 Q78,66 91,72" stroke="#3E2C22" strokeWidth="2.6" fill="none" strokeLinecap="round" />
        <path d="M109,72 Q122,66 133,75" stroke="#3E2C22" strokeWidth="2.6" fill="none" strokeLinecap="round" />

        {/* Eyes (whites) */}
        <path d="M66,91 Q80,79 94,91 Q80,101 66,91 Z" fill="#FFFFFF" />
        <path d="M106,91 Q120,79 134,91 Q120,101 106,91 Z" fill="#FFFFFF" />

        {/* Eyes (iris + pupil + sparkle) — these track the cursor */}
        <g ref={leftEyeRef}>
          <circle cx="80" cy="91" r="5.6" fill="#5B3A29" />
          <circle cx="80" cy="91" r="2.7" fill="#1A1210" />
          <circle cx="78.2" cy="89" r="1.1" fill="#FFFFFF" opacity="0.9" />
        </g>
        <g ref={rightEyeRef}>
          <circle cx="120" cy="91" r="5.6" fill="#5B3A29" />
          <circle cx="120" cy="91" r="2.7" fill="#1A1210" />
          <circle cx="118.2" cy="89" r="1.1" fill="#FFFFFF" opacity="0.9" />
        </g>

        {/* Eyelashes */}
        <path d="M93,88 L97,84.5" stroke="#2B2118" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M107,88 L103,84.5" stroke="#2B2118" strokeWidth="1.4" strokeLinecap="round" />

        {/* Nose */}
        <path d="M98,98 Q95,106 99,109 Q101,110 103,108" stroke="#E0A876" strokeWidth="1.8" fill="none" strokeLinecap="round" />

        {/* Lips */}
        <path d="M84,119 Q100,130 116,119" stroke="#B8615F" strokeWidth="3.2" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}
