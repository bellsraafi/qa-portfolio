import { useCallback, useEffect, useRef, useState } from 'react'
import tidbits from '../data/tidbits.json'

const CATEGORIES = ['quote', 'idea', 'history', 'tidbit']
const ICONS = { quote: '❝', idea: 'λ', history: '⏳', tidbit: '✦' }

const randomFrom = (list) => list[Math.floor(Math.random() * list.length)]

export function useTrivia() {
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState(() => randomFrom(CATEGORIES))
  const [switching, setSwitching] = useState(false)
  const [item, setItem] = useState(() => randomFrom(tidbits.filter((t) => t.category === 'quote')))

  const openRef = useRef(false)
  const categoryRef = useRef(category)
  const timerRef = useRef(null)

  const updateCategory = useCallback((cat) => {
    categoryRef.current = cat
    setCategory(cat)
  }, [])

  const stopCycle = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const setTriggerCategory = useCallback(
    (cat) => {
      setSwitching(true)
      setTimeout(() => {
        updateCategory(cat)
        setSwitching(false)
      }, 180)
    },
    [updateCategory],
  )

  const showRandomTidbit = useCallback(() => {
    const pool = tidbits.filter((t) => t.category === categoryRef.current)
    if (pool.length === 0) return
    setItem(randomFrom(pool))
  }, [])

  const startCycle = useCallback(() => {
    stopCycle()
    timerRef.current = setInterval(() => {
      if (!openRef.current) setTriggerCategory(randomFrom(CATEGORIES))
    }, 4000)
  }, [stopCycle, setTriggerCategory])

  const openOverlay = useCallback(() => {
    if (openRef.current) return
    openRef.current = true
    setOpen(true)
    stopCycle()
    showRandomTidbit()
  }, [stopCycle, showRandomTidbit])

  const closeOverlay = useCallback(() => {
    if (!openRef.current) return
    openRef.current = false
    setOpen(false)
    setTriggerCategory(randomFrom(CATEGORIES))
    startCycle()
  }, [setTriggerCategory, startCycle])

  useEffect(() => {
    setTriggerCategory(randomFrom(CATEGORIES))
    startCycle()
    return stopCycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggle = open ? closeOverlay : openOverlay

  return {
    open,
    switching,
    item,
    icon: ICONS[category] || '❝',
    toggle,
    openOverlay,
    closeOverlay,
  }
}
