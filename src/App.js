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
    }, 1000);
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
        <img alt="logo" src={`${process.env.PUBLIC_URL}/logo.jpg`} />
        <div className="app-section-description animate__animated animate__slideInUp">
          Cookies | Madeleines
        </div>
      </div>
      <div className="app-section">
        <a
          className="app-section-contact"
          target="_blank"
          href="https://wa.me/+6287820223402?text=Please+fill+out+the+order+form+below%3A%0D%0A%0D%0A+Name%3A%0D%0A%0D%0A+Phone%3A%0D%0A%0D%0A+Address%3A%0D%0A%0D%0A+Order%3A%0D%0A%0D%0A+Delivery+Date%3A%0D%0A%0D%0A+Notes%2FRequests%3A%0D%0A%0D%0A+Thank+you+for+completing+the+order+form!+Please+hang+tight+while+we+input+your+order+%3A)&rlz=1C5CHFA_enUS834US834&oq=Please+fill+out+the+order+form+below%3A+Name%3A+Phone%3A+Address%3A+Order%3A+Delivery+Date%3A+Notes%2FRequests%3A+Thank+you+for+completing+the+order+form!+Please+hang+tight+while+we+input+your+order+%3A">
          <img alt="whatsapp" src={`${process.env.PUBLIC_URL}/wa-logo.png`} />
          Order here via WhatsApp
        </a>
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
    </div>
  );
}

export default App;
