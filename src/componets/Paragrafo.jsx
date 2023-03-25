import { useState } from 'react'
import '../styles/Paragrafo.css'

function Paragrafo({text}) {

  return (
    <div className="Paragrafo" >
      <p>Una pagina che sfrutta Api di Chuck Norris per generare un testo</p>
      <p>{text}</p>
    </div>
  )
}

export default Paragrafo