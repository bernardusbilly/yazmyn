import React, { useEffect, useState } from 'react';
import './style.scss';

function Codi({ x = 0, y = 0 }) {
  return <img
    alt="loading"
    className="loader-spin"
    src={`${process.env.PUBLIC_URL}/codi.gif`}
  />
}

function App() {
  const [loading, setLoading] = useState(false);
  const [codis, setCodis] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  const handleAddCodi = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(x,y);
    setCodis([...codis, {x,y}]);
  };

  return loading ? (
    <div className="loader animate__animated animate__fadeOut">
      <img
        alt="loading"
        className="loader-spin"
        src={`${process.env.PUBLIC_URL}/codi.gif`}
      />
      <img
        alt="loading"
        className="loader-spin"
        src={`${process.env.PUBLIC_URL}/codi.gif`}
      />
      <img
        alt="loading"
        className="loader-spin"
        src={`${process.env.PUBLIC_URL}/codi.gif`}
      />
    </div>
  ) : (
    <div className="app animate__animated animate__fadeIn">
      <div className="app-section" onClick={handleAddCodi}>
        {codis.map(({ x = 0, y = 0 }) => {
          return <img
            alt="codi"
            className='app-section-codi'
            src={`${process.env.PUBLIC_URL}/codi.gif`}
            style={{ position: "absolute", left: x-25, top: y-25 }}
          />;
        })}
        <div className="app-section-name">
          yazmyn
        </div>
        <div className="app-section-info">
          (click anywhere to place codi)
        </div>
        <div className="flex space-x-4">
          <a href='https://www.twitch.tv/yazmyn' target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-twitch"></i>
          </a>
          <a href='https://twitter.com/yazmynFPS' target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href='https://www.youtube.com/c/yazmynFPS' target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href='https://www.instagram.com/yazmynlol/' target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href='https://www.tiktok.com/@yazmynfps' target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </div>
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
