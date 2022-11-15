import React from 'react';
import './App.css';
import Intro from '../Intro/Intro';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Instruction from '../Instruction/Instruction';
import Main from '../Main/Main';
import Gift from '../Gift/Gift';
import MyVpn from '../MyVpn/MyVpn';
import Referral from '../Referral/Referral';
import { getCurrentUser } from '../../utils/roboApi';
import Help from '../Help/Help';

function App() {
  const tg = window.Telegram.WebApp;
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(window.location.search);
  const userId = () => {
    const data = queryParams.get('user_id');
    if (data) {
      return parseInt(data.replace('/', ''));
    }
  };
  React.useEffect(() => {
    const id = userId();
    getCurrentUser(id);
  }, []);

  React.useEffect(() => {
    tg.onEvent('viewportChanged', () => tg.expand());
  });
  React.useEffect(() => {
    tg.enableClosingConfirmation();
    window.Telegram.WebApp && window.Telegram.WebApp.expand();
  }, []);

  React.useEffect(() => {
    navigate('/intro');
  }, []);

  return (
    <div className={`app app-${location.pathname.replace('/', '')}`}>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/instruction' element={<Instruction />} />
        <Route path='/gift' element={<Gift />} />
        <Route path='/my-vpn' element={<MyVpn />} />
        <Route path='/referral' element={<Referral />} />
        <Route path='/help' element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;