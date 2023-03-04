import { useState } from 'react'
import '../styles/Button.css'
import  './Titolo'

function Button({text}) {
  const [count, setCount] = useState(0)

  return (
    <div className="Button">

     {text}

    </div>
  )
}

export default Button 
