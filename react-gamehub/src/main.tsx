import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // document.getElementById('root')
);
