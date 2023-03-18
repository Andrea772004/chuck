import { useState } from 'react'
import '../styles/Dropdown.css'

function Dropdown(data) {

  return (
    <div className="Dropdown">
        {console.log(data)}
      <select>
         {data.map((ele,id) => {return<option key={id} value={ele}>{ele}</option>})} 
      </select>
    </div>
  )
}

export default Dropdown