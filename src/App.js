import React, { useEffect, useState } from 'react';
import './style.scss';

const menus = [
  {
    title: '15 Mini Mads',
    description: 'lightly sweet and fluffy vanilla mini madeleines',
  },
  {
    title: '15 Mini Pandan Mads',
    description: 'lightly sweet and fluffy pandan mini madeleines',
  },
  {
    title: '15 Mini Coffee Mads',
    description: 'fragrant coffee flavor but same fluffiness',
  },
  {
    title: '5 Dark Cookies',
    description:
      'a little crispy on the outside and chewy on the inside dark chocolate chip cookies',
  },
  {
    title: '5 Milk Cookies',
    description:
      'a little crispy on the outside and chewy on the inside milk chocolate chip cookies',
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  return loading ? (
    <div className="loader animate__animated animate__fadeOut">
      <img
        alt="loading"
        className="loader-spin"
        src={`${process.env.PUBLIC_URL}/loading-whisk.gif`}
      />
    </div>
  ) : (
    <div className="app animate__animated animate__fadeIn">
      <div className="app-section app-section-column">
        <img
          alt="logo"
          className="app-section-logo"
          src={`${process.env.PUBLIC_URL}/logo.png`}
        />
        <div className="app-section-description animate__animated animate__slideInUp">
          <span className="app-section-description-cookie">Cookies</span> |{' '}
          <span className="app-section-description-madeleine">Madeleines</span>
        </div>
      </div>
      <div
        className="app-section"
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          justifyContent: 'space-around',
        }}>
        <div
          alt="background"
          className="app-background"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpeg)` }}
        />
        <div className="app-section-socmed">
          <a
            className="app-section-socmed-wa"
            href="https://wa.me/+6287820223402?text=Please+fill+out+the+order+form+below%3A%0D%0A%0D%0A+Name%3A%0D%0A%0D%0A+Phone%3A%0D%0A%0D%0A+Address%3A%0D%0A%0D%0A+Order%3A%0D%0A%0D%0A+Delivery+Date%3A%0D%0A%0D%0A+Notes%2FRequests%3A%0D%0A%0D%0A+Thank+you+for+completing+the+order+form!+Please+hang+tight+while+we+input+your+order+%3A)&rlz=1C5CHFA_enUS834US834&oq=Please+fill+out+the+order+form+below%3A+Name%3A+Phone%3A+Address%3A+Order%3A+Delivery+Date%3A+Notes%2FRequests%3A+Thank+you+for+completing+the+order+form!+Please+hang+tight+while+we+input+your+order+%3A"
            rel="noopener noreferrer"
            target="_blank">
            <i className="fa fa-whatsapp"></i> Order here via WhatsApp
          </a>
          <a
            className="app-section-socmed-ig"
            href="https://instagram.com/le.baeker"
            rel="noopener noreferrer"
            target="_blank">
            <i className="fa fa-instagram"></i> Follow us on Instagram
          </a>
        </div>
        <div className="app-section-menu">
          <div className="app-section-menu-title">Menu</div>
          <ul className="app-section-menu-content">
            {menus.map(({ title, description }) => {
              return (
                <li key={title} className="app-section-menu-content-menu">
                  <div className="app-section-menu-content-menu-title">
                    {title}
                  </div>
                  <div className="app-section-menu-content-menu-description">
                    {description}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="app-footer">
        &copy; Copyright 2020 |{' '}
        <a
          href="https://github.com/bernardusbilly"
          rel="noopener noreferrer"
          target="_blank">
          <i className="fa fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
