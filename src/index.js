import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

import "bootstrap/dist/css/bootstrap.css";

const div = createRoot(document.getElementById('root'));


div.render(<App />);