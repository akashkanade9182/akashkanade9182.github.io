import "./Calendor.css"
import GitHubCalendar from 'react-github-calendar';
import React from 'react'
import {Box,Flex} from "@chakra-ui/react"
import ReactTooltip from "react-tooltip";
const Calendor = () => {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 12;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
  return (
    <Box className="calendor"  w={["90%","90%","90%","90%"]} m="auto" mt={["20px","20px",0,0]}>
         <h1 className='calheading'>My Github Calendor</h1>  
    <div className='calendorbox'>
    <GitHubCalendar
    style={{margin:"auto"}}
     username="akashkanade9182" 
    //  token="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"
     summaryText="Commits"
     blockSize={20}
     color={"#5ddcff"}
     fontSize={15}
     hideColorLegend={false}
   
     responsive={true}
     
     >
        <ReactTooltip delayShow={20} html />


      </GitHubCalendar>
       {/* <GitHubCalendar style={{width:"100%"}} blockSize={20}   color={"#5ddcff"} fontSize={20} username="akashkanade9182">
</GitHubCalendar>
       */}
    </div>
    </Box>
  )
}

export default Calendor