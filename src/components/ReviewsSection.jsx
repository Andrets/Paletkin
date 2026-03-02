import React, { useState } from 'react'

import sdek from '../assets/image/partners/sdek.svg'
import lamoda from '../assets/image/partners/lamoda.svg'
import ozon from '../assets/image/partners/ozon.svg'

import avatar1 from '../assets/image/avatars/avatar1.png'
import avatar2 from '../assets/image/avatars/avatar2.png'
import avatar3 from '../assets/image/avatars/avatar3.png'

const reviewsData = [
  {
    logo: sdek,
    avatar: avatar1,
    company: 'СДЭК',
    title: 'Доставка день в день',
    text: '«День в день — это не миф. Заказал утром, груз уже в Москве вечером. Честные люди, честные цены.»',
    author: 'Иван Петров',
    role: 'Логист, СДЭК'
  },
  {
    logo: lamoda,
    avatar: avatar2,
    company: 'Lamoda',
    title: 'Экспресс-доставка',
    text: '«С Paletkin ни разу не забыли о задержках! Всегда вовремя, всегда чётко. Рекомендую всем, кто ценит своё время.»',
    author: 'Артур Кузнецов',
    role: 'Владелец магазина, Lamoda'
  },
  {
    logo: ozon,
    avatar: avatar3,
    company: 'OZON',
    title: 'Моментальная доставка',
    text: '«Благодаря Paletkin, наши товары доставляются клиентам быстрее и удобнее — это экономит наше время и деньги.»',
    author: 'Светлана Орлова',
    role: 'Менеджер, Ozon'
  }
]

function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevReview = () => {
    setCurrentIndex((idx) => (idx > 0 ? idx - 1 : idx))
  }

  const nextReview = () => {
    setCurrentIndex((idx) => (idx < reviewsData.length - 1 ? idx + 1 : idx))
  }

  const onRangeChange = (e) => {
    setCurrentIndex(Number(e.target.value))
  }

  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews-content">
          <div className="reviews-top">
            <div>
              <h2 className="reviews-title">Отзывы клиентов</h2>
              <p className="reviews-subtitle">Что говорят те, кто уже работает с нами</p>
            </div>
            <div className="reviews-buttons">
              <button onClick={prevReview} className="slider-btn prev">
                ❮
              </button>
              <button onClick={nextReview} className="slider-btn next">
                ❯
              </button>
            </div>
          </div>

          <div className="reviews-slider">
            <div
              className="reviews-track"
              style={{ transform: `translateX(-${currentIndex * 640}px)` }}
            >
              {reviewsData.map((review, idx) => (
                <article key={idx} className="review-card">
                  <img src={review.logo} alt={review.company} className="review-logo" />
                  <h3 className="review-title">{review.title}</h3>
                  <p className="review-text">{review.text}</p>
                  <div className="review-footer">
                    <div className="review-author">
                      <div className="review-author-avatar">
                        <img src={review.avatar} alt={review.author} />
                      </div>
                      <div className="review-author-info">
                        <div className="review-author-name">{review.author}</div>
                        <div className="review-author-role">{review.role}</div>
                      </div>
                    </div>
                    <button className="review-button">Перейти к кейсу</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <input
            type="range"
            min="0"
            max={reviewsData.length - 1}
            value={currentIndex}
            onChange={onRangeChange}
            className="reviews-slider-range"
          />
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection

