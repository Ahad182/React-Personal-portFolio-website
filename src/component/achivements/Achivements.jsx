import React from 'react'
import { useContext } from 'react';
import { themeContext } from '../../context/context';
 
const Achivement= () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="achivement" style={{color: darkmode? 'black' :''}}>
        <div className="achive">
            <div className="circle">1+</div>
            <span style={{color: darkmode? 'white' :''}}>Year</span>
            <span>Experience</span>
        </div>
        <div className="achive">
        <div className="circle">6+</div>
            <span style={{color: darkmode? 'white' :''}}>Completed</span>
            <span>Projects</span>
        </div>
        <div className="achive">
        <div className="circle">2+</div>
            <span style={{color: darkmode? 'white' :''}}>Companies</span>
            <span>Work</span>
        </div>
        
    </div>
  )
}

export default Achivement
