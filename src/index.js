import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import {Provider} from 'react-redux';
import {configureStore} from './redux/store';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <PersistGate
    persistor={persistor}>
    <App />
  </PersistGate>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
