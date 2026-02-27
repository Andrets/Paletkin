import './About.css'

function About() {
  const stats = [
    { number: '5000+', label: 'Довольных клиентов' },
    { number: '50+', label: 'Городов России' },
    { number: '10+', label: 'Лет опыта' },
    { number: '24/7', label: 'Поддержка' }
  ]

  const team = [
    { name: 'Иван Петров', role: 'Генеральный директор' },
    { name: 'Мария Сидорова', role: 'Директор по логистике' },
    { name: 'Сергей Иванов', role: 'Технический директор' },
    { name: 'Анна Федорова', role: 'Менеджер по продажам' }
  ]

  return (
    <div className="about-page">
      <div className="container">
        <h1>О компании</h1>
        
        <section className="about-intro">
          <h2>Наша история</h2>
          <p>
            Компания Paleten была основана в 2015 году с целью революционизировать логистическую отрасль. 
            За более чем 10 лет мы выросли из небольшого стартапа в лидера рынка логистических услуг.
          </p>
          <p>
            Наша миссия - предоставлять надёжные, быстрые и доступные логистические решения для бизнеса любого размера.
          </p>
        </section>

        <section className="stats">
          <h2>Наши достижения</h2>
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="team">
          <h2>Наша команда</h2>
          <div className="team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-avatar">👤</div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="values">
          <h2>Наши ценности</h2>
          <div className="values-grid">
            <div className="value-item">
              <h4>🎯 Надёжность</h4>
              <p>Мы выполняем обещания и доставляем товары вовремя</p>
            </div>
            <div className="value-item">
              <h4>💡 Инновация</h4>
              <p>Постоянное совершенствование технологий и процессов</p>
            </div>
            <div className="value-item">
              <h4>👥 Клиентоориентированность</h4>
              <p>Ваша удовлетворённость - наш главный приоритет</p>
            </div>
            <div className="value-item">
              <h4>🌱 Устойчивость</h4>
              <p>Забота об окружающей среде и экологии</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
