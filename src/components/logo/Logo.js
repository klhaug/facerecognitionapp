import React from "react";
import Tilt from 'react-parallax-tilt'
import "./Logo.css"
import brain from "./icons8-brain-64.png"

const Logo = () => {
    return (

      <div className="ma4 mt0 ">
            <Tilt className="Tilt br4 shadow-2" style={{width: "100px"}}>
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: "5px"}} src={brain} alt="logo"/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;