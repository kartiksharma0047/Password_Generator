import React from 'react';
import ReactDOM from 'react-dom/client';

// Change file name only here if function which is import is App. 
import App from "./Password Generator/Password.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)