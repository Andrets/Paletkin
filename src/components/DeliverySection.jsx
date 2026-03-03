import './DeliverySection.css'

import yamrket from '../assets/image/delivery/yamrket.svg'
import lamoda from '../assets/image/delivery/lamoda.png'
import megam from '../assets/image/delivery/sbermega.svg'
import magnit from '../assets/image/delivery/magnit.svg'
import detmir from '../assets/image/delivery/detmir.svg'

const partnerLogos = [yamrket, lamoda, megam, magnit, detmir]



function DeliverySection({ title, subtitle, text_align='center' }) {
  return (
    <section className="delivery-section">
      <div className="container">
        <div className="delivery-section-text" style={{ alignItems: text_align }}>
            <div className="delivery-title" >{title}</div>
            <div className="delivery-subtitle" >{subtitle}</div>
        </div>
        <div className="delivery-band">
          <div className="delivery-track">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={i} className="delivery-logo">
                <img src={logo} alt="" />
              </div>
            ))}

            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={i} className="delivery-logo">
                <img src={logo} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    )
}

export default DeliverySection