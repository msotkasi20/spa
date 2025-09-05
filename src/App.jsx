import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import ContactUs from './pages/contactUs'
import NotFound from './pages/NotFound'


function App() {

  return (
    <>
      <Navbar />
      <Header />
      <div id="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contactus" exact element={<ContactUs />} />
          <Route path="/*" exact element={<NotFound />} />
        </Routes>
      
      </div>
      <Footer />
    </>
  )
}

export default App
