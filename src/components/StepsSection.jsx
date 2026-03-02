import React, { useEffect, useRef, useState } from 'react'

const stepsData = [
  {
    num: '01',
    title: 'Оставьте заявку',
    text: 'Заполните форму на сайте или позвоните нам. Менеджер уточнит детали груза, маршрут и рассчитает точную стоимость перевозки.'
  },
  {
    num: '02',
    title: 'Заключите договор',
    text: 'Согласуем условия и подпишем договор-заявку. Мы зафиксируем цену, сроки и ответственность, чтобы вы были уверены в надёжности.'
  },
  {
    num: '03',
    title: 'Получите услугу',
    text: 'Мы заберём груз, оформим документы и доставим его получателю. Вы сможете отслеживать статус перевозки на каждом этапе.'
  },
  {
    num: '04',
    title: 'Оплатите услуги',
    text: 'После выполнения работы мы предоставим полный пакет закрывающих документов. Оплата производится согласно условиям договора.'
  }
]

function StepsSection() {
  const sectionRef = useRef(null)
  const [visibleSteps, setVisibleSteps] = useState({})

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const items = section.querySelectorAll('.steps-item')
    const observers = Array.from(items).map((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => ({ ...prev, [i]: true }))
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
      )
      obs.observe(el)
      return obs
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  const titleVisible = Object.keys(visibleSteps).length > 0

  return (
    <section ref={sectionRef} className="steps-section">
      <div className="container">
        <div className="steps-content">
          <h2 className={`steps-title ${titleVisible ? 'steps-title--visible' : ''}`}>
            Работа с нами проходит в 4 этапа
          </h2>
          <div className="steps-timeline">
            <div className="steps-line" />
            {stepsData.map((step, i) => (
              <div
                key={i}
                className={`steps-item ${visibleSteps[i] ? 'steps-item--visible' : ''}`}
              >
                <div className="steps-marker-wrap">
                  <div className="steps-marker">
                    <span className="steps-marker-dot" />
                  </div>
                  <span className="steps-number">{step.num}</span>
                </div>
                <div className="steps-body">
                  <h3 className="steps-heading">{step.title}</h3>
                  <p className="steps-text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepsSection

