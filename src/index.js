import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PortfolioData from './Data/PortfolioData';


const router = createBrowserRouter([
  { path: "/", element: <App /> }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PortfolioData>
      <RouterProvider router={router} />
    </PortfolioData>
  </React.StrictMode>
);
