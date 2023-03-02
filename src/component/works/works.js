import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll';
import { useContext } from 'react';
import { themeContext } from '../../context/context';

const Works = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;
  return (
    <div className="works" id="experience">
         <div className="w-left">
            <div className="i-name">
                <span style={{color: darkmode? 'white' :''}}>Works For All These </span>
                <span>Brands And Clients</span>
                <span>
                    Frontend developer with high level of experience
                    <br/>
                    Frontend developer with high level of experience
                    <br/>
                    Frontend developer with high level of experience
                    <br/>
                    Frontend developer with high level of experience
                    <br/>
                    
                    </span>
            </div>
            <Link to='contact' smooth={true} ><button className="button">Hire me</button></Link>
        </div>
        <div className="w-right">
            <motion.div 
            initial={{rotate:45}}
            whileInView={{rotate:0}}
            transition={{transition:3.5 , type:'spring'}}
            className="mainCircle">
                <div className="secCircle">
                    <img src="./images/Upwork.png" alt="" />
                </div>
                <div className="secCircle">
                    <img src="./images/Facebook.png" alt="" />
                </div>
                <div className="secCircle">
                    <img src="./images/amazon.png" alt="" />
                </div>
                <div className="secCircle">
                    <img src="./images/Facebook.png" alt="" />
                </div>
                <div className="secCircle">
                    <img src="./images/Shopify.png" alt="" />
                </div>
                
                <div className="blueCircle"></div>
                <div className="orangeCircle"></div>
                
            </motion.div>
        </div>
    </div>
  )
}

export default Works