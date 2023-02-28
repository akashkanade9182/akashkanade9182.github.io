import React from 'react'
import "./Aboute.css"
import background from "../download/background.mov"
import {Box,Flex} from "@chakra-ui/react"



function Aboute() {
  return (
    <Box className="aboutebox"
     id='aboutme' 
     background= "url(/public/background.jpg)"

    //  border={"1px solid red"} 
     w={["100%","100%","100%","100%"]}
      h={["auto","auto","auto","auto"]}
    
      alignItems="center"
      justifyContent={"space-around"}>
      {/* <video  style={{widows:"100%"}} className="aboutevideo" src={background} autoPlay loop muted/> */}
      <div className="fake"></div>
      <h1>Aboute Me</h1>
      <Flex
       w={["90%","90%","90%","90%"]}
       display="flex"
       flexDirection={["column","column","column","row"]}
       alignItems="center"
       justifyContent={"space-around"}
       m="auto"
       >
        <Box  mt={["20px","20px",0,0]} >
    <img src="https://iili.io/HY4i1UJ.md.png" alt="HY4i1UJ.md.png"  border="0"/>
    </Box>
    <Box className='box'  w={["90%","90%","90%","60%"]}  h={["auto","auto","auto","auto"]}>
      <p className='disc'>
      My name is Akash Kanade. I am a full stack web developer based in Masai School, Bengaluru.

      I am a B.Tech graduate in Mechanical Engineering and love to explore new technologies in the field of web development and always try to adapt to them. I believe in the concept of continuous learning by regularly improving my skills and expanding my knowledge. I have learned MERN stack, data structures, algorithms and soft skills at Masai School. Besides programming, I love traveling and trekking. As a developer, my hunger to learn has increased drastically. And I want to put my skills and knowledge at the service of an organization and most importantly advance my career.
      </p>
    </Box>
    
    </Flex>
    </Box>
  )
}

export default Aboute;