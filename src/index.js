import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import {store} from './redux/store/store'
// import './assets/utils/i18next.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <React.Suspense fallback={'Loading...'} >
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  </React.Suspense>
  </React.StrictMode>
);

