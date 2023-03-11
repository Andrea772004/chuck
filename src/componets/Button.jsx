import { useState } from 'react'
import '../styles/Button.css'
import  './Titolo'


function Button({text,variant,callback}) {
  const [count, setCount] = useState(0)
  let clickHandler = function(e){
    console.log(e)
  }

  let classRenderer = function (){
    let classes = [
      'Button', variant
    ]
    return classes.join(" ")
  }

  return (
    <div onClick={clickHandler} className={classRenderer()}>
     {text}
     </div>
  )
  
}

export default Button


