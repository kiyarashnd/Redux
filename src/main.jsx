import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store } from './app/store.jsx';
import { Provider } from 'react-redux';

//Note : you can't import js or jsx file to ts or tsx file
//Note : just component are jsx or tsx othe file are js and ts

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
