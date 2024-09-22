import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Bootstrap JS (including Popper.js)
import 'admin-lte/dist/js/adminlte.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );


ReactDOM.render(<App />, document.getElementById('root'));