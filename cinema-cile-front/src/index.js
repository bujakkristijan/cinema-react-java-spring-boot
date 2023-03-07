import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { jwtInterceptor } from './components/interceptor/interceptor';
const root = ReactDOM.createRoot(document.getElementById('root'));
jwtInterceptor();
root.render(
  
    <App />
  
);

