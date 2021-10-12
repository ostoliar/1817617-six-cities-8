import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import cardProperties from './mock/offer-card';

const Setting = {
  cardCount: 6,
};


ReactDOM.render(
  <React.StrictMode>
    <App
      cardCount = {Setting.cardCount}
      cardProperties = {cardProperties}
    />
  </React.StrictMode>,
  document.getElementById('root'));
