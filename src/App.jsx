import { useState } from 'react'
import './styles/App.css'
import './styles/Titolo.css'
import Titolo from './componets/Titolo.jsx'
import Button from './componets/Button.jsx'
import Dropdown from './componets/Dropdown.jsx'
import Paragrafo from './componets/Paragrafo.jsx'


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
    let category = document.getElementById("jokeCategory").value
    let url2 = "https://api.chucknorris.io/jokes/random" + (category!=="random" ? "?category=" + category : "")

    fetch(url2).then((resp)=>{
      return resp.json()
    }).then(data=>{
      setJoke(data.value)
    }).catch((e)=>{
      console.log(e)
    })
  }
  
  let copyTextCallback = function (){
    console.log ("bye")
  }

  return (
    <div className="App" align="center">
      <Titolo></Titolo>
      <Paragrafo text={joke}/>
      <Button text='Carica il joke'  callback={loadJokeCallback}/>
      <Dropdown data={categories} id="jokeCategory"></Dropdown>
      <Button text='Copia' variant={ joke == "" ? "disabled" : undefined}callback={copyTextCallback}/>
    </div>
  )
}

export default App
