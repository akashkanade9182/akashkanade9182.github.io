import React from 'react'
import "./Projects.css"
import Slideone from '../Components/Slideone'
import Slidetwo from '../Components/Slidetwo'
import {ArrowRightIcon} from "@chakra-ui/icons"
const Projects = () => {
  return (
    <div   className="projectsbox" id="projects">
      <div className='fakebox'></div>
      <h1>Projects</h1>
      <div className="projectsgridbox">
           <div className='projectcard'>
           <div className='pdetails'>
                <div className='slides'>
                 <Slideone/>

                </div>
                <div className='details'>
                      <div className='title' color='#5ddcff'>
                     <span>Title :- Olx.on(clone Website)</span>

                      </div>
                      <div className='tool'>
                        <span>Tech Stacks </span><span>:- React , Chakra-UI , Firebase , Css</span>
                      </div>
                      <div className='features'>
                        <span>It is ecommmerce webiste here you can buy or cell second hand products</span>
                       <h6>Features</h6>
                       <div>
                       <p><ArrowRightIcon/>  Authentication</p>
                       <p><ArrowRightIcon/>  sort by category or price</p>
                       <p><ArrowRightIcon/>  filter by location of user</p>
                       <p><ArrowRightIcon/>  Searchbar to earc</p>
                       </div>

                      </div>
                      <div className='links'>
                        <button>Github</button>
                        <button>Deploy link</button>
                        <button>Demo Vedio</button>
                        
                      </div>
                </div>

            </div>

          </div>

          <div className='projectcard'>
           <div className='pdetails'>
                <div className='slides'>
                <Slidetwo/>

                </div>
                <div className='details'>
                      <div className='title' color='#5ddcff'>
                     <span>Title :- Geekbuing.com</span>

                      </div>
                      <div className='tool'>
                        <span>Tech Stacks </span><span>:- HTML,javaScript,Css</span>
                      </div>
                      <div className='features'>
                        <span>It is ecommmerce webiste here you can buy or cell products</span>
                       <h6>Features</h6>
                       <div>
                       <p><ArrowRightIcon/>  Authentication</p>
                       <p><ArrowRightIcon/>  sort by category or price</p>
                       <p><ArrowRightIcon/>  sort by brands</p>
                       <p><ArrowRightIcon/>  Searchbar </p>
                       </div>

                      </div>
                      <div className='links'>
                        <button>Github</button>
                        <button>Deploy link</button>
                        <button>Demo Vedio</button>
                        
                      </div>
                </div>

            </div>

          </div>

          <div className='projectcard'>
           <div className='pdetails'>
                <div className='slides'>
                <Slidetwo/>
                </div>
                <div className='details'>
                      <div className='title' color='#5ddcff'>
                     <span>Title :- Olx.on(clone Website)</span>

                      </div>
                      <div className='tool'>
                        <span>Tech Stacks </span><span>:- React , Chakra-UI , Firebase , Css</span>
                      </div>
                      <div className='features'>
                        <span>It is ecommmerce webiste here you can buy or cell second hand products</span>
                       <h6>Features</h6>
                       <div>
                       <p><ArrowRightIcon/>  Authentication</p>
                       <p><ArrowRightIcon/>  sort by category or price</p>
                       <p><ArrowRightIcon/>  filter by location of user</p>
                       <p><ArrowRightIcon/>  Searchbar to earc</p>
                       </div>

                      </div>
                      <div className='links'>
                        <button>Github</button>
                        <button>Deploy link</button>
                        <button>Demo Vedio</button>
                        
                      </div>
                </div>

            </div>

          </div>
      </div>
    </div>
  )
}

export default Projects