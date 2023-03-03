import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import { getGreeting } from './redux/greeting/greeting';

import App from './App'

store.dispatch(getGreeting());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
