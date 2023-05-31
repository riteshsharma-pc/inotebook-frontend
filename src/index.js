import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from './reportWebVitals';
import GeneralState from './context/general/GeneralState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GeneralState>
      <div className='d-flex flex-column' style={{ minHeight: "100vh" }}>
        <App />
      </div>
    </GeneralState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
