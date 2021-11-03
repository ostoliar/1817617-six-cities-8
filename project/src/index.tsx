import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {comments} from './mock/reviews';
import { reducer } from './store/reducer';
import {AuthorizationStatus, cities} from './const';
import {createAPI} from './components/services/api';
import {requireAuthorization} from './store/action';
import {checkAuthAction, fetchOfferAction} from './store/api-action';
import {ThunkAppDispatch} from './types/action';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOfferAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cities={cities} commentsList={comments} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
