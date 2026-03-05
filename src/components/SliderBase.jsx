import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Универсальная логика слайдера.
 *
 * Управляет:
 * - шагом (step)
 * - максимальным шагом (maxStep)
 * - смещением трека (offset)
 * - рефами контейнера и трека (sliderRef, trackRef)
 *
 * Рендер полностью на вашей стороне через render-prop `children`.
 * Это позволяет в каждом блоке делать свои уникальные карточки и разметку,
 * при этом логика пролистывания и range‑ползунка одна на весь проект.
 */
function SliderBase({ items = [], initialStep = 0, children }) {
  const [step, setStep] = useState(initialStep)
  const [maxStep, setMaxStep] = useState(0)
  const [offset, setOffset] = useState(0)

  const sliderRef = useRef(null)
  const trackRef = useRef(null)
  const swipeStartXRef = useRef(null)

  const measure = useCallback(() => {
    if (!trackRef.current || !sliderRef.current) return

    const trackWidth = trackRef.current.scrollWidth
    const viewWidth = sliderRef.current.offsetWidth
    const overflow = trackWidth - viewWidth

    // Если трек полностью помещается, шаг один — без прокрутки
    if (overflow <= 0) {
      const singleStepOffsets = [0]
      trackRef.current._stepOffsets = singleStepOffsets
      setMaxStep(0)
      setOffset(0)
      setStep(0)
      return
    }

    const cards = trackRef.current.children
    if (!cards.length) return

    const stepOffsets = [0]

    for (let i = 1; i < cards.length; i++) {
      const snap = cards[i].offsetLeft
      if (snap >= overflow) {
        stepOffsets.push(overflow)
        break
      }
      stepOffsets.push(snap)
    }

    if (stepOffsets[stepOffsets.length - 1] < overflow) {
      stepOffsets.push(overflow)
    }

    trackRef.current._stepOffsets = stepOffsets

    const newMax = stepOffsets.length - 1
    setMaxStep(newMax)

    setStep((prev) => {
      const clamped = Math.min(prev, newMax)
      setOffset(stepOffsets[clamped])
      return clamped
    })
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure, items.length])

  const goTo = (newStep) => {
    const offsets = trackRef.current?._stepOffsets
    if (!offsets) return

    const clamped = Math.max(0, Math.min(newStep, maxStep))
    setStep(clamped)
    setOffset(offsets[clamped])
  }

  const handleSwipeStart = (clientX) => {
    swipeStartXRef.current = clientX
  }

  const handleSwipeEnd = (clientX) => {
    if (swipeStartXRef.current == null) return
    const deltaX = clientX - swipeStartXRef.current
    const threshold = 40

    if (Math.abs(deltaX) > threshold) {
      if (deltaX < 0) {
        goTo(step + 1)
      } else {
        goTo(step - 1)
      }
    }

    swipeStartXRef.current = null
  }

  const swipeHandlers = {
    onTouchStart: (event) => {
      if (event.touches && event.touches.length > 0) {
        handleSwipeStart(event.touches[0].clientX)
      }
    },
    onTouchEnd: (event) => {
      if (event.changedTouches && event.changedTouches.length > 0) {
        handleSwipeEnd(event.changedTouches[0].clientX)
      }
    },
    onMouseDown: (event) => {
      handleSwipeStart(event.clientX)
    },
    onMouseUp: (event) => {
      handleSwipeEnd(event.clientX)
    }
  }

  return children({
    items,
    step,
    maxStep,
    offset,
    goTo,
    sliderRef,
    trackRef,
    swipeHandlers
  })
}

export default SliderBase

