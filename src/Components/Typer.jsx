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
    <a className="btns" href='https://drive.google.com/file/d/1BRNUWLamddp8CBMId1ebBs6p5Tf2K00J/view?usp=share_link' download><button className="btns">
      Download CV
      </button>
    </a>
  </div>
  )
}

export default Typer;