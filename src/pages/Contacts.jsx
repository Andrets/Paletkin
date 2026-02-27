import { useState } from 'react'
import './Contacts.css'

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Сообщение отправлено:', formData)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    alert('Спасибо! Мы получили ваше сообщение')
  }

  const offices = [
    {
      city: 'Москва',
      address: 'ул. Пушкина, д. 10',
      phone: '+7 (495) 123-45-67',
      email: 'moscow@paleten.ru',
      hours: 'Пн-Пт: 9:00-18:00'
    },
    {
      city: 'Санкт-Петербург',
      address: 'пр. Невский, д. 50',
      phone: '+7 (812) 456-78-90',
      email: 'spb@paleten.ru',
      hours: 'Пн-Пт: 9:00-18:00'
    },
    {
      city: 'Екатеринбург',
      address: 'ул. Ленина, д. 25',
      phone: '+7 (343) 789-01-23',
      email: 'ekb@paleten.ru',
      hours: 'Пн-Пт: 9:00-18:00'
    }
  ]

  return (
    <div className="contacts-page">
      <div className="container">
        <h1>Контакты</h1>
        <p className="subtitle">Мы всегда рады помочь вам</p>

        <div className="contacts-wrapper">
          <div className="contact-form">
            <h2>Свяжитесь с нами</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Ваше имя *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Петров"
                  required
                />
              </div>

              <div className="form-row">
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
                  <label>Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 999-99-99"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Тема сообщения *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="О чём ваше обращение?"
                  required
                />
              </div>

              <div className="form-group">
                <label>Сообщение *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Напишите ваше сообщение..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">Отправить сообщение</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Наши офисы</h2>
            <div className="offices">
              {offices.map((office, idx) => (
                <div key={idx} className="office-card">
                  <h3>📍 {office.city}</h3>
                  <p><strong>Адрес:</strong> {office.address}</p>
                  <p><strong>Телефон:</strong> <a href={`tel:${office.phone}`}>{office.phone}</a></p>
                  <p><strong>Email:</strong> <a href={`mailto:${office.email}`}>{office.email}</a></p>
                  <p><strong>Часы работы:</strong> {office.hours}</p>
                </div>
              ))}
            </div>

            <div className="contact-methods">
              <h3>Другие способы связи</h3>
              <ul>
                <li>📞 Горячая линия: <a href="tel:8-800-123-45-67">8-800-123-45-67</a></li>
                <li>💬 Telegram: <a href="https://t.me/paleten" target="_blank" rel="noopener noreferrer">@paleten</a></li>
                <li>📧 Email поддержки: <a href="mailto:support@paleten.ru">support@paleten.ru</a></li>
                <li>🕒 Время ответа: обычно в течение 2 часов</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
