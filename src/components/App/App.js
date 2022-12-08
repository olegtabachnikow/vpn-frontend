import React from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import AnimatedRoutes from '../AnimatedRoutes/AnimatedRoutes';
import { useSelector } from 'react-redux';

function App() {
  const tg = window.Telegram.WebApp;
  const location = useLocation();
  const currentUser = useSelector((state) => state.currentUser);

  React.useEffect(() => {
    tg.enableClosingConfirmation();
    tg.expand();
  }, []);

  return (
    <div
      className={`app app-${location.pathname.replaceAll('/', '')} ${
        location.pathname === '/support' ? currentUser.tariff.toLowerCase() : ''
      }`}
    >
      <AnimatedRoutes />
    </div>
  );
}

export default App;
