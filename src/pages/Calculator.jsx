import { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [weight, setWeight] = useState('')
  const [volume, setVolume] = useState('')
  const [service, setService] = useState('standard')
  const [distance, setDistance] = useState('')

  const pricePerKg = 50
  const pricePerM3 = 1000
  const serviceMultiplier = { standard: 1, express: 1.5, premium: 2 }

  const calculatePrice = () => {
    const w = parseFloat(weight) || 0
    const v = parseFloat(volume) || 0
    const d = parseFloat(distance) || 0
    
    const basePrice = (w * pricePerKg) + (v * pricePerM3)
    const servicePrice = basePrice * serviceMultiplier[service]
    const totalPrice = servicePrice * (1 + d * 0.01)
    
    return totalPrice.toFixed(2)
  }

  return (
    <div className="calculator-page">
      <div className="container">
        <h1>Калькулятор стоимости доставки</h1>
        
        <div className="calculator-wrapper">
          <div className="calculator-form">
            <div className="form-group">
              <label>Вес (кг)</label>
              <input
                type="number"
                placeholder="Введите вес"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Объём (м³)</label>
              <input
                type="number"
                placeholder="Введите объём"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Расстояние (км)</label>
              <input
                type="number"
                placeholder="Введите расстояние"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Тип услуги</label>
              <select value={service} onChange={(e) => setService(e.target.value)}>
                <option value="standard">Стандартная доставка</option>
                <option value="express">Экспресс-доставка (50% дороже)</option>
                <option value="premium">Премиум-доставка (100% дороже)</option>
              </select>
            </div>

            <div className="calculator-result">
              <p>Итоговая стоимость:</p>
              <h2 className="price">₽ {calculatePrice()}</h2>
            </div>

            <button className="btn btn-primary btn-block">Подтвердить расчёт</button>
          </div>

          <div className="calculator-info">
            <h3>Как работает калькулятор?</h3>
            <ul>
              <li>💰 Базовая цена: 50₽ за кг + 1000₽ за м³</li>
              <li>⏱️ Экспресс: +50% к стоимости</li>
              <li>👑 Премиум: +100% к стоимости</li>
              <li>📍 За каждый км +1% стоимости</li>
              <li>🎯 Цены обновляются в реальном времени</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
