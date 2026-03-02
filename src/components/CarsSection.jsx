import venicle from '../assets/image/cars/vehicle-image-container.png'
import item_car1 from '../assets/image/cars/item-car.png'
import item_car2 from '../assets/image/cars/item-car2.png'
import item_car3 from '../assets/image/cars/item-car3.png'
import item_car4 from '../assets/image/cars/item-car4.png'
import item_car5 from '../assets/image/cars/item-car5.png'

const carTitle1 = 'Газель 3м'
const carTitle2 = 'Для маркетплейсов самое то!'

function CarsSection() {
  return (
    <section className="cars">
      <div className="container">
        <div className="cars-content">
          <div className="cars-text">
            <h2>Наши автопарк</h2>
            <p>
              Собственный автопарк транспортной компании &laquo;МарсТрансАвто&raquo;
              насчитывает 87 единиц современной техники, которой управляют наши опытные
              водители. Мы предложим вам наиболее подходящий автомобиль с учётом всех
              характеристик вашего груза и маршрута.
            </p>
          </div>
          <div className="cars-body">
            <div className="cars-left">
              <div className="cars-title">
                <span>{carTitle1}</span>
                <span>{carTitle2}</span>
              </div>

              <div className="cars-main">
                <img src={venicle} alt="Venicle" />
              </div>
              <div className="cars-main-text">
                <div className="car-descr">
                  Собственный автопарк транспортной компании &laquo;МарсТрансАвто&raquo;
                  насчитывает 87 единиц современной техники, которой управляют наши
                  опытные водители. Мы предложим вам наиболее подходящий автомобиль с
                  учётом всех характеристик вашего груза и маршрута.
                </div>
                <div className="car-spec">
                  <div className="car-spec-item">
                    <p>Объем кузова</p>
                    <p>до 3 м3</p>
                  </div>
                  <div className="car-spec-item">
                    <p>Паллеты</p>
                    <p>6-8 европаллет</p>
                  </div>
                  <div className="car-spec-item">
                    <p>Габариты кузова (д. × шир. × выс.)</p>
                    <p>до 1,5 × 1,3 × 1 м</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cars-rigth">
              <div
                className="cars-item"
                style={{ backgroundImage: `url(${item_car1})` }}
              >
                <div className="cars-weight">1,5т</div>
                <div className="cars-name">Газель 3 м</div>
                <div className="cars-price">от 2500₽</div>
              </div>
              <div
                className="cars-item"
                style={{ backgroundImage: `url(${item_car2})` }}
              >
                <div className="cars-weight">1,5т</div>
                <div className="cars-name">Газель 3 м</div>
                <div className="cars-price">от 2500₽</div>
              </div>
              <div
                className="cars-item"
                style={{ backgroundImage: `url(${item_car3})` }}
              >
                <div className="cars-weight">1,5т</div>
                <div className="cars-name">Газель 3 м</div>
                <div className="cars-price">от 2500₽</div>
              </div>
              <div
                className="cars-item"
                style={{ backgroundImage: `url(${item_car4})` }}
              >
                <div className="cars-weight">1,5т</div>
                <div className="cars-name">Газель 3 м</div>
                <div className="cars-price">от 2500₽</div>
              </div>
              <div
                className="cars-item"
                style={{ backgroundImage: `url(${item_car5})` }}
              >
                <div className="cars-weight">1,5т</div>
                <div className="cars-name">Газель 3 м</div>
                <div className="cars-price">от 2500₽</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarsSection

