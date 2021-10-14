import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mock/offers';
import {comments} from './mock/reviews';


ReactDOM.render(
  <React.StrictMode>
    <App
      commentsList={comments}
      offersList={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
