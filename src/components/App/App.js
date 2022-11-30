import React from 'react';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import AnimatedRoutes from '../AnimatedRoutes/AnimatedRoutes';
import { getCurrentUser, getPrices } from '../../utils/roboApi';
import { setCurrentUser, setPrices } from '../../redux/actions/actions';
import { useSelector } from 'react-redux';

import { userFree, userFit, userNolimit } from '../../utils/fakeUserData';

function App() {
  const tg = window.Telegram.WebApp;
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(window.location.search);
  const currentUser = useSelector((state) => state.currentUser);

  const userId = () => {
    const data = queryParams.get('user_id');
    if (data) {
      return parseInt(data.replace('/', ''));
    }
  };
  function testUserSetter(data) {
    if (data === 'FREE') {
      setCurrentUser(userFree);
    } else if (data === 'FIT') {
      setCurrentUser(userFit);
    } else {
      setCurrentUser(userNolimit);
    }
  }
  React.useEffect(() => {
    // const id = userId();
    // getUser(id);
    setCurrentUser(userNolimit);
    navigate('/intro');
  }, []);

  React.useEffect(() => {
    getPrices()
      .then((res) => setPrices(res))
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    tg.enableClosingConfirmation();
    tg.expand();
  }, []);

  function getUser(id = 12345678) {
    getCurrentUser(id)
      .then((res) => setCurrentUser(res))
      .then((user) =>
        user.payload.activeUser ? navigate('/') : navigate('/intro')
      )
      .catch(() => navigate('/intro'));
  }

  console.log(window.location.href);
  console.log(window.innerHeight, window.innerWidth);
  return (
    <div
      className={`app app-${location.pathname.replaceAll('/', '')} ${
        location.pathname === '/support' ? currentUser.tariff.toLowerCase() : ''
      }`}
    >
      <AnimatedRoutes testUserSetter={testUserSetter} />
    </div>
  );
}

export default App;
