import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router'
import User from './pages/User'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/user/:login" element={<User />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App