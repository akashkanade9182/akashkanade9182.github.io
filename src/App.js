import logo from './logo.svg';
import back from "."
import './App.css';
import Skillbox from './Components/Skillbox';
import Navbar from "./Components/Navbar.jsx"
import AllRoutes from './Pages/AllRoutes';
import Home from "./Pages/Home.jsx"
import Aboute from "./Pages/Aboute"
import Skills from "./Pages/Skills"
import Contact from './Pages/Contact';
import Slideone from "./Components/Slideone"
import Projects from './Pages/Projects';
import { ChakraProvider } from '@chakra-ui/react';
import{Container} from "@chakra-ui/react"
function App() {
  return (
    <div  className="App">




     
     
      
     <Navbar/>
   <Home/> 
   <Aboute/>
 
   <Projects/>
   <Skills/>
   <Contact/>

  
   {/* <Slideone/> */}
  
  
  
 

    </div>
  );
}

export default App;
