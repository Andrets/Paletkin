import "./PartnersSection.css";

import ozon from "../assets/image/partners/ozon.svg";
import lamoda from "../assets/image/partners/lamoda.svg";
import megam from "../assets/image/partners/megam.svg";
import paletkin from "../assets/image/partners/paletkin.svg";
import sdek from "../assets/image/partners/sdek.svg";

const partnerLogos = [ozon, lamoda, megam, paletkin, sdek];

function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="partners-title">С нами работают лучшие</h2>
        <div className="partners-wrapper">
          <div className="partners-band">
            <div className="partners-track">
              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <div key={i} className="partners-logo">
                  <img src={logo} alt="" />
                </div>
              ))}

              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <div key={i} className="partners-logo">
                  <img src={logo} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
