import html from './html.png';
import css from './css.png';
import react from './react.png';
import { useState, } from 'react';
import {motion} from 'framer-motion'
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
function Box2({ style, titlesp, spdiv }) {
  
  const [num, setNum] = useState(0);
   
  const photos = [html, css, react];

  function handleLeft() {
    setNum((prev) => (prev - 1 + photos.length) % photos.length); // cycles backward
  }

  function handleRight() {
    setNum((prev) => (prev + 1) % photos.length); // cycles forward
  }
  let text;
  switch (num) {
    case 0:
      text = <motion.h3 key={num} initial={{y:30}} animate={{y:0}} transition={{type:"spring",duration:1.5}} style={{color:"#df8b8bff"}}>"HTML (HyperText Markup Language)HTML is the standard language used to structure content on the web.
It defines elements like headings, paragraphs, links, images, and more.
Think of it as the skeleton of a webpage."</motion.h3>
      break;
    case 1:
      text = <motion.h3 key={num} initial={{y:30}} animate={{y:0}} transition={{type:"spring",duration:1.5}} style={{color:"#85e1f1ff"}}>"CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation of HTML elements on a webpage.
It defines colors, layouts, fonts, and overall design to make websites visually appealing."</motion.h3>
      break;
    case 2:
      text =<motion.h3 key={num} initial={{y:30}} animate={{y:0}} transition={{type:"spring",duration:1.5}} style={{color:"#7cbeffff"}}>"ReactReact is a popular JavaScript library for building user interfaces.
It uses reusable components and efficient rendering to create dynamic apps.
Think of it as the brain that makes web pages interactive and smart."</motion.h3>
      break;
      default:
        text= <motion.h3 style={{color:"#df8b8bff"}}>"HTML (HyperText Markup Language)HTML is the standard language used to structure content on the web.
It defines elements like headings, paragraphs, links, images, and more.
Think of it as the skeleton of a webpage."</motion.h3>
        break;
    
  }

  return (
    <div className="box2" style={style}>
      <div className="spdiv" style={spdiv}>
        <p className="typewrite" >{titlesp}</p>
      </div>
      <div className="box2but">
        <div className="box2butimg">
        <motion.button {...buttonanime} onClick={handleLeft}>&lt;</motion.button>
        <motion.img className="jsimg" key={num} src={photos[num]} initial={{ x: num === 0 ? -30 : num === 1 ? -30 : num === 2 ? -30 :0, opacity:0 }} animate={{x:0, opacity:1}}   transition={{ duration: 0.8 }} alt="tech" ></motion.img>
        <motion.button {...buttonanime} onClick={handleRight}>&gt;</motion.button>
        </div>
        <h2 className="buttext">{text}</h2>
      </div>
    </div>
  );
}

export default Box2;
