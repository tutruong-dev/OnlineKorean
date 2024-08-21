import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './components/App.css'; // Đường dẫn đến file CSS chính

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);