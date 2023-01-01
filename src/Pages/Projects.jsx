import React from 'react'
import "./Projects.css"
import background from "../download/background.mov"
import Slideone from '../Components/Slideone'
import Slidetwo from '../Components/Slidetwo'
import Slidethree from '../Components/Slidethree'
import Slidefour from '../Components/Slidefour'
import {ArrowRightIcon} from "@chakra-ui/icons"
const Projects = () => {
  return (
    <div   className="projectsbox" id="projects">
      <video   className="projectvideo" src={background} autoPlay loop muted/>

      <div className='fakebox'></div>
      <h1>Projects</h1>
      <div className="projectsgridbox">
        {/* card-1 */}
      <div className='projectcard'>
           <div className='pdetails'>
                <div className='slides'>
                 <Slidethree/>

                </div>
                <div className='details'>
                      <div className='title' color='#5ddcff'>
                      <span>Title :- Netmeds.com(clone Website)</span>

</div>
<div className='tool'>
  <span>Tech Stacks </span><span>:- React ,Redux, Chakra-UI , Firebase , Css</span>
</div>
<div className='features'>
  <span>The main objective of this project is create clone of
     "Netmeds.com" website. It is Indian ecommerce website and 
     it is popular for busing medicine and health related products.
  </span>
 <h6>Features:-</h6>
 <div>
 <p><ArrowRightIcon/>  Authentication</p>
 <p><ArrowRightIcon/>  Sort by category or price</p>
 <p><ArrowRightIcon/>  Filter products by Brand </p>
 <p><ArrowRightIcon/>  Searchbar to search keywords</p>
 <p><ArrowRightIcon/>  Admin Management</p>
 </div>

                      </div>
                      <div className='links'>
                      <a href="https://github.com/akashkanade9182/Netmeds.com" target="_blank" rel="noopener noreferrer"> <button>Github</button></a> 
                      <a href="https://netmedclone.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Deploy link</button></a>
                        {/* <a href=""><button>Demo Vedio</button></a> */}
                        
                      </div>
                </div>

            </div>

          </div>
          {/* card-2 */}
           <div className='projectcard'>
           <div className='pdetails'>
                <div className='slides'>
                 <Slideone/>

                </div>
                <div className='details'>
                      <div className='title' color='#5ddcff'>
                     <span>Title :- Olx.in(clone Website)</span>

                      </div>
                      <div className='tool'>
                        <span>Tech Stacks </span><span>:- React , Chakra-UI , Firebase , Css</span>
                      </div>
                      <div className='features'>
                        <span>The objective of this project is create clone of "OLX.in" website.
                           It is ecommerce website here you can buy or sell second hand
                            products from all over country.
                        </span>
                       <h6>Features</h6>
                       <div>
                       <p><ArrowRightIcon/>  Authentication</p>
                       <p><ArrowRightIcon/>  Sort by category or price</p>
                       <p><ArrowRightIcon/>  Filter by location of user</p>
                       <p><ArrowRightIcon/>  Searchbar </p>
                       </div>

                      </div>
                      <div className='links'>
                      <a href="https://github.com/akashkanade9182/Olx.in." target="_blank" rel="noopener noreferrer"> <button>Github</button></a> 
                      <a href="https://akashkanade9182-makes-great-sites-olx.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Deploy link</button></a>
                        {/* <a href=""><button>Demo Vedio</button></a> */}
                        
                      </div>
                </div>

            </div>

          </div>
          {/* card-3*/}

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
                        <span>It is clone of ecommerce website geeksbuing.com. her you can buy products from any corner of world.</span>
                       <h6>Features</h6>
                       <div>
                       <p><ArrowRightIcon/>  Authentication</p>
                       <p><ArrowRightIcon/>  sort by category or price</p>
                       <p><ArrowRightIcon/>  sort by brands</p>
                       <p><ArrowRightIcon/>  Searchbar </p>
                       </div>

                      </div>
                      <div className='links'>
                     <a href="https://github.com/akashkanade9182/Geekbuyingapp" target="_blank" rel="noopener noreferrer"><button>Github</button></a>
                     <a href="https://roaring-gecko-735b1c.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Deploy link</button></a>
                        {/* <a href=""><button>Demo Vedio</button></a> */}
                        
                      </div>
                </div>

            </div>

          </div>
          {/* card-4 */}

          <div className='projectcard'>
           <div className='pdetails'>
                <div className='slides'>
                <Slidefour/>
                </div>
                <div className='details'>
                      <div className='title' color='#5ddcff'>
                     <span>Title :- Deccon Chronical.com(clone Website)</span>

                      </div>
                      <div className='tool'>
                      <span>Tech Stacks </span><span>:- HTML,javaScript,Css</span>
                      </div>
                      <div className='features'>
                        <span>The main objective of this project is create clone of
                           " Deccon Chronical.com" website here you can read latest news of all States
                          
                        </span>
                       <h6>Features:-</h6>
                       <div>
                       <p><ArrowRightIcon/>  Authentication</p>
                       <p><ArrowRightIcon/>  Live news</p>
                     
                       <p><ArrowRightIcon/>  navbar</p>
                       </div>

                      </div>
                      <div className='links'>
                   <a href="https://github.com/akashkanade9182/MasaiProject" target="_blank" rel="noopener noreferrer"><button>Github</button></a>  
                    <a href="https://dainty-biscochitos-f5db9f.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Deploy link</button></a> 
                    {/* <a href=""><button>Demo Vedio</button></a> */}
                        
                      </div>
                </div>

            </div>

          </div>
      </div>
    </div>
  )
}

export default Projects