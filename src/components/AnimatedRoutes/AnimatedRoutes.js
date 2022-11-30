import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import Success from '../Success/Success';
import Options from '../Options/Options';
import MessageUs from '../MessageUs/MessageUs';
import Intro from '../Intro/Intro';
import Instruction from '../Instruction/Instruction';
import Main from '../Main/Main';
import Gift from '../Gift/Gift';
import MyVpn from '../MyVpn/MyVpn';
import Referral from '../Referral/Referral';
import Help from '../Help/Help';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes({ testUserSetter }) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Main testSetter={testUserSetter} />} />
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
        <Route path='/success' element={<Success />} />
        <Route path='/options/*' element={<Options />} />
        <Route path='/message-us' element={<MessageUs />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
