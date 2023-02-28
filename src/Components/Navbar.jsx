
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
 {path:"#home",title:"Home"},
  { path: "#aboutme", title: "About me" },
  
  { path: "#projects", title: "Projects" },
  { path: "#skills", title: "Skills" },
  { path: "#contact", title: "Contacts" }
];

function Navbar() {
  return (


<Box className="navbarbox" w={["99%","95%","95%","95%"]} m="auto" display="flex" justifyContent={"space-around"}>
  <Box p='2' >
    <Heading  className='logo' size='lg' fontSize={[ "30px","30px","40px","60px"]}>Akash</Heading>
  </Box>
  
  <Box className='navlink' justifyContent={"space-around"}  p='2'>
  {
    links.map((link)=>(
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
    ))
  }
  </Box>
  <Box>
  <a href='https://drive.google.com/file/d/1BRNUWLamddp8CBMId1ebBs6p5Tf2K00J/view?usp=share_link'  target="_blank" rel="noopener noreferrer" download><button className="cv">
      Download CV
      </button>
    </a>
    </Box>
 
  <Box className="menubutton">
  <Menu >
  <MenuButton height="70%"  width="9%" padding={"3"}  as={Button} colorScheme="#5ddcff">
  <HamburgerIcon height="80%"  width="80%" />
  </MenuButton>

  <MenuList  className="menu"  borderRadius={"15px"} w={["400px","400px",0,0]} bg={"transparent"}>
  {links.map((link) => (
      <HashLink 
      key={link.path}
     smooth to={link.path}
      end>
  <MenuItem className="menuItem" height={"40px"} w="90%" style={{textDecoration:"none",
   fontSize:"20px",
   textAlign:"center",
   height:"auto",
   alignItems:"center"}} ><p>{link.title}</p></MenuItem>
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