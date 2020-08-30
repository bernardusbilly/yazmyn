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
  const [showForm, setShowForm] = useState(false);
  const [cookiesClick, setCookiesClick] = useState(0);
  const [form, setForm] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  const handleFormChange = (event) => {
    const newFormEntry = JSON.parse(JSON.stringify(form));
    const { id, value } = event.target;
    newFormEntry[id] = value;
    setForm(newFormEntry);
  };

  const handleResetOrder = () => {
    setTimeout(() => {
      setShowForm(false);
      setForm({});
    });
  };

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
        <EasterEgg click={cookiesClick} />
        <div className="app-section-description animate__animated animate__slideInUp">
          <span
            className="app-section-description-cookie"
            onClick={() => setCookiesClick(cookiesClick + 1)}>
            Cookies
          </span>{' '}
          |{' '}
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
        <div className="app-section-order">
          <span style={{ cursor: 'pointer' }} onClick={() => setShowForm(true)}>
            Order now
          </span>
          {showForm && (
            <div className="app-section-order-form">
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={handleFormChange} />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" onChange={handleFormChange} />
              </div>
              <div>
                <label htmlFor="address">Address:</label>
                <input
                  type="textarea"
                  id="address"
                  onChange={handleFormChange}
                />
              </div>
              <div>
                <label htmlFor="name">Delivery Date:</label>
                <input
                  type="text"
                  id="delivery date"
                  onChange={handleFormChange}
                />
              </div>
              <div>
                <label htmlFor="name">Notes:</label>
                <input type="text" id="notes" onChange={handleFormChange} />
              </div>
            </div>
          )}
          <a
            className="app-section-socmed-wa"
            href={`https://wa.me/+6287820223402?text=Please+fill+out+the+order+form+below%3A%0D%0D+Name%3A${
              form.name || ''
            }%0D%0D+Phone%3A${form.phone || ''}%0D%0D+Address%3A${
              form.address || ''
            }%0D%0D+Order%3A${form.order || ''}%0D%0D+Delivery+Date%3A${
              form.delivery || ''
            }%0D%0D+Notes%2FRequests%3A${
              form.notes || ''
            }%0D%0D+Thank+you+for+completing+the+order+form!+Please+hang+tight+while+we+input+your+order+%3A)&rlz=1C5CHFA_enUS834US834&oq=Please+fill+out+the+order+form+below%3A+Name%3A+Phone%3A+Address%3A+Order%3A+Delivery+Date%3A+Notes%2FRequests%3A+Thank+you+for+completing+the+order+form!+Please+hang+tight+while+we+input+your+order+%3A`}
            rel="noopener noreferrer"
            target="_blank"
            onClick={handleResetOrder}>
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

function EasterEgg({ click = 0 }) {
  let message = '';

  if (click > 60) {
    message =
      'Fine, now post your finding with #baekerFindCookies on your instagram! :)';
  } else if (click > 50) {
    message = 'Why are you still clicking this?';
  } else if (click > 30) {
    message = 'Fine.. you have found the easter egg!';
  } else if (click > 20) {
    message = "Wow, you love cookies, don't  you!?";
  } else if (click > 10) {
    message = 'Seems like you like cookies a lot!';
  } else {
    message = '';
  }

  return (
    <div
      className="app-easteregg animate__animated animate__bounceIn"
      key={message}>
      {message}
    </div>
  );
}

export default App;
