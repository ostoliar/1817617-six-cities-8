import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  cardCount: 6,
};

const CardProperties = [
  {
    id: Math.random(),
  },
  {
    id: Math.random(),
  },
  {
    id: Math.random(),
  },
  {
    id: Math.random(),
  },
  {
    id: Math.random(),
  },
  {
    id: Math.random(),
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      cardCount = {Setting.cardCount}
      CardProperties = {CardProperties}
    />
  </React.StrictMode>,
  document.getElementById('root'));
