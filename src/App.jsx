import { useState } from 'react'
import './styles/App.css'
import  './componets/Titolo'
import Button from './componets/Button'

function App() {
  const [count, setCount] = useState(0)

  const [joke, setjoke] = useState(0)
  return (
    <div className="App">
      <h1>Webapp API Chuck Norris</h1>
      <p>Una pagina che sfrutta Api di Chuck Norris per generare un testo</p>

      <Button text='Carica il joke'/>
      <Button text='Copia'/>
    </div>
  )
}

export default App
