function OfferSection({ title = 'Начните доставку прямо сейчас' }) {
  return (
    <section className="offer">
      <h3>{title}</h3>
      <p>Две минуты на оформление, остальное за нами. Доставим день в день</p>
      <form className="offer-form">
        <input
          type="tel"
          placeholder="Ваш номер телефона"
          className="offer-input"
          required
        />
        <button type="submit" className="order-offer-btn">
          Оставить заявку
        </button>
      </form>
      <span className="offer-notice">
        Нажимая кнопку, вы согласаетесь с нашей политикой конфиденциальности
      </span>
    </section>
  )
}

export default OfferSection

