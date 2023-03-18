import { useState } from 'react'
import './styles/App.css'
import './styles/Titolo.css'
import Titolo from './componets/Titolo.jsx'
import Button from './componets/Button.jsx'
import Dropdown from './componets/Dropdown.jsx'


function App() {
  const [categories, setCategories] = useState([])
  const [joke, setJoke] = useState("")

  let url = "https://api.chucknorris.io/jokes/categories"
    fetch(url).then((resp)=>{
      return resp.json()
    }).then(data=>{
      data.unshift("random")
      setCategories(data)
    }).catch((e)=>{
      console.log(e)
    })

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
      <Dropdown data={categories}></Dropdown>
      <Button text='Copia' variant={ joke == "" ? "disabled" : undefined}callback={copyTextCallback}/>
    </div>
  )
}

export default App
