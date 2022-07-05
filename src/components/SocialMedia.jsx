import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn  } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">        
        <a href="https://twitter.com/EARider23" target="_blank">
            <BsTwitter/>
        </a>          
        <a href="https://facebook.com/amiltharashan23" target="_blank">
            <FaFacebookF />
        </a>
        <a href="https://instagram.com/earider._" target="_blank">
            <BsInstagram />
        </a>
        <a href="https://linkedin.com/in/amiltharashann" target="_blank">
            <FaLinkedinIn />
        </a>
    </div>
  )
}

export default SocialMedia