import React from 'react'
import { useContext } from 'react';
import { themeContext } from '../../context/context';
const Card = ({img,service,detail}) => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="card" style={{color: darkmode? 'white' :'' , backgroundColor: darkmode? 'gray':''}}>
        <img src={img} alt="" />
        <span> {service}</span>
        <span  style={{color: darkmode? 'white':'' }}>{detail}</span>
        <button className="button c-button"  style={{backgroundColor: darkmode? 'white':'' }}>Learn more</button>
    </div>
  )
}

export default Card