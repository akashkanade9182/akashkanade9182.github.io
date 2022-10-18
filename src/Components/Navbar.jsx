
import React from 'react'
import { NavLink } from "react-router-dom";

import { Flex, Spacer,Button,Heading,ButtonGroup,Box } from '@chakra-ui/react'
import "./Navbar.css"


const links = [
  { path: "/", title: "Home" },
  { path: "/aboutme", title: "About me" },
  { path: "/skills", title: "Skills" },
  { path: "/projects", title: "Projects" },
  { path: "/contact", title: "Contacts" }
];

function Navbar() {
  return (


<Flex className="navbarbox" border={"1px solid black"}minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>Chakra App</Heading>
  </Box>
  <Spacer />
  <Flex width={"50%"} justifyContent={"space-around"}  p='2'>
  {links.map((link) => (
        <NavLink
          // style={({ isActive }) => {
          //   return isActive ? activeStyle : defaultStyle;
          // }}
          className={({ isActive }) => {
            return isActive ?"active" :"default";
          }}
          key={link.path}
          to={link.path}
          end
        >
          {link.title}
        </NavLink>
      ))}
  </Flex>
   
</Flex>


  )
}

export default Navbar;