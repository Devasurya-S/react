import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
