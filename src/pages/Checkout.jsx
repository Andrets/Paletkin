import { useState } from 'react'
import './Checkout.css'

import FaqSection from '../components/FaqSection'
import DocumentsCtaSection from '../components/DocumentsCtaSection'
import CalculatorComponent from '../components/Calculator'

import fire from "../assets/image/icons/fire.svg"

function Checkout() {

  return (
    <section className="checkout-page">
      
      <div className="checkout-top">
        <div className="container">
          <div className="checkout-top-content">
              <h1>Оформление заказа</h1>
              <span>Заполните форму для надёжной организации доставки. Все заявки <br/>обрабатываются в течение 15 минут</span>
          </div>
        </div>
      </div>
      <div className="checkout-offer">
        <div className="container">
          <div className="checkout-offer-content">
            <div className="checkout-offer-hot">
              <img src={fire} alt="Hot offer" />
              Только при заказе через сайт
            </div>
            <h3>Скидка 50%</h3>
            <p>На первый заказ в составе сборного грузка</p>
          </div>
        </div>
      </div>
      <div className="container">
        <CalculatorComponent mode='checkout' />
      </div>
      <div className="container">
          <FaqSection
            title="Ответы на вопросы"
            subtitle="Если вы все еще имеете вопросы о документах и сервисах"
            linkTo="/faq"
            linkText="Перейти в раздел FAQ"
          />
      </div>

      <DocumentsCtaSection />
      
    </section>
  )
}

export default Checkout
