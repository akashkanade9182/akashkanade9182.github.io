import "./Home.css"
import akashpic from "./akashpic.svg"
import Typer from "../Components/Typer"
import background from "../download/background.mov"
import { GridItem,Grid,Box,Flex, SimpleGrid } from "@chakra-ui/react"
import Card from "../Components/Card"
import React ,{useState}from 'react'
import "../Components/Typer.css"

import Typewriter from "typewriter-effect"

const Home =()=>{

   function Typer() {
      const [state]=React.useState({
        title:"Hellow",
        titletwo:"I'm",
        titlethree:"Full Stack Web Developer",
      
    })
   }
    return (
             <Flex id="home"
              // border={"1px solid red"} 
              w={["100%","100%","100%","100%"]}
               h={["auto","auto","100vh","100vh"]}
               display="flex"
               flexDirection={["column","column","row","row"]}
               alignItems="center"
               justifyContent={"space-around"}
               background= "url(/public/background.jpg)"
            
               >
                <Box display={["flex","flex","none","none"]} h="100px"></Box>
                     {/* <video className='homevedio' src={background} autoPlay loop muted/> */}
               <Box className="heading" w={["90%","90%","40%","40%"]} >
               <div>
        <h1 >Hellow</h1>
    </div>
    <div>
        <h1 >My name is</h1>
        <h1 >Akash Kanade</h1>
    </div>
    <div>
        <h1 >I ' m a</h1>
        <h1 ><Typewriter options={{
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
               </Box>
               <Box className="imagebox" w={["auto","auto","auto","auto"]} h={["auto","auto","auto","auto"]} mt={["30px","30px",0,0]} borderRadius="50%">
              <img style={{width:"350px",height:"350px"}}src="https://iili.io/HYOQ9Og.png" alt="" />
               </Box>

            
             
             </Flex>
   // <Flex 
   // border={"1px solid red"} 
   //            w={["100%","100%","100%","100%"]}
   //             h={["auto","auto","auto","auto"]}
   //             display={["flex","flex","flex","flex"]}
   //            flexDirection={["column","column","column","row"]}
   //             alignItems="center"
   //             justifyContent={"space-around"}>
   //      <Box border={"1px solid red"} h="300px" w="300px">

   //    </Box>
   //    <Box border={"1px solid red"} h="300px"  w="300px">

   //    </Box>

   // </Flex>

  
          

        
    )
}
export default Home;