import React from 'react'
import Toggle from '../toggle/Toggle'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    
    <div className="n-wrappe" id='navbar'>
        <div className="n-left">
            <div className="n-name">Abdul <span>Ahad</span> </div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="links">
                <ul>
                    <Link to='navbar' smooth={true} ><li >Home</li></Link>
                    <Link to='service' smooth={true} ><li>Services</li></Link>
                    <Link to='experience' smooth={true} ><li>Experience</li></Link>
                    <Link spy={true} to='portfolio' smooth={true} ><li>Portfolio</li></Link>
                    <li></li>
                </ul>
            </div>
            <div className="contact">
            <Link to='contact' smooth={true} ><button className="button n-button">Contect</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar