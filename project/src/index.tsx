import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {comments} from './mock/reviews';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { reducer } from './store/reducer';
import { cities } from './const';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cities={cities} commentsList={comments} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
