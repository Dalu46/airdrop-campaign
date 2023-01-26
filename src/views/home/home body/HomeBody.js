import React from "react";
import Crypto from "./Crypto";
import about from '../../../assets/icons/about-img 1.svg'
import './body.css'

const HomeBody = () => {
    return(
        <div className="home-body">
            <Crypto />
            <div className="img-div">
            <img src={about} alt='about img' />
            </div>
        </div>
    )
}

export default HomeBody;