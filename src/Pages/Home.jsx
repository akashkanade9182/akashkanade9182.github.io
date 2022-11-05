import "./Home.css"
import akashpic from "./akashpic.svg"
import Typer from "../Components/Typer"
import { GridItem,Grid,Box, SimpleGrid } from "@chakra-ui/react"
import Card from "../Components/Card"
const Home =()=>{
    return (
             <div className="bodybox" id="home">
           
              <Typer/>
             
            
              <div className="card">
              
                <img  className="pic"  src="https://iili.io/tzXm7t.md.png" alt="" />
               
              </div>
             
              {/* <Card/> */}
           {/* <div className="card"></div> */}
             </div>

  
          

        
    )
}
export default Home;