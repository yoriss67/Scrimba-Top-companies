import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {Navbar, App} from "./index"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
)
