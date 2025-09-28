import{motion, useScroll, useTransform} from "framer-motion";
import{useState, useEffect, useRef} from 'react'
import pc from './pc.jpg'
function Sticky(){
    const ref=useRef(null);
    const{scrollYProgress}=useScroll(  {target: ref,
    offset: ["start end", "end start"],} );
    const y= useTransform(scrollYProgress,[0,1],["0%","90%"]);
    return(
        <div ref={ref} className="sticky" style={{  width:"90%",height: "1000px",position: "absolute", }}>
<motion.img src={pc} className="sticky"  alt="stickyphoto" style={{ width: "102%", height: "550px",y,position:"absolute",
    }} ></motion.img>
</div>
    );
} 
export default Sticky;