import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import App from './App';
import { ScrollToTop } from './components';
import { FilterProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <ScrollToTop />
        <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"} />
        <App />
      </FilterProvider>
    </Router>
  </React.StrictMode>
);

