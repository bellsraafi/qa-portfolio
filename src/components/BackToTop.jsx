import { useBackToTop } from '../hooks/useBackToTop.js'

export default function BackToTop() {
  const { visible, scrollToTop } = useBackToTop()

  return (
    <button
      className={`back-to-top${visible ? ' back-to-top--visible' : ''}`}
      id="backToTop"
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      {'\u2191'}
    </button>
  )
}
