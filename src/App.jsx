import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // create state for change bg
const [bgColor, setBgColor] =useState("light")

  return (
    <>
      
      <div style={{width:"100%", height:"100vh", background:bgColor}} className='d-flex justify-content-center align-items-center'>
        <div className='p-5 rounded'>
          <h1 className='text-center fw-bold'>Background Color Changer</h1>
          <div className='p-5 d-flex justify-content-center'>
            <button onClick={()=>setBgColor("black")} className='button rounded p-2 m-2 bg-dark text-light'>Black</button>
            <button onClick={()=>setBgColor("red")} className='button rounded p-2 m-2 bg-danger text-light'>Red</button>
            <button onClick={()=>setBgColor("yellow")} className='button rounded p-2 m-2 bg-warning text-light'>Yellow</button>
            <button onClick={()=>setBgColor("green")} className='button rounded p-2 m-2 bg-success text-light'>Green</button>
            <button onClick={()=>setBgColor("blue")} className='button rounded p-2 m-2 bg-primary text-light'>Blue</button>
            <button onClick={()=>setBgColor("grey")} className='button rounded p-2 m-2 bg-secondary text-light'>Grey</button>
            
          </div>
        </div>

      </div>
    </>
  )
}

export default App
