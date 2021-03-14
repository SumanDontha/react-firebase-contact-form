import { useState, useEffect } from 'react'
import Contact from "./components/Contact";
import './app.css'

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth)
    })
    return () => {
      window.removeEventListener('resize', () => {
        setScreenWidth(window.innerWidth)
      })
    }
  })
  return (
    <div className="app">
      <h2 style={{ marginTop: '2rem'}}>{`Window Size ${screenWidth} px` }</h2>
      <Contact />
    </div>
  );
}

export default App;
