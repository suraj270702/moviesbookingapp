import { createContext, useContext, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'


function App() {
  const [showData,setShowData] = useState()
  return (
    <>
      
        <Home />
      
    </>
  )
}

export default App
