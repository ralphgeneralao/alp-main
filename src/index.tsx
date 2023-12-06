import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/global.scss';
import './assets/styles/override.boostrap.scss';
import './assets/nucleo-icons/scss/icons.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { setupStore } from './store/store';

//set-up store
const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
