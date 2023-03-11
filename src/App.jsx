import { useState } from 'react'
import './styles/App.css'
import './styles/Titolo.css'
import  './componets/Titolo.jsx'
import Button from './componets/Button.jsx'

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
      <Titolo />
      <Button text='Carica il joke' callback={loadJokeCallback}/>
      <Button text='Copia' variant={ joke == "" ? "disabled" : undefined}callback={copyTextCallback}/>
    </div>
  )
}

export default App
