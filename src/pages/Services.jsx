import './Services.css'

function Services() {
  const services = [
    {
      title: 'Логистика',
      icon: '🚚',
      description: 'Полный спектр логистических услуг по России',
      features: ['Быстрая доставка', 'GPS отслеживание', 'Страховка']
    },
    {
      title: 'Управление складом',
      icon: '📦',
      description: 'Профессиональное хранение и обработка товаров',
      features: ['24/7 контроль', 'Оптимизация', 'Аналитика']
    },
    {
      title: 'Интеграция маркетплейсов',
      icon: '🛒',
      description: 'Синхронизация с популярными маркетплейсами',
      features: ['Яндекс Маркет', 'Ozon', 'Wildberries']
    },
    {
      title: 'Консультации',
      icon: '💬',
      description: 'Экспертные консультации по оптимизации поставок',
      features: ['Анализ процессов', 'Рекомендации', 'Поддержка']
    },
    {
      title: 'Документооборот',
      icon: '📋',
      description: 'Автоматизация и управление документами',
      features: ['Электронные накладные', 'Архив', 'Отчёты']
    },
    {
      title: 'Таможенное оформление',
      icon: '✈️',
      description: 'Помощь с таможенным оформлением товаров',
      features: ['Документы', 'Разрешения', 'Консультации']
    }
  ]

  return (
    <div className="services-page">
      <div className="container">
        <h1>Все услуги</h1>
        <p className="subtitle">Комплексные решения для вашего бизнеса</p>

        <div className="services-grid">
          {services.map((svc, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <ul className="service-features">
                {svc.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button className="btn btn-primary btn-small">Подробнее</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
