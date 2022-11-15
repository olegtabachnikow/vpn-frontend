import React from 'react';
import './Support.css';
import AppButton from '../AppButton/AppButton';

function Support() {
  return (
    <section className='support'>
      <p className='support__text'>
        Напишите все вопросы — мы ответим в течение суток (как правило в течение
        часа). Как только вам поступит обстоятельный ответ — robo оповестит вас
        прямо в телеграм.{' '}
      </p>
      <p className='support__text'>Возможно, вам поможет раздел FAQ.</p>
      <AppButton text='Саппорт чат' currentClass='app-button-support' />
    </section>
  );
}

export default Support;
