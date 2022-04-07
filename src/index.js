import React from 'react';
import { ECommerceApp } from './eCommerceApp';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ECommerceApp />
    </React.StrictMode>
);
