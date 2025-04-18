import React from 'react'
import {Image,Button} from 'react-bootstrap';
import './mainCSS.css';
import woman3 from "./images/woman3.jpg";
const Hero = () => {
  return (
    <div className='heroContainer'>
        <Image className="photohero" src={woman3}/>
        <div>
            <h1>JewelIn</h1>
            <p>ky eshte nje paragraf prove</p>
            <Button>Sumbit</Button>
        </div>

    </div>
  )
}

export default Hero