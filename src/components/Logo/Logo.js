import React from "react";
import Tilt from 'react-parallax-tilt';
import Face from  './Face.png';
import './Logo.css'

const Logo = () => {
        return (
            <div className="ma4 mt0">
                <Tilt className="Tilt br2 shadow-2" style={{ height: 50, width: 50 }}>
                <div><img alt="logo" src={Face}/></div>
                </Tilt>
            </div>
        )
}

export default Logo;