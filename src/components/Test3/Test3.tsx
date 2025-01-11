import { useState } from 'react'
import './Test3.css'

import { HiLightBulb } from "react-icons/hi2";

function Test3() {
  const [click, setClick] = useState(false)

  return (
    <div className='Test3'>
      <HiLightBulb data-testid="icon" style={click ? {color: "yellow"} : {color: "black"}}/>
      <h2>{click ? "Ligado" : "Desligado"}</h2>
      <button onClick={() => {setClick(!click)}}>Click</button>
    </div>
  )
}

export default Test3
