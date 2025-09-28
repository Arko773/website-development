import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import nintendo from './nintendo.png'

export default function ScrollBackground() {
  const ref = useRef(null);

  // Track scroll progress relative to this ref
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
    
  });

  // Map scroll progress [0 → 1] to colors
  const background = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5],
    ["#f58ed8ff", "#42142fff","#000000ff"] 
  );
  const item = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 ,transition: {
      duration: 0.7,
    },},
};
  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, 
    },
  },
};

  return (
    <motion.div
    className="colorchangebox"
      ref={ref}
      style={{
        height: "170vh", 
        background,  boxShadow: "0 -10px 15px #6e0b50ff"  , 
      }}
    >
         <motion.div
         className="animatedbox"
      variants={container}
      initial="hidden"
      whileInView="show"
      
    >
        <motion.p className="textscroll" variants={item}>
        This page is a fully custom website that I built entirely from scratch
        to showcase my skills in front-end development and creative animation.
      </motion.p>
      <motion.p className="textscroll" variants={item}>
        My goal was to design and code a responsive site without relying on templates,
      </motion.p>
      
      <motion.p className="textscroll" variants={item}>
        focusing on both clean structure and engaging user experience.
      </motion.p>
      </motion.div>
      <motion.div className="nintendo"  initial={{x:-150}} whileInView={{x:0}}  viewport={{ amount: 0.4, once: false }} transition={{duration:2, type:"spring"}}>
      <motion.img className="ninimg" src={nintendo} style={{ width:"97%"}}></motion.img>
      </motion.div>
    </motion.div>
  );
}
