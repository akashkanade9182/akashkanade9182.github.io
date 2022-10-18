
import {Routes,Route} from "react-router-dom"
import React from 'react'
import Home from "./Home"
import Aboute from "./Aboute"
import Projects from "./Projects"
import Contact from "./Contact"
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutme" element={<Aboute/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>

      
    </Routes>
   
  )
}

export default AllRoutes