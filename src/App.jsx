import React from "react";

import "./App.css"

import Navbar from "./components/Navbar"
import Textarea from "./components/Textarea";
import Counters from "./components/Counters";
import Charts from "./components/Charts";

export default function App () {
  
  const [darkMode, setDarkMode] = React.useState(true)
  const [textArea, setTextArea] = React.useState("")
  const [checked, setChecked] = React.useState({
    spaces:  false,
    limit : false,
})
  const [charNumber, setCharNumber] = React.useState(0)

  const handleChange = (event) => {
    const value = event.target.value
    setTextArea(value)
}



  return(
    <main>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Textarea handleChange={handleChange} setChecked={setChecked} checked={checked} charNumber={charNumber}/>
      <Counters textArea={textArea} checked={checked} setCharNumber={setCharNumber}/>
      <Charts textArea={textArea}/>
    </main>
  )
}