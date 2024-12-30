import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Forgetpass from './components/Forgetpass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Forgetpass />
    </>
  )
}

export default App
