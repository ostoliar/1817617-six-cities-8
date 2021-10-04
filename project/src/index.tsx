import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARD_COUNT: 6,
};

ReactDOM.render(
  <React.StrictMode>
    <App cardCount = {Setting.CARD_COUNT}/>
  </React.StrictMode>,
  document.getElementById('root'));
