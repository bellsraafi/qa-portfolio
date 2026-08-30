import { useEffect, useRef, useState } from 'react'

export default function NavOverlay() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (triggerRef.current && triggerRef.current.contains(e.target)) return
      setOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [open])

  return (
    <>
      <div
        className="nav-trigger"
        id="navTrigger"
        tabIndex="0"
        role="button"
        aria-label="Open navigation"
        ref={triggerRef}
        onClick={(e) => {
          e.stopPropagation()
          setOpen((o) => !o)
        }}
      >
        <span className="nav-trigger__icon">
          {'>'}<span className="nav-trigger__cursor">_</span>
        </span>
      </div>
      <div className={`nav-overlay${open ? ' nav-overlay--open' : ''}`} id="navOverlay">
        <div className="nav-overlay__name">BELLO ABDULRAFIU</div>
        <div className="nav-overlay__title">Test Engineer</div>
        <nav className="nav-overlay__links">
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#experience" className="nav-link">EXPERIENCE</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a href="#education" className="nav-link">EDUCATION &amp; CERTS</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </nav>
      </div>
    </>
  )
}
