import{motion} from "framer-motion";
import dlogo from './logo.jpg'
import {useState } from 'react';
import { Home } from 'lucide-react';


function Nav() {
  const [hover,sethover]=useState(false);
function changehover(){
  sethover(!hover);
}
  let[show, setShow]=useState(false);
  
  function changeshow(){
                setShow(!show);

  }
  const variants = {
    open: { height: "100%", opacity: 1 },
    closed: { height: 0, opacity: 0 },
  }
  const buttonanime={
     whileHover:{
        scale: 1.05, // slight grow // smooth color shift
        color: "#fff",
      },
      whileTap:{ scale: 0.97 },// shrink on click
      transition:{
        duration: 0.3,
        
       }
      }
  return (
    
    <div
      style={{
        backgroundImage: "url('birds.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",
      }} >
      <nav className="container">
        <div className="nav">
          <div className="firstpt" style={{marginTop:"10px",}}> 
            
            <motion.a  {...buttonanime} href="website.html">
              <img className="logo"
                src={dlogo}
                alt="logo"
                style={{ width: "110px", height: "50px", borderRadius: "10px" }} />
            </motion.a>
            <div className="letter" style={{ position:"relative",}}>

          <motion.div  animate={{ x: hover ?  2:-20 ,  opacity: hover ? 1 : 0   }} transition={{duration:0.2}} style={{marginTop:"8px"}}>  <Home  color="white" size={30} /></motion.div>
               <motion.p className="welcome" onClick={changeshow}  onHoverStart={changehover} onHoverEnd={changehover} animate={{ x: hover ?  -5:-40  }} transition={{duration:0.05}}
       style={{ marginTop:"3px",fontSize:"25px",fontStyle:"Italic", marginLeft: "0.5%", }}> Home</motion.p>
                  </div>                                              
            
          </div>
         
  
              <div className="mores">
           
          <motion.button className="moreless" onClick={changeshow} animate={{x:show?"23px":"0px"}}  {...buttonanime} style={{width:"230px",marginRight: "40px",marginTop:"10px",zIndex:"6", position: show? "fixed":"static", top: show ? "0px" : "auto",
    right: show ? "0px" : "auto",}}>{show?"Less":"More"}</motion.button>

{ !show&&<motion.button className="arrow" onClick={changeshow} animate={{x:23}} whileHover={{x:0}} style={{ background:"rgba(2, 196, 154, 1)" ,right:"0%", height:"70px", width:"40px",marginTop:"20%",zIndex:"6",}}>&lt;</motion.button>}
          
       {<motion.ul  variants={variants} initial="closed" animate={show?"open":"closed"} transition={{
        duration: 0.5,
           }}
              className="menues"
      
   style={{  backgroundColor: "rgba(1, 0, 2, 1)" ,zIndex:"5", padding: "30px", borderRadius:"20px"}} >
              <motion.li  {...buttonanime} style={{backgroundColor:window.location.pathname==="/website.html"?"rgba(2, 196, 154, 1)":"transparent",marginTop:"50px",padding:"10px",borderRadius:"10px"}}>
                <a href="website.html">Home</a>
              </motion.li>
              <motion.li  {...buttonanime} style={{backgroundColor:window.location.pathname==="/aboutme.html"?"rgba(2, 196, 154, 1)":"transparent",padding:"10px",borderRadius:"10px"}}>
                <a href="aboutme.html">About me</a>
                
              </motion.li>
              <motion.li  {...buttonanime} style={{backgroundColor:window.location.pathname==="/skills.html"?"rgba(2, 196, 154, 1)":"transparent",padding:"10px",borderRadius:"10px"}}>
                <a href="skills.html">Skills</a>
                
              </motion.li>
              <motion.li  {...buttonanime} style={{backgroundColor:window.location.pathname==="/projects.html"?"rgba(2, 196, 154, 1)":"transparent",padding:"10px",borderRadius:"10px"}}>
                <a href="projects.html">Projects</a>
              
              </motion.li>
              
              <motion.li  {...buttonanime} style={{backgroundColor:window.location.pathname==="/contact.html"?"rgba(2, 196, 154, 1)":"transparent",padding:"10px",borderRadius:"10px" }}>
                <a href="contact.html">Contact</a>
              </motion.li>
            
            </motion.ul>
}
         </div>
      
          
        </div>
       
      </nav>
     
    </div>
  );
}

export default Nav;
