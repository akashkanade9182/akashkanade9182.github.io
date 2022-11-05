
import React from 'react'
import { HashLink } from "react-router-hash-link";
import { NavLink } from 'react-router-dom';
import { Flex, Spacer,Button,Heading,ButtonGroup,Box } from '@chakra-ui/react'
import "./Navbar.css"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,

  Input
  

} from '@chakra-ui/react'
import {HamburgerIcon,AddIcon} from "@chakra-ui/icons"
import { IconButton,Wrap,WrapItem,Avatar } from '@chakra-ui/react'

const links = [
  { path: "#home", title: "Home" },
  { path: "#aboutme", title: "About me" },
  { path: "#skills", title: "Skills" },
  { path: "#projects", title: "Projects" },
  { path: "#contact", title: "Contacts" }
];

function Navbar() {
  return (


<Box className="navbarbox">
  <Box p='2' >
    <Heading  className='logo' size='md'>Akash</Heading>
  </Box>
  <Spacer />
  <Box className='navlink' justifyContent={"space-around"}  p='2'>
  {links.map((link) => (
        
        <HashLink
          // style={({ isActive }) => {
          //   return isActive ? activeStyle : defaultStyle;
          // }}
          className="active"
            
        
          key={link.path}
         smooth to={link.path}
          end
        ><div className='link'>
          {link.title}</div>
        </HashLink>
      ))}
  </Box>
 
  <Box className="menubutton">
  <Menu >
  <MenuButton height="70%"  width="9%" padding={"3"}  as={Button} colorScheme='green'>
  <HamburgerIcon height="80%"  width="80%" />
  </MenuButton>

  <MenuList  w={"400px"}>
  {links.map((link) => (
      <HashLink 
      key={link.path}
     smooth to={link.path}
      end>
  <MenuItem className="menuItem" height={"80px"} style={{textDecoration:"none",
   fontSize:"40px",
   textAlign:"center",
   alignItems:"center"}} >{link.title}</MenuItem>
  </HashLink>
  )
  )
}
      
     
  
  </MenuList>
</Menu>
</Box>
   
</Box>


  )
}

export default Navbar;