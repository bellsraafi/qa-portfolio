import { useEffect, useRef } from 'react'

export default function TidbitOverlay({ trivia }) {
  const triggerRef = useRef(null)
  const { open, switching, item, icon, toggle, closeOverlay } = trivia

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (triggerRef.current && triggerRef.current.contains(e.target)) return
      closeOverlay()
    }
    const onKey = (e) => {
      if (e.key === 'Escape') closeOverlay()
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, closeOverlay])

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <>
      <div
        className="tidbit-trigger"
        id="tidbitTrigger"
        tabIndex="0"
        role="button"
        aria-label="Open testing trivia"
        ref={triggerRef}
        onClick={(e) => {
          e.stopPropagation()
          toggle()
        }}
        onKeyDown={onKeyDown}
      >
        <span
          className={`tidbit-trigger__icon${switching ? ' is-switching' : ''}`}
          id="tidbitTriggerIcon"
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>
      <div
        className={`tidbit-overlay${open ? ' tidbit-overlay--open' : ''}`}
        id="tidbitOverlay"
        role="dialog"
        aria-live="polite"
      >
        <div className="tidbit-overlay__label">TESTING TRIVIA</div>
        <span className={`tidbit-overlay__tag tag--${item.category}`} id="tidbitTag">{item.tag}</span>
        <p className="tidbit-overlay__text" id="tidbitText">{item.text}</p>
        <div
          className="tidbit-overlay__attr"
          id="tidbitAttr"
          style={item.attr ? undefined : { display: 'none' }}
        >
          {item.attr || ''}
        </div>
      </div>
    </>
  )
}
