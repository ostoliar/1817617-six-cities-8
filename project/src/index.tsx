import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/app/app';
import {rootReducer} from './store/reducer/root-reducer';
import {AuthorizationStatus} from './const';
import {createAPI} from './components/services/api';
import {requireAuthorization} from './store/reducer/user/actions';
import {checkAuthAction} from './store/reducer/user/api-actions';
import {fetchOffersAction} from './store/reducer/data/api-actions';
import {BrowserRouter} from 'react-router-dom';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

(store.dispatch)(checkAuthAction());
(store.dispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
