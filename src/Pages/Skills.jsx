import React from 'react'
import "./skill.css"
import background from "../download/background.mov"

import Calendor from '../Components/Calendor';
import Statistics from '../Components/Statistics';
import {Box,Flex} from "@chakra-ui/react"

function Skills() {
  return (
    <Box className="skillsbox" 
     id='skills'
      //  border={"1px solid red"} 
       w={["100%","100%","100%","100%"]}
       h={["auto","auto","auto","auto"]}>
            {/* <video   className="skillsvideo1" src={background} autoPlay loop muted/> */}

       <div className='skillfake'></div>
      <h1>My Skills</h1>
      <Box  w={["90%","90%","95%","90%"]} className="gridbox">
        <div className='skillcard' background="url(/public/Shape-block.png)">
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt='err'/>
          <p>HTML 5</p>
        </div>
        <div  className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt='err'/>
        <p>CSS</p>
        </div>
        <div  className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt='err'/>
        <p>JavaScript</p>
        </div>
        <div  className='skillcard'>
        <img   src="	https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt='err'/>
        <p>React.js</p>
        </div>
        <div className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" alt='err'/>
        <p>Redux</p>
        </div >
        <div  className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg" alt='err'/>
        <p>Node.js</p>
        </div>
        <div  className='skillcard'>
        <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&usqp=CAU" alt='err'/>
        <p>Express.js</p>
        </div>
        <div  className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg" alt='err'/>
        <p>MongoDB</p>
        </div>
        <div  className='skillcard'>
        <img   src="	https://chiranjeev-thapliyal.vercel.app/svg/material-ui.svg" alt='err'/>
        <p>FireBox</p>
        </div>
        <div  className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/git.svg" alt='err'/>
        <p>Git</p>
        </div>
   
      </Box>
      {/* <video   className="skillsvideo2" src={background} autoPlay loop muted/> */}

    
   <Statistics/>
   {/* <video   className="skillsvideo3" src={background} autoPlay loop muted/> */}

     <Calendor/>
     
      </Box>
  )
}

export default Skills