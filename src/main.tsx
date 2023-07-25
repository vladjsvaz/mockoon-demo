import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/stackoverflow-dark.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
