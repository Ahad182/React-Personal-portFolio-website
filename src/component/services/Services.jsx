import React from 'react'
import Card from '../card/Card'
import {motion} from 'framer-motion'
import { useContext } from 'react';
import { themeContext } from '../../context/context';

const Services = () => {
    const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="services" id="service">
        <div className="s-left">
            <div className="s-name">
                <span style={{color: darkmode? 'white' :''}}>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing<br /> elit. Blanditiis vel laudantium
                   
                </span>
            </div>
            <a href="./image.pdf" download><button className="button">Download cv</button></a>
            <div className="color5"></div> 
        </div>
        <div className="s-right">
            <motion.div  
            initial={{left:'-200px'}}
            whileInView={{left:'200px'}}
            transition={{transition:2 , type:'spring'}}
            className="card1 allcard">
                <Card img="./images/glasses.png" service='Full stack Developer' detail={'Django + React'}/>
            </motion.div>
            <motion.div 
            initial={{left:'-100px'}}
            whileInView={{left:'50px'}}
            transition={{transition:2 , type:'spring'}}
            className="card2 allcard">
                <Card img="./images/humble.png" service='Front-End' detail={'Html + css + Bootstrap + Javascript + React'} />
            </motion.div>
            <motion.div 
            initial={{right: '-100px'}}
            whileInView={{right: '50px'}}
            transition={{transition:2 , type:'spring'}}
            className="card3 allcard">
                <Card img="./images/heartemoji.png" service='Back-end' detail={'python + Django + MySQL'}/>
                </motion.div>
            <div className="color3" ></div>
            <div className="color4" ></div>                   

        </div>
        
    </div>
  )
}

export default Services