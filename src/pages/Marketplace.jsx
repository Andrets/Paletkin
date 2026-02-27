import './Marketplace.css'

function Marketplace() {
  const marketplaces = [
    {
      name: 'Яндекс Маркет',
      logo: '🟡',
      description: 'Интеграция с крупнейшей российской площадкой',
      status: 'Активна',
      features: ['Синхронизация', 'Автоматическая обработка', 'Аналитика']
    },
    {
      name: 'Ozon',
      logo: '🔵',
      description: 'Быстрая доставка и управление заказами',
      status: 'Активна',
      features: ['Синхронизация', 'Доставка', 'Возвраты']
    },
    {
      name: 'Wildberries',
      logo: '💜',
      description: 'Работа с крупнейшей площадкой моды',
      status: 'Активна',
      features: ['Синхронизация', 'Логистика', 'Отчёты']
    },
    {
      name: 'ВКонтакте Маркет',
      logo: '🔷',
      description: 'Продажи через социальную сеть',
      status: 'Активна',
      features: ['Интеграция', 'Доставка', 'Поддержка']
    },
    {
      name: 'Avito Бизнес',
      logo: '🟠',
      description: 'Площадка для малого бизнеса',
      status: 'Активна',
      features: ['Синхронизация', 'Логистика', 'Аналитика']
    },
    {
      name: 'Тизер',
      logo: '🟢',
      description: 'Работа с товарами для дома и быта',
      status: 'Скоро',
      features: ['В разработке', 'Планируется', 'Q2 2026']
    }
  ]

  return (
    <div className="marketplace-page">
      <div className="container">
        <h1>Доставка на маркетплейсы</h1>
        <p className="subtitle">Интегрируемся со всеми популярными площадками России</p>

        <div className="marketplace-intro">
          <h2>Почему выбрать нас?</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <span>⚡</span>
              <h4>Быстрая интеграция</h4>
              <p>Подключитесь за 24 часа</p>
            </div>
            <div className="benefit">
              <span>📊</span>
              <h4>Полная синхронизация</h4>
              <p>Автоматическое обновление каталога</p>
            </div>
            <div className="benefit">
              <span>🛡️</span>
              <h4>Безопасность</h4>
              <p>Защита данных и товаров</p>
            </div>
          </div>
        </div>

        <div className="marketplaces-grid">
          {marketplaces.map((mp, idx) => (
            <div key={idx} className={`marketplace-card ${mp.status === 'Скоро' ? 'coming-soon' : ''}`}>
              <div className="marketplace-logo">{mp.logo}</div>
              <h3>{mp.name}</h3>
              <p>{mp.description}</p>
              <span className={`status ${mp.status === 'Активна' ? 'active' : 'pending'}`}>
                {mp.status}
              </span>
              <ul className="marketplace-features">
                {mp.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button className={`btn btn-small ${mp.status === 'Активна' ? 'btn-primary' : 'btn-secondary'}`}>
                {mp.status === 'Активна' ? 'Подключить' : 'Уведомить'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marketplace
