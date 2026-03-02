import { useState } from 'react'
import { Link } from 'react-router-dom'

function FaqSection({
  title = 'Ответы на вопросы',
  subtitle,
  linkTo,
  linkText,
  className = ''
}) {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index)
  }

  const faqs = [
    {
      question: 'Как рассчитать стоимость?',
      answer: 'Стоимость рассчитывается на основе веса груза, расстояния доставки и выбранного типа услуги. Используйте наш калькулятор для быстрого расчета.'
    },
    {
      question: 'Работаете ли вы ночью?',
      answer: 'Да, доставляем круглосуточно. День и ночь - мы здесь, чтобы доставить вашу посылку вовремя. Срочность не значит расписание.'
    },
    {
      question: 'Какие города охватываете?',
      answer: 'Работаем в 50+ городов России и СНГ. Если вашего города нет в списке - свяжитесь с нами и мы уточним возможность доставки в ваш регион.'
    },
    {
      question: 'Нужна ли регистрация?',
      answer: 'Нет, но регистрация помогает получить доступ к личному кабинету с историей заказов, сохраненными адресами и специальными предложениями.'
    },
    {
      question: 'Как отследить груз?',
      answer: 'После оформления заказа получите уникальный номер для отслеживания. Введите его на сайте в любой момент, чтобы узнать статус доставки.'
    }
  ]

  return (
    <section className={`faq-section ${className}`}>
      <div className="faq-grid">
        <div className="faq-intro">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
          {linkTo && linkText && (
            <Link to={linkTo} className="learn-more-btn">
              {linkText}
            </Link>
          )}
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = expandedIndex === index
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'expanded' : ''}`}
              >
                <button
                  className={`faq-question ${isOpen ? 'open' : ''}`}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`faq-icon ${isOpen ? 'open' : ''}`}
                    aria-hidden
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <div className="faq-content">
                    <span className="faq-title">{faq.question}</span>
                    <div
                      className={`faq-answer ${isOpen ? 'open' : ''}`}
                      role="region"
                    >
                      <div className="faq-answer-inner">{faq.answer}</div>
                    </div>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection

