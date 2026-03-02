import React, { useState } from 'react'

import gear from '../assets/image/different/gear.png'
import van from '../assets/image/different/van.png'
import box from '../assets/image/different/box.png'
import folder from '../assets/image/different/folder.png'

const slidesData = [
  {
    img: gear,
    title: 'Доставка день в день',
    text: 'Экспресс доставка грузов по Москве и Московской области в день заказа'
  },
  {
    img: van,
    title: 'Легальность и штат',
    text: 'Работа исключительно с лицензированными перевозчиками и нанятыми водителями'
  },
  {
    img: box,
    title: 'Собственный автопарк',
    text: 'Более 200 машин на балансе компании позволяют гарантировать сроки'
  },
  {
    img: folder,
    title: 'Технология',
    text: 'Собственная система отслеживания и управления логистикой в реальном времени'
  }
]

function DifferentSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((idx) => (idx > 0 ? idx - 1 : idx))
  }

  const nextSlide = () => {
    setCurrentIndex((idx) => (idx < slidesData.length - 1 ? idx + 1 : idx))
  }

  const onRangeChange = (e) => {
    setCurrentIndex(Number(e.target.value))
  }

  return (
    <section className="different">
      <div className="container">
        <div className="different-content">
          <div className="different-top">
            <h2 className="different-title">Что отличает нас</h2>
            <div className="different-buttons">
              <button onClick={prevSlide} className="slider-btn prev">
                ❮
              </button>
              <button onClick={nextSlide} className="slider-btn next">
                ❯
              </button>
            </div>
          </div>
          <div className="different-slider">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${currentIndex * 600}px)` }}
            >
              {slidesData.map((slide, idx) => (
                <div key={idx} className="feature-card">
                  <img src={slide.img} alt={slide.title} className="card-image" />
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                </div>
              ))}
            </div>
          </div>
          <input
            type="range"
            min="0"
            max={slidesData.length - 1}
            value={currentIndex}
            onChange={onRangeChange}
            className="slider-range"
          />
        </div>
      </div>
    </section>
  )
}

export default DifferentSection

