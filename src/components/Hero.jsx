import NavOverlay from './NavOverlay.jsx'
import TidbitOverlay from './TidbitOverlay.jsx'
import { useTrivia } from '../hooks/useTrivia.js'

export default function Hero() {
  const trivia = useTrivia()
  const canHover =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches

  const hoverProps = canHover
    ? { onMouseEnter: trivia.openOverlay, onMouseLeave: trivia.closeOverlay }
    : {}

  return (
    <section className="hero" id="hero">
      <div className="hero__half hero__half--left">
        <NavOverlay />
      </div>
      <div className="hero__half hero__half--right" {...hoverProps}>
        <TidbitOverlay trivia={trivia} />
      </div>
      <div className="hero__monogram">BA</div>
      <a href="#about" className="hero__arrow hero__arrow--left" aria-label="Scroll to about">{'\u2193'}</a>
      <a href="#about" className="hero__arrow hero__arrow--right" aria-label="Scroll to about">{'\u2193'}</a>
    </section>
  )
}
