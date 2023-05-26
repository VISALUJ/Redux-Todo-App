import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import Products from './Products';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Products/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
