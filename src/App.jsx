import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

    function toggleDark() {
      setDarkMode(prevMode => !prevMode)
    }
   
    document.body.className = `${darkMode?"dark":""}`
  
  return (
    <>
    <Navbar 
      toggleDark={toggleDark}
      darkMode={darkMode}
    />
    <Main 
      darkMode={darkMode}
      />
    </>
  )
}

export default App
