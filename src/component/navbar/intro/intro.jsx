import React from 'react'
import Floting from '../floating/Floting'
import {motion} from 'framer-motion'
import { useContext } from 'react';
import { themeContext } from '../../../context/context';

const Intro = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkmode? 'white' :''}}>Hy, I am </span>
                <span>Abdul Ahad</span>
                <span>Full stack developer with high level of experience in web designing and development,producting the qualty work</span>
            </div>
            <a href="./image.pdf" download><button className="button">Download cv</button></a>
            <div className="i-icons">
                <a href="https://github.com/Ahad182" target="_blank"><img src='./images/github.png' alt="" /></a>
                <a href="https://www.instagram.com/ahadkhana182/" target="_blank"><img src="./images/instagram.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/abdul-ahad-994795238/" target="_blank"><img src="./images/linkedin.png" alt="" /></a>
            </div>
        </div>
        <div className="i-right">
           <img src="./images/Vector1.png" alt="" />
           <img src="./images/Vector2.png" alt="" />
           <img src="./images/boy.png" alt="" />
           <motion.img 
           initial={{left:'25%'}}
           whileInView={{left:'-4rem'}}
           transition={{transition:2 , type:'spring'}}
            src="./images/glassesimoji.png" alt="" />

           <motion.div  
           initial={{left:'25%'}}
           whileInView={{left:'350px'}}
           transition={{transition:2 , type:'spring'}}
           style={{left:'350px'}} className="flot1" >
            <Floting text1='web' text2='Developer' img="./images/crown.png"/>
           </motion.div>
           <motion.div 
           initial={{top:'25%'}}
           whileInView={{top:'450px'}}
           transition={{transition:2 , type:'spring'}}
           style={{top:'450px'}}  className="flot1">
            <Floting text1='Best Design' text2='Award' img="./images/thumbup.png"/>
           </motion.div>
           <div className="color1">

           </div>
           <div className="color2">
            
           </div>
           
        </div>
    </div>
    
  )
}

export default Intro