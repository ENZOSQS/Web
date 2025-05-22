import React from 'react' // Adicionado React importação, boa prática.
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Route } from 'react-router-dom' // Esta importação não é necessária aqui, foi removida.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)