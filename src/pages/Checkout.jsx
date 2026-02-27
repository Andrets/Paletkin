import { useState } from 'react'
import './Checkout.css'

function Checkout() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    shipmentType: 'standard',
    insurance: false
  })

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Заказ оформлен:', formData)
    setStep(4)
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Оформление заказа</h1>

        <div className="checkout-wrapper">
          <div className="progress-bar">
            <div className="progress-step" style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>

          <div className="steps-indicator">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Данные</div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Услуги</div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Подтверждение</div>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            {step === 1 && (
              <div className="form-step">
                <h2>Ваши данные</h2>
                
                <div className="form-group">
                  <label>ФИО *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Петров"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ivan@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Телефон *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 999-99-99"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Компания</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ООО Компания"
                  />
                </div>

                <div className="form-group">
                  <label>Адрес доставки</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Москва, ул. Пушкина, д. 10"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h2>Выберите услуги</h2>
                
                <div className="service-option">
                  <h3>Тип доставки</h3>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="shipmentType"
                        value="standard"
                        checked={formData.shipmentType === 'standard'}
                        onChange={handleChange}
                      />
                      <span>Стандартная (3-5 дней) - 500₽</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="shipmentType"
                        value="express"
                        checked={formData.shipmentType === 'express'}
                        onChange={handleChange}
                      />
                      <span>Экспресс (1-2 дня) - 1500₽</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="shipmentType"
                        value="same-day"
                        checked={formData.shipmentType === 'same-day'}
                        onChange={handleChange}
                      />
                      <span>Доставка в день заказа - 3000₽</span>
                    </label>
                  </div>
                </div>

                <div className="service-option">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="insurance"
                      checked={formData.insurance}
                      onChange={handleChange}
                    />
                    <span>Добавить страховку товара (+5% от суммы)</span>
                  </label>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <h2>Подтверждение</h2>
                
                <div className="order-summary">
                  <h3>Итоговая информация</h3>
                  
                  <div className="summary-section">
                    <h4>Ваши данные:</h4>
                    <p><strong>ФИО:</strong> {formData.name || '—'}</p>
                    <p><strong>Email:</strong> {formData.email || '—'}</p>
                    <p><strong>Телефон:</strong> {formData.phone || '—'}</p>
                    <p><strong>Компания:</strong> {formData.company || '—'}</p>
                  </div>

                  <div className="summary-section">
                    <h4>Услуги:</h4>
                    <p><strong>Тип доставки:</strong> {formData.shipmentType}</p>
                    <p><strong>Страховка:</strong> {formData.insurance ? 'Да' : 'Нет'}</p>
                  </div>

                  <div className="order-total">
                    <h4>Сумма к оплате:</h4>
                    <p className="total">от 500₽</p>
                  </div>
                </div>

                <label className="checkbox">
                  <input type="checkbox" required />
                  <span>Я согласен с условиями использования и политикой конфиденциальности</span>
                </label>
              </div>
            )}

            {step === 4 && (
              <div className="form-step success">
                <div className="success-icon">✓</div>
                <h2>Заказ успешно оформлен!</h2>
                <p>Спасибо за ваш заказ. Мы вскоре свяжемся с вами для уточнения деталей.</p>
                <p>Номер заказа: <strong>#1234567</strong></p>
                <button type="button" className="btn btn-primary">
                  На главную
                </button>
              </div>
            )}

            {step < 4 && (
              <div className="form-actions">
                {step > 1 && (
                  <button type="button" className="btn btn-secondary" onClick={handleBack}>
                    ← Назад
                  </button>
                )}
                {step < 3 && (
                  <button type="button" className="btn btn-primary" onClick={handleNext}>
                    Далее →
                  </button>
                )}
                {step === 3 && (
                  <button type="submit" className="btn btn-primary">
                    Оформить заказ
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout
