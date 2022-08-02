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
        src={`${process.env.PUBLIC_URL}/jett-valorant.gif`}
      />
    </div>
  ) : (
    <div className="app animate__animated animate__fadeIn">
      <div className="app-section">
        <img
          alt="logo"
          className="app-section-logo"
          src={`${process.env.PUBLIC_URL}/yazmyn.jpeg`}
        />
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
