
'use client'

import { ReactLenis } from 'lenis/react'

export default function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.5, duration: 1, smoothTouch: true }}>
      {children}
    </ReactLenis>
  )
}
