import React from 'react';
import '../App.css';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function HeroSection() {
  return (
    <div className='hero-container'>
        
        {/* <img src={podcast} alt="background image" /> */}
        {/* <video src='./videos/Mas_hair.mp4'
        autoPlay loop muted /> */}
        
       <div className='first-part'>
       <h1 className="exclude-overlay">Get contents, blogs, vlogs and audio 
        Podcasts with us </h1>
        <div className="exclude-overlay">
          <div className='home-icon'>
          <FontAwesomeIcon icon={faFacebook}  className='social-icon' />
          <FontAwesomeIcon icon={faInstagram} className='social-icon'/>
          <FontAwesomeIcon icon={faXTwitter}  className='social-icon'/>
          <FontAwesomeIcon icon={faLinkedin}  className='social-icon'/>
          </div>
        </div>
        <div className='overlay'>
        </div>
        </div>

        <div className='second-part'>
          <div className='left'>
            <h2> About Our Host</h2>
            <p className='first-message'>We bring you lots of inspirational videos from
              renowned persons through out the world, 
              insight life, daily life, motivational stories and a
              lot more. Stay with us as you begin this journey 
              of unending inspiration.</p>

          </div>
          <div className='left'>
          <h2> What we offer</h2>
          <p className='first-message'>We bring you lots of inspirational videos from
              renowned persons through out the world, 
              insight life, daily life, motivational stories and a
              lot more. Stay with us as you begin this journey 
              of unending inspiration.</p>
           
          </div>

          <div className='left'>
          <h2> What Our Viewers Say</h2>
          <p className='first-message'>We bring you lots of inspirational videos from
              renowned persons through out the world, 
              insight life, daily life, motivational stories and a
              lot more. Stay with us as you begin this journey 
              of unending inspiration.</p>
           
          </div>
        </div>
    </div>
  )
}

export default HeroSection

