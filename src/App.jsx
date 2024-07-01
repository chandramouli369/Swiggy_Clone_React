import React from 'react'
import LandingPage from './swiggy/pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ProductMenu2 from './swiggy/components/ProductMenu2';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products/:firmId/:firmName' element={<ProductMenu2 />} />
      </Routes>

    </div>
  )
}

export default App
