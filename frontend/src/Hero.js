import React from 'react'
import {Image,Button} from 'react-bootstrap';
import './mainCSS.css';
import woman3 from "./images/woman3-min.jpg";
const Hero = () => {
  return (
    <div className='relative-container'>
        <Image className="photo-default" src={woman3}/>
        <section>
            <h1>JewelIn</h1>
            <p>ky eshte nje paragraf prove</p>
            <Button>Sumbit</Button>
        </section>

    </div>
  )
}

export default Hero