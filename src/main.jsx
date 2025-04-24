import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.7:3001'//import.meta.env.VITE_API_BACKEND_URL;
