import Nav from './Nav.jsx'
import Box from './box.jsx'
import Sticky from './stickyphoto.jsx'
import Box2 from './box2.jsx'
import ScrollBackground from './animatedbox.jsx'
import Footer from './footer.jsx'
function App() {
  return(
   <div >
      <Nav />
      
     <Box style={{textAlign:"center",zIndex:"1",backgroundColor: "#131313ff",marginTop:"0px"}}
      titlestyle={{fontSize:"100px",marginBottom:"5vh", marginTop:"15vh" }}
     textstyle={{fontSize:"500%",marginBottom:"12vh",marginLeft:"0px"}}
      title="LET'S MAKE IT REAL"
      text1="Make It. "
      text2="Build It. "
      text3="Enjoy It. "
      >
     </Box>
     <div className="motionframe" style={{ position: "relative", width: "100%",}}>
      <Box 
      innerboxsize={{width:"50%"}}
      style={{boxShadow: "0 4px 10px #0b6e21ff", zIndex:"1",left:"50px" }}
      textstyle={{marginBottom:"5vh",color:"#949393ff", }}
      text=" I am passionate about building modern web applications and bringing creative ideas to life with code. 
        Explore my project and skills to know more about me."
      ></Box>
      
      
      <Sticky></Sticky>
      
      <h1 className="floatingtext" style={{zIndex:"1" ,marginLeft:"30%"}}>MAKE IT POSSIBLE</h1>
    <Box
    style={{zIndex:"1",boxShadow: "0 4px 15px #6e0b0bff"}}
    textstyle={{marginBottom:"5vh",color:"#949393ff",fontFamily:"roboto" }}
    text="I’m just starting my journey in web development, learning new technologies every day, and experimenting with projects that challenge me. 
    I love turning ideas into interactive experiences on the web, and I’m excited to keep growing as a developer"
    ></Box>
    <Box2
    titlesp="Core Technologies"
    style={{marginTop:"-100px", boxShadow: "0 4px 15px #6e0b50ff"}}
    
    ></Box2>
    <ScrollBackground></ScrollBackground>
    <Footer></Footer>
    </div>    
      </div>
  );
}

export default App;
