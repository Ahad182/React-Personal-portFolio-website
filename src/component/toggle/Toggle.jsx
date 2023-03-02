import React from 'react'
import { useContext } from 'react';
import { themeContext } from '../../context/context'; 
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  
  return (
    <div className="toggle" onClick={()=>{theme.dispatch({type:'toggle'})}}>
        
        <i class="fa fa-moon"></i>
        <i class="fa fa-sun"></i>
        <div className="t-button" style={darkmode? {left:'1px'} :{right:'1px'}} ></div>
        
    </div>
  )
}

export default Toggle