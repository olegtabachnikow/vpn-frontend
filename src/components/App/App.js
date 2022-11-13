import React from 'react';
import './App.css';
import Intro from '../Intro/Intro';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Instruction from '../Instruction/Instruction';
import Main from '../Main/Main';
import Gift from '../Gift/Gift';

function App() {
  const navigate = useNavigate();
  let location = useLocation();
  React.useEffect(() => {
    window.Telegram.WebApp && window.Telegram.WebApp.expand();
  }, []);

  React.useEffect(() => {
    console.log(window.location.href);
    navigate('/intro');
  }, []);

  return (
    <div className={`app app-${location.pathname.replace('/', '')}`}>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/instruction' element={<Instruction />} />
        <Route path='/gift' element={<Gift />} />
      </Routes>
    </div>
  );
}

export default App;
