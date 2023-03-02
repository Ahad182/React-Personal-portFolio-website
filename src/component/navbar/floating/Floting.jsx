import React from 'react'
import { useContext } from 'react';
import { themeContext } from '../../../context/context';
const Floting = ({text1, text2,img}) =>{
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="floting">
        <img src={img} alt="" />
        <span style={{color: darkmode? 'black' :''}}>
            {text1}
            <br />
            {text2}
        </span>
    </div>
  )
}

export default Floting