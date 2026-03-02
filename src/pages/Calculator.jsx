import './Calculator.css'

import CalculatorComponent from '../components/Calculator'
import OfferSection from '../components/OfferSection'
import WhyUsSection from '../components/WhyUs'


function Calculator() {
  return (
    <div className="calculator-page">
      <div className="container">
          <CalculatorComponent />
          <WhyUsSection />
      </div>
      <OfferSection title="Готовы отправить груз?" />
    </div>
  )
}

export default Calculator
