import{motion, useScroll, useTransform} from "framer-motion";
import {useState, useRef , useEffect} from 'react';
function Footer(){
  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75,1],
    ["#020935ff", "#0c360fff","#571313ff", "#57133bff", "#000000ff"] 
  );
    const[scroll, handlescroll]=useState(true);
    let prevscroll=useRef(0);
    function setscroll() {
       const currentscroll=window.scrollY;
       if (currentscroll>prevscroll.current){
        handlescroll(false);
       }
       else{
        handlescroll(true);
       }
       prevscroll.current=currentscroll;
    }
     useEffect(()=>{
    window.addEventListener("scroll", setscroll);
    return () => window.removeEventListener("scroll", setscroll);
  }, []);
    return(
        <motion.footer style={{display:scroll?"none":"block" , background}}  animate={{y:scroll?0:-20, opacity:scroll?0:1}} className="footer">
  <motion.p  animate={{y:scroll?0:10}} transition={{duration:1}}>© 2025 spondon Company. All rights reserved.</motion.p>
    </motion.footer>
  );
}
export default Footer;