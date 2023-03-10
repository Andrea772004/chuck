import { useState } from 'react'
import './styles/App.css'
import  './componets/Titolo'
import Button from './componets/Button'

function App() {
  const [count, setCount] = useState(0)
  const [joke, setjoke] = useState(0)

  let loadJokeCallback = function (){
    console.log ("ciao")
    setJoke("testo joke")
  }
  
  let copyTextCallback = function (){
    console.log ("bye")
  }

  return (
    <div className="App">
      <h1>Webapp API Chuck Norris</h1>
      <p>Una pagina che sfrutta Api di Chuck Norris per generare un testo</p>

      <Button text='Carica il joke' callback={loadJokeCallback}/>
      <Button text='Copia' variant={ joke == "" ? "disabled" : undefined}callback={copyTextCallback}/>
    </div>
  )
}

export default App
