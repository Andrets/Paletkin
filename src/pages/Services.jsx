import './Services.css'

import DocumentsCtaSection from '../components/DocumentsCtaSection'
import CalculatorComponent from '../components/Calculator'
import FaqSection from '../components/FaqSection'

import companys from '../assets/image/partners/companys.svg'

import del from '../assets/image/services/del.png'
import docs from '../assets/image/services/docs.png'
import back from '../assets/image/services/back.png'
import wh from '../assets/image/services/wh.png'
import logi from '../assets/image/services/logi.png'
import fl from '../assets/image/services/fl.png'


function Services() {


  return (
    <div className="services-page">
      <div className="container">
        <div className="services-container">
          <div className="services-top">
            <h1>
              Все услуги
            </h1>
            <p>Paletkin предоставляет комплексные услуги грузоперевозок, адаптированные под потребности маркетплейсов и B2B-партнёров. 
              От срочной доставки до профессионального сопровождения грузов — мы обеспечиваем надёжность на каждом этапе.</p>
          </div>

          <div className="service-offer">
            Мы предлагаем <span>комплексные логистические решения</span><br/> для эффективного управления цепочками поставок и доставки товаров
            <br/> на <span>ведущие маркетплейсы России</span>
            <img src={companys} alt="Партнеры" />
          </div>

          <div className="service-all">
            <h2>Все услуги</h2>
            <div className="service-all-body">
              <div className="service-body-top">
                <button className='active'>
                  Все услуги
                </button>
                <button>
                  Доставка на маркетплейсы
                </button>
                <button>
                  Транспортные услуги
                </button>
                <button>
                  Транспортные услуги
                </button>
                <button>
                  Транспортные услуги
                </button>
              </div>
              <div className="service-body">
                <div className="service-body-item">
                  <img src={wh} alt="Fl" />
                  <div className="service-item-text ">
                    <h3>Складские услуги</h3>
                    <p>Ответственное хранение, обработка и подготовка грузов с использованием современных систем учета.</p>
                  </div>
                  <button>Узнать подробнее</button>
                </div>
                <div className="service-body-item">
                  <img src={del} alt="Fl" />
                  <div className="service-item-text ">
                    <h3>Доставка на маркетплейсы</h3>
                    <p>Быстрая и надежная доставка ваших товаров на склады популярных маркетплейсов с учетом всех требований.</p>
                  </div>
                  <button>Изучить</button>
                </div> 
                <div className="service-body-item">
                  <img src={fl} alt="Fl" />
                  <div className="service-item-text ">
                    <h3>Фулфилмент</h3>
                    <p>Полный цикл обработки заказов: прием, хранение, упаковка и отправка товаров вашим клиентам.</p>
                  </div>
                  <button>Узнать подробнее</button>
                </div>

                <div className="service-body-item">
                  <img src={docs} alt="Fl" />
                  <div className="service-item-text ">
                    <h3>Документооборот</h3>
                    <p>Официальные бланки, договоры и доверенности для организации перевозок. Полный набор необходимых документов.</p>
                  </div>
                  <button>Узнать подробнее</button>
                </div>
                <div className="service-body-item">
                  <img src={logi} alt="Fl" />
                  <div className="service-item-text ">
                    <h3>Логистический аутсорсинг</h3>
                    <p>Комплексное управление логистическими процессами вашего бизнеса с оптимизацией расходов.</p>
                  </div>
                  <button>Изучить</button>
                </div> 
                <div className="service-body-item">
                  <img src={fl} alt="Fl" />
                  <div className="service-item-text ">
                    <h3>Возвраты товаров</h3>
                    <p>Организация процесса возврата товаров с маркетплейсов и от конечных потребителей на ваш склад.</p>
                  </div>
                  <button>Узнать подробнее</button>
                </div>   
              </div>
            </div>
          </div>

          <CalculatorComponent />
          <FaqSection
            title="Ответы на вопросы"
            subtitle="Если вы все еще имеете вопросы о документах и сервисах"
            linkTo="/faq"
            linkText="Перейти в раздел FAQ"
          />
          <DocumentsCtaSection />
        </div>  
      </div>
    </div>
  )
}

export default Services
