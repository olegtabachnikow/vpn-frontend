import React from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import AnimatedRoutes from '../AnimatedRoutes/AnimatedRoutes';
import ReactGA from 'react-ga';
import { useSelector } from 'react-redux';

const GA_ID = process.env.REACT_APP_GA_ID;
ReactGA.initialize(GA_ID);

function App() {
  const tg = window.Telegram.WebApp;
  const location = useLocation();
  const currentUser = useSelector((state) => state.currentUser);

  const handleAnalitycs = React.useCallback(() => {
    ReactGA.ga('send', 'pageview', location.pathname);
  }, [location.pathname]);

  React.useEffect(() => {
    handleAnalitycs();
  });

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
