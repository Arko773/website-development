import{motion} from "framer-motion";
import{useState, useEffect, useRef} from 'react'
function Box({title,text, style, textstyle,titlestyle,innerboxsize, text1, text2, text3}) {
   const [rep,setrep]=useState(0);
   const c= useRef(0);
   useEffect(()=>{function tick(){
    let i=c.current++;
    setrep(i);
    setTimeout(tick, 6000 );
   }
   tick();
  },
   []);
  
  const bigbox={animate:{transition:{staggerChildren:0.5,}}}
   const item1={initial:{x:-200,opacity:0}, animate:{x:0,opacity:1, transition:{type:"spring"}}};
   const item2={initial:{y:100,opacity:0}, animate:{y:0,opacity:1, transition:{type:"spring"}}};
   const item3={initial:{x:200,opacity:0}, animate:{x:0,opacity:1, transition:{type:"spring"}}};
  return (
    <motion.div initial={{ opacity: 0.8, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{duration:0.6}}
      viewport={{ once: false, amount: 0.05 }} className="box" style={style}>
      <div style={innerboxsize}>
      <h1 className="ptext" style={titlestyle}>{title}</h1>
      <motion.p  initial={{y:50}} whileInView={{y:0}}  viewport={{ once: false, amount: 0.2 }}  transition={{type:"spring",duration:4}} style={textstyle}>{text}</motion.p>
      </div>
      <motion.div key={rep} className="animetext" variants={bigbox}  initial="initial"
  animate="animate">
        <motion.p className="wetext" variants={item1} style={textstyle}>{text1}</motion.p>
         <motion.p className="wetext" variants={item2} style={textstyle}>{text2}</motion.p>
          <motion.p className="wetext" variants={item3} style={textstyle}>{text3}</motion.p>
      </motion.div>
     
    </motion.div>
  );
}

export default Box;
