import "./Home.css"
import akashpic from "./akashpic.svg"
import Typer from "../Components/Typer"
import background from "../download/background.mov"
import { GridItem,Grid,Box, SimpleGrid } from "@chakra-ui/react"
import Card from "../Components/Card"
const Home =()=>{
    return (
             <div  id="home">
                     <video className='homevedio' src={background} autoPlay loop muted/>

            
              <div className="bodybox">
                 <div>
                    <Typer/>
                 </div>
                  <div>
                  <div className="card">
              
                       <img  className="pic"  src="https://iili.io/tzXm7t.md.png" alt="" />
             
                  </div>
              </div>
           
              
             
            
           
             
              {/* <Card/> */}
           {/* <div className="card"></div> */}
           </div>
             </div>

  
          

        
    )
}
export default Home;