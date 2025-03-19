import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Products from './components/Products'
import { BrowserRouter } from 'react-router-dom'
import AllRouting from './AllRouting'
import Navbar from './components/Navbar'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <AllRouting/>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
