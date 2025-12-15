import { motion } from 'framer-motion'
import { useState } from 'react'

const buildInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

export function GingerbreadHouse() {
  const [hoveredCandy, setHoveredCandy] = useState<string | null>(null)

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-2xl">
        <motion.g
          initial="hidden"
          animate="visible"
          variants={buildInVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <rect x="100" y="200" width="200" height="150" fill="oklch(0.45 0.08 60)" rx="4" />
          <rect x="105" y="205" width="190" height="140" fill="oklch(0.48 0.08 60)" rx="2" />
        </motion.g>

        <motion.g
          initial="hidden"
          animate="visible"
          variants={buildInVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <path d="M 90 200 L 200 120 L 310 200 Z" fill="oklch(0.35 0.06 35)" />
          <path d="M 95 200 L 200 125 L 305 200 Z" fill="oklch(0.38 0.06 35)" />
          
          <line x1="120" y1="175" x2="140" y2="200" stroke="oklch(0.95 0.02 85)" strokeWidth="3" strokeLinecap="round" />
          <line x1="140" y1="175" x2="160" y2="200" stroke="oklch(0.95 0.02 85)" strokeWidth="3" strokeLinecap="round" />
          <line x1="160" y1="175" x2="180" y2="200" stroke="oklch(0.95 0.02 85)" strokeWidth="3" strokeLinecap="round" />
          <line x1="180" y1="175" x2="200" y2="200" stroke="oklch(0.95 0.02 85)" strokeWidth="3" strokeLinecap="round" />
          <line x1="200" y1="175" x2="220" y2="200" stroke="oklch(0.95 0.02 85)" strokeWidth="3" strokeLinecap="round" />
          <line x1="220" y1="175" x2="240" y2="200" stroke="oklch(0.95 0.02 85)" strokeWidth="3" strokeLinecap="round" />
          <line x1="240" y1="175" x2="260" y2="200" stroke="oklch(0.95 0.02 85)" strokeWidth="3" strokeLinecap="round" />
          <line x1="260" y1="175" x2="280" y2="200" stroke="oklch(0.95 0.02 85)" strokeWidth="3" strokeLinecap="round" />
        </motion.g>

        <motion.g
          initial="hidden"
          animate="visible"
          variants={buildInVariants}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <rect x="170" y="270" width="60" height="80" fill="oklch(0.30 0.06 25)" rx="3" />
          <circle cx="195" cy="310" r="4" fill="oklch(0.85 0.15 80)" />
          
          <rect x="120" y="230" width="50" height="50" fill="oklch(0.25 0.08 220)" rx="3" />
          <rect x="125" y="235" width="20" height="20" fill="oklch(0.70 0.15 220)" opacity="0.6" />
          <rect x="125" y="260" width="20" height="20" fill="oklch(0.70 0.15 220)" opacity="0.6" />
          <rect x="150" y="235" width="20" height="20" fill="oklch(0.70 0.15 220)" opacity="0.6" />
          <rect x="150" y="260" width="20" height="20" fill="oklch(0.70 0.15 220)" opacity="0.6" />
          <line x1="145" y1="230" x2="145" y2="280" stroke="oklch(0.95 0.02 85)" strokeWidth="2" />
          <line x1="120" y1="255" x2="170" y2="255" stroke="oklch(0.95 0.02 85)" strokeWidth="2" />

          <rect x="230" y="230" width="50" height="50" fill="oklch(0.25 0.08 220)" rx="3" />
          <rect x="235" y="235" width="20" height="20" fill="oklch(0.70 0.15 220)" opacity="0.6" />
          <rect x="235" y="260" width="20" height="20" fill="oklch(0.70 0.15 220)" opacity="0.6" />
          <rect x="260" y="235" width="20" height="20" fill="oklch(0.70 0.15 220)" opacity="0.6" />
          <rect x="260" y="260" width="20" height="20" fill="oklch(0.70 0.15 220)" opacity="0.6" />
          <line x1="255" y1="230" x2="255" y2="280" stroke="oklch(0.95 0.02 85)" strokeWidth="2" />
          <line x1="230" y1="255" x2="280" y2="255" stroke="oklch(0.95 0.02 85)" strokeWidth="2" />
        </motion.g>

        <motion.g
          initial="hidden"
          animate="visible"
          variants={buildInVariants}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.circle
            cx="130"
            cy="320"
            r="10"
            fill="oklch(0.60 0.20 130)"
            className="cursor-pointer"
            onMouseEnter={() => setHoveredCandy('gumdrop1')}
            onMouseLeave={() => setHoveredCandy(null)}
            animate={{
              scale: hoveredCandy === 'gumdrop1' ? 1.2 : 1,
              filter: hoveredCandy === 'gumdrop1' ? 'drop-shadow(0 0 8px oklch(0.60 0.20 130))' : 'none'
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.circle
            cx="270"
            cy="320"
            r="10"
            fill="oklch(0.65 0.22 350)"
            className="cursor-pointer"
            onMouseEnter={() => setHoveredCandy('gumdrop2')}
            onMouseLeave={() => setHoveredCandy(null)}
            animate={{
              scale: hoveredCandy === 'gumdrop2' ? 1.2 : 1,
              filter: hoveredCandy === 'gumdrop2' ? 'drop-shadow(0 0 8px oklch(0.65 0.22 350))' : 'none'
            }}
            transition={{ duration: 0.2 }}
          />

          <motion.g
            onMouseEnter={() => setHoveredCandy('candycane')}
            onMouseLeave={() => setHoveredCandy(null)}
            className="cursor-pointer"
            animate={{
              scale: hoveredCandy === 'candycane' ? 1.15 : 1,
              rotate: hoveredCandy === 'candycane' ? 5 : 0
            }}
            transition={{ duration: 0.2 }}
            style={{ transformOrigin: '80px 250px' }}
          >
            <path
              d="M 70 280 Q 70 260 80 260 Q 90 260 90 280 L 90 320"
              stroke="oklch(0.55 0.22 25)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 70 280 Q 70 265 80 265 Q 90 265 90 280 L 90 290"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <line x1="80" y1="300" x2="80" y2="310" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </motion.g>

          <motion.g
            onMouseEnter={() => setHoveredCandy('peppermint')}
            onMouseLeave={() => setHoveredCandy(null)}
            className="cursor-pointer"
            animate={{
              scale: hoveredCandy === 'peppermint' ? 1.15 : 1,
              rotate: hoveredCandy === 'peppermint' ? 360 : 0
            }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: '320px 280px' }}
          >
            <circle cx="320" cy="280" r="12" fill="white" />
            <path d="M 320 268 L 320 292" stroke="oklch(0.55 0.22 25)" strokeWidth="6" />
            <path d="M 308 280 L 332 280" stroke="oklch(0.55 0.22 25)" strokeWidth="6" />
            <circle cx="320" cy="280" r="8" fill="none" stroke="oklch(0.55 0.22 25)" strokeWidth="2" />
          </motion.g>

          <motion.circle
            cx="200"
            cy="190"
            r="8"
            fill="oklch(0.70 0.18 55)"
            className="cursor-pointer"
            onMouseEnter={() => setHoveredCandy('roofcandy')}
            onMouseLeave={() => setHoveredCandy(null)}
            animate={{
              scale: hoveredCandy === 'roofcandy' ? 1.3 : 1,
              y: hoveredCandy === 'roofcandy' ? -5 : 0
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.g>

        <motion.g
          initial="hidden"
          animate="visible"
          variants={buildInVariants}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <ellipse cx="200" cy="355" rx="120" ry="15" fill="oklch(0.95 0.02 85)" opacity="0.3" />
        </motion.g>
      </svg>
    </div>
  )
}
