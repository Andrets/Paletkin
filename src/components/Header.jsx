import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import logo from '../assets/image/logo/logo-black.svg';


// basic svg placeholders for icons (could later be replaced with proper assets)
const ServiceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="#ccc" />
  </svg>
)

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="site-header">
      <div className="container">

        <nav className="main-nav">
          <ul>

            <li>
              <Link to="/" className="logo">
                {/* insert actual logo image or svg here */}
                <img src={logo} alt="Paletkin" />
              </Link>
            </li>

            <li className="has-dropdown" ref={dropdownRef}>
              <button
                className="dropdown-toggle"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
              >
                Услуги
                <span className={`arrow ${menuOpen ? 'open' : ''}`}></span>
              </button>
            </li>

            <li>
              <Link to="/online-table">Онлайн‑таблица</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <div className="header-actions">
                <a href="tel:+79933430444" className="phone">
                  +7 (993) 343‑04‑44
                </a>
                <Link to="/checkout" className="order-btn">
                  Оформить заказ
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <div className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
          <div className="dropdown-col services-list">
            <ul>
              <li>
                <Link to="/services" onClick={() => setMenuOpen(false)}>
                  <ServiceIcon />
                  <div className="text">
                    <span className="title">Все услуги</span>
                    <span className="desc">Прозрачные цены без скрытых комиссий</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/marketplace" onClick={() => setMenuOpen(false)}>
                  <ServiceIcon />
                  <div className="text">
                    <span className="title">Доставка на маркетплейсы</span>
                    <span className="desc">Срочная доставка в России и СНГ</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/documents" onClick={() => setMenuOpen(false)}>
                  <ServiceIcon />
                  <div className="text">
                    <span className="title">Документы</span>
                    <span className="desc">Срочная доставка в России и СНГ</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="dropdown-col extra-info">
            <div className="featured-blocks">
              <Link 
                to="/blog/1" 
                className="featured-block" 
                onClick={() => setMenuOpen(false)}
                style={{ backgroundImage: 'url(/path/to/image1.jpg)' }}
              >
                <h3>Как работает срочная доставка</h3>
              </Link>
              <Link 
                to="/blog/2" 
                className="featured-block" 
                onClick={() => setMenuOpen(false)}
                style={{ backgroundImage: 'url(/path/to/image2.jpg)' }}
              >
                <h3>Выбираем маркетплейс для бизнеса</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
