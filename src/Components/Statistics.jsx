import "./Statistics.css"
import React from 'react'
import {Box,Flex} from "@chakra-ui/react"
import background from "../download/background.mov"
const Statistics = () => {
  return (
    <Box className="statistics"   w={["90%","90%","90%","90%"]} m="auto" mt={["20px","20px",0,0]}>
            <video   className="statisticsvide" src={background} autoPlay loop muted/>

        <h1 className="stateheading">Github Statistics</h1>
        <div className="statisticsbox">
          <div className="state1" style={{width:"auto" ,displamargin:"auto"}}>
            <a href="https://github.com/akashkanade9182">
              <img src="https://github-readme-streak-stats.herokuapp.com?user=akashkanade9182&theme=radical&theme=algolia&border_radius=17.2&date_format=j%20M%5B%20Y%5D" alt="" />
            </a>
            
          </div>
          <div className="state2"
        style={{
        
        
          display: "flex",
          margin: "auto",
        }}
      >
        <a href="https://github.com/saurabh0413">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=akashkanade9182&theme=algolia&show_icons=true&border_radius=17.2&date_format=j%20M%5B%20Y%5D"
            alt="err"  //launguages
          />
        </a>
        <a href="https://github.com/saurabh0413">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=akashkanade9182&count_private=true&theme=algolia&show_icons=true&border_radius=17.2&date_format=j%20M%5B%20Y%5D" 
            alt="err" //stats
          />
        </a>
      </div>
            

        </div>

    </Box>
  )
}

export default Statistics