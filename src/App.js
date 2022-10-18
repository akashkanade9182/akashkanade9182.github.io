import logo from './logo.svg';
import back from "."
import './App.css';
import Navbar from "./Components/Navbar.jsx"
import AllRoutes from './Pages/AllRoutes';
import Home from "./Pages/Home.jsx"
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <div  className="App">
     
      
    <Navbar/>
    <AllRoutes/>

    </div>
  );
}

export default App;
