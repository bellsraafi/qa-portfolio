import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Reveal({ className = '', children, ...rest }) {
  const ref = useRef(null)
  useScrollReveal(ref)
  return (
    <section ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </section>
  )
}
