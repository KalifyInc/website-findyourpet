import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

import App from './App'
import Pets from './pages/Pets'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pets" element={<Pets />} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
)
