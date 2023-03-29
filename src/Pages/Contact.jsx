import React from 'react'
import './Contact.css'
import {Flex,Box} from "@chakra-ui/react"

import { Field, Form, Formik } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react'
import { FiMail,FiPhone } from "react-icons/fi";
import {BsGithub,BsCursorFill } from "react-icons/bs"
function Contact() {

  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    }
   
    return error
  }
  function validateEmail(value) {
    let error
    if (!value) {
      error = 'Eamil is required'
    } 
    return error
  }
  function validateMessage(value) {
    let error
    if (!value) {
      error = 'Message is required'
    } 
    return error
  }
  
  return (
    <Box className="contact"
     id="contact"
     w={["100%","100%","100%","100%"]}
     h={["auto","auto","auto","auto"]}
    //  border={"1px solid red"}
   
     >
      <h1>Contacts</h1>
      <Box className='contactbox'>
        <Box className='contactdetails'>
        <div className='tool'>
         
        <FiPhone/> <div><span fontWeight="bold">Mob No </span><span> :- +918668696097</span></div>
        </div>
        <div className='tool'>
     
         <FiMail/><div><span >Email id </span><span>:-akashkanade235@gmail.com</span></div>
        </div>
       
       <div className='tool'>
     
        <BsGithub/><div><span >Github :- </span><a href="https://github.com/akashkanade9182" target="_blank" rel="noopener noreferrer"><span>akashkanade9182</span></a></div>
       </div>
       <div className='tool'>
     
     <BsCursorFill/><div><span >Linked In :- </span><a href="https://www.linkedin.com/in/akash-kanade-59ab8218b" target="_blank" rel="noopener noreferrer"><span>akashkanade</span></a></div>
    </div>
    <div style={{display:"flex",justifyContent:"space-around"}}>
    <a className="bns" href='https://drive.google.com/file/d/1BRNUWLamddp8CBMId1ebBs6p5Tf2K00J/view?usp=share_link'  target="_blank" rel="noopener noreferrer" download><button >
      Download CV
      </button>
    </a>
    </div>
        
       
         


        </Box>
        <div className='contactinput'>
             <h1>Message me</h1>
             <FormControl isRequired>
  <FormLabel color="white">Name</FormLabel>
  <Input  border={"none"} borderBottom={"1px solid #5ddcff"} background={"transparent"}  placeholder='enter name' width={"95%"} />
  <FormLabel color="white">Email</FormLabel>
  <Input  border={"none"} borderBottom={"1px solid #5ddcff"} background={"transparent"}  placeholder='enter email' width={"95%"} />
  <FormLabel color="white" >Message</FormLabel>
  <Input border={"none"} borderBottom={"1px solid #5ddcff"} background={"transparent"}  height={"3.5rem"} placeholder='emter message' width={"95%"} />
</FormControl>
<Button onClick={()=>alert("thank you for visiting")} className='subbtn' background={"transparent"} color="#5ddcff" width="auto" p={"0 10px"}>Submit</Button>


        </div>

      </Box>
      
    </Box>
  )
}

export default Contact;