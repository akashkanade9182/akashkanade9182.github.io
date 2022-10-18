import React from 'react'
import "./Typer.css"
import Typewriter from "typewriter-effect"
function Typer() {
  const [state]=React.useState({
    title:"Hellow",
    titletwo:"I'm",
    titlethree:"Full Stack Web Developer",
  
})

  return (
  <div className='heading'>
    <div>
      <h1>Hellow</h1>
    </div>
    <div>
    <h1>My name is</h1>
    <h1 >Akash Kanade</h1>
    </div>
    <div>
      <h1>I ' m a</h1>
    <h1><Typewriter options={{
      autoStart:true,
      loop:true,
      delay:40,
      strings:[
        "Full Stack Web Developer"
      ]
    }}/></h1>
    </div>
    <button className='btn'>
      Download CV
    </button>
  </div>
  )
}

export default Typer;