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
import { setCurrentUser } from '../actions/actions';
import Balance from '../Balance/Balance';
import Traffic from '../Traffic/Traffic';
import Support from '../Support/Support';
import Values from '../Values/Values';
import News from '../News/News';
import Possibilities from '../Possibilities/Possibilities';
import Faq from '../Faq/Faq';
import Tariffes from '../Tariffes/Tariffes';
import Subscription from '../Subscription/Subscription';
import Payment from '../Payment/Payment';

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
    getUser(id);
  }, []);

  React.useEffect(() => {
    tg.enableClosingConfirmation();
    tg.expand();
  }, []);

  React.useEffect(() => {
    navigate('/intro');
  }, []);

  function getUser(id = 12345678) {
    getCurrentUser(id)
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err));
  }
  return (
    <div className={`app app-${location.pathname.replace('/', '')}`}>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/instruction' element={<Instruction />} />
        <Route path='/gift' element={<Gift />} />
        <Route path='/my-vpn' element={<MyVpn />} />
        <Route path='/referral' element={<Referral />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/help' element={<Help />} />
        <Route path='/balance' element={<Balance />} />
        <Route path='/traffic' element={<Traffic />} />
        <Route path='/support' element={<Support />} />
        <Route path='/values' element={<Values />} />
        <Route path='/possibilities' element={<Possibilities />} />
        <Route path='/news' element={<News />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/tariffes/*' element={<Tariffes />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;