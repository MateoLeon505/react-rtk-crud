import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './App/store';
import { Provider } from 'react-redux'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)